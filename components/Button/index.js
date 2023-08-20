export default function Button({ onClick = () => {}, name, ...props }) {
	return (
		<button className="p-1 rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white font-bold" onClick={onClick}>
			{name}
		</button>
	);
}
