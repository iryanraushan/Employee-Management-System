import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../servises/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await EmployeeService.getEmployee();
				setEmployees(response.data);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	const deleteEmployee = (e, id) => {
		e.preventDefault();
		EmployeeService.deleteEmployee(id).then((res) => {
			if (employees) {
				setEmployees((prevElement) => {
					return prevElement.filter((employee) => employee.id !== id);
				});
			}
		});
	};

	return (
		<div className="container mx-auto my-8 tracking-wider">
			<div className="h-14 ">
				<button
					onClick={() => navigate("/AddEmployee")}
					className="bg-gray-500 rounded-xl px-4 py-3 text-white text-xl hover:bg-gray-700"
				>
					Add Employee
				</button>
			</div>

			<div className="flex shadow  text-xl shadow-slate-300  mt-5">
				<table className="min-w-full">
					<thead className="bg-gray-200">
						<tr>
							<th className="text-left font-medium text-black-400 uppercase py-4 px-3 tracking-wider">
								First Name
							</th>
							<th className="text-left font-medium text-black-400 uppercase  py-4 px-3 tracking-wider ">
								Last Name
							</th>
							<th className="text-left font-medium text-black-400 uppercase py-4 px-3 tracking-wider">
								Email ID
							</th>
							<th className="text-left font-medium text-black-400 uppercase  py-4 px-3 tracking-wider">
								Contact
							</th>
							<th className="text-right font-medium text-black-400 uppercase  py-4 px-3 tracking-wider">
								Actions
							</th>
						</tr>
					</thead>

					{!loading && (
						<tbody>
							{employees.map((employee) => (
								<Employee
									deleteEmployee={deleteEmployee}
									employee={employee}
									key={employee.id}
								></Employee>
							))}
						</tbody>
					)}
				</table>
			</div>
		</div>
	);
};

export default EmployeeList;
