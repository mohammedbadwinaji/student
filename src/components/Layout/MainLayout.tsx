import React, {
	Fragment,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { v4 as uuidv4 } from "uuid";

import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	UserIcon,
} from "@heroicons/react/24/solid";
// import { UserIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";
import { courseCategroy } from "../../constants/courseCategory";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

type NavigationItem = {
	name: string;
	to: string;
	current: boolean;
	category?: {
		name: string;
		subCategorys: string[];
	}[];
};
type Navigation = NavigationItem[];
const navigation: Navigation = [
	{ name: "Home", to: "/", current: true },
	{ name: "About", to: "/about", current: false },
	{ name: "Contact", to: "/contact", current: false },
	{
		name: "Courses",
		to: "/courses",
		current: false,
		category: courseCategroy,
	},
	{ name: "Login", to: "/login", current: false },
	{ name: "Get Started", to: "/signup", current: false },
	{ name: "Teach", to: "/teach", current: false },
	{ name: "Testing", to: "/testing", current: false },
];

type UserInfo = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
};
const userInfo = window.localStorage.getItem("userInfo") || `{ "id": "12345" }`;

const userInfoObject: UserInfo = userInfo && JSON.parse(userInfo);
console.log(userInfoObject);
// const userId = userInfoObject.id;

