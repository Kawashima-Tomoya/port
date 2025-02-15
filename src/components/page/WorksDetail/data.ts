export type ImageLinks = {
	workId: number;
	src: string;
	alt: string;
	title: string;
	href: string;
};

export type WorkDetailsTitle = {
	main: string;
	motive: string;
	feature: string;
	design?: string;
	doNot: string;
};

export type WorkDetails = {
	workId: number;
	title: string;
	description: {
		main: string;
		motive: string;
		feature: string;
		design?: string;
		doNot: string;
	};
};

export const imageLinksData: ImageLinks[] = [
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
		src: "/motion-tenki.webp",
		alt: "tenki",
		title: "お天気アプリ",
		href: "https://motion-tenki.vercel.app/",
	},
	{
		workId: 4,
		src: "/Blog.webp",
		alt: "blog",
		title: "架空Blog",
		href: "https://kawashima-tomoya.github.io/Blog/",
	},

	// {
	// 	workId: 5,
	// 	src: "/Blog.webp",
	// 	alt: "timer",
	// 	title: "",
	// 	href: "https://kawashima-tomoya.github.io/timer/",
	// },
] as const;

export const workDetailsTitleData: WorkDetailsTitle[] = [
	{
		main: "",
		motive: "【作成動機】",
		feature: "【特徴・こだわり】",
		design: "【デザイン】",
		doNot: "【やらなかったこと】",
	},
];

export const workDetailsData: WorkDetails[] = [
	{
		workId: 1,
		title: "ポートフォリオサイト",
		description: {
			main: "現在閲覧していただいてる当サイトです。",
			motive:
				"自分で手を動かしイチから何かを完成させることが大切だと思い作成に至りました。",
			feature:
				"Biomeの採用: フォーマッターはESLint+Prettierではなく、セットアップが簡単で高速さ話題のBiomeを採用しました。",
			design:
				"Mantineの採用: Mantineのアコーディオンをナビゲーション用に改修し、シンプルにまとめました。",
			doNot:
				"データベース不使用: 今回は制作の時間的コストを考え、できるだけ短期間かつ簡潔にするため、データベースは使用せず配列で管理しました。",
		},
	},
	{
		workId: 2,
		title: "microCMSを使用した架空コーポレートサイト",
		description: {
			main: "「Next.js+ヘッドレスCMSではじめる!かんたんモダンWebサイト制作入門」という本を参考に、独自でTailwindCSSとBiomeを使用して制作しました。ただコードを書き写すのではなく、まず解説を読み自分なりのコードを書いて、その後修正する方式で実装しました。",
			motive:
				"書籍で基礎から丁寧に学習したいと思い制作に至りました。また、Web制作の分野で流行りつつあるHeadlessCMSについても学習できるものを選択しました。",
			feature: "書籍の内容を忠実に再現し実装しました。",
			design: "デザインもそのまま再現しました。",
			doNot:
				"機能の追加: 基礎をしっかり理解することを重視し、機能の追加やカスタマイズは行いませんでした。",
		},
	},
	{
		workId: 3,
		title: "お天気アプリ",
		description: {
			main: "OpenWeatherMap APIを使用して、都市名または地域名で検索することで、その地域の天気情報を取得できるアプリです。",
			motive:
				"ServerActionsの学習するために作成に至りました。さらに生成AI（Vercel v0）を試すためにUI部分をプロンプトで生成し、その後微調整しました。",
			feature:
				"UI/UX : ユーザーが迷わないように検索フォームをトップに配置し、検索結果を後から表示することで使用感を良くしました。また、詳細情報を上部に大きく表示することで見やすさにこだわりました。",
			design:
				"グラスモーフィズム: デザインはグラスモーフィズムを取り入れ、より天気を感じられるデザインにしました。",
			doNot:
				"位置情報の取得: 他の地域でも検索できるように「Geocoding API」を使用して都市名または地域名で検索する方法を採用しました。zodでのバリデーションは実装予定です。",
		},
	},
	{
		workId: 4,
		title: "架空ブログサイト",
		description: {
			main: "昔に模写コーディングで制作したブログサイトです。",
			motive:
				"HTML・CSSの基礎学習とデザインの勉強を兼ねて、模写コーディングで制作しました。",
			feature:
				"掲載するか迷いましたが、コンテンツ量が少なく、寂しかったので穴埋め要員になってもらいました。",
			design: "2カラムレイアウトでレスポンシブ対応もしています。",
			doNot:
				"jsの実装: 当時はjsの学習が浅く、優先順位を考慮してjsの実装は行っていません。",
		},
	},

	// {
	// 	workId: 5,
	// 	title: "タイマーアプリ",
	// 	description: {
	// 		main: "現在閲覧していただいてる当サイトです。",
	// 		motive:
	// 			"自分で手を動かしイチから何かを完成させることが大切だと思い作成に至りました。",
	// 		feature: "",
	// 		doNot:
	// 			"今回は制作のコストを考え、できるだけ短期間かつ簡潔にするため、データベースは使用せず配列で管理しました。",
	// 	},
	// },
] as const;
