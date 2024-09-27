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
		src: "/portfolio.webp",
		alt: "portfolio",
		title: "ポートフォリオサイト",
		href: "https://port-three-vert.vercel.app/",
	},
	{
		workId: 2,
		src: "/microcms.webp",
		alt: "microcms",
		title: "架空コーポレートサイト",
		href: "https://headless-cms-lac.vercel.app",
	},
	{
		workId: 3,
		src: "/Blog.webp",
		alt: "blog",
		title: "架空Blog",
		href: "https://kawashima-tomoya.github.io/Blog/",
	},
] as const;

export const workDetails: WorkDetails[] = [
	{
		workId: 1,
		title: "ポートフォリオサイト",
		description:
			"現在閲覧していただいてる当サイトです。ドキュメントを読んだり動画視聴やコードを書き写すだけではなく、まず手を動かして何かを作ろうという目的で制作に至りました。修正や手戻りが発生し、事前の設計が大切であることも実感しました。",
	},
	{
		workId: 2,
		title: "microCMSを使用した架空コーポレートサイト",
		description:
			"「Next.js+ヘッドレスCMSではじめる!かんたんモダンWebサイト制作入門」という本を参考に、独自でTailwindCSSとBiomejsを使用して制作しました。ただコードを書き写すのではなく、まず日本語をよみ自分なりのコード書いて、その後修正する方式で実装しました。",
	},
	{
		workId: 3,
		title: "架空ブログサイト",
		description:
			"昔に模写コーディングで制作したブログサイトです。掲載するか迷いましたが、コンテンツ量が少なく、寂しかったので穴埋め要員になってもらいました。",
	},
] as const;
