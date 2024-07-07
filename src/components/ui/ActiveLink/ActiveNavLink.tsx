"use client";

import {
	NavLink,
	type NavLinkProps,
	type PolymorphicComponentProps,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

// Next.jsのLinkを使う前提に切り替わる型解決の手法
type Props = PolymorphicComponentProps<typeof Link, NavLinkProps>;

export function ActiveNavLink(navLinkProps: Props) {
	const pathname = useRouter();

	return (
		<NavLink
			component={Link}
			active={navLinkProps.href === pathname}
			{...navLinkProps}
		/>
	);
}
