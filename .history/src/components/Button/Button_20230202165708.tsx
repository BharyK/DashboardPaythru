

interface Props {
    label : String;
    disabled: boolean
}

const Button = ({label, disabled} : Props) => {
    return (
        <button type = "button" className="btn btn-warning">Upload</button>
    )
}

export default Button;