// const Validation = (values) => {
//     let errors = {}
//     if(!values.username){
//         errors.name = "*UserName or Email is Required!";
//     }
//     if(!values.name){
//         errors.name = "*Name is Required!";
//     }
//     if(!values.email){
//         errors.email = "*Email is Required!"
//     }
//     else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
//         errors.email = "*Email is Invalid!"
//     }
//     if(!values.Password){
//         errors.Password = "*Password is Required!"
//     }
//     else if(values.Password.length < 8){
//         errors.Password = "*Password must be more than 8 charaters!";
//     }
//     if(values.Password != values.ConfirmPassword){
//         errors.ConfirmPassword = "*Password is does not match!";
//     }
//     return errors;
// }
 
// export default Validation;