export const Box = ({ children }) => {
    return (
        <div className="w-max d-center px-4 sm:px-0 a-center">
            <div className="auth-box">
                {children}
            </div>
        </div>
    )
};