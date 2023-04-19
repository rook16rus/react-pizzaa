import classNames from "classnames";

function Button({className, outline, children}) {
    const clazz = classNames('button', className, {
        'button--outline': outline
    })
    
    return (
        <button className={clazz}>
            {children}
        </button>
    )
}

export default Button