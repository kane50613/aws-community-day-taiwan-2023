import { CTAButton } from "@/components/CTAButton";
import { FormEvent, useCallback, useRef } from "react";

export const EmailForm = () => {
	const email = useRef<HTMLInputElement>(null);

	const onSubmit = useCallback(
		(event: FormEvent) => {
			event.preventDefault();

			if (!email.current) return;

			const { value } = email.current;

			if (!/^\S+@\S+\.\S+$/.test(value)) return alert("錯誤的 Email");

			fetch(
				"https://pobtd17gf3.execute-api.us-east-1.amazonaws.com/Prod",
				{
					method: "POST",
					body: JSON.stringify({
						email: email.current.value,
					}),
				},
			)
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
		<form className="flex gap-2 w-full" onSubmit={onSubmit}>
			<label className="flex-grow">
				<input
					ref={email}
					className="bg-gray-200 block w-full h-full placeholder:text-sm rounded-lg px-4 outline-gray-700"
					type="email"
					required
					placeholder="電子郵件"
				/>
			</label>
			<CTAButton type="submit" />
		</form>
	);
};
