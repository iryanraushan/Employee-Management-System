import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
	const navigate = useNavigate();

	const editEmployee = (e, id) => {
		e.preventDefault();
		navigate(`/editEmployee/${id}`);
	};

	return (
		<tr key={employee.id}>
			<td className="text-left whitespace-nowrap px-4 py-4 shadow shadow-slate-300">
				<div>{employee.firstName}</div>
			</td>
			<td className="text-left whitespace-nowrap px-4 py-4 shadow shadow-slate-300">
				<div>{employee.lastName}</div>
			</td>
			<td className="text-left whitespace-nowrap px-4 py-4 shadow shadow-slate-300">
				<div>{employee.emailId}</div>
			</td>
			<td className="text-left whitespace-nowrap px-4 py-4 shadow shadow-slate-300">
				<div>{employee.phoneNo}</div>
			</td>
			<td className="text-right whitespace-nowrap px-2 py-4 space-x-8 shadow shadow-slate-300">
				<button
					onClick={(e, id) => editEmployee(e, employee.id)}
					className="bg-blue-600 rounded px-4 py-2 font-medium hover:bg-blue-700 text-gray-50"
				>
					Edit
				</button>
				<button
					onClick={(e, id) => deleteEmployee(e, employee.id)}
					className="bg-red-600 rounded px-4 py-2 font-medium hover:bg-red-700 text-gray-50 hover:cursor-pointer"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Employee;
