import styles from '../../pages/auth/Auth.module.css';
import Link from 'next/link';

export default function SocialLogin() {
    return (
        <>
            <div className={`${styles.or_strike} my-6`}>
                <span>Or</span>
            </div>

            <p className=" w-full text-center block">With your social network</p>

            <div className=" mt-4 flex items-center justify-center">
                <Link href="/">
                    <img src="https://img.icons8.com/color/36/000000/google-logo.png" className="mx-4 cursor-pointer rounded-full border-white border-4" />
                </Link>
                <Link href="/">
                    <img src="https://img.icons8.com/fluency/36/000000/facebook-new.png" className="cursor-pointer rounded-full border-white border-4" />
                </Link>
            </div>
        </>
    )
}
