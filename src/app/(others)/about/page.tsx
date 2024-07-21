import { Container, MantineProvider, Title } from "@mantine/core";

export default function Page() {
	return (
		<MantineProvider>
			<Container size="md">
				<Title order={1} size="h2">
					Skills
				</Title>
			</Container>
		</MantineProvider>
	);
}
