import styles from './Auth.module.css';

export default function index() {
    return (
        <main className="container mx-auto">
            <div className="grid sm:grid-cols-3 h-screen w-full sm:gap-4 sm:justify-center sm:items-center">
                <div className="hidden sm:block sm:col-span-2 sm:bg-blue-500 sm:shadow-lg sm:rounded-2xl md:h-5/6 md:w-5/6 sm:relative bg-gradient-to-r from-Auth_box_left to-Auth_box_right">
                    <div className="absolute bottom-12 right-4 w-96 h-96 bg-blue-400 bg-opacity-10 rounded-full"></div>
                </div>
                <form className="p-4">
                    <input type="text" className={`${styles.login_username_input} transition-all duration-300 py-2 placeholder-black focus:placeholder-transparent border-0 border-b-2 w-full text-black outline-none focus:border-black text-sm my-4`} placeholder="&#xf007; &nbsp; Enter your Username" />
                    <input type="password" className={`${styles.login_password_input} transition-all duration-300 py-2 placeholder-black focus:placeholder-transparent border-0 border-b-2 w-full text-black outline-none focus:border-black text-sm my-4`} placeholder="&#xf013; &nbsp; Enter your Password" />
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
                    <input type="submit" value="SIGN IN" className="my-5 bg-blue-500 py-4 px-2 w-full text-white cursor-pointer hover:bg-blue-700 transition-all" />
                </form>
            </div >
        </main >
    )
}
;