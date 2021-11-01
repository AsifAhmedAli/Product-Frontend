export const validateSigninInput = values => {
    const errors = {}

    // validation for email
    if (!values.email) {
        errors.email = 'Required'
    } else if (values.email.length < 4) {
        errors.email = 'Must be 5 characters or more'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    // validation for password
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    } else if (values.password === '12345678') {
        errors.password = 'Must not be 12345678 !!!'
    }

    return errors
}
export const validateSignupInput = values => {
    const errors = {}

    // Validation for Username
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 3) {
        errors.username = 'Must be at least 3 characters'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }

    // validation for email
    if (!values.email) {
        errors.email = 'Required'
    } else if (values.email.length < 4) {
        errors.email = 'Must be 5 characters or more'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    // validation for password
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    } else if (values.password === '12345678') {
        errors.password = 'Must not be 12345678 !!!'
    }

    // validation for confirm password
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords must match'
    } else if (values.password === '12345678') {
        errors.confirmPassword = 'Must not be 12345678 !!!'
    }

    return errors
}