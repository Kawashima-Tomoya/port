import { Container, MantineProvider, Stack, createTheme } from "@mantine/core";
import c from "./index.module.css";

import type { ReactNode } from "react";
import { Footer } from "~/layouts/MainLayout/Footer";
import { IconLinks } from "~/layouts/MainLayout/IconLinks";
import { SideNav } from "~/layouts/MainLayout/SideNav";

export const theme = createTheme({
	/* Put your mantine theme override here */
	headings: { fontFamily: "Avenir, Roboto" },
	components: {
		Accordion: {
			styles: {
				content: {
					padding: "12px",
				},
			},
		},
	},
});

export function MainLayout({ children }: { children: ReactNode }) {
	return (
		<MantineProvider theme={theme}>
			<Container className={c.container}>
				<div className={c.mainContainer}>
					<Stack
						h={400}
						bg="var(--mantine-color-body)"
						justify="start"
						gap="xs"
					>
						<IconLinks />
						<SideNav />
					</Stack>
					<main className={c.main}>{children}</main>
				</div>
				<Footer />
			</Container>
		</MantineProvider>
	);
}
