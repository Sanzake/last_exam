import { useRef } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetchPost";

const url = "http://localhost:8765/register";

export default function LoginPage() {
	const { execute, data, error, loading } = useFetch(url);

	const navigate = useNavigate();

	const usernameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const handleClick = async () => {
		const body = {
			username: usernameRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};
		const res = await execute(body);
		console.log("registerPage", res);
        if (data) navigate("/login")
        return res
	};

    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;

	return (
		<div className="registerPage">
			<input type="text" placeholder="username" ref={usernameRef} />
			<input type="text" placeholder="email" ref={emailRef} />
			<input type="text" placeholder="password" ref={passwordRef} />
			<button type="button" onClick={handleClick}>send</button>
		</div>
	);
}
