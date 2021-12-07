import FormInput from '../../elements/FormInput';
import SocialLogin from './SocialLogin';
import { useFormik } from 'formik';
import { validateSignupInput } from '../../utils/validator';
import FormSubmitBtn from '../../elements/FormSubmitBtn';
import { useState } from 'react';

export default function Signup({ toggle, setToggle }) {
    const [success, setSuccess] = useState(false);
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: validateSignupInput,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                const formData = JSON.stringify(values, null, 2);
                setSubmitting(false);
                setSuccess(true);
            }, 400);
            setTimeout(() => {
                setToggle(!toggle);
            }, 2500);
        }
    })
    return (
        <>
            {success && (<div className={`bg-blue-200 p-3 animate-pulse rounded-md`}>User successfully registered</div>)}
            <form onSubmit={formik.handleSubmit}>
                <FormInput
                    type="text"
                    name="username"
                    placeholder="&#xf007; &nbsp; Enter your Username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    required={true}
                    errors={formik.errors.username && formik.touched.username && formik.errors.username}
                />
                <FormInput
                    type="email"
                    name="email"
                    placeholder="&#xf007; &nbsp; Enter your Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    required={true}
                    errors={formik.errors.email && formik.touched.email && formik.errors.email}
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="&#xf023; &nbsp; Enter your Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    required={true}
                    errors={formik.errors.password && formik.touched.password && formik.errors.password}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    placeholder="&#xf023; &nbsp; Confirm your Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                    required={true}
                    errors={formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}
                />

                {formik.isSubmitting ? <FormSubmitBtn type="submit" value="SIGN UP" loading /> : <FormSubmitBtn type="submit" value="SIGN UP" />}

                <a
                    className="cursor-pointer text-center block w-full"
                    onClick={e => setToggle(!toggle)}>Already have an account? Sign in instead
                </a>

                <SocialLogin />
            </form>
        </>
    )
}
