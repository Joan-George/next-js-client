import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req, res) {
	console.log({ req: req?.headers });
	const response = await axios.get("http://localhost:3001", { headers: { ...req?.headers } });

	return NextResponse.json(response?.data);
}
