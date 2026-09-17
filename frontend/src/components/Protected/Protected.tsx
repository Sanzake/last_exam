import type React from "react";
import { useNavigate } from "react-router";

interface ProtectedProps {
	children: React.ReactElement;
}

export default function Protected({ children }: ProtectedProps) {
	const auth_token = localStorage.getItem("auth_token");
	const navigate = useNavigate();
	if (!auth_token) navigate("/login");

	return children;
}
