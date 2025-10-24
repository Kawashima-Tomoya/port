import { Container, Space, Text, Title } from "@mantine/core";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";
import { LinkButton } from "~/components/ui/LinkButton";
import c from "./not-found.module.css";

export default function NotFound() {
	return (
		<Container className={c.container}>
			<BorderContainer className={c.content}>
				<Title order={1} className={c.title}>
					404
				</Title>
				<Space h="md" />
				<Text size="lg" ta="center">
					お探しのページが見つかりませんでした
				</Text>
				<Space h="xs" />
				<Text size="sm" ta="center" c="dimmed">
					ページが削除されたか、URLが間違っている可能性があります
				</Text>
				<Space h="xl" />
				<div className={c.buttonContainer}>
					<LinkButton href="/" variant="light" size="md">
						トップページへ戻る
					</LinkButton>
					<LinkButton href="/works" variant="outline" size="md">
						作品一覧を見る
					</LinkButton>
				</div>
			</BorderContainer>
		</Container>
	);
}
