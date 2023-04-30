import classNames from "classnames";

function Button({className, outline, children, onClick}) {
    const clazz = classNames('button', className, {
        'button--outline': outline
    })
    
    return (
        <button onClick={onClick} className={clazz}>
            {children}
        </button>
    )
}

export default Button