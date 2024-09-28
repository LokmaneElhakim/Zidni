// src/app/api/courses/[courseName]/quiz/route.js

import {NextResponse} from "next/server";

export async function GET(request, {params}) {
    const {courseName} = params;
    // Your logic to handle the GET request
    return NextResponse.json({message: `Quiz for course ${courseName}`});
}

export async function POST(request, {params}) {
    const {courseName} = params;
    // Your logic to handle the POST request
    return NextResponse.json({
        message: `Quiz created for course ${courseName}`,
    });
}
