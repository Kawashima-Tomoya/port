import { Container, List, ListItem, Space, Text, Title } from "@mantine/core";
import { ClientSplitText } from "~/components/page/SplitText";
import { Stars } from "~/components/page/Stars/Stars";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";

export default function Page() {
	return (
		<Container p="0">
			<ClientSplitText />
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
