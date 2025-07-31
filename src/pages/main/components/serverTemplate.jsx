export const Template = ({ datas, style }) => {
    return (
        <div className={`flex flex-wrap gap-11 ${style}`}>
            {
                datas.map((_itm, _idx) => (
                    <div key={_idx} className="flex flex-col mobile:items-start items-center">
                        <div className="flex items-center gap-1 mb-3 mobile:flex-row flex-col">
                            <img
                                src={_itm.icon}
                                alt="No Device"
                                className="mobile:block hidden"
                            />
                            <div
                                className="w-9 h-9 rounded bg-[#FFFFFF1C] items-center justify-center border border-[#FFFFFF0A] mobile:hidden flex"
                            >
                                <img
                                    src={_itm.icon}
                                    alt="No Device"
                                />
                            </div>
                            <h6>{_itm.key}</h6>
                        </div>
                        <span className="pink text-[18px]">{_itm.value}</span>
                    </div>
                ))
            }
        </div>
    )
}