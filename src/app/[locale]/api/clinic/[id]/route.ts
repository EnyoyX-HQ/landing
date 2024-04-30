import prisma from '../../../../../../prisma/client'
import { NextResponse } from 'next/server'

// Function to edit a clinic
export async function PUT(req: any, { params }: any) {
  try {
    const data = await req.json()
    console.log(data)
    const {
      name,
      imageUrl,
      city,
      phone,
      address,
      email,
      website,
      updatedAt,
      insurances,
    } = data
    const id = parseInt(params.id)
    const updatedClinic = await prisma.clinic.update({
      where: { id },
      data: {
        name,
        imageUrl,
        city,
        phone,
        address,
        email,
        website,
        updatedAt,
        insurances,
      },
    })
    return NextResponse.json(updatedClinic)
  } catch (error) {
    console.error('Error updating clinic', error)
    return NextResponse.error()
  }
}
