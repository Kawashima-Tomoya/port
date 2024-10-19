"use client";

import { useFormState } from "react-dom";
import { createContactData } from "~/actions/contact";
import c from "./index.module.css";

const initialState = {
	status: "",
	message: "",
};

export default function ContactForm() {
	const [state, formAction] = useFormState(createContactData, initialState);
	if (state.status === "success") {
		return (
			<p className={c.success}>
				お問い合わせいただき、ありがとうございます。
				<br />
				お返事まで今しばらくお待ちください。
			</p>
		);
	}
	return (
		<>
			<form className={c.form} action={formAction}>
				<div className={c.horizontal}>
					<div className={c.item}>
						<label className={c.label} htmlFor="lastname">
							姓
						</label>
						<input
							className={c.textfield}
							type="text"
							id="lastname"
							name="lastname"
						/>
					</div>
					<div className={c.item}>
						<label className={c.label} htmlFor="firstname">
							名
						</label>
						<input
							className={c.textfield}
							type="text"
							id="firstname"
							name="firstname"
						/>
					</div>
				</div>
				<div className={c.item}>
					<label className={c.label} htmlFor="company">
						会社名
					</label>
					<input
						className={c.textfield}
						type="text"
						id="company"
						name="company"
					/>
				</div>
				<div className={c.item}>
					<label className={c.label} htmlFor="email">
						メールアドレス
					</label>
					<input className={c.textfield} type="text" id="email" name="email" />
				</div>
				<div className={c.item}>
					<label className={c.label} htmlFor="message">
						メッセージ
					</label>
					<textarea className={c.textarea} id="message" name="message" />
				</div>
				<div className={c.actions}>
					{state.status === "error" && (
						<p className={c.error}>{state.message}</p>
					)}
					<input type="submit" value="送信する" className={c.button} />
				</div>
			</form>
		</>
	);
}
