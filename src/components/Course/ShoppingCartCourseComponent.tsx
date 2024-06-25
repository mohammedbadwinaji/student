import { BiRightArrow } from "react-icons/bi";
import { ShoppingCartCourseComponentType } from "../../Types/ShoppingCartCourseComponentType";
import courseImage from "../../assets/images/course3.jpg";
import RateComponent from "../ui/RateComponent";
import { Link } from "react-router-dom";
export default function ShoppingCartCourseComponent({
	course,
	className = "",
}: ShoppingCartCourseComponentType) {
	return (
		<div className={`${className} block lg:flex bg-gray-100 shadow-lg p-2 `}>
			<Link
				to={`/courses/course/${course.id}`}
				className="w-[60%] lg:w-[150px] h-[150px]  m-auto mb-4 lg:m-0 block"
			>
				{course.courseImage && (
					<img className="w-full h-full" src={course.courseImage} alt="" />
				)}
				{!course.courseImage && (
					<img className="w-full h-full" src={courseImage} alt="" />
				)}
			</Link>
			<Link to={`/courses/course/${course.id}`} className="ml-4 mb-4 lg:mb-0 block">
				<h2 className="text-lg font-bold mb-1">{course.title}</h2>
				<h3 className="text-md mb-3 text-gray-800">
					by {course.instructor.firstName} {course.instructor.lastName}
				</h3>
				<div className="flex items-center">
					<span className="mr-2">{course.rate} </span>
					<span className="inline-block mr-4 text-sm">
						<RateComponent rate={course.rate} width="100px" className="" />
					</span>
					<span className="text-sm">{course.reviews} reviews</span>
				</div>
				<div className="flex  flex-col lg:flex-row lg:items-center">
					<span className="flex items-center mr-2 text-sm">
						{" "}
						<BiRightArrow className="size-3 mr-1" />
						{course.includes.videoTotalTime} video time{" "}
					</span>
					<span className="flex items-center mr-2 text-sm">
						{" "}
						<BiRightArrow className="size-3 mr-1" />{" "}
						{course.includes.articlesCount} articles{" "}
					</span>
					<span className="flex items-center mr-2 text-sm">
						{" "}
						<BiRightArrow className="size-3 mr-1" />{" "}
						{course.includes.quizesCount} quizes
					</span>
				</div>
			</Link>
			<div className="ml-4 flex flex-col justify-around mb-3 lg:mb-0 ">
				<button className="button w-full sm:w-1/3 m-auto lg:m-0 lg:w-full mb-2 px-3 py-1">
					{" "}
					remove from cart
				</button>
				<button className="button w-full sm:w-1/3 m-auto lg:m-0 lg:w-full mb-2 px-3 py-1">
					{" "}
					buy{" "}
				</button>
				<button className="button w-full sm:w-1/3 m-auto lg:m-0 lg:w-full  px-3 py-1">
					{" "}
					Move To Wishist{" "}
				</button>
			</div>
			<div className="flex justify-center items-center ml-4">
				<span className="font-bold text-lg mr-1">{course.price.value}</span>
				<span className="text-sm text-gray-600 font-bold">
					{course.price.currency}
				</span>
			</div>
		</div>
	);
}
