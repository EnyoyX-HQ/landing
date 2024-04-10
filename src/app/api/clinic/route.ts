import prisma from '../../../../prisma/client'
import { NextResponse } from 'next/server'


//edit profile
export async function PUT(req: any) {
  try {
    const data = await req.json()
    console.log(data)
  
  } catch (error) {
    console.error('Error editing profile: ', error)
    return NextResponse.error()
  }
}

export async function POST(req: any) {
  try {
    const data = await req.json()
    console.log(data)
  
  } catch (error) {
    console.error('Error creating profile: ', error)
    return NextResponse.error()
  }
}
