import Spinner from './Spinner';

export default function FormSubmitBtn({ ...props }) {
    return (
        <>
            {
                props.loading ? <Spinner /> : <input
                    type={props.type}
                    value={props.value} className="my-5 py-4 px-2 w-full text-white cursor-pointer hover:bg-signinBtnHover transition-all bg-signinBtn"
                />
            }
        </>
    )
}
