export type ImageLinks = {
	workId: number;
	src: string;
	alt: string;
	title: string;
	href: string;
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
		href: "https://port-three-vert.vercel.app/",
	},
	{
		workId: 2,
		src: "/microcms.jpeg",
		alt: "microcms",
		title: "架空コーポレートサイト",
		href: "",
	},
	{
		workId: 3,
		src: "/instasave.JPEG",
		alt: "instasave3",
		title: "テスト3",
		href: "",
	},
] as const;

export const workDetails: WorkDetails[] = [
	{
		workId: 1,
		title: "ポートフォリオサイト",
		description:
			"ドキュメントを読んだり動画視聴やコードを書き写すだけではなく、まず手を動かして何かを作るという目的で制作に至りました。同時に事前の設計が大切であることも実感しました。",
	},
	{
		workId: 2,
		title: "microCMSを使用した架空コーポレートサイト",
		description:
			"「Next.js+ヘッドレスCMSではじめる!かんたんモダンWebサイト制作入門」という本を参考に、独自でTailwindCSSとBiomejsを使用して制作しました。ただコードを書き写すのではなく、まず日本語をよみ自分なりのコード書いて、その後修正する方式で実装しました。",
	},
	{ workId: 3, title: "test3", description: "test3" },
] as const;
