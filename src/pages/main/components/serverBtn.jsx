import { Button } from "@components/common/Button"
import { datas } from "@components/data"

import { useHooks } from "@hooks";

export const ServerBtn = () => {
    const { navigation } = useHooks();

    return (
        <div className="flex flex-wrap">
            {
                datas.serverBtns.map((_itm, _idx) => (
                    <div className="mt-[6px] mobile:px-0 px-2 mobile:w-full xs:w-1/2 w-full" key={_idx}>
                        <Button
                            image={_itm.icon}
                            content={_itm.content}
                            action={() => navigation(_itm.path)}
                            style="bg-[#D9D9D912] px-[8px] gap-[8px] !justify-start"
                        />
                    </div>
                ))
            }
        </div>
    )
}