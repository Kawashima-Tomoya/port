"use client";

import {
	Button,
	type ButtonProps,
	type PolymorphicComponentProps,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = PolymorphicComponentProps<typeof Link, ButtonProps>;

export function ActiveButton(buttonProps: Props) {
	const pathname = useRouter();
	const isActive = buttonProps.href === pathname;

	return (
		<Button
			component={Link}
			variant={isActive ? "light" : "transparent"}
			{...buttonProps}
		/>
	);
}
