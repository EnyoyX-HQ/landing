import prisma from '../../../../../prisma/client'
import { NextResponse } from 'next/server'

// Function to edit an invoice
export async function PUT(req: any, { params }: any) {
  try {
    const data = await req.json()
    console.log(data)
    const { insurance, amount, payout, status, file, updatedAt } = data
    const id = parseInt(params.id)
    const updatedInvoice = await prisma.invoice.update({
      where: { id },
      data: {
        insurance,
        amount,
        payout,
        status,
        file,
        updatedAt,
      },
    })
    return NextResponse.json(updatedInvoice)
  } catch (error) {
    console.error('Error updating invoice', error)
    return NextResponse.error()
  }
}

// Function to get a single invoice
export async function GET(req: any, { params }: any) {
  try {
    const id = parseInt(params.id)
    const invoice = await prisma.invoice.findUnique({
      where: { id },
    })
    return NextResponse.json(invoice)
  } catch (error) {
    console.error('Error fetching invoice', error)
    return NextResponse.error()
  }
}

// Function to delete an invoice
export async function DELETE(req: any, { params }: any) {
  try {
    const id = parseInt(params.id)
    const deletedInvoice = await prisma.invoice.delete({
      where: { id },
    })
    return NextResponse.json(deletedInvoice)
  } catch (error) {
    console.error('Error deleting invoice: ', error)
    return NextResponse.error()
  }
}
