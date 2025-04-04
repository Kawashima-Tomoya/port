"use client";
import { useEffect, useState } from "react";
import { SplitText } from "~/Animations/TextAnimations/SplitText/SplitText";

export function ClientSplitText() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div style={{ visibility: isClient ? "visible" : "hidden" }}>
			<SplitText
				text="KAWASHIMA TOMOYA'S LAB"
				delay={100}
				animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
				animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
			/>
		</div>
	);
}
