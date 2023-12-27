import React, { MouseEventHandler } from "react";

interface ButtonProps {
    btnText: string;
    btnClick?: MouseEventHandler<HTMLButtonElement>;
    btnClasses: string;
    isSubmit?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    btnText,
    btnClick,
    btnClasses,
    isSubmit = false,
}) => (
    <button
        className={` ${btnClasses}`}
        onClick={btnClick}
        type={isSubmit ? "submit" : "button"}
    >
        {btnText}
    </button>
);

Button.defaultProps = {
    isSubmit: false,
};

export default Button;