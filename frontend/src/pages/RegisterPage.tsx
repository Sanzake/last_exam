import { useRef } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetchPost";

const url = "http://localhost:8765/register";

export default function LoginPage() {
	const { execute, error, loading } = useFetch(url);

	const navigate = useNavigate();

	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleClick = async () => {
		const body = {
			username: usernameRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};
		const res = await execute(body);
        
        if (res.success === false) return
        navigate("/login")
        return res
	};

    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;


	return (
		<div className="registerPage">
            <h1>SignUp</h1>
			<input type="text" className="inputField" placeholder="username" ref={usernameRef} />
			<input type="text" className="inputField" placeholder="email" ref={emailRef} />
			<input type="text" className="inputField" placeholder="password" ref={passwordRef} />
			<button type="button" className="inputButton" onClick={handleClick}>send</button>
		</div>
	);
}
