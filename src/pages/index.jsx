import { Route, Routes } from 'react-router-dom';

// auth pages import
import { SignIn } from "./auth/signin";
import { Bucket } from "./auth/bucket";

// main pages import
import { Main } from "./main";
import { APIs } from "./main/apis";
import { TerminalPanel } from "./main/terminal";

export const Pages = () => {
    return (
        <div className="w-full h-max min-h-screen 2xl:w-[1440px] py-[70px] mx-auto main-page">
            <Routes>
                {/* Default and Overview Routes */}
                <Route path="/" element={<SignIn />} />
                <Route path="/bucket" element={<Bucket />} />

                {/* Feature Routes */}
                <Route path="/main" element={<Main />} />
                <Route path="/apis" element={<APIs />} />
                <Route path="/terminal" element={<TerminalPanel />} />
            </Routes>
        </div>
    );
};