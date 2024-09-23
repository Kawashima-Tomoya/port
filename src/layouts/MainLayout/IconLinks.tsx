"use client";

import { Anchor, Box, SimpleGrid } from "@mantine/core";
import { ActionThemeIcon } from "~/components/Theme/ActionThemeIcon";
import { AppleSvg } from "~/icons/AppleSvg";
import { GithubSvg } from "~/icons/GithubSvg";
import { XiconSvg } from "~/icons/XiconSvg";
import c from "./IconLinks.module.css";

export function IconLinks() {
	const iconLinks = [
		{ href: "https://x.com/home", component: XiconSvg },
		{ href: "https://github.com/Kawashima-Tomoya", component: GithubSvg },
		{ href: "https://www.apple.com/", component: AppleSvg },
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
