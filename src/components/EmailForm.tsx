import { SubscribeButton } from "@/components/SubscribeButton";
import { FormEvent, useCallback, useRef } from "react";

export const EmailForm = () => {
	const email = useRef<HTMLInputElement>(null);

	const onSubmit = useCallback(
		(event: FormEvent) => {
			event.preventDefault();

			if (!email.current) return;

			const { value } = email.current;

			if (!/^\S+@\S+\.\S+$/.test(value)) return alert("錯誤的 Email");

			fetch("https://pobtd17gf3.execute-api.us-east-1.amazonaws.com/Prod", {
				method: "POST",
				body: JSON.stringify({
					email: email.current.value,
				}),
			})
				.then((response) => {
					if (!response.ok)
						alert(`訂閱電子報發生了錯誤: ${response.statusText}`);
					else alert("成功訂閱電子報");
				})
				.catch((e) => {
					alert(`送出請求時發生了錯誤: ${e}`);
				});
		},
		[email.current],
	);

	return (
		<form className="flex w-full gap-4" onSubmit={onSubmit}>
			<label className="flex-grow">
				<input
					ref={email}
					className="block h-full w-full rounded-lg bg-gray-200 px-4 outline-gray-700 placeholder:text-sm"
					type="email"
					required
					placeholder="電子郵件"
				/>
			</label>
			<SubscribeButton type="submit" />
		</form>
	);
};
