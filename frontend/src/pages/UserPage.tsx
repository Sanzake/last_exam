
import { useNavigate } from 'react-router';
import useFetchGet from '../hooks/useFetchGet'
import LogoutButton from '../components/LogoutButton/LogoutButton';


const url = "http://localhost:8765/user"

export default function UserPage() {
    const auth_token = localStorage.getItem("auth_token")

    const header = {"Authorization": auth_token}

    const {data, error, loading} = useFetchGet(url, header)
    const navigate = useNavigate()

    if (!auth_token) navigate("/login")
    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
    if (!data) return <>nodata</>

    return (
        <div>
            <p>Profile</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <LogoutButton />
        </div>
    )
}
