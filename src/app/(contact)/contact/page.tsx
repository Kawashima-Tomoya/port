import { Container, Text, Title } from "@mantine/core";
import ContactForm from "~/components/page/ContactForm";
import { BorderContainer } from "~/components/ui/StyledContainer/BorderContainer";

export default function Page() {
	return (
		<Container>
			<Title ta="center" p="lg">
				お問い合わせ
			</Title>
			<Text ta="center" pb="md">
				ご質問、ご相談は下記フォームよりお問い合わせください。
			</Text>
			<BorderContainer>
				<ContactForm />
			</BorderContainer>
		</Container>
	);
}
