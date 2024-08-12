import { Container, Stack } from "@mantine/core";
import c from "./index.module.css";

import type { ReactNode } from "react";
import { Footer } from "~/layouts/MainLayout/Footer";
import { IconLinks } from "~/layouts/MainLayout/IconLinks";
import { SideNav } from "~/layouts/MainLayout/SideNav";

export function MainLayout({ children }: { children: ReactNode }) {
	return (
		<Container className={c.container}>
			<div className={c.mainContainer}>
				<Stack h={400} bg="var(--mantine-color-body)" justify="start" gap="xs">
					<IconLinks />
					<SideNav />
				</Stack>
				<main className={c.main}>{children}</main>
			</div>
			<Footer />
		</Container>
	);
}
