import nodemailer from "nodemailer";
import { render } from '@react-email/render';
import SignUpEmail from '@/components/emails/signup';

const EMAIL = process.env.SMTP_MAIN_GMAIL;
const ALT_V1_GMAIL = process.env.SMTP_ALT_V1_GMAIL;
const ALT_V1_ENVOYX = process.env.SMPT_ALT_V1_ENVOYX;
const ALT_V2_GMAIL = process.env.SMTP_ALT_V2_GMAIL;
const ALT_V2_ENVOYX = process.env.SMPT_ALT_V2_ENVOYX;
const PASSKEY = process.env.SMTP_PASS

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSKEY,
  },
})
/*export const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSKEY,
  },
})*/
export const mailOptions = {
  from: EMAIL,
  //to: `${EMAIL}; ${ALT_V1_GMAIL}; ${ALT_V1_ENVOYX}; ${ALT_V2_GMAIL}; ${ALT_V2_ENVOYX};`
  to: `${EMAIL};`
}