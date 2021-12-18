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
        {success && (
          <div className={`bg-blue-200 p-3 animate-pulse rounded-md`}>
            User successfully registered
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <h1 className="textColorBlue font-bold my-4">Welcome Back</h1>
          <p className="text-xs mb-6">
            We make it easy for everyone to maximize their investment
          </p>

          <FormInput
            type="text"
            name="username"
            placeholder="&#xf007; &nbsp; Enter your Username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            required={true}
            errors={
              formik.errors.username &&
              formik.touched.username &&
              formik.errors.username
            }
            icon="far fa-user"
          />
          <FormInput
            type="text"
            name="fullname"
            placeholder="&#xf007; &nbsp; Enter your fullname"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            onBlur={formik.handleBlur}
            required={true}
            errors={
              formik.errors.fullname &&
              formik.touched.fullname &&
              formik.errors.fullname
            }
            icon="far fa-user"
          />
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
            icon="far fa-envelope"
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
            icon="fas fa-lock"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="&#xf023; &nbsp; Confirm your Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            required={true}
            errors={
              formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword
            }
            icon="fas fa-key"
          />

          {formik.isSubmitting ? (
            <FormSubmitBtn type="submit" value="Create Profile" loading />
          ) : (
            <FormSubmitBtn type="submit" value="Create Profile" />
          )}

          <a
            className="cursor-pointer text-center block w-full"
            onClick={(e) => setToggle(!toggle)}
          >
            Already have an account?{" "}
            <span className="underline textColorBlue">Sign In </span>instead
          </a>

          <SocialLogin />
        </form>
      </>
    )
}
