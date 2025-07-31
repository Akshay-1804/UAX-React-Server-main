export const Button = ({ content, icon, style, action, image }) => {
    return (
        <button
            className={`py-3 flex items-center justify-center w-full rounded ${style}`}
            onClick={action}
        >
            {icon && <i className={`fa fa-${icon}`} />}
            {image && <img src={image} alt="no icons" />}
            <span className="font-normal text-[13px] text-white">{content}</span>
        </button>
    )
};

