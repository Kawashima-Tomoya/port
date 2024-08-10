import { Container, Group, MantineProvider, Title } from "@mantine/core";
import {
	CSS,
	Figma,
	HTML,
	Java,
	JavaScript,
	Nextjs,
	Nodejs,
	React,
	Slack,
	TailwindCss,
	TypeScript,
	VisualStudioCode,
} from "~/layouts/MainLayout/icons/ImportSkillIcons";

export default function Page() {
	return (
		<MantineProvider>
			<Container size="md">
				<Title order={1} size="h2">
					Skills
				</Title>

				<Title order={2} size="h3" mt="lg">
					Language
				</Title>
				<Group>
					<HTML />
					<CSS />
					<JavaScript />
					<TypeScript />
					<Nodejs />
					<Java />
				</Group>

				<Title order={2} size="h3" mt="lg">
					FrameWork
				</Title>
				<Group>
					<React />
					<Nextjs />
					<TailwindCss />
				</Group>

				<Title order={2} size="h3" mt="lg">
					Tools
				</Title>
				<Group>
					<VisualStudioCode />
					<Figma />
					<Slack />
				</Group>
			</Container>

			<Container mt="xl">
				<Title order={1} size="h2">
					About Me
				</Title>
			</Container>
		</MantineProvider>
	);
}
