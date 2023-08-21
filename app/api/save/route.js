import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
	const body = await req?.json();
	const response = await axios.post("http://localhost:3001/saveTodo", body, { headers: { ...req?.headers } });

	return NextResponse.json({ message: "saved successfully" });
}
