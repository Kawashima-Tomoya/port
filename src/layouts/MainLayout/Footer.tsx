import { CopyBtn } from "~/components/ui/CopyButton/CopyBtn";
import c from "./Footer.module.css";

import { Container, Group } from "@mantine/core";

// const links = [{ link: "#", label: "お問い合わせ" }] as const;

export function Footer() {
	return (
		<footer className={c.footer}>
			<Container className={c.inner} c="dimmed">
				<small>&copy;2024 - Copyright All Rights Reserved.</small>
				<Group className={c.links}>
					{/* お問い合わせはそのうちフォームにする */}
					<CopyBtn
						value="57kawashima@gmail.com"
						timeout={3000}
						variant="subtle"
						size="xs"
						copiedText="メールアドレスをコピーしました★"
						unCopiedText="お問い合わせ"
						copiedColor="var(--mantine-color-gray-5)"
						unCopiedColor="var(--mantine-color-dimmed)"
					/>
				</Group>
			</Container>
		</footer>
	);
}
