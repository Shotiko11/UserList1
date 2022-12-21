export const validate = (values) => {
    const errors = {};
    if(values.name && values.surname.length < 4) {
      errors.name = "username should have 4 characters"
    }
    if(values.surname && values.surname.length < 4){
      errors.surname = "surname should have 4 characters"
    }
    if(values.email && !values.email.includes("@gmail.com")){
      errors.email = "email should include @gmail.com"
    }
    if(values.age && values.age <18) {
      errors.age = "minimum age is 18"
    }
    if(!values.gender){
      errors.gender = "gender should be selected"
    }
    console.log(values.gender);
    return errors
  }