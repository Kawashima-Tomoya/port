import { Anchor, Container, Space } from "@mantine/core";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Repository } from "~/components/page/Repository";
import { repositoriesData } from "~/components/page/Repository/data";
import { UsedLanguageIcon } from "~/components/page/UsedLanguageIcons";
import { WorksDetail } from "~/components/page/WorksDetail";
import {
	imageLinksData,
	workDetailsData,
} from "~/components/page/WorksDetail/data";
import { LinkButton } from "~/components/ui/LinkButton";
import c from "./index.module.css";

type Props = {
	params: {
		workId: string | number;
	};
};

export default function Page(props: Props) {
	const workId = Number(props.params.workId);

	if (Number.isNaN(workId)) {
		notFound();
	}

	const imageLink = imageLinksData.find((link) => link.workId === workId);
	const workDetail = workDetailsData.find(
		(workDetail) => workDetail.workId === workId,
	);
	const repository = repositoriesData.find((href) => href.workId === workId);

	if (!workDetail || !imageLink) {
		notFound();
	}

	return (
		<Container>
			<LinkButton href="/works" size="xs" radius="xl">
				⇦ 一覧へ
			</LinkButton>
			<Space h="xs" />
			<Anchor href={imageLink.href} target="_blank" rel="noopener noreferrer">
				<Image
					src={imageLink.src}
					alt={imageLink.alt}
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

			<Space h="md" />

			<UsedLanguageIcon workId={workId} />

			<Space h="md" />

			<Repository workId={workId} href={repository?.href ?? ""} />
		</Container>
	);
}

export const runtime = "edge";
