import { Anchor, Button, Container, Space, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { WorksDetail } from "~/components/page/WorksDetail";
import { UsedLanguageIcon } from "~/components/page/WorksDetail/UsedLanguageIcons";
import { imageLinks, workDetails } from "~/components/page/WorksDetail/data";
import c from "./index.module.css";

type Props = {
	params: {
		workId: string;
	};
};

export default function Page(props: Props) {
	const workId = Number(props.params.workId);

	const imageLink = imageLinks.find((link) => link.workId === workId);
	const workDetail = workDetails.find(
		(workDetail) => workDetail.workId === workId,
	);

	if (!workDetail) {
		return <Text>詳細が見つかりませんでした。</Text>;
	}

	return (
		<Container>
			<Button
				component={Link}
				href="/works"
				className={c.button}
				size="xs"
				radius="xl"
			>
				⇦ 一覧へ
			</Button>
			<Space h="xs" />
			<Anchor href={imageLink?.href} target="_blank" rel="noopener noreferrer">
				<Image
					src={imageLink?.src ?? "/no-image.png"}
					alt={imageLink?.alt ?? ""}
					fill={true}
					className={c.image}
					priority={true}
				/>
			</Anchor>
			<Space h="xs" />
			<WorksDetail
				workId={workId}
				title={workDetail.title}
				description={workDetail.description}
			/>

			<UsedLanguageIcon id={workId} />
		</Container>
	);
}

export const runtime = "edge";
