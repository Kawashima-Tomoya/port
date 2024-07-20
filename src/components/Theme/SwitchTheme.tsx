"use client";

import {
	MantineProvider,
	Switch,
	type SwitchProps,
	createTheme,
	useMantineTheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import c from "./SwitchTheme.module.css";
import { useMountedColorScheme } from "./useMountedColorScheme";

export function SwitchTheme(props: SwitchProps) {
	const theme = useMantineTheme();
	const { toggleColorScheme, colorScheme } = useMountedColorScheme();
	const pointer = createTheme({
		cursorType: "pointer",
	});

	return (
		<MantineProvider theme={pointer}>
			<Switch
				unstyled={true}
				className={c.switch}
				onChange={toggleColorScheme}
				checked={colorScheme === "dark"}
				disabled={colorScheme === undefined}
				onLabel={<IconSun size={20} color={theme.colors.yellow[4]} />}
				offLabel={<IconMoon size={20} color={theme.colors.blue[6]} />}
				{...props}
			/>
		</MantineProvider>
	);
}
