"use client";
import dynamic from "next/dynamic";

export const SplitText = dynamic(
	() => import("~/Animations/AnimatedContainer/SplitText/SplitText"),
	{
		ssr: false,
	},
);
