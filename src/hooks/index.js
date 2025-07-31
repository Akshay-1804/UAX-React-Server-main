import { useNavigate } from "react-router-dom";

export const useHooks = () => {
    const navigate = useNavigate();
    const navigation = (path) => navigate(path);

    return { navigation }
};