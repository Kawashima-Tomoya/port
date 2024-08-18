"use client";

import { Button, CopyButton } from "@mantine/core";

type CopyBtnProps = {
	value: string;
	timeout: number;
	variant?: string;
	copiedTxt: string;
	unCopiedTxt: string;
	defColor?: string[];
	size?: string;
};

export function CopyBtn({
	value,
	timeout,
	variant,
	copiedTxt,
	unCopiedTxt,
	defColor,
	size,
}: CopyBtnProps) {
	return (
		<CopyButton value={value} timeout={timeout}>
			{({ copied, copy }) => (
				<Button
					variant={variant}
					color={copied ? defColor?.[0] : defColor?.[1]}
					size={size}
					onClick={copy}
				>
					{copied ? copiedTxt : unCopiedTxt}
				</Button>
			)}
		</CopyButton>
	);
}
