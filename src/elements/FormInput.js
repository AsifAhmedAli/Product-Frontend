import styles from "../pages/auth/Auth.module.css"

export default function FormInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
    errors,
  icon
}) {
  return (
    <div>
      <div className="flex items-center justify-between border-blue-900 border-0 border-b-2 space-x-4 my-6">
        <div>
          <i className={`${icon} textColorBlue`}></i>
        </div>
        <input
          type={type}
          name={name && name}
          value={value && value}
          className={`${styles.login_input} transition-all bg-transparent duration-300 py-2 placeholder-blue-900 focus:placeholder-transparent w-full text-black outline-none  text-sm`}
          placeholder={placeholder && placeholder}
          onChange={onChange && onChange}
          onBlur={onBlur && onBlur}
        />
      </div>
      <div style={{ color: "red", fontSize: ".8rem" }}>{errors && errors}</div>
    </div>
  )
}
