import { NextResponse } from "next/server";
import { movies } from "../db";

export async function GET(_req: Request, { params }: {
    params: { id: string }
}) {
    const { id } = await params;

    return NextResponse.json(movies.find((movie) => movie.id === Number(id)));
}