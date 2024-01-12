import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb'

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser){
            return NextResponse.error()
        }
    
        const body = await request.json()
        const {
            option,
            title,
            description,
            imageSrc,
            category,
            author,
            price
        } = body
    
        const CreatedCourse = await prisma.course.create({
            data: {
                title,
                option,
                description,
                imageSrc,
                category,
                author,
                price,
                userId: currentUser.id
            }
        })
    
        console.log({currentUser, CreatedCourse})
    
        Object.keys(body).forEach((value:any) => {
            if(!body[value]) {
                throw NextResponse.error()
            }
        })
    
        return NextResponse.json(CreatedCourse)
    }catch(err) {
        console.log("Error in api route", err)
        return NextResponse.json({err: 'internal server error'})
    }
    
}