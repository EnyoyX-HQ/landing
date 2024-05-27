import { NextResponse } from 'next/server'
import { transporter, mailOptions } from "../../../config/nodemailer"

const FORM_FIELDS = {
  firstName: "First Name",
  lastName: "Last Name",
  company: "Company",
  email: "Email",
  country: "Country",
  number: "Phone Number",
  businessType: "Business Type",
  interest: "How did you hear about us",
  message: "Tell us about your business"
} as const;
type FormFieldKeys = keyof typeof FORM_FIELDS;

type FormData = {
  [K in FormFieldKeys]: string;
};

const genEmailContent = (data: FormData) => {
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
  //let htmlData;
  return {
    text: strData,
    html: `<!DOCTYPE html><html><head><title></title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><style type="text/css">a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style></head><body style="margin:0!important;padding:0!important;background:#fff"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#ffffff" align="center" style="padding:10px 15px 30px 15px" class="section-padding"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px" class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td style="padding:0;font-size:16px;line-height:25px;color:#232323" class="padding message-content"><h2>New Contact Message</h2><div class="form-container">${htmlData}</div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`
  }
}
// Example usage:
/*const data: FormData = {
  firstName: "John",
  lastName: "Doe",
  company: "OpenAI",
  email: "john.doe@example.com",
  country: "USA",
  number: "123-456-7890",
  businessType: "Technology",
};*/
export async function POST(req: any) {
  /*if (req.method !== "POST"){
    const data = req.body;
    if(!data.firstName || !data.lastName || !data.company || !data.email || !data.country || !data.number || !data.business){
      return NextResponse.json({message: "Bad request: required data not provided"}) 
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...genEmailContent(data),
        subject: data.subject,
        //text: "This is a test string",
        //html: "<h1>Test Title</h1><p>Some body text</p>"
      });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.log('Error submitting form...: ', error)
      console.log(NextResponse.json({ message: String(error)}))
      return NextResponse.error()
    }
  }
  return NextResponse.json({message: "Bad request: API request failed"})*/
  try {
    //const data = req.body;
    const data = await req.json()
    if(!data.firstName || !data.lastName || !data.company || !data.email || !data.country || !data.number || !data.businessType){
      return NextResponse.json({message: "Bad request: required data not provided"}) 
    }
    await transporter.sendMail({
      ...mailOptions,
      ...genEmailContent(data),
      subject: `${data.firstName} ${data.lastName}: New Contact Us Form Submission`,
      //text: "This is a test string",
      //html: "<h1>Test Title</h1><p>Some body text</p>"
    });
    console.log(data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.log('Error submitting form...: ', error)
    return NextResponse.error()
  }
}