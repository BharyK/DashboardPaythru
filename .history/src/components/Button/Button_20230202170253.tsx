

interface Props {
    label : String;
    disabled?: boolean;
    counter: Number
}

const Button = ({label, disabled} : Props) => {
    return (
        <button type = "button" className="btn btn-warning" disabled = {disabled}>{label}</button>
    )
}

export default Button;