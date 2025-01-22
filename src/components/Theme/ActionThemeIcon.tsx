"use client";

import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useMountedColorScheme } from "./useMountedColorScheme";

export function ActionThemeIcon(props: ActionIconProps) {
	const { toggleColorScheme, colorScheme } = useMountedColorScheme();

	const DisplayIcon = () => {
		switch (colorScheme) {
			case "dark":
				return <IconSun size={24} stroke={1.5} color="var(--mantine-color-yellow-4)" />;
			case "light":
				return <IconMoon size={20} stroke={1.5} color="var(--mantine-color-blue-7)" />;
			default:
				return null;
		}
	}

	return (
		<ActionIcon
			variant="transparent"
			aria-label="Toggle theme"
			onClick={toggleColorScheme}
			loading={colorScheme === undefined}
			{...props}
		>
			<DisplayIcon />
		</ActionIcon>
	);
}