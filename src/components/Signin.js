import styles from '../pages/auth/Auth.module.css';
import Link from 'next/link';

export default function Signin({ setToggle, toggle }) {

    return (
        <>
            <input type="text" className={`${styles.login_username_input} transition-all bg-transparent duration-300 py-2 placeholder-black focus:placeholder-transparent border-gray-400 border-0 border-b-2 w-full text-black outline-none focus:border-gray-900 text-sm my-4`} placeholder="&#xf007; &nbsp; Enter your Username" />

            <input type="password" className={`${styles.login_password_input} transition-all bg-transparent duration-300 py-2 placeholder-black border-gray-400 focus:placeholder-transparent border-0 border-b-2 w-full text-black outline-none focus:border-gray-900 text-sm my-4`} placeholder="&#xf023; &nbsp; Enter your Password" />

            <label className="text-sm flex text-black justify-between items-center pt-10">
                <div className="flex items-center">
                    <input type="checkbox" />
                    <span className="px-2 text-black">
                        Remember Me
                    </span>
                </div>
                <a href="#">
                    Forgot Password?
                </a>
            </label>

            <input type="submit" value="SIGN IN" className="my-5 bg-signinBtn py-4 px-2 w-full text-white cursor-pointer hover:bg-signinBtnHover transition-all" />
            <a className="cursor-pointer text-center w-full block" onClick={e => setToggle(!toggle)}>New on our platform? Create an account</a>

            <div className={`${styles.or_strike} my-6`}>
                <span>Or</span>
            </div>

            <p className="text-center w-full block">With your social network</p>

            <div className="flex items-center justify-center mt-4">
                <Link href="/">
                    <img src="https://img.icons8.com/color/36/000000/google-logo.png" className="cursor-pointer rounded-full mx-4 border-white border-4" />
                </Link>
                <Link href="/">
                    <img src="https://img.icons8.com/fluency/36/000000/facebook-new.png" className="cursor-pointer rounded-full border-white border-4" />
                </Link>
            </div>
        </>
    )
}
