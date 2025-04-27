import { NextResponse } from "next/server";
import { movies } from "./db";
export async function GET(req: Request) {
    return NextResponse.json(movies);                                       
}