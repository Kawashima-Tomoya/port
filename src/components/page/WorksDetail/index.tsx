import { Box, Text, Title } from "@mantine/core";
import type { WorkDetails } from "~/components/page/WorksDetail/data";

export function WorksDetail(props: WorkDetails) {
	return (
		<Box>
			<Title order={3}>{props.title}</Title>
			<Text mt="xs">{props.description}</Text>
		</Box>
	);
}
