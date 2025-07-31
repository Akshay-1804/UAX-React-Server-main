import Logo from "@assets/media/logo.svg";
import { useHooks } from "@hooks";

import { Select } from "../common/Select";
import { Button } from "../common/Button";

const datas = [
    {
        value: 'app',
        label: 'App'
    },
    {
        value: 'web',
        label: 'Web'
    },
]

export const Header = ({ state, style }) => {
    const { navigation } = useHooks();

    return (
        <div className={`w-full max-w-screen-2xl h-[70px] bg-[#8080801A] backdrop-blur fixed top-0 left-1/2 items-center z-50 t-center ${style}`}>
            <div className="px-8 flex items-center justify-between w-full">
                <img src={Logo} alt="No Logo" />
                {state && (
                    <>
                        <div className="flex items-center gap-7">
                            <div className="mobile:flex hidden items-center gap-3">
                                <h6>Order by:</h6>
                                <Select options={datas} />
                            </div>
                            <div className="flex items-center gap-2">
                                <h6>2/4 proc.</h6>
                                <h6>free_v4</h6>
                            </div>
                            <div>
                                <Button
                                    icon={'right-from-bracket text-[#FFFFFF] text-[15px]'}
                                    style={'rounded-3xl bg-[#D9D9D924] p-3 border border-[#FFFFFF14] w-[40px] h-[40px] d-center'}
                                    action={() => navigation('/')}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}