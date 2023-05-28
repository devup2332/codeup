import { useState } from "react";

const SwitchTheme = () => {
	const [theme, setTheme] = useState(true);
	const handleChangeTheme = () => {
		setTheme(!theme);
	};
	return (
		<button
			className="bg-gray-200 rounded-full w-12 h-6 relative outline-none"
			onClick={handleChangeTheme}
		>
			<div
				className="w-5 h-5 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition-all"
				style={{
					left: theme ? "3px" : "24px",
					background: theme ? "#26D481" : "#ffffff",
				}}
			></div>
		</button>
	);
};
export default SwitchTheme;
