// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./src/layouts/DefaultLayou";
import { Detail } from "./src/pages/Projetos/Detail";
import Home from "./src/pages/Home";

export function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/projects/:id" element={<Detail />} />
				</Route>
			</Routes>
		</>
	);
}
