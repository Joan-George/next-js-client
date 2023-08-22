import * as dayjs from "dayjs";
import { LuEdit2 } from "react-icons/lu";

export default function Table({ headers = [], body = [], ...props }) {
	console.log({ body });
	return (
		<div className="inline-block rounded-lg border shadow-2xl overflow-hidden" key={JSON.stringify(body)}>
			<table className="table-fixed bg-red-50  border-collapse">
				<thead className=" border-collapse">
					<tr className="bg-slate-300">
						<th></th>
						{headers?.map((header) => (
							<th className="p-2">{header?.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{body?.map((bodyValues, index) => (
						<tr key={index} tabIndex={"0"} className="hover:bg-gray-50 focus:bg-gray-300" onKeyDown={(e) => console.log(e, index)}>
							<td className="p-2">
								<input type="checkbox" />
							</td>
							{headers?.map((items) => (
								<td className="p-2">
									{items?.accessor === "created_at"
										? dayjs(bodyValues[items?.accessor]).format("D MMM YYYY")
										: bodyValues[items?.accessor]}
								</td>
							))}
							<td>
								<LuEdit2 />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
