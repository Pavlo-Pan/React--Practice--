import * as yup from "yup";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const userSchema = yup.object({
    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(6, "Must be at least 6 characters")
        .max(20, "Must be no longer than 20 characters"),
    email: yup
        .string()
        .trim()
        .required("Email is required")
        .matches(emailRegexp, "Invalid email"),
    password: yup
        .string()
        .trim()
        .required("Password is required")
        .min(8, "Must be at least 8 characters")
        .matches(passwordRegexp, "Password must contain at least 1 Latin letter and a number"),
    repeatPassword: yup
        .string()
        .trim()
        .required("Field is required")
        .oneOf([yup.ref("password")], "Passwords must match"),
});

export default userSchema;