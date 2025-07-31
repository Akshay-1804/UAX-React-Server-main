import { Button } from "@components/common/Button"
import { Select } from "@components/common/Select"
import { useHooks } from "@hooks";

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

export const ApiHead = () => {
    const { navigation } = useHooks();
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
                <Button
                    icon={'angle-left text-[#FFFFFF] text-[12px]'}
                    style={'bg-[#D9D9D924] p-3 border border-[#FFFFFF14] w-[27px] h-[27px] items-center justify-center mobile:hidden flex'}
                    action={() => navigation('/main')}
                />
                <h1 className="text-[20px]">API's</h1>
            </div>
            <div>
                <div className="mobile:hidden flex items-center gap-3">
                    <h6>Order by:</h6>
                    <Select options={datas} />
                </div>
            </div>
        </div>
    )
}