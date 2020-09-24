import React, {useState} from "react";

const initialFormData = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "email",

}

function UpdateVolunteer() {
    
    const [formData, setFormData] = useState(initialFormData);




    function changeHandler(e) {
        

    
        setFormData({...formData, [e.target.name]: e.target.value});

    };
    function handleSubmit() {


    };
    return(
        <div>
            <h3>Update Information</h3>
            <form onSubmit={handleSubmit} className="update-form">
               <label>
                   First Name 
                   <input
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    value={formData.firstName}
                    />
               </label>
               <label>
                   Last Name  
                   <input
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    value={formData.lastName}
                    />
               </label>
               <label>
                   Email  
                   <input
                    type="text"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    />
               </label>
               <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateVolunteer;