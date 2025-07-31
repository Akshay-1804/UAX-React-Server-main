import { useState } from "react";

export const Input = ({
    state, setState, type, placeholder,
    content: { prev: prevContent, next: nextContent } = {},
    style: { back, input } = {}
}) => {
    const [visible, setVisible] = useState(false);
    const isPassowrd = (type === 'password');

    return (
        <div className={`${back}`}>
            {prevContent && prevContent}
            <input
                value={state}
                onChange={setState}
                placeholder={placeholder}
                type={(
                    isPassowrd ? (
                        visible ? 'text' : type
                    ) : type
                )}
                className={`flex-1 ${input}`}
            />
            {
                isPassowrd &&
                <i
                    className={`cursor-pointer fa-solid text-[#FFFFFF61] fa-eye${visible ? '-slash' : ''}`}
                    onClick={() => setVisible(prev => !prev)}
                />
            }
            {nextContent && nextContent}
        </div>
    )
}