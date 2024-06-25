import { Link, useParams } from "react-router-dom";
import CourseLandingPage from "../data/CourseLandingPage.json";
import RateComponent from "../components/ui/RateComponent";
import CourseImage from "../assets/images/course2.jpg";
import {
	ArrowDownIcon,
	ArrowRightIcon,
	ArrowUpRightIcon,
	CheckBadgeIcon,
	DocumentIcon,
	ExclamationCircleIcon,
	HeartIcon,
	LanguageIcon,
	PlusCircleIcon,
	StarIcon,
	UserIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineQuiz } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { MouseEvent } from "react";

export default function CourseInfo() {
	const { id } = useParams();
	console.log(id);
	const expandSection = (ev: MouseEvent<HTMLElement>) => {
		ev.preventDefault();
		console.log(
			(ev.target as HTMLElement).children[0].classList.toggle("rotate-[180deg]")
		);
		console.log((ev.target as HTMLElement).nextSibling);
		console.log(
			((ev.target as HTMLElement).nextSibling as HTMLElement).classList.toggle(
				"hidden"
			)
		);
	};
	return (
		<div className="container">
			<div className="flex items-start flex-wrap flex-col-reverse lg:flex-row mb-10 pb-10 border-b-2 border-b-slate-300">
				<div className="mt-10 w-full  lg:w-2/3 lg:pr-4">
					<h1 className="text-2xl font-bold mb-3">{CourseLandingPage.title}</h1>
					<h2 className="text-xl mb-5"> {CourseLandingPage.subtitle}</h2>
					<div className="flex mb-2 font-bold">
						<div className="flex mr-3 ">
							Rates
							<RateComponent
								rate={CourseLandingPage.rate}
								width={"100px"}
								className="ml-2"
							/>
						</div>
						<div> Students {CourseLandingPage.studentCount} </div>
					</div>
					<div className="mb-2 font-bold">
						<span> Creteated By </span>
						<Link
							to={`/user/${CourseLandingPage.instructor.id}`}
							className="text-blue-700 font-bold text-sm"
						>
							{CourseLandingPage.instructor.firstName}
							{CourseLandingPage.instructor.lastName}
						</Link>
					</div>
					<div className="flex items-center capitalize font-bold">
						<div className="flex items-center mr-4 ">
							<ExclamationCircleIcon className="size-6 mr-1" />
							<span> last Updated </span>
							<span> {CourseLandingPage.lastUpdated}</span>
						</div>
						<div className="flex">
							<LanguageIcon className="size-6 mr-1" />
							{CourseLandingPage.language}
						</div>
					</div>
				</div>
				<div className="w-full md:w-[500px] md:m-auto md:mt-10 lg:mt-10 lg:w-1/3 shadow-sm rounded-lg mt-10  bg-white mb-10">
					<img src={CourseImage} alt="" className="w-full h-[200px] " />
					<span className="font-bold text-lg mt-3 mb-3 text-center block">
						{CourseLandingPage.price.value} {CourseLandingPage.price.currency}
					</span>
					<button className="w-1/2 m-auto p-2  mb-3 text-sm lg:text-md button-icon">
						<PlusCircleIcon className="size-6 mr-1" />
						Add To Cart
					</button>
					<button className="w-1/2 m-auto p-2  mb-3 text-sm lg:text-md button-icon">
						<HeartIcon className="size-6 mr-1" />
						Add To Wihist
					</button>
					<button
						type="button"
						className="w-1/2 m-auto p-2  mb-3 text-sm lg:text-md button-icon"
					>
						Buy Now
					</button>
				</div>
			</div>
			{/* What Will You Learn */}
			<div className="p-5 border border-slate-500 rounded-lg mb-10 ">
				<h2 className="text-xl font-bold mb-4"> What You Will Learn </h2>
				<div className="flex flex-wrap">
					{CourseLandingPage.studentLearns.map((learn, index) => {
						return (
							<div
								key={index}
								className="w-full lg:w-1/2 flex items-start mb-3"
							>
								<CheckBadgeIcon className="size-6 mr-2 " />
								{learn}
							</div>
						);
					})}
				</div>
			</div>

			{/* Course Content  */}
			<div className=" mb-10 0 pb-16 border-b border-slate-300">
				<h2 className="text-xl font-bold mb-4"> Course Content </h2>
				<div className="mb-10">
					<ul>
						<li className="flex items-center">
							<ArrowUpRightIcon className="size-3 mr-2 " />{" "}
							{CourseLandingPage.includes.articlesCount} Articles
						</li>
						<li className="flex items-center">
							<ArrowUpRightIcon className="size-3 mr-2 " />{" "}
							{CourseLandingPage.includes.quizesCount} Quizes
						</li>
						<li className="flex items-center">
							<ArrowUpRightIcon className="size-3 mr-2" />
							{CourseLandingPage.includes.videoTotalTime} Video Time
						</li>
					</ul>
				</div>
				<div className="select-none">
					{CourseLandingPage.Curriculum.map((section, index) => {
						return (
							<div key={index} className="w-full md:w-[700px] md:m-auto">
								<div
									className="flex items-center border border-slate-500 p-2 cursor-pointer "
									onClick={expandSection}
								>
									<ArrowDownIcon className=" size-3 m-2 user-select-none transition" />
									<span className="w-1/2 capitalize font-bold text-md pointer-events-none">
										{section.sectionName}
									</span>
									<div className="hidden md:flex justify-between w-1/2 pointer-events-none">
										<span className="pointer-events-none">
											{section.quizesCount} Quizes
										</span>
										<span className="pointer-events-none">
											{section.articlesCount} articles
										</span>
										<span className="pointer-events-none">
											{section.videoTime} video time
										</span>
									</div>
								</div>
								<div className="transition hidden">
									{section.sectionContent.map((sectionContent, index) => {
										if (sectionContent.type === "video") {
											return (
												<div
													className="transition border p-2 flex justify-between items-center"
													key={index}
												>
													<div className="flex">
														<VideoCameraIcon className="size-5 mr-3" />
														{sectionContent.title}
													</div>
													{sectionContent.time}
												</div>
											);
										} else if (sectionContent.type === "article") {
											return (
												<div
													className="transition border p-2 flex items-center"
													key={index}
												>
													<DocumentIcon className="size-5 mr-3" />
													{sectionContent.title}
												</div>
											);
										} else {
											return (
												<div
													className="transition border p-2 flex justify-between items-center"
													key={index}
												>
													<div className="flex">
														<MdOutlineQuiz className="size-5 mr-3" />
														{sectionContent.title}
													</div>
													{sectionContent.questions?.length} Questions
												</div>
											);
										}
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Requirenment */}
			<div className="mb-10 pb-16 border-b border-slate-300">
				<h2 className="text-xl font-bold mb-10"> Requirements </h2>
				{CourseLandingPage.requirements.map((requirenment, index) => {
					return (
						<div key={index} className="flex items-center mb-3">
							<ArrowRightIcon className="size-3 mr-3" />
							{requirenment}
						</div>
					);
				})}
			</div>

			{/* Description */}
			<div className="mb-10 pb-16 border-b border-slate-300 ">
				<h2 className="text-xl font-bold mb-10"> Description </h2>
				<p className="leading-8"> {CourseLandingPage.description}</p>
			</div>

			{/* Instructor */}
			<div className="mb-10">
				<h2 className="text-xl font-bold mb-10"> Instructor </h2>

				<Link
					to={`/user/${CourseLandingPage.instructor.id}`}
					className="text-blue-700 font-bold mb-3"
				>
					{" "}
					{CourseLandingPage.instructor.firstName}{" "}
					{CourseLandingPage.instructor.lastName}
				</Link>
				<p className="mb-4">{CourseLandingPage.instructor.bio}</p>
				<div className="flex flex-col md:flex-row justify-center md:justify-start">
					<div className="w-[150px] m-auto md:mr-5">
						<img
							className="w-full h-[150px] rounded-full"
							src={CourseImage}
							alt=""
						/>
					</div>
					<div className="m-auto mt-4 md:m-0 flex-1">
						<span className="flex items-center mb-3">
							<StarIcon className="size-4 mr-3" />
							{CourseLandingPage.instructor.rate} Student Rate
						</span>
						<span className="flex items-center mb-3">
							<FaCertificate className="size-4 mr-4" />{" "}
							{CourseLandingPage.instructor.reviewsCount} Reviews
						</span>
						<span className="flex items-center mb-3">
							<UserIcon className="size-4 mr-4" />{" "}
							{CourseLandingPage.instructor.studentsCount} Students
						</span>
						<span className="flex items-center">
							<VideoCameraIcon className="size-4 mr-4" />{" "}
							{CourseLandingPage.instructor.coursesCount} Student Rate
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
