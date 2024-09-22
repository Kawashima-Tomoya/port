"use client";

import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { ReactNode } from "react";
import type React from "react";
import { useViewTransitionRouter } from "~/hooks/useViewTransitionRouter";

interface TransitionLinkProps extends LinkProps {
	children: ReactNode;
}

export function TransitionLink({
	children,
	href,
	...props
}: TransitionLinkProps) {
	const router = useViewTransitionRouter();

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		router.push(href.toString());
	};

	return (
		<NextLink {...props} href={href} onClick={handleLinkClick}>
			{children}
		</NextLink>
	);
}
