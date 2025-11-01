"use client";

import { Anchor, Box, SimpleGrid } from "@mantine/core";
import { ActionThemeIcon } from "~/components/Theme/ActionThemeIcon";

import { GithubSvg } from "~/icons/linkIcons/GithubSvg";
import { XiconSvg } from "~/icons/linkIcons/XiconSvg";
import { Zenn } from "~/icons/linkIcons/ZennSvg";
import c from "./IconLinks.module.css";

export function IconLinks() {
	const iconLinks = [
		{ href: "https://github.com/Kawashima-Tomoya", component: GithubSvg },
		{ href: "https://zenn.dev/shimakawa", component: Zenn },
		{ href: "https://x.com/home", component: XiconSvg },
	] as const;

	return (
		<Box className={c.container}>
			<SimpleGrid cols={4} className={c.gridItem}>
				{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
				{iconLinks.map((iconLink) => (
					<Anchor<"a">
						href={iconLink.href}
						key={iconLink.href}
						target="_blank"
						rel="noopener noreferrer"
						underline="never"
						size="0"
						c="var(--mantine-color-text)"
					>
						{<iconLink.component />}
					</Anchor>
				))}
				<ActionThemeIcon />
			</SimpleGrid>
		</Box>
	);
}
