import { Container, List, ListItem, Space, Text, Title } from "@mantine/core";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";

export default function Page() {
	return (
		<Container p="0">
			<Title order={1}>KAWASHIMA TOMOYA'S LAB</Title>
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
				<Title order={3}>コンセプト</Title>
				<Text mt="xs">
					まずは手を動かして何か作成することが重要だと考え、このサイトを作成しました。
					開発効率を考え、UIコンポーネントライブラリであるMantineを採用。
					デザインは事前に決めず、徐々に調整していきました。
				</Text>

				<Title order={3} mt="lg">
					使用技術
				</Title>
				<List size="sm" mt="xs">
					<ListItem>言語 : React.JS, TypeScript</ListItem>
					<ListItem>フレームワーク : Next.JS</ListItem>
					<ListItem>CSS : CSS modules</ListItem>
					<ListItem>UIコンポーネント : Mantine</ListItem>
					<ListItem>フォーマッター : Biome</ListItem>
				</List>
			</BorderContainer>

			<Space h="lg" />

			{/* <Title order={2}>To Be Updated...</Title>
			<BorderContainer>
				<Text>- お問い合わせフォームの実装</Text>
			</BorderContainer> */}
		</Container>
	);
}
