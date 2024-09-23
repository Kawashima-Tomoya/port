export type ImageLinks = {
	workId: number;
	src: string;
	alt: string;
	title: string;
};

export type WorkDetails = {
	workId: number;
	title: string;
	description: string;
};

export const imageLinks: ImageLinks[] = [
	{
		workId: 1,
		src: "/portfolio.jpeg",
		alt: "portfolio",
		title: "ポートフォリオサイト",
	},
	{
		workId: 2,
		src: "/microcms.jpeg",
		alt: "microcms",
		title: "架空コーポレートサイト",
	},
	{ workId: 3, src: "/instasave.JPEG", alt: "instasave3", title: "テスト3" },
] as const;

export const workDetails: WorkDetails[] = [
	{ workId: 1, title: "ポートフォリオサイト", description: "test1" },
	{
		workId: 2,
		title: "microCMSを使用した架空コーポレートサイト",
		description: "test2",
	},
	{ workId: 3, title: "test3", description: "test3" },
] as const;
