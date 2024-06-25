import { ChangeEvent } from "react";

type SelectBoxProps = {
	name: string;
	values: string[];
	onChange?: (ev: ChangeEvent<HTMLSelectElement>) => void;
};
export default function SelectBox({ name, values, onChange }: SelectBoxProps) {
	return (
		<div className="flex justify-around items-center  border-2 border-teal-600 rounded-xl p-3">
			<label
				htmlFor={name.toLowerCase()}
				className="font-bold w-1/3 text-center capitalize"
			>
				{name}
			</label>
			<select
				className="border-none focus:outline-none focus:border-none w-2/3"
				id={name.toLowerCase()}
				name={name.toLowerCase()}
				onChange={onChange}
			>
				{values.map((value, ind) => {
					return (
						<option key={ind} value={value}>
							{value.charAt(0).toUpperCase()}
							{value.slice(1)}
						</option>
					);
				})}
			</select>
		</div>
	);
}
