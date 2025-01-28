import {
	ActionIcon,
	useComputedColorScheme,
	useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import c from "./ActionThemeIcon.module.css";

export function ActionThemeIcon() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return (
		<ActionIcon
			onClick={() =>
				setColorScheme(computedColorScheme === "light" ? "dark" : "light")
			}
			variant="transparent"
			aria-label="Toggle color scheme"
		>
			<IconSun
				className={cx(c.icon, c.light)}
				stroke={1.5}
				color="var(--mantine-color-yellow-4)"
			/>
			<IconMoon
				className={cx(c.icon, c.dark)}
				stroke={1.5}
				color="var(--mantine-color-blue-7)"
			/>
		</ActionIcon>
	);
}
