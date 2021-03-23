export const required = value => {
   if (value) return undefined;
   return "Field is required";
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Mx Length is ${maxLength} symbols`;
    return undefined;
}
export const maxLength30 = value => {
    if (value.length > 30) return 'Mx Length is 30 symbols';
    return undefined;
}