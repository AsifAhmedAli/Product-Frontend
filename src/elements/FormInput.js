import styles from '../pages/auth/Auth.module.css';

export default function FormInput({ type, name, placeholder, value, onChange, onBlur, errors }) {
    return (
        <>
            <input
                type={type}
                name={name && name}
                value={value && value}
                className={`${styles.login_input} transition-all bg-transparent duration-300 py-2 placeholder-black focus:placeholder-transparent border-gray-400 border-0 border-b-2 w-full text-black outline-none focus:border-gray-900 text-sm my-3`}
                placeholder={placeholder && placeholder}
                onChange={onChange && onChange}
                onBlur={onBlur && onBlur}
            />
            <div style={{ color: "red", fontSize: ".8rem" }}>
                {errors && errors}
            </div>
        </>
    )
}
