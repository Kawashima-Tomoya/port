"use client";

import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useMountedColorScheme } from "./useMountedColorScheme";

export function ActionThemeIcon(props: ActionIconProps) {
	const { toggleColorScheme, colorScheme } = useMountedColorScheme();

	return (
		<ActionIcon
			variant="transparent"
			aria-label="Toggle theme"
			onClick={toggleColorScheme}
			loading={colorScheme === undefined}
			{...props}
		>
			{colorScheme === "light" ? (
				<IconMoon size={20} stroke={1.5} color="var(--mantine-color-blue-7)" />
			) : (
				<IconSun size={24} stroke={1.5} color="var(--mantine-color-yellow-4)" />
			)}
		</ActionIcon>
	);
}
