import './styles/Button.css'

function Button({ text, isEnabled, callback }) {
    const buttonEnabled = isEnabled === null || isEnabled === undefined ? true : isEnabled

    return (
        <button
            className={`delete-button ${buttonEnabled ? '' : 'delete-button--disabled'}`}
            onClick={callback}
            disabled={!buttonEnabled}>
            {text}
        </button>
    );
}

export default Button
