"use server"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
export const saveSnippet = async (id: number, code: string) => {
    await prisma.code_snippet.update({ where: { id }, data: { code } })
    redirect(`/snippet/${id}`);
}

export const deleteSnippet = async (id: number) => {
    await prisma.code_snippet.delete({ where: { id } })
    redirect('/');
}