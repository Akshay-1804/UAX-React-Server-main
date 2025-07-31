export const Box = ({ children, style }) => {
    return (
        <div className={`bg-[#EFEFEF17] border border-[#FFFFFF14] rounded ${style}`}>{children}</div>
    )
};