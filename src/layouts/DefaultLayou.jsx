// eslint-disable-next-line no-unused-vars
import react from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
