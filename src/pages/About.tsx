import { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";

// type User = {
// 	id: string;
// 	avatar_url: string;
// };
export default function About() {
	const { user, setUser, token, setToken } = useContext(UserContext);

	return (
		<div>
			<h2> {user?.firstName} </h2>
			<h2> {user?.lastName} </h2>
			<h2> {user?.email} </h2>
			<button
				onClick={() => {
					console.log("hello");
					setUser({
						id: "10",
						firstName: "Mohammed",
						lastName: "Naji",
						email: "mhdnaji763@gmail.com",
					});
				}}
			>
				{" "}
				chnage User Info{" "}
			</button>
			<h2> {token} </h2>
			<button onClick={() => setToken("1234567890")}> change token </button>
		</div>
	);
}
