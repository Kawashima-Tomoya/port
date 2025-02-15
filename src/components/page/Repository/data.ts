export type Repositories = {
	workId: number;
	href: string;
};

export const repositoriesData: Repositories[] = [
	{
		workId: 1,
		href: "https://github.com/Kawashima-Tomoya/port",
	},
	{
		workId: 2,
		href: "https://github.com/Kawashima-Tomoya/headless-cms",
	},
	{
		workId: 3,
		href: "https://github.com/Kawashima-Tomoya/motion-tenki",
	},
	{
		workId: 4,
		href: "https://github.com/Kawashima-Tomoya/Blog",
	},
	{
		workId: 5,
		href: "https://github.com/Kawashima-Tomoya/",
	},
] as const;
