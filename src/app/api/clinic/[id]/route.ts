import prisma from '../../../../../prisma/client'
import { NextResponse } from 'next/server'

// Function to edit a clinic
export async function PUT(req: any, { params }: any) {
  try {
    const data = await req.json()
    console.log(data)

    // const id = parseInt(params.id)
    const id = String(params.id)


    // Create an object to hold the fields to be updated
    const updatedData: any = {}

    // List of fields to check in the request payload
    const fields = [
      'name',
      'imageUrl',
      'city',
      'phone',
      'address',
      'email',
      'website',
      'updatedAt',
      'insurances',
    ]

    // Iterate over the fields and add them to updatedData if they exist in the request payload
    fields.forEach((field) => {
      if (data[field] !== undefined) {
        updatedData[field] = data[field]
      }
    })

    // Update the clinic with the dynamically constructed updatedData object
    const updatedClinic = await prisma.clinic.update({
      where: { id },
      data: updatedData,
    })

    return NextResponse.json(updatedClinic)
  } catch (error) {
    console.error('Error updating clinic', error)
    return NextResponse.error()
  }
}
