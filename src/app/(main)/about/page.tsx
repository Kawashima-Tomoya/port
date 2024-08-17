import {
	Avatar,
	Container,
	Group,
	MantineProvider,
	Space,
	Text,
	Title,
} from "@mantine/core";
import { CopyBtn } from "~/components/ui/CopyButton/CopyBtn";
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
				<Title order={1}>Skills</Title>

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
			<Space h="lg" />

			<Container mt="xl">
				<Title order={1}>Profile</Title>

				<Title order={2} size="h3" mt="lg">
					About Me
				</Title>
				<Group>
					<Avatar color="cyan" />
					<Text size="sm">
						北海道札幌市出身の26歳
						<br /> フロントエンドを独学で勉強してます！
					</Text>
				</Group>

				<Title order={2} size="h3" mt="lg">
					Contact
				</Title>
				<CopyBtn
					mail="57kawashima@gmail.com"
					timeout={3000}
					copiedTxt={"メールアドレスをコピーしました★"}
					unCopiedTxt={"メールはこちら！"}
				/>
			</Container>
		</MantineProvider>
	);
}
