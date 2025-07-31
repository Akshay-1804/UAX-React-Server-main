import { useHooks } from "@hooks";

import { Header } from "@components/layout/header";
import { Button } from "@components/common/Button"
import Terminal from "@assets/media/main/terminal.png";

export const TerminalPanel = () => {
    const { navigation } = useHooks();

    return (
        <>
            <Header style='flex' />
            <div className="px-4 py-6">
                <div className="max-w-[1217px] m-auto">
                    <div className="bg-[#212121] d-center py-3 rounded-t-2xl">
                        <h2>Installation Logs</h2>
                        <Button
                            icon={'times text-white text-[8px]'}
                            style={'!w-6 !h-6 d-center bg-[#FF513A] rounded-full absolute right-8'}
                            action={() => navigation('/main')}
                        />
                    </div>
                    <div className="bg-black md:py-10 md:px-12 py-3 px-4 min-h-[614px]">
                        <img src={Terminal} alt="No Terminal" />
                    </div>
                </div>
            </div>
        </>
    )
}