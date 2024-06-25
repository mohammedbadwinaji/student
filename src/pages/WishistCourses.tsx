import CourseCartComponent from "../components/Course/CourseCartComponent";
import CoursesViewData from "../data/CoursesViewData.json";

export default function WishistCourses() {
	return (
		<>
			<h1 className="container text-2xl font-bold mt-5 mb-5 capitalize">
				My Wishist Courses{" "}
			</h1>
			<div className="grid relative gap-4 md:grid-cols-2 lg:grid-cols-3  mb-14 container">
				{CoursesViewData.map((course, ind) => {
					return <CourseCartComponent key={ind} course={course} />;
				})}
			</div>
		</>
	);
}
