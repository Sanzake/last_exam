import "./UserPage.css";
import { useNavigate } from "react-router";
import LogoutButton from "../components/LogoutButton/LogoutButton";
import useFetchGet from "../hooks/useFetchGet";

const url = "http://localhost:8765/user";

export default function UserPage() {
	const auth_token = localStorage.getItem("auth_token");

	const header = { Authorization: auth_token };

    type Data = {
        username: string,
        email: string
    }

	const { data, error, loading } = useFetchGet<Data>(url, header);
	const navigate = useNavigate();

	if (!auth_token) navigate("/login");
	if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
	if (!data) return <>nodata</>;

	return (
		<div className="userPage">
			<h1>Profile</h1>
			<p>Username - {data.username}</p>
			<p>Email - {data.email}</p>
			<LogoutButton />
		</div>
	);
}
