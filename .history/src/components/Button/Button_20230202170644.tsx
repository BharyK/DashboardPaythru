

interface Props {
    label : String;
    disabled?: boolean;
}

const Button = ({label, disabled} : Props) => {
    return (
        <button type = "button" className="btn btn-warning text-light font-weight-bold"  disabled = {disabled}>{label}</button>
    )
}

export default Button;