import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NewEmployeePage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    date_of_birth: '',
    job_title: '',
    department: '',
    salary: '',
    start_date: '',
    end_date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
    navigate('/employees');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="full_name" value={formState.full_name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone_number" value={formState.phone_number} onChange={handleChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="date_of_birth" value={formState.date_of_birth} onChange={handleChange} />
        </label>
        <label>
          Job Title:
          <input type="text" name="job_title" value={formState.job_title} onChange={handleChange} />
        </label>
        <label>
          Department:
          <input type="text" name="department" value={formState.department} onChange={handleChange} />
        </label>
        <label>
          Salary:
          <input type="number" name="salary" value={formState.salary} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="start_date" value={formState.start_date} onChange={handleChange} />
        </label>
        <label>
          End Date:
          <input type="date" name="end_date" value={formState.end_date} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/employees')}>Cancel</button>
      </form>
      <ul>
        <li><a href="/employees">Employees</a></li>
        <li><a href="/timesheets/">Timesheets</a></li>
      </ul>
    </div>
  );
}