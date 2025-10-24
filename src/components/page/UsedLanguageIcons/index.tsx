import { Group, Text, Title } from "@mantine/core";
import { useMemo } from "react";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";
import {
	Biomejs,
	CSS,
	ESLint,
	Figma,
	Gemini,
	Mantine,
	Nextjs,
	React,
	Shadcn,
	TailwindCss,
	TypeScript,
	V0,
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
						<TypeScript />
						<React />
						<Nextjs />
						<CSS />
						<Mantine />
						<Biomejs />
					</Group>
				);
			case 2:
				return (
					<Group mt="xs">
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
						<TypeScript />
						<React />
						<Nextjs />
						<TailwindCss />
						<V0 />
						<ESLint />
					</Group>
				);
			case 4:
				return (
					<Group mt="xs">
						<TypeScript />
						<React />
						<Nextjs />
						<TailwindCss />
						<Figma />
					</Group>
				);

			case 5:
				return (
					<Group mt="xs">
						<TypeScript />
						<React />
						<Nextjs />
						<TailwindCss />
						<Shadcn />
						<Gemini />
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
