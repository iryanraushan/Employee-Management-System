import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import NavBar from "./components/NavBar";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route index element={<EmployeeList />}></Route>
					<Route path="/" elements={<EmployeeList />}></Route>
					<Route
						path="/EmployeeList"
						element={<EmployeeList />}
					></Route>
					<Route
						path="/AddEmployee"
						element={<AddEmployee />}
					></Route>
					<Route
						path="/editEmployee/:id"
						element={<UpdateEmployee />}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
