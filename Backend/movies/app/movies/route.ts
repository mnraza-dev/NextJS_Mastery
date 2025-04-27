import { NextResponse } from "next/server";
export async function GET(req: Request) {
    return new Response("Hello, Next.js!");
}