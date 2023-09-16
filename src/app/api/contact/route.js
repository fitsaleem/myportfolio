import dbConfig from "@/dbConfig/dbConfig";
import contactModel from "@/models/contactModel"
import { NextResponse } from "next/server";
import fetch from 'node-fetch';



export async function POST(request) {

    try {
        const body = await request.json();

        // Verify reCAPTCHA token first
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.recaptchaValue}`;

    const verificationResponse = await fetch(verificationURL, {
        method: 'POST',
    });

    if (!verificationData.success) {
        return NextResponse.json(
            { message: "reCAPTCHA verification failed!" },
            { status: 400 }
        );
    }
    // Verify reCAPTCHA end 



        await dbConfig();
        await contactModel.create(body);
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
