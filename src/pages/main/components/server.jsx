import Updown from "@assets/media/main/up-down.svg";
import Hexagon from "@assets/media/main/s_hexagon.svg";
import { datas } from "@components/data";

import { Device } from "./device";
import { Txs } from "./txs";
import { Table } from "@components/common/Table";
import { ServerBtn } from "./serverBtn";

export const Server = ({ Nr }) => {
    return (
        <div className="bg-[#BBBBBB17] border border-[#FFFFFF14] rounded-t-[10px] rounded-b-md mt-4 flex mobile:flex-row flex-col">
            <div className="bg-[#D9D9D912] rounded-tl-[10px] rounded-bl-md mobile:block hidden">
                <div className="flex min-w-[143px]">
                    <div className="bg-[#D9D9D912] rounded-tl-[10px] w-[37px] h-[39px] d-center">
                        <img src={Updown} alt="No Up-Down" />
                    </div>
                    <div className="flex-1 d-center gap-1">
                        <img src={Hexagon} alt="No Single Hexagon" />
                        <h5>Server {Nr}</h5>
                    </div>
                </div>
                <div className="py-4 px-1">
                    <div className="px-[10px] flex flex-col">
                        <span className="pink">IP Address:</span>
                        <span>176.12.16.102</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex flex-col px-[10px]">
                        <span className="font-[11px] text-[#FFFFFFB2]">1 process</span>
                        <span className="font-[11px]">PM2 process</span>
                        <span className="font-[11px] text-[#FFFFFFB2]">online for 19 minutes</span>
                    </div>
                </div>
            </div>
            <div className="mobile:hidden border-b border-[#FFFFFF14] flex items-center justify-between px-6 py-2">
                <div className="d-center gap-1">
                    <img src={Hexagon} alt="No Single Hexagon" />
                    <h5>Server {Nr}</h5>
                </div>
                <div>
                    <div className="px-[10px] flex items-center">
                        <span className="text-[#FFFFFFA8] mr-1">IP Address:</span>
                        <span>176.12.16.102</span>
                    </div>
                    <div className="px-[10px] flex items-center">
                        <span className="text-[#FFFFFFA8] mr-1">Rust Server:</span>
                        <div className="flex items-center gap-[5px]">
                            <div className="rounded-full w-[9px] h-[9px] bg-[#47FF91]" />
                            <span className="text-[#47FF91] text-[13px]">ON</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="border-b border-[#FFFFFF0F] pt-3 px-[18px] pb-4">
                    <Device />
                </div>
                <div className="mobile:pb-7 pb-1 pt-3 px-[18px]">
                    <Txs />
                    <h1 className="underline text-[16px] my-4">PM2</h1>
                    <div className="w-full overflow-auto">
                        <Table data={datas.table} />
                    </div>
                </div>
            </div>
            <div className="p-4 border-l border-[#FFFFFF0F] mobile:w-[176px] flex flex-col justify-between pb-7">
                <ServerBtn />
                <div className="items-center gap-[5px] mobile:flex hidden">
                    <div className="rounded-full w-[9px] h-[9px] bg-[#47FF91]" />
                    <span className="text-[#47FF91] text-[13px]">Rust Server: ON</span>
                </div>
            </div>
        </div>
    )
}