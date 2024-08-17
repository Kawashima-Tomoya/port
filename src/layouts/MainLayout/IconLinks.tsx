"use client";
import { Anchor, Container, SimpleGrid } from "@mantine/core";
import { ActionThemeIcon } from "~/components/Theme/ActionThemeIcon";
import { AppleSvg } from "~/layouts/MainLayout/icons/AppleSvg";
import { GithubSvg } from "~/layouts/MainLayout/icons/GithubSvg";
import { XiconSvg } from "~/layouts/MainLayout/icons/XiconSvg";
import c from "./IconLinks.module.css";

export function IconLinks() {
	// const theme = useMantineTheme;

	return (
		<Container className={c.container}>
			<SimpleGrid cols={4} spacing="xxs" className={c.gridItem}>
				<Anchor
					href="https://x.com/home"
					target="_blank"
					rel="noopener noreferrer"
					size="0"
					c="var(--mantine-color-text)"
				>
					<XiconSvg />
				</Anchor>
				<Anchor
					href="https://github.com/Kawashima-Tomoya"
					target="_blank"
					rel="noopener noreferrer"
					underline="never"
					size="0"
					c="var(--mantine-color-text)"
				>
					<GithubSvg />
				</Anchor>
				<Anchor
					href="https://www.apple.com/"
					target="_blank"
					rel="noopener noreferrer"
					underline="never"
					size="0"
					c="var(--mantine-color-text)"
				>
					<AppleSvg />
				</Anchor>
				<ActionThemeIcon />
			</SimpleGrid>
		</Container>
	);
}