import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, projectType, budget, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Send via Web3Forms (free, no signup needed for basic usage)
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: process.env.WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
                name,
                email,
                subject: `Portfolio Contact: ${projectType || "General Inquiry"}`,
                message: `
Name: ${name}
Email: ${email}
Project Type: ${projectType || "Not specified"}
Budget: ${budget || "Not specified"}

Message:
${message}
        `.trim(),
                from_name: "Portfolio Contact Form",
                replyto: email,
            }),
        });

        const data = await response.json();

        if (data.success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { error: "Failed to send message. Please try again." },
                { status: 500 }
            );
        }
    } catch {
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
