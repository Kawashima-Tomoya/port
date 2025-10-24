import { Box, Text, Title } from "@mantine/core";
import { type WorkDetails, workDetailsTitleData } from "./data";

type DescriptionKey = keyof WorkDetails["description"];

export function WorksDetail({ title, description }: WorkDetails) {
	const descriptionKeys: DescriptionKey[] = [
		"main",
		"motive",
		"feature",
		"design",
		"doNot",
	];

	return (
		<Box>
			<Title order={2}>{title}</Title>
			{/* biome-ignore lint/nursery/useJsxKeyInIterable: <explanation> */}
			{descriptionKeys.map((key) => {
				if (!description[key]) return null;

				return (
					<div>
						<Title key={key} order={4} mt="sm">
							{workDetailsTitleData[0][key]}
						</Title>
						<Text key={key} mb="sm">
							{description[key]}
						</Text>
					</div>
				);
			})}
		</Box>
	);
}
