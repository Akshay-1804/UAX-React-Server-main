import { Input } from "@components/common/Input";

export const AuthInput = ({ state, setState, type, placeholder }) => {

    return (
        <Input
            state={state[type]}
            setState={e => setState(prev => ({
                ...prev,
                [type]: e.target.value
            }))}
            style={{
                back: 'box-input mt-[14px]'
            }}
            placeholder={placeholder}
            type={type}
        />
    )
};