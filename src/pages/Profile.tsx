import { useParams } from "react-router-dom";
import InstructorViewPage from "../components/user/InstructorViewPage";
import StudentViewPage from "../components/user/StudentViewPage";
import instructor from "../data/InstructorProfile.json";
import student from "../data/StudentProfile.json";
export default function Profile() {
	const { id } = useParams();
	console.log(id);
	if (id) {
		return (
			<div className="container mt-10 mb-10">
				<InstructorViewPage instructor={instructor} />
			</div>
		);
	}
	return (
		<div className="container mt-10 mb-10">
			<StudentViewPage student={student} />
		</div>
	);
}
