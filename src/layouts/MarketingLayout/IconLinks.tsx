"use client";
import { Container, SimpleGrid } from "@mantine/core";
import { SwitchTheme } from "~/components/Theme/SwitchTheme";
import { AppleSvg } from "~/layouts/MarketingLayout/icons/AppleSvg";
import { GithubSvg } from "~/layouts/MarketingLayout/icons/GithubSvg";
import { XiconSvg } from "~/layouts/MarketingLayout/icons/XiconSvg";
import c from "./IconLinks.module.css";

export function IconLinks() {
	return (
		<Container className={c.container}>
			<SimpleGrid cols={4} spacing="xxs" className={c.gridItem}>
				<XiconSvg />
				<GithubSvg />
				<AppleSvg />
				<SwitchTheme />
			</SimpleGrid>
		</Container>
	);
}
