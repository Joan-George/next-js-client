"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
	const [data, setdata] = useState({});
	const [todo, setTodo] = useState("");

	const saveTodo = () => {
		console.log("test");
	};
	async function fetchData() {
		const res = await axios.get("http://localhost:3000/api");
		setdata(res?.data);
	}

	useEffect(async () => {
		fetchData();
	}, []);

	console.log({ todo });

	return (
		<main className="flex flex-col items-center justify-between p-24 gap-2">
			<div className="flex gap-2">
				<Input onChange={(e) => setTodo(e)} />
				<Button name="Save Todo" onClick={() => saveTodo()} />
			</div>
			<Table
				body={data?.data}
				headers={[
					{ title: "Index", accessor: "id" },
					{ title: "Todo", accessor: "todo" },
					{ title: "Status", accessor: "status" },
					{ title: "Created At", accessor: "created_at" },
				]}
			/>
			Testing API {JSON.stringify(data)}
		</main>
	);
}
