import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function GuestLayout() {
	const { token } = useContext(UserContext);
	if (token) {
		return <Navigate to={"/"} />;
	}
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				{/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</div> */}

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<Outlet />
				</div>
			</div>
		</>
	);
}
