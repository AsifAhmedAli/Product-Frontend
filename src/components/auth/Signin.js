import FormInput from '../../elements/FormInput';
import { useFormik } from 'formik';
import { validateSigninInput } from '../../utils/validator';
import FormSubmitBtn from '../../elements/FormSubmitBtn';
import SocialLogin from './SocialLogin';

export default function Signin({ setToggle, toggle }) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        validate: validateSigninInput,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
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

            <label className="text-sm flex text-black justify-between items-center pt-10">
                <div className="flex items-center">
                    <input type="checkbox" name="remember" onChange={formik.handleChange} value={formik.values.remember} />
                    <span className="px-2 text-black">
                        Remember Me
                    </span>
                </div>
                <a href="#">
                    Forgot Password?
                </a>
            </label>

            {formik.isSubmitting ? <FormSubmitBtn type="submit" value="SIGN IN" loading /> : <FormSubmitBtn type="submit" value="SIGN IN" />}

            <a className="cursor-pointer text-center w-full block" onClick={e => setToggle(!toggle)}>New on our platform? Create an account</a>

            <SocialLogin />
        </form>
    )
}
