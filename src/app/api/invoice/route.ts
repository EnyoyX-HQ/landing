import prisma from '../../../../prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await prisma.invoice.findMany()
    return NextResponse.json({
      data,
    })
  } catch (error) {
    console.error('Error fetching invoices:', error)
    return NextResponse.error()
  }
}

// Function to add an invoice

export async function POST(req: any) {
  try {
    const data = await req.json()
    console.log(data)
    const { clinic, insurance, amount, status, file, createdAt } = data
    const newInvoice = await prisma.invoice.create({
      data: {
        clinic,
        insurance,
        amount,
        status,
        file,
        createdAt,
      },
    })
    return NextResponse.json(newInvoice)
  } catch (error) {
    console.error('Error creating invoice: ', error)
    return NextResponse.error()
  }
}
