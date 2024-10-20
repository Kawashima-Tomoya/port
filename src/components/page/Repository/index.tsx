import { Box, Text, Title } from "@mantine/core";
import type { Repositories } from "./data";

export function Repository(props: Repositories) {
	return (
		<Box>
			<Title order={3}>repository</Title>
			<Text
				component="a"
				href={props.href}
				target="_blank"
				rel="noopener noreferrer"
				c={"var(--mantine-color-anchor)"}
			>
				GitHub repositoryへ ⇨
			</Text>
		</Box>
	);
}
