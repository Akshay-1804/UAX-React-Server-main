import { datas } from "@components/data";
import { Button } from "@components/common/Button";
import { Select } from "@components/common/Select";

const data = [
    {
        value: 'app',
        label: 'App'
    },
    {
        value: 'web',
        label: 'Web'
    },
]

export const PCInfor = () => {
    return (
        <div
            className="flex items-center justify-between mobile:flex-row flex-col-reverse"
        >
            <div className="flex flex-wrap items-center">
                {
                    datas.PCInfor.map((_itm, _idx) => (
                        <div className="flex items-center gap-[6px] mr-7 my-1" key={_idx}>
                            <img src={_itm.icon} alt="No infor" />
                            <h6 className="text-[#FFFFFFCC] font-normal">
                                {_itm.label}
                            </h6>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center mobile:mb-0 mb-4 justify-end mobile:w-auto w-full gap-3">
                <div className="flex items-center gap-3 h-full mobile:hidden">
                    <h6>Order by:</h6>
                    <Select options={data} style={{ select: 'h-[43px]' }} />
                </div>
                <Button
                    icon='times text-white mr-[4px]'
                    content='Delete Server'
                    style='bg-[#E82C67] w-max px-[10px] min-w-[115px]'
                />
            </div>
        </div>
    )
}