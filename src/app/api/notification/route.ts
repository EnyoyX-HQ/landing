import prisma from '../../../../prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await prisma.notification.findMany()
    return NextResponse.json({
      data,
    })
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.error()
  }
}

export async function POST(req: any) {
  try {
    const data = await req.json()
    console.log(data)
    const { title, message, type, userId } = data
    const newNotification = await prisma.notification.create({
      data: {
        title,
        message,
        type,
        userId,
      },
    })
    return NextResponse.json(newNotification)
  } catch (error) {
    console.error('Error creating notification: ', error)
    return NextResponse.error()
  }
}
