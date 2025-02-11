import { useLoaderData, Link } from 'react-router-dom';

interface Employee {
  id: number;
  full_name: string;
  email: string;
  job_title: string;
  department: string;
}

export async function loader() {
  const response = await fetch('/api/employees');
  const employees: Employee[] = await response.json();
  return { employees };
}

export default function EmployeesPage() {
  const { employees } = useLoaderData() as { employees: Employee[] };

  return (
    <div>
      <h1>Employees</h1>
      <Link to="/employees/new">Add New Employee</Link>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.full_name}</td>
              <td>{employee.email}</td>
              <td>{employee.job_title}</td>
              <td>{employee.department}</td>
              <td>
                <Link to={`/employees/${employee.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}