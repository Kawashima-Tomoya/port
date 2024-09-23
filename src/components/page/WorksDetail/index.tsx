import { Box, Text, Title } from "@mantine/core";
import type { WorkDetails } from "~/components/page/WorksDetail/data";

export function WorksDetail(props: WorkDetails) {
	return (
		<Box>
			<Title order={2}>{props.title}</Title>
			<Text>{props.description}</Text>
		</Box>
	);
}
