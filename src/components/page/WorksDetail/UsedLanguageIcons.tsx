import { Group, Text, Title } from "@mantine/core";
import { useMemo } from "react";
import { Biomejs } from "~/icons/skillIcons/BiomejsSvg";
import {
	CSS,
	HTML,
	Mantine,
	Nextjs,
	React,
	TailwindCss,
	TypeScript,
} from "~/icons/skillIcons/index";

type Props = {
	id: number;
};

export function UsedLanguageIcon(props: Props) {
	const iconList = useMemo(() => {
		switch (props.id) {
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
			// case 3:
			// 	return (
			// 		<Group mt="xs">
			// 			<Java />
			// 		</Group>
			// 	);
			default:
				return <Text>使用言語なし</Text>;
		}
	}, [props.id]);

	return (
		<div>
			<Title order={3} mt="lg">
				使用言語
			</Title>
			{iconList}
		</div>
	);
}
