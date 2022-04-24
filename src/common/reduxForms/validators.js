export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required"; 
}

export const isEmail = (value) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Invalid email address";
    return undefined; 
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`
    return undefined;
}