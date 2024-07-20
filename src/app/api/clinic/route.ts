import prisma from '../../../../prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await prisma.clinic.findMany()
    return NextResponse.json({
      data,
    })
  } catch (error) {
    console.error('Error fetching clinics:', error)
    return NextResponse.error()
  }
}

// Function to add an clinic

export async function POST(req: any) {
  try {
    const data = await req.json()
    console.log(data)
    const {
      name,
      imageUrl,
      city,
      country,
      phone,
      address,
      email,
      website,
      createdAt,
      insurances,
    } = data
    const newClinic = await prisma.clinic.create({
      data: {
        name,
        imageUrl,
        city,
        country,
        phone,
        address,
        email,
        website,
        createdAt,
        insurances,
      },
    })
    return NextResponse.json(newClinic)
  } catch (error) {
    console.error('Error creating clinic: ', error)
    return NextResponse.error()
  }
}
