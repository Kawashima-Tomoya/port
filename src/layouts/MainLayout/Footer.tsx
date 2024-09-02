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
						copiedTxt="メールアドレスをコピーしました★"
						unCopiedTxt="お問い合わせ"
						defColor={[
							"var(--mantine-color-gray-4)",
							"var(--mantine-color-dimmed)",
						]}
					/>
					{/* biome-ignore lint/nursery/useJsxKeyInIterable: TODO: Biome側のエラーと思われるため、いったん無効化 */}
					{/* {links.map((link) => (
						<Anchor<"a"> c="dimmed" key={link.label} href={link.link} size="sm">
							{link.label}
						</Anchor>
					))} */}
				</Group>
			</Container>
		</footer>
	);
}
