export default function Input({ onChange = () => {}, ...props }) {
	return (
		<input
			type="text"
			className="border border-black border-solid rounded-md focus:border-green-300 p-1"
			onChange={(e) => onChange(e?.target?.value)}
		/>
	);
}
