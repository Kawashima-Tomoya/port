import { Container, Title } from "@mantine/core";

export default function Page({ params }: { params: { workId: string } }) {
	return (
		<Container>
			<Title>ワークID: {params.workId}</Title>
			<p>詳細</p>
		</Container>
	);
}

export const runtime = "edge";
