import { Container, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { Footer } from "~/layouts/Footer";
import { Header } from "~/layouts/Header";
import { theme } from "~/layouts/MantineTheme/theme";
import c from "./index.module.css";

export function FormLayout({ children }: { children: ReactNode }) {
	return (
		<MantineProvider theme={theme}>
			<Header />
			<Container className={c.container}>
				<main className={c.main}>{children}</main>
				<Footer href="/">⇦ Top</Footer>
			</Container>
		</MantineProvider>
	);
}
