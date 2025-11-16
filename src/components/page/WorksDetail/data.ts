export type ImageLinks = {
	workId: number;
	src: string;
	alt: string;
	title: string;
	href: string;
};

export type WorkDetailsTitle = {
	main: string;
	motive?: string;
	feature?: string;
	design?: string;
	doNot?: string;
};

export type WorkDetails = {
	workId: number;
	title: string;
	description: {
		main: string;
		motive?: string;
		feature?: string;
		design?: string;
		doNot?: string;
	};
};

export const imageLinksData: ImageLinks[] = [
	{
		workId: 1,
		src: "/portfolio.webp",
		alt: "portfolio",
		title: "ポートフォリオサイト",
		href: "https://port-three-vert.vercel.app",
	},
	{
		workId: 2,
		src: "/gallery.webp",
		alt: "gallery",
		title: "職業訓練作品の掲載ページ",
		href: "https://gallery-eta-blue.vercel.app",
	},
	{
		workId: 3,
		src: "/motion-tenki.webp",
		alt: "tenki",
		title: "お天気アプリ",
		href: "https://motion-tenki.vercel.app",
	},
	{
		workId: 4,
		src: "/microcms.webp",
		alt: "microcms",
		title: "架空コーポレートサイト",
		href: "https://headless-cms-lac.vercel.app",
	},
	{
		workId: 5,
		src: "/AI-fortune.webp",
		alt: "AI-fortune",
		title: "AI占いアプリ",
		href: "https://ai-fortune-zeta.vercel.app",
	},
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
				"Mantineの採用: Mantineのアコーディオンをナビゲーション用に改修し、シンプルで今どきにまとめました。",
			doNot:
				"データベース不使用: 今回は制作の時間的コストを考え、できるだけ短期間かつ簡潔にするため、データベースは使用せず配列で管理しました。",
		},
	},
	{
		workId: 2,
		title: "職業訓練作品の掲載ページ",
		description: {
			main: "訓練校で制作した作品をまとめたギャラリーページです。",
			motive:
				"今回の職業訓練ではコーディングだけでなくデザインや動画編集、マーケティング、AIツールの活用方法など幅広く学習したため、それらをまとめて掲載できるサイトを作成しました。",
			feature:
				"学習内容の幅広さから見やすさを考慮してフィルタリング機能を実装しました。",
			design:
				"幅広いことを学び、多くの人と関わることのできた訓練校をイメージし、カラフルでポップな動きのあるデザインにしました。動きは、mo.jsとmotionを使用しアニメーションを実装しました。",
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
		workId: 5,
		title: "AI占いアプリ",
		description: {
			main: "生年月日＋血液型を入力するとAIが占いをしてくれるアプリです。",
			motive:
				"生成AIのAPIを使用したアプリを作成してみたかったため、制作に至りました。",
			feature:
				"Gemini API: 生成AIにはGoogleのGemini APIを使用し、プロンプトにも工夫を凝らしました。",
			doNot:
				"デザイン: 今回は生成AIのAPIを試すことを主目的としたため、おおまかなデザインはAIに任せ、後から調整を加える形で実装しました。",
		},
	},
] as const;
