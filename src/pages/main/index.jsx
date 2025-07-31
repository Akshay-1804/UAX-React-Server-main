import { Header } from "@components/layout/header";

import { PCInfor } from "./components/pc";
import { Server } from "./components/server";

export const Main = () => {
    return (
        <div className="px-4 py-6">
            <Header style='flex' state={true} />
            <PCInfor />
            <Server Nr={1} />
            <Server Nr={2} />
        </div>
    )
};