import './styles/Button.css'

function Button({ text, callback }) {
    return (
        <button className="delete-button" onClick={callback}>
            {text}
        </button>
    );
}

export default Button
