import {
	Container,
	Group,
	List,
	ListItem,
	Space,
	Text,
	Title,
} from "@mantine/core";
import { Stars } from "~/components/page/Stars/Stars";
import { CopyBtn } from "~/components/ui/CopyButton";
import { LinkButton } from "~/components/ui/LinkButton";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";

export default function Page() {
	return (
		<Container p="0">
			<Title order={1}>KAWASHIMA Portfolio</Title>
			<Space h="lg" />
			<Text>
				こんにちは。このサイトはカワシマのポートフォリオサイトです。
				<br />
				勉強の過程で作成した制作物や、2025年5月~10月の間で通っていた訓練校で作成した作品課題、身につけたスキルをまとめています。
				ぜひご覧ください。
			</Text>

			<Space h="lg" />

			<BorderContainer>
				<Title order={2} mb="xs">
					Quick facts
				</Title>
				<Text>希望職種：フロントエンドエンジニア（フルタイム）</Text>
				<Text>経験：React / Next.js / TypeScript（個人開発中心）</Text>
				<Text>
					主要実績：ポートフォリオ内「AI占い」「ポートフォリオサイト」（下にリンク）{" "}
				</Text>
			</BorderContainer>

			<Space h="lg" />

			<BorderContainer>
				<Title order={2} mb="xs">
					Contact
				</Title>
				<Group>
					<LinkButton href="/contact" size="md" variant="filled">
						お問い合わせフォーム
					</LinkButton>
					<CopyBtn
						value="57kawashima@gmail.com"
						timeout={3000}
						variant="light"
						copiedText="メールアドレスをコピーしました★"
						unCopiedText="メールはこちら！"
						copiedColor="var(--mantine-color-red-text)"
						unCopiedColor="var(--mantine-color-text)"
					/>
				</Group>
			</BorderContainer>

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
