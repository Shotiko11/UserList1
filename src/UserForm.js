import React from "react";

const UserForm = ({formValues, onFormChange, onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <label>name:</label>
            <input name="name" value={formValues.name} onChange={onFormChange}/>
            <br />
            <label>surname:</label>
            <input name="surname" value={formValues.surname} onChange={onFormChange}/>
            <br />
            <label>email:</label>
            <input name="email" value={formValues.email} onChange={onFormChange}/>
            <br />
            <label>age:</label>
            <input name="age" type="number" value={formValues.age} onChange={onFormChange}/>
            <button>save user</button>
        </form>

            
        
    )
}

export default UserForm