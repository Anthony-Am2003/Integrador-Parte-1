export const validation = (userData)=>{
 let errors = {};
 
    if (!/\S+@\S+\.\S+/.test(userData.email)){errors.email = 'email invalido;'}
   if(!userData.email){errors.email = 'este campo no puede estar vacio'}
   if(userData.email?.length > 35){errors.email = 'no puede contener mas de 35 caracteres'}
   if(userData.password.length < 6 && userData.password.length > 10){errors.password = 'debe tener entre 6 y 10 caracteres'}    
   if(!/\d/.test(userData.password) ){errors.password = 'de incluir un numero'}  
    return errors;
}
