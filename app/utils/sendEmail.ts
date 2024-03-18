import nodemailer, { TransportOptions } from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWD,
  },
} as TransportOptions)

export type EmailOptions = {
  from: string
  subject: string
  html: string
}

export const sendEmail = async (options: EmailOptions) => {
  const { from, subject, html } = options
  try {
    const res: any = await transporter.sendMail({
      from,
      to: process.env.SMTP_RECEIVER,
      subject,
      html,
    })
    if (res?.response.includes('Ok')) {
      return 'success'
    } else {
      return 'failure'
    }
  } catch (err) {
    console.error(err)
    return 'failure'
  }
}
