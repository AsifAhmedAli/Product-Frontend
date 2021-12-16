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
        <h1 className="textColorBlue font-bold my-4">Welcome Back</h1>
        <p className="text-xs mb-6">We make it easy for everyone to maximize their investment</p>

        <FormInput
          type="email"
          name="email"
          placeholder="&#xf007; &nbsp; Enter your Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          required={true}
          errors={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />
        <FormInput
          type="password"
          name="password"
          placeholder="&#xf023; &nbsp; Enter your Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          required={true}
          errors={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
        />

        <label className="text-sm pt-10 flex text-black items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              onChange={formik.handleChange}
              value={formik.values.remember}
            />
            <span className="px-2">Remember Me</span>
          </div>
          <a href="#">Forgot Password?</a>
        </label>

        {formik.isSubmitting ? (
          <FormSubmitBtn type="submit" value="SIGN IN" loading />
        ) : (
          <FormSubmitBtn type="submit" value="SIGN IN" />
        )}

        <a
          className=" w-full cursor-pointer text-center block"
          onClick={(e) => setToggle(!toggle)}
        >
          New on our platform? Create an account
        </a>

        <SocialLogin />
      </form>
    )
}
