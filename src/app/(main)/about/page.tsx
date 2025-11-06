import {
	Avatar,
	Container,
	Flex,
	Group,
	Space,
	Text,
	Title,
} from "@mantine/core";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";
import {
	CSS,
	Figma,
	Github,
	HTML,
	Illustrator,
	Java,
	JavaScript,
	Mantine,
	Nextjs,
	Photoshop,
	Premiere,
	React,
	Shadcn,
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
				<Flex gap="xl" align="center" py="xs" mb="sm">
					<Avatar size="xl" radius="50%" src="/me.webp" alt="it's me" />
					<Text>
						出身：北海道札幌市
						<br />
						年齢：27歳
						<br />
						性別：男性
					</Text>
				</Flex>
				<Group>
					<Title order={3}>About Me</Title>
					<Text>
						フロントエンドの技術に関心があり、オンラインサロンに加入するなどして独学で日々学習を続けています。
						<br />
						訓練校で学習したデザインの知識も活かして、UI/UXに配慮した使いやすいサイト作りを心がけています。
					</Text>
					<Title order={4}>現在</Title>
					<Text>
						「東京デジタルアカデミー 若手エンジニアコース
						リスキリングプログラム」を受講しており、「アプリ開発分野（React
						）」のカリキュラムをこなし、スキルアップを図っています。
					</Text>
					<Title order={4}>趣味</Title>
					<Text>
						服やスニーカーが好きで、毎週リリースされる新作は必ずチェックしています。
						ゲームやアニメなどのサブカルチャーも好きで、家でのんびり過ごすことが多いです。
						最近は筋トレを始め、日々ジムに通っています！💪
					</Text>
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
					<Shadcn />
				</Group>

				<Title order={3} mt="lg">
					Tools
				</Title>
				<Group mt="xs">
					<VisualStudioCode />
					<Photoshop />
					<Illustrator />
					<Figma />
					<Premiere />
					<Github />
					<Slack />
				</Group>
			</BorderContainer>
		</Container>
	);
}
