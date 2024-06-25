import { useState } from "react";
import image from "../../assets/images/course2.jpg";
import CourseCartComponent from "../Course/CourseCartComponent";
import { StudentViewPageComponentType } from "../../Types/StudentViewPageComponentType";

export default function StudentViewPage({
	student,
}: StudentViewPageComponentType) {
	const [courses, setCourses] = useState(student.WishistCourses);
	const [isWishist, setIsWihst] = useState(true);
	const showCourses = (type: string) => {
		if (type === "wishist") {
			setCourses(student.WishistCourses);
			setIsWihst(true);
		} else {
			setCourses(student.enrolledCourses);
			setIsWihst(false);
		}
	};
	console.log(isWishist);
	return (
		<div>
			<h2 className="text-2xl font-bold capitalize mb-3">
				{student.firstName} {student.lastName}{" "}
			</h2>
			{student.bio && (
				<h3 className="text-lg font-bold capitalize mb-5"> {student.bio} </h3>
			)}
			{!student.bio && (
				<h3 className="text-lg font-bold capitalize mb-5 text-gray-400">
					{" "}
					no bio added{" "}
				</h3>
			)}
			<div className="flex justify-start flex-col md:flex-row mb-8">
				<div className="m-auto  mb-5 md:m-0 md:mr-6 ">
					<div className="w-[150px] h-[150px] mb-4">
						<img src={image} alt="" className="rounded-full w-full h-full" />
					</div>
					{student.socialMedia.length === 0 && (
						<h3 className="text-md font-bold capitalize mb-5 text-gray-400">
							{" "}
							no social Media added
						</h3>
					)}
					{student.socialMedia.map((web, index) => {
						return (
							<a
								target="_blank"
								key={index}
								href={web.url}
								className=" block p-3 mb-2 button"
							>
								{" "}
								{web.name}{" "}
							</a>
						);
					})}
				</div>
				{student.headline && (
					<p className="text-gray-800 leading-9">{student.headline}</p>
				)}
				{!student.headline && (
					<p className="flex justify-center items-center w-full">
						{" "}
						No Headline Provided{" "}
					</p>
				)}
			</div>
			<div className="text-center">
				<button
					onClick={() => showCourses("enrolled")}
					className={`p-2 button-inline-flex mr-5 ${
						isWishist ? "main-bg-color" : "button-hover-bg-color"
					}`}
					type="button"
				>
					enrolled Courses
				</button>
				<button
					onClick={() => showCourses("wishist")}
					className={`p-2 rounded-lg button-inline-flex ${
						isWishist ? "button-hover-bg-color" : "main-bg-color"
					}`}
					type="button"
				>
					Wishist Courses
				</button>
				{courses.length === 0 && (
					<div className="text-center font-bold text-2xl mt-8 mb-8">
						{" "}
						No Courses{" "}
					</div>
				)}
				<div
					id="result"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-8"
				>
					{courses.map((course, index) => {
						return <CourseCartComponent key={index} course={course} />;
					})}
				</div>
			</div>
		</div>
	);
}
