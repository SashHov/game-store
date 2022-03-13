import classNames from 'classnames';
import './button.css';


export const Button = ({ children, type, size = 's', onClick }) => {

    console.log(children);
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': type === 's',
        'btn--medium': type === 'm',
    });

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}

 