import { Outlet, createHashRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

import EditProfile from "./pages/EditProfile";
import Teach from "./pages/Teach";
import EnrolledCourses from "./pages/EnrolledCourses";
import WishistCourses from "./pages/WishistCourses";
import Cart from "./pages/Cart";
import CourseInfo from "./pages/CourseInfo";
import CoursesView from "./pages/CourseView";

export const router = createHashRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/editprofile",
				element: <EditProfile />,
			},
			{
				path: "/user/:id",
				element: <Profile />,
			},
			{
				path: "/courses/",
				element: <Outlet />,
				children: [
					{
						path: ":category",
						element: <CoursesView />,
					},
					{
						path: ":category/:subCategory",
						element: <CoursesView />,
					},
					{
						path: "course/:id",
						element: <CourseInfo />,
					},
				],
			},

			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/",
				element: <GuestLayout />,
				children: [
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/signup",
						element: <Signup />,
					},
				],
			},
			{
				path: "/teach",
				element: <Teach />,
			},
			{
				path: "/enrolledcourses",
				element: <EnrolledCourses />,
			},
			{
				path: "/wishistcourses",
				element: <WishistCourses />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},

	{
		path: "*",
		element: <PageNotFound />,
	},
]);
