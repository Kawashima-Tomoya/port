"use client";

import { Switch, type SwitchProps, useMantineTheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import c from "./SwitchTheme.module.css";
import { useMountedColorScheme } from "./useMountedColorScheme";

export function SwitchTheme(props: SwitchProps) {
	const theme = useMantineTheme();
	const { toggleColorScheme, colorScheme } = useMountedColorScheme();

	return (
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
	);
}
