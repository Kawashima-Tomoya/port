import { Group, Text, Title } from "@mantine/core";
import { useMemo } from "react";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";
import {
	Biomejs,
	CSS,
	HTML,
	Mantine,
	Nextjs,
	React,
	Sass,
	TailwindCss,
	TypeScript,
} from "~/icons/skillIcons/index";

type Props = {
	workId: number;
};

export function UsedLanguageIcon(props: Props) {
	const iconList = useMemo(() => {
		switch (props.workId) {
			case 1:
				return (
					<Group mt="xs">
						<HTML />
						<CSS />
						<Mantine />
						<TypeScript />
						<React />
						<Nextjs />
						<Biomejs />
					</Group>
				);
			case 2:
				return (
					<Group mt="xs">
						<HTML />
						<TailwindCss />
						<TypeScript />
						<React />
						<Nextjs />
						<Biomejs />
					</Group>
				);
			case 3:
				return (
					<Group mt="xs">
						<HTML />
						<Sass />
					</Group>
				);
			default:
				return <Text>使用言語なし</Text>;
		}
	}, [props.workId]);

	return (
		<BorderContainer>
			<Title order={3}>使用言語</Title>
			{iconList}
		</BorderContainer>
	);
}
