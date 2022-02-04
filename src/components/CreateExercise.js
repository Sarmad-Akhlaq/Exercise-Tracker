import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () =>   {
    const [form, setForm] = useState({username:'', description:'', duration: 0, date: new Date()});
    const [users, setUsers] = useState([]);
  
    const handleFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    useEffect(() => {
        setUsers(['test user']);
        setForm({username: 'test user'});
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select 
                        required
                        className="form-control"
                        value={form.username}
                        name="username"
                        onChange={handleFormChange}>
                            {
                                users?.map(user => 
                                    <option
                                        key={user}
                                        value={user}>
                                        {user}
                                    </option>
                                )
                            }
                    </select>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <input 
                        type="text"
                        required
                        name="description"
                        className="form-control"
                        value={form.description}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="form-group">
                    <label>Duration (in minutes):</label>
                    <input 
                        type="text"
                        required
                        name="duration"
                        className="form-control"
                        value={form.duration}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="form-group">
                    <label>Date:</label>
                    <div>
                        <DatePicker
                            name="date"
                            selected={form.date} 
                        />
                    </div>
                </div>

                <br/>

                <div className="form-group">
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Create Exercise Log"
                    />
                </div>
            </form>
        </div>
    );
}

export default CreateExercise;