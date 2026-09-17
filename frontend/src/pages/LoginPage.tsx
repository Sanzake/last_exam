import { useRef } from "react";
import { NavLink, useNavigate } from "react-router";
import "./LoginPage.css";
import useFetch from "../hooks/useFetchPost.tsx";

const url = "http://localhost:8765/login";

export default function LoginPage() {
	const { execute, error, loading } = useFetch(url);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleClick = async () => {
		const body = {
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};

		const res = await execute(body);
		console.log(res);

        if (res.success === false) return 

		
		localStorage.setItem("auth_token", res);
		navigate("/user");
		
	};

	if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;

	return (
		<div className="loginPage">
			<h1>Sign In</h1>
			<input type="text" placeholder="email" ref={emailRef} />
			<input type="text" placeholder="password" ref={passwordRef} />
			<button type="button" onClick={handleClick}>
				send
			</button>
			<NavLink to="/register">
				Dont have an account? Click here to SignUp...
			</NavLink>
		</div>
	);
}
