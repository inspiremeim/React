import { useState } from "react";

function Forms() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input type="text" name="fname" value={inputs.fname || ""} onChange={handleChange} placeholder="Enter your first name" />
                <br /><br />
                <label>Last Name: </label>
                <input type="text" name="lname" value={inputs.lname || ""} onChange={handleChange} placeholder="Enter your last name" />
                <br /><br />
                <input type="submit" />
            </form>
        </>
    );
}

export default Forms;