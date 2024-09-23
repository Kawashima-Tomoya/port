import { Text, Title } from "@mantine/core";
import { useMemo } from "react";
import { Java, Nextjs, React } from "~/icons/ImportSkillIcons";

type Props = {
	id: number;
};

export function UsedLanguageIcon(props: Props) {
	const iconList = useMemo(() => {
		switch (props.id) {
			case 1:
				return <React />;
			case 2:
				return <Nextjs />;
			case 3:
				return <Java />;
			default:
				return <Text>使用言語なし</Text>;
		}
	}, [props.id]);

	return (
		<div>
			<Title order={3} mt="lg">
				使用言語
			</Title>
			<div>{iconList}</div>
		</div>
	);
}
