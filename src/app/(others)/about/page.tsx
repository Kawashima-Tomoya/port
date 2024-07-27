import { Container, Group, MantineProvider, Space, Title } from "@mantine/core";
import { CSS } from "~/layouts/MarketingLayout/icons/CssSvg";
import { HTML5 } from "~/layouts/MarketingLayout/icons/HTML5Svg";
import { JavaScript } from "~/layouts/MarketingLayout/icons/JavaScriptSvg";
import { Nextjs } from "~/layouts/MarketingLayout/icons/NextJsSvg";
import { React } from "~/layouts/MarketingLayout/icons/ReactSvg";
import { Slack } from "~/layouts/MarketingLayout/icons/SlackSvg";
import { TailwindCss } from "~/layouts/MarketingLayout/icons/TailwindCssSvg";
import { TypeScript } from "~/layouts/MarketingLayout/icons/TypeScriptSvg";
import { VisualStudioCode } from "~/layouts/MarketingLayout/icons/VSCodeSvg";

export default function Page() {
	return (
		<MantineProvider>
			<Container size="md">
				<Title order={1} size="h2">
					Skills
				</Title>

				<Title order={2} size="h3">
					Language
				</Title>
				<Group>
					<HTML5 />
					<CSS />
					<JavaScript />
					<TypeScript />
				</Group>
				<Space h="xl" />

				<Title order={2} size="h3">
					FrameWork
				</Title>
				<Group>
					<React />
					<Nextjs />
					<TailwindCss />
				</Group>
				<Space h="xl" />

				<Title order={2} size="h3">
					Tools
				</Title>
				<Group>
					<VisualStudioCode />
					<Slack />
				</Group>
				<Space h="xl" />
			</Container>
		</MantineProvider>
	);
}
