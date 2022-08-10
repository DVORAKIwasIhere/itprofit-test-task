import * as yup from "yup"

const phoneRegExp = /^(\+7)(\(?\d{3}\)?)(\d{3})(-)(\d{2})(-)(\d{2})/;
const fullNameRegExp = /(^[A-Za-z]{3,30})([ ]{0,1})([A-Za-z]{3,30})$/;

export const schema = yup
    .object({
        fullName: yup.string().matches(fullNameRegExp, 'Fullname is not valid').required('Fullname is not valid'),
        Email: yup.string().email().required("Fullname is not valid"),
        phoneNumber: yup.string().matches(phoneRegExp, 'Phone number  is not valid').required("Phone number  is not valid"), //bug
        birthDate: yup.string().required('Date  is not valid'),
        message: yup.string().min(10).max(300).required('Message  is not valid'),
    }).required()