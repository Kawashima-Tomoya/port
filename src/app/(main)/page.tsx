import { Container, List, ListItem, Space, Text, Title } from "@mantine/core";
import SplitText from "~/Animations/AnimatedContainer/SplitText/SplitText";
// import { SplitText } from "~/components/page/SplitText";
import { Stars } from "~/components/page/Stars/Stars";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";

export default function Page() {
	return (
		<Container p="0">
			<SplitText
				text="KAWASHIMA TOMOYA'S LAB"
				delay={80}
				animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
				animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
				// easing="easeOutCubic"
				threshold={0.2}
			/>
			{/* <Title order={1}>KAWASHIMA TOMOYA'S LAB</Title> */}
			<Space h="lg" />
			<Text>
				こんにちは。このサイトはKawashimaのポートフォリオサイトです。
				<br />
				勉強の過程で作成した制作物、身につけたスキルをまとめています。
				<br />
				私のことをもっと深く知ってほしいと思って作りました。
				<br />
			</Text>
			<Space h="lg" />
			<Title order={2}>About This Site</Title>
			<BorderContainer>
				<Title order={3}>使用技術</Title>
				<List size="sm" mt="xs">
					<ListItem>言語 : React.JS, TypeScript</ListItem>
					<ListItem>フレームワーク : Next.JS</ListItem>
					<ListItem>CSS : CSS modules</ListItem>
					<ListItem>UIコンポーネント : Mantine</ListItem>
					<ListItem>フォーマッター : Biome</ListItem>
				</List>
			</BorderContainer>
			<Stars />
		</Container>
	);
}
