import { Avatar, Container, Group, Space, Text, Title } from "@mantine/core";
import { CopyBtn } from "~/components/ui/CopyButton";
import { LinkButton } from "~/components/ui/LinkButton";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";
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
				<Title order={3} mb="xs">
					About Me
				</Title>
				<Group>
					<Avatar size="xl" radius="50%" src="/me.webp" alt="it's me" />
					<Text>
						北海道札幌市出身の26歳
						<br /> フロントエンドの技術が好きで独学で勉強してます！
						<br /> 最近はスニーカーを集めることにハマっています👟
						<br /> 映画やアニメも大好きで色々見てます。
					</Text>
				</Group>

				<Space h="lg" />

				<Title order={3} mb="xs">
					Contact
				</Title>
				<Group>
					<CopyBtn
						value="57kawashima@gmail.com"
						timeout={3000}
						variant="light"
						copiedText="メールアドレスをコピーしました★"
						unCopiedText="メールはこちら！"
						copiedColor="var(--mantine-color-red-text)"
						unCopiedColor="var(--mantine-color-text)"
					/>
					<LinkButton href="/contact">お問い合わせフォーム</LinkButton>
				</Group>
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
