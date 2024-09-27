import { Avatar, Container, Group, Space, Text, Title } from "@mantine/core";
import { CopyBtn } from "~/components/ui/CopyButton/CopyBtn";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";
import { GithubSvg } from "~/icons/linkIcons/GithubSvg";
import {
	CSS,
	Figma,
	Github,
	HTML,
	Java,
	JavaScript,
	Mantine,
	Nextjs,
	React,
	Slack,
	TailwindCss,
	TypeScript,
	VisualStudioCode,
} from "~/icons/skillIcons/index";

export default function Page() {
	return (
		<Container p="0">
			<Title order={2}>Profile</Title>
			<BorderContainer>
				<Title order={3}>About Me</Title>
				<Group>
					<Avatar size="xl" radius="50%" src="/me.webp" alt="it's me" mt="xs" />
					<Text size="sm">
						北海道札幌市出身の26歳
						<br /> フロントエンドの技術が好きで独学で勉強してます！
						<br /> 最近はスニーカーを集めることにハマっています👟
						<br /> 映画やアニメも大好きで色々見てます。
					</Text>
				</Group>

				<Title order={3} mt="lg" mb="xs">
					Contact
				</Title>
				<CopyBtn
					value="57kawashima@gmail.com"
					timeout={3000}
					variant="light"
					copiedText="メールアドレスをコピーしました★"
					unCopiedText="メールはこちら！"
					copiedColor="cyan"
					unCopiedColor="var(--mantine-color-text)"
				/>
			</BorderContainer>

			<Space h="lg" />

			<Title order={2}>Skills</Title>
			<BorderContainer>
				<Title order={3}>Language</Title>
				<Group mt="xs">
					<HTML />
					<CSS />
					<JavaScript />
					<TypeScript />
					{/* <Nodejs /> */}
					<Java />
				</Group>

				<Title order={3} mt="lg">
					FrameWork
				</Title>
				<Group mt="xs">
					<React />
					<Nextjs />
					<TailwindCss />
					<Mantine />
				</Group>

				<Title order={3} mt="lg">
					Tools
				</Title>
				<Group mt="xs">
					<VisualStudioCode />
					<Figma />
					<Github />
					<Slack />
				</Group>
			</BorderContainer>
		</Container>
	);
}
