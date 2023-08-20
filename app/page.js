"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setdata] = useState({});

	useEffect(async () => {
		const res = await axios.get("http://localhost:3000/api");
		console.log({ res: res?.data });
		setdata(res?.data);
	}, []);

	return <main className="flex min-h-screen flex-col items-center justify-between p-24"> Testing API {JSON.stringify(data)}</main>;
}
