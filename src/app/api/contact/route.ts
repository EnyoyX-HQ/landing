import { NextResponse } from 'next/server';
import { transporter, mailOptions } from "../../../config/nodemailer";
import SignUpEmail from '@/components/emails/signup';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import prisma from '../../../../prisma/client'

const resend = new Resend(`${process.env.RESEND_API_KEY}`);
const FORM_FIELDS = {
  firstName: "First Name",
  lastName: "Last Name",
  company: "Company",
  termOfService: "Terms Of Service",
  email: "Email",
  country: "Country",
  number: "Phone Number",
  productInterest: "Poduct Interest",
  businessType: "Business Type",
  interest: "How did you hear about us",
  message: "Tell us about your business"
} as const;
type FormFieldKeys = keyof typeof FORM_FIELDS;

type FormData = {
  [K in FormFieldKeys]: string;
};

//old nodemailer email html
/*const genEmailContent = (data: FormData) => {
  const strData = Object.entries(data).reduce(
    (str, [key, val]) => 
      (str += `${FORM_FIELDS[key as FormFieldKeys]}: \n${val} \n \n`), 
      ""
  );
  const htmlData = Object.entries(data).reduce(
    (str, [key,val]) =>
      // @ts-ignore
      (str += `<h1 class="form-heading" align="left">${FORM_FIELDS[key as FormFieldKeys]}</h1><p class="form-answer" align="left">${val}</p>\n`)
  )
  return {
    text: strData,
    html: `<!DOCTYPE html><html><head><title></title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><style type="text/css">a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style></head><body style="margin:0!important;padding:0!important;background:#fff"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#ffffff" align="center" style="padding:10px 15px 30px 15px" class="section-padding"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px" class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td style="padding:0;font-size:16px;line-height:25px;color:#232323" class="padding message-content"><h2>New Contact Message</h2><div class="form-container">${htmlData}</div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`
  }
}*/

// export async function GET() {
//   try {
//     //res.setHeader('Cache-Control', 's-maxage=10');
//     const data = await prisma.contact.findMany()
//     return NextResponse.json({
//       data,
//     })
//   } catch (error) {
//     console.error('Error fetching contact us (signup) submissions:', error)
//     return NextResponse.error()
//   }
// }

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log(data)
    
    
    if(!data.firstName || !data.lastName || !data.company || !data.email || !data.country || !data.number || !data.businessType){
      console.log(NextResponse.json({message: "Bad request: required data not provided"})) 
      throw new Error("Bad request: required data not provided.")
      //return NextResponse.json({message: "Bad request: required data not provided"}) 
    }
    
    /*await transporter.sendMail({
      ...mailOptions,
      ...genEmailContent(data),
      subject: `${data.firstName} ${data.lastName}: New Message`,
    });*/
    const {
      firstName,
      lastName,
      company,
      termOfService,
      email,
      country,
      number,
      productInterest,
      businessType,
      interest,
      message
    } = data
    const newSignup = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        company,
        termOfService,
        email,
        country,
        number,
        productInterest,
        businessType,
        interest,
        message,
      }
      /*data.firstName,
      data.lastName,
      data.company,
      data.termOfService,
      data.email,
      data.country,
      data.number,
      data.businessType,
      data.interest,
      data.message,*/
    })
    //send to envoyx main account
    await transporter.sendMail({
      ...mailOptions,
      subject: `${data.firstName} ${data.lastName}: Contact Us Form Submission`,
      html: render(
        SignUpEmail({
          type: "submission",
          firstName: data.firstName,
          lastName: data.lastName,
          company: data.company,
          termOfService: true,
          email: data.email,
          country: data.country,
          number: data.number,
          productInterest: data.productInterest,
          businessType: data.businessType,
          interest: data.interest,
          message: data.message
        })
      ),
    });
    //send to the user that submits form
    await resend.emails.send({
      from: 'envoyx-noreply@tryenvoyx.com', //noreply-info@tryenvoyx.com //'onboarding@resend.dev'
      to: data.email,
      subject: 'Contact Us Submission',
      react: SignUpEmail({
        type: "verification",
        firstName: data.firstName
      }),
    })
    return NextResponse.json({ success: true, dbEntry: newSignup })
    //return NextResponse.json({ success: true })
  } catch (error) {
    console.log('Error submitting form...: ', error)
    return NextResponse.error()
  }
}