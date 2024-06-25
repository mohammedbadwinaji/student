import { ChangeEvent, useRef, useState } from "react";
import SelectBox from "../ui/SelectBox";
import { FaSearch } from "react-icons/fa";
import { courseLevels } from "../../constants/courseLevels";


export default function CourseSearch({className} : {className: string}) {
	const [price, setPrice] = useState({
		state: "free",
		value: 0,
	});
	const level = useRef("Beginner");

	return (
		<>
			<div className={`${className}`}>
				
				<SelectBox
					name="price"
					values={["free", "paid"]}
					onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
						if (ev.target.value === "free") {
							setPrice({ value: 0, state: "free" });
						} else {
							setPrice({ value: 1, state: "paid" });
						}
					}}
				/>
				{price.state === "paid" && (
					<input
						className="w-1/2 rounded-xl p-3 ring-teal-800 shadow-none focus:shadow-none focus:border-teal-800 focus:outline-none"
						type="number"
						value={price.value}
						placeholder="less than or equal"
						onChange={(ev) => {
							if (ev.target.value < "1") {
								ev.target.value = "1";
							}
							setPrice({ ...price, value: Number(ev.target.value) });
						}}
					/>
				)}
				<SelectBox
					name="level"
					values={Object.values(courseLevels)}
					onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
						level.current = ev.target.value;
					}}
				/>
			</div>
			<button
				type="button"
				className="py-2 px-4 button-icon"
			>
				<FaSearch className="size-5" /> search{" "}
			</button>
		</>
	);
}
