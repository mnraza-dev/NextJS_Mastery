import { NextResponse } from "next/server";
import { movies } from "./db";

export async function GET(req: Request) {
    return NextResponse.json(movies);
}

export async function POST(req: Request) {
    const movie = await req.json();
    const newMovie = {
        ...movie
    }
    movies.push(newMovie);
    return new Response(JSON.stringify(newMovie));
}