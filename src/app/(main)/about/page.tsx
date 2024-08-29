import { Avatar, Container, Group, Space, Text, Title } from "@mantine/core";
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
		<Container p="0">
			<Container
				style={{
					padding: "var(--mantine-spacing-md)",
					border:
						"1px solid light-dark(var(--mantine-color-dark-1), var(--mantine-color-dark-4))",
					borderRadius: "var(--mantine-radius-md)",
				}}
			>
				<Title order={2} size="h1">
					Profile
				</Title>

				<Title order={3} mt="md">
					About Me
				</Title>
				<Group>
					<Avatar size="xl" color="cyan" />
					<Text>
						北海道札幌市出身の26歳
						<br /> 主にフロントエンドを独学で勉強してます！
					</Text>
				</Group>

				<Title order={3} mt="lg">
					Contact
				</Title>
				<CopyBtn
					value="57kawashima@gmail.com"
					timeout={3000}
					variant="light"
					copiedTxt="メールアドレスをコピーしました★"
					unCopiedTxt="メールはこちら！"
					defColor={["cyan", "var(--mantine-color-text)"]}
				/>
			</Container>

			<Space h="xl" />

			<Container
				style={{
					padding: "var(--mantine-spacing-md)",
					border:
						"1px solid light-dark(var(--mantine-color-dark-1), var(--mantine-color-dark-4))",
					borderRadius: "var(--mantine-radius-md)",
				}}
			>
				<Title order={2} size="h1">
					Skills
				</Title>

				<Title order={3} mt="md">
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

				<Title order={3} mt="lg">
					FrameWork
				</Title>
				<Group>
					<React />
					<Nextjs />
					<TailwindCss />
				</Group>

				<Title order={3} mt="lg">
					Tools
				</Title>
				<Group>
					<VisualStudioCode />
					<Figma />
					<Slack />
				</Group>
			</Container>
		</Container>
	);
}
