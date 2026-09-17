import { Route, Routes } from "react-router";
import Protected from "./components/Protected/Protected";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route
				path="/user"
				element={
					<Protected>
						<UserPage />
					</Protected>
				}
			/>

			<Route path="*" element={<>404 - Not Found!</>} />
		</Routes>
	);
}

export default App;
