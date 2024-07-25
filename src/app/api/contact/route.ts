import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    if(!data.firstName || !data.lastName || !data.company || !data.email || !data.country || !data.number || !data.businessType){
      console.log(NextResponse.json({message: "Bad request: required data not provided"})) 
      throw new Error("Bad request: required data not provided.")
      //return NextResponse.json({message: "Bad request: required data not provided"}) 
    }
    const {
      firstName,
      lastName,
      company,
      termOfService,
      email,
      country,
      number,
      productInterest,
      businessType,
      interest,
      message
    } = data
    const newSignup = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        company,
        termOfService,
        email,
        country,
        number,
        productInterest,
        businessType,
        interest,
        message,
      }
    })
    
    return NextResponse.json({ success: true, dbEntry: newSignup })
    //return NextResponse.json({ success: true })
  } catch (error) {
    console.log('Error submitting form...: ', error)
    return NextResponse.error()
  }
}