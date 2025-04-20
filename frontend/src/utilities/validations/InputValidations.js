export const  nameValidation = (value) => {
    if(value.length === 0){
        return "Please enter your name";
    }
    else if(value.length > 50){
        return "Name should not exceed 50 characters";
    }
    else if(!/^[a-zA-Z\s]+$/.test(value)){
        return "Name should only contain letters and spaces";
    }
    return "";
}

export const  emailValidation = (value) => {
    if(value.length === 0){
        return "Please enter your email";
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
        return "Please enter a valid email address";
    }
    return "";
}

export const  phoneNumberlValidation = (value) => {
    if(value.length === 0){
        return "Please enter your phone number";
    }
    else if(!/^\d{10}$/.test(value)){
        return "Phone number should be 10 digits";
    }
    return "";
}



