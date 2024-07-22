import dbConfig from "@/dbConfig/dbConfig";
import contactModel from "@/models/contactModel"
import { NextResponse } from "next/server";



export async function POST(request) {

    try {
        const body = await request.json();

        await dbConfig();
        await contactModel.create(
            {
                subject: body.subject,
                email: body.email,
                message: body.message
            }
        );
        return NextResponse.json({
            message:"Message sent successfully"
    },
     {
        status: 200
    })}
    
    catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again" },
            { status: 500 }
        )
    }
}
