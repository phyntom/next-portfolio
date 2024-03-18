import { NextRequest, NextResponse } from 'next/server'
import type { EmailOptions } from 'utils/sendEmail'
import { sendEmail } from 'utils/sendEmail'

export async function POST(request: NextRequest) {
  const requestBody = await request.json()
  const { from, subject, html }: EmailOptions = requestBody
  const res = await sendEmail({ from, subject, html })
  if (res !== 'success') {
    return NextResponse.json({ error: 'Could not send email' }, { status: 400 })
  }
  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
}
