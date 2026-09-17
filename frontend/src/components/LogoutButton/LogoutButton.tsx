import { useNavigate } from 'react-router'

export default function LogoutButton() {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.setItem("auth_token", "")
        navigate("/login")
    }
    return (
        <div>
            <button type='button' onClick={handleClick}>Logout</button>
        </div>
    ) 
}
