import {
	Container,
	type DefaultMantineColor,
	type MantineColorsTuple,
	MantineProvider,
	Stack,
	createTheme,
} from "@mantine/core";
import c from "./index.module.css";

import type { ReactNode } from "react";
import { Footer } from "~/layouts/MainLayout/Footer";
import { IconLinks } from "~/layouts/MainLayout/IconLinks";
import { SideNav } from "~/layouts/MainLayout/SideNav";

type ExtendedCustomColors = "mainColor" | "subColor" | DefaultMantineColor;

declare module "@mantine/core" {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, MantineColorsTuple>;
	}
}

const darkBlue: MantineColorsTuple = [
	"#dbdaf0",
	"#b2b2e3",
	"#8887d6",
	"#6562cb",
	"#4e4ac4",
	"#433fc333",
	"#3632ac88",
	"#2e2c9a33",
	"#0c0c3c33",
	"#25258833",
];
const lightBlue: MantineColorsTuple = [
	"#1db6f833",
	"#2fbaf733",
	"#9ee1fd44",
	"#059fdd33",
	"#007bb033",
	"#cef2ff88",
	"#e2fbff88",
	"#008dc733",
	"#44c3f888",
	"#6bd1fa33",
];

export const theme = createTheme({
	/* Put your mantine theme override here */
	colors: {
		darkBlue,
		lightBlue,
	},
	headings: { fontFamily: "Avenir, Roboto" },
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
