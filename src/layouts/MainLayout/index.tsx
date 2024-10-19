import { Container, Flex, MantineProvider, Stack } from "@mantine/core";
import type { ReactNode } from "react";
import { Footer } from "~/layouts/Footer";
import { Header } from "~/layouts/Header";
import { IconLinks } from "~/layouts/MainLayout/IconLinks";
import { SideNav } from "~/layouts/MainLayout/SideNav";
import { theme } from "~/layouts/MantineTheme/theme";
import c from "./index.module.css";

export function MainLayout({ children }: { children: ReactNode }) {
	return (
		<MantineProvider theme={theme}>
			<Header />
			<Container className={c.container}>
				<Flex justify="center" gap="lg" className={c.mainContainer}>
					<Stack gap="xs" className={c.side}>
						<IconLinks />
						<SideNav />
					</Stack>
					<main className={c.main}>{children}</main>
				</Flex>
				<Footer href="/contact">お問い合わせ</Footer>
			</Container>
		</MantineProvider>
	);
}
