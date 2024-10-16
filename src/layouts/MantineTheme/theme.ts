import {
	type DefaultMantineColor,
	type MantineColorsTuple,
	createTheme,
} from "@mantine/core";

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

import { DotGothic16 } from "next/font/google";
const font = DotGothic16({ weight: "400", subsets: ["latin"] });

export const theme = createTheme({
	colors: {
		darkBlue,
		lightBlue,
	},
	fontFamily: font.style.fontFamily,
	headings: { fontFamily: font.style.fontFamily },
});