const userNavigation = [
	{
		name: "Your Profile",
		to: `/profile`,
	},
	{ name: "Edit Profile", to: "/editprofile" },
	{ name: "My Cart", to: "/cart" },
	{ name: "Enrolled Courses", to: "/enrolledcourses" },
	{ name: "Wishist Courses", to: "/wishistcourses" },
	{ name: "Settings", to: "/setting" },
	{ name: "Log Out", to: "/login" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function MainLayout() {
	const { token } = useContext(UserContext);
	const courseMenuElement = useRef<HTMLUListElement | null>(null);

	const [navigationState, setNavigationState] = useState(navigation);

	const closeCourseMenu = () => {
		courseMenuElement.current?.classList.add("hidden");
	};

	const logout = (ev: React.MouseEvent) => {
		ev.preventDefault();
		console.log("logout");
	};
	useEffect(() => {
		if (token) {
			const newNavigation = [
				...navigation.filter((item) => {
					return (
						(item.name as string) !== "Login" &&
						(item.name as string) !== "Get Started"
					);
				}),
			];
			setNavigationState(newNavigation);
		}
		console.log(navigationState);
	}, [token]);
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className="min-h-full">
				<Disclosure
					as="nav"
					className="bg-white w-screen dark:bg-gray-800 shadow-md max-w-full"
				>
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<img
												className="h-8 w-8"
												src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
												alt="Your Company"
											/>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigationState.map((item, ind) => {
													if (item.name === "Courses") {
														return (
															<NavLink
																to={"/"}
																onClick={(ev) => ev.preventDefault()}
																key={ind}
																className={() =>
																	classNames(
																		window.location.hash.startsWith("#/courses")
																			? "dark:bg-gray-900 dark:text-white bg-gray-400 text-white"
																			: "dark:text-gray-300 text-gray-800  dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white hover:text-white",
																		"rounded-md px-3 py-2 text-sm font-medium transition relative"
																	)
																}
																onMouseDown={() =>
																	document
																		.querySelector(`ul.category`)
																		?.classList.remove("hidden")
																}
															>
																{item.name}
																<ul
																	ref={courseMenuElement}
																	className="hidden absolute top-[50px] left-0 bg-slate-800 category"
																>
																	{item.category?.map((category, index) => {
																		return (
																			<li
																				key={index}
																				className="capitalize relative category "
																				onMouseEnter={() => {
																					const coursesNavigation =
																						document.querySelectorAll(
																							"ul.subCategory"
																						);
																					coursesNavigation.forEach((a) => {
																						a.classList.add("hidden");
																					});

																					document.querySelectorAll(
																						`a.courseNavigation`
																					);

																					document
																						.querySelector(
																							`a[href="#/courses/${category.name.toLowerCase()}"] ul`
																						)
																						?.classList.remove("hidden");
																				}}
																			>
																				<NavLink
																					to={`/courses/${category.name}`}
																					className={({
																						isActive,
																					}: {
																						isActive: boolean;
																					}): string =>
																						classNames(
																							isActive
																								? "dark:bg-gray-900 dark:text-white bg-gray-400 text-white"
																								: "dark:text-gray-300 text-gray-800  dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white hover:text-white",
																							"rounded-md  text-sm font-medium transition course py-4 px-4 flex justify-center items-center w-[150px]"
																						)
																					}
																					onClick={() =>
																						document
																							.querySelector("ul.category")
																							?.classList.add("hidden")
																					}
																				>
																					{category.name}
																					<ul
																						onMouseLeave={closeCourseMenu}
																						className="hidden absolute  top-0 bg-slate-800 subCategory "
																						style={{
																							left: "calc(100% + 10px)",
																						}}
																					>
																						<span className="absolute top-[12px] -left-[10px]  border-[10px]   border-l-slate-800 border-transparent "></span>

																						{category.subCategorys.map(
																							(subcategory, index) => {
																								return (
																									<li
																										key={index}
																										className="capitalize subCategory"
																									>
																										<NavLink
																											to={`/courses/${category.name}/${subcategory}`}
																											className={({
																												isActive,
																											}: {
																												isActive: boolean;
																											}): string =>
																												classNames(
																													isActive
																														? "dark:bg-gray-900 dark:text-white bg-gray-400 text-white"
																														: "dark:text-gray-300 text-gray-800  dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white hover:text-white",
																													"rounded-md  text-sm font-medium transition course py-4 px-4 flex justify-center items-center w-[200px]"
																												)
																											}
																											onClick={() => {
																												document
																													.querySelector(
																														"ul.category"
																													)
																													?.classList.add(
																														"hidden"
																													);
																											}}
																										>
																											{subcategory}
																										</NavLink>
																									</li>
																								);
																							}
																						)}
																					</ul>
																				</NavLink>
																			</li>
																		);
																	})}
																</ul>
															</NavLink>
														);
													} else {
														return (
															<NavLink
																key={ind}
																to={item.to}
																className={({
																	isActive,
																}: {
																	isActive: boolean;
																}): string =>
																	classNames(
																		isActive
																			? "dark:bg-gray-900 dark:text-white bg-gray-400 text-white"
																			: "dark:text-gray-300 text-gray-800  dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white hover:text-white",
																		"rounded-md px-3 py-2 text-sm font-medium transition"
																	)
																}
																// aria-current={item.current ? "page" : undefined}
															>
																{item.name}
															</NavLink>
														);
													}
												})}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											{/* Profile dropdown */}

											{token && (
												<Menu as="div" className="relative ml-3">
													<div>
														<Menu.Button className="relative flex max-w-xs items-center rounded-full dark:bg-gray-800   text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
															<span className="absolute -inset-1.5" />
															<span className="sr-only">Open user menu</span>
															<UserIcon className="text-white dark:text-teal-500 size-8 p-1 bg-gray-400 dark:bg-white rounded-full" />
														</Menu.Button>
													</div>
													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
															{userNavigation.map((item) => (
																<Menu.Item key={item.name}>
																	{({ active }) => (
																		<NavLink
																			to={item.to}
																			onClick={(ev) => {
																				item.name === "Log Out" && logout(ev);
																			}}
																			className={({
																				isActive,
																			}: {
																				isActive: boolean;
																			}) =>
																				classNames(
																					active ? "bg-gray-100" : "",
																					"block px-4 py-2 text-sm hover:bg-slate-500 hover:text-white hover:font-bold  text-gray-500",
																					isActive
																						? "bg-slate-500 text-white font-bold"
																						: ""
																				)
																			}
																		>
																			{item.name}
																		</NavLink>
																	)}
																</Menu.Item>
															))}
														</Menu.Items>
													</Transition>
												</Menu>
											)}
										</div>
									</div>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
									{navigationState.map((item) => (
										<NavLink
											key={item.name}
											to={item.to}
											className={({
												isActive,
											}: {
												isActive: boolean;
											}): string =>
												classNames(
													isActive
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"block rounded-md px-3 py-2 text-base font-medium"
												)
											}
											// aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</NavLink>
									))}
								</div>
								{token && (
									<div className="border-t border-gray-700 pb-3 pt-4">
										<div className="flex items-center px-5">
											<div className="flex-shrink-0">
												<UserIcon className="text-teal-500 size-8 p-1 bg-white rounded-full" />
											</div>
											<div className="ml-3">
												<div className="text-base font-medium leading-none text-white mb-2"></div>
												<div className="text-sm font-medium leading-none text-gray-400"></div>
											</div>
											<button
												type="button"
												className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											>
												<span className="absolute -inset-1.5" />
												<span className="sr-only">View notifications</span>
												<BellIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
										<div className="mt-3 space-y-1 px-2">
											{userNavigation.map((item) => (
												<NavLink
													key={item.name}
													to={item.to}
													className={({
														isActive,
													}: {
														isActive: boolean;
													}): string =>
														classNames(
															isActive
																? "bg-gray-900 text-white"
																: "text-gray-300 hover:bg-gray-700 hover:text-white",
															"block rounded-md px-3 py-2 text-base font-medium"
														)
													}
												>
													{item.name}
												</NavLink>
											))}
										</div>
									</div>
								)}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<Outlet />
			</div>
		</>
	);
}
