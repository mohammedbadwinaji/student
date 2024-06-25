import ShoppingCartCourseComponent from "../components/Course/ShoppingCartCourseComponent";
import CourseShoppingCartData from "../data/CourseShoppingCartData.json";

import { Link } from "react-router-dom";
export default function Cart() {
	return (
		<div className="container">
			{CourseShoppingCartData.length === 0 && (
				<>
					<h1 className="text-2xl text-gray-500 font-bold text-center mt-4">
						yout Cart is Empty
					</h1>
					<Link to={"/"} className="button w-[150px] m-auto mt-5 py-3">
						{" "}
						keep shooping{" "}
					</Link>
				</>
			)}
			<h1 className="text-2xl font-bold mt-4"> Shopping Cart </h1>
			<h4 className="text-md font-bold mt-2 mb-5 text-gray-800">
				{CourseShoppingCartData.length} courses in cart
			</h4>
			<div className="mb-14 container">
				{CourseShoppingCartData.map((course, ind) => {
					return (
						<ShoppingCartCourseComponent
							key={ind}
							course={course}
							className="mb-5 w-fit rounded-lg m-auto"
						/>
					);
				})}
				<div className="w-[50%] p-2  m-auto  bg-gray-100  shadow-xl mt-10 text-center">
					<h2 className="text-lg text-gray-800 font-bold mb-1"> total price </h2>
					<span className="font-bold text-lg mr-1">
						{CourseShoppingCartData.reduce((acc, price) => {
							return +price.price.value + acc;
						}, 0)}
						
					</span>
					<span className="font-bold text-gray-800 text-sm">{CourseShoppingCartData[0].price.currency}</span>
					<button className="button p-2 m-auto mt-4 w-full sm:w-[50%]"> Checkout </button>
				</div>
			</div>
		</div>
	);
}
