import { NextResponse } from "next/server";

/**
 * Sample route for testing the API
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const wait = Number(searchParams.get("wait"));
    await new Promise(resolve => setTimeout(resolve, wait));
    return NextResponse.json(
        `waited ${wait}ms. the time is ${new Date().toISOString()}`,
    );
}
