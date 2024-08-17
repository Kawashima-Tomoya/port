import { Container, Text, Title } from "@mantine/core";

export default function Page() {
	return (
		<Container size="md">
			<Title order={1} size="h2">
				Top
			</Title>
			<Text>このサイトについて適当に動く文字</Text>
			<Text>なんか動くやつ</Text>
		</Container>
	);
}
