import c from "./index.module.css";

import type { ReactNode } from "react";

export function FormLayout({ children }: { children: ReactNode }) {
	return (
		<div className={c.container}>
			{/* <Navbar /> */}
			<main className={c.main}>{children}</main>
		</div>
	);
}