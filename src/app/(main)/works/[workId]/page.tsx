import { Button, Container, Text } from "@mantine/core";
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
			<Button className={c.button} size="xs" radius="xl">
				<Link href="/works" className={c.link}>
					⇦ 一覧へ
				</Link>
			</Button>

			<Image
				src={imageLink?.src ?? "/no-image.png"}
				alt={imageLink?.alt ?? ""}
				fill={true}
				className={c.image}
				priority={true}
			/>
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
