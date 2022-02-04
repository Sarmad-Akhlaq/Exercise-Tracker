import React, {useState} from 'react';

const CreateExercise = () =>   {
    const [form, setForm] = useState({username:'', description:'', duration: 0, date: new Date(), user:[]})

    const handleChange = (e) => {
        setForm({...form, [e.target.value]: e.target.name})
    }

    return (
        <div>
            <p>You are on the Create Exercise component</p>
        </div>
    );
}

export default CreateExercise;