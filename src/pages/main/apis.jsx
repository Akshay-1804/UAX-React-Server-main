import { useMemo, useState } from "react";
import { useHooks } from "@hooks";

import { datas } from "@components/data";
import { Header } from "@components/layout/header";

import { ApiHead } from "./components/apiHead";
import { Box } from "./components/box";
import { Input } from "@components/common/Input";
import { Select } from "@components/common/Select";
import { Button } from "@components/common/Button";

const data = [
    {
        value: 'post',
        label: 'POST'
    },
    {
        value: 'get',
        label: 'Get'
    },
    {
        value: 'put',
        label: 'PUT'
    },
    {
        value: 'delet',
        label: 'DELET'
    },
]

export const APIs = () => {
    const { navigation } = useHooks();

    const [state, setState] = useState(0);
    const [form, setForm] = useState({
        method: 'post',
        url: 'https://cmw.uax.network/mint_coin_request'
    });

    const position = useMemo(() => 14 + Number(state) * 44, [state]);

    const prev = (
        <div className="flex">
            <Select
                options={data}
                style={{
                    select: 'text-[#E22FFF] bg-transparent border-0 h-max !py-[3px]'
                }}
            />
            {/* <div className="w-[1px] bg-[#FFFFFF14] ml-3 " /> */}
        </div>
    )

    return (
        <div className="px-4 py-6">
            <Header style='flex' state={true} />
            <ApiHead />
            <div className="flex gap-4 mt-[10px] md:flex-row flex-col">
                <div className="flex flex-col min-w-[231px] gap-[10px]">
                    <Box style="flex items-center justify-between p-[14px]">
                        <h5 className="font-normal">Select APIs</h5>
                        <i className="fa-solid fa-chevron-up text-white"></i>
                    </Box>
                    <Box style={"py-[14px] pr-[12px] h-full"}>
                        {
                            datas.apis.map((_itm, _idx) => (
                                <div
                                    className={`flex min-h-[44px] transition-all duration-500 items-center px-[18px] border border-[transparent] py-[11px] ${_idx === state ? 'active' : ''}`}
                                    onClick={() => setState(_idx)}
                                    key={_idx}
                                >
                                    <span className="pink text-[13px] mr-1">{_itm.method}</span>
                                    <span className="text-[13px] text-[#FFFFFFB2]">{_itm.domain}</span>
                                </div>
                            ))
                        }
                        <div
                            className={`h-[44px] w-[2px] bg-[#E22FFF] absolute right-0 transition-all duration-500`}
                            style={{
                                top: `${position}px`
                            }}
                        />
                    </Box>
                </div>
                <Box style={'flex-1'}>
                    <div className="px-[30px] py-5 border-b border-[#FFFFFF14]">
                        <h5 className="font-normal text-[15px]">Select APIs</h5>
                        <div className="flex gap-3 mt-[14px] sm:flex-row flex-col">
                            <Input
                                state={form.url}
                                setState={e => setForm(prev => ({
                                    ...prev,
                                    ['url']: e.target.value
                                }))}
                                content={{
                                    prev: prev
                                }}
                                style={{
                                    back: 'py-[8px] border border-[#FFFFFF12] flex-1 rounded bg-[#D9D9D912] flex',
                                    input: 'text-[14px] h-max'
                                }}
                            />
                            <Button
                                content={'Send'}
                                style="bg-[#E22FFF] sm:w-max w-full px-[34px]"
                            />
                        </div>
                    </div>
                    <div className="py-9 px-7">
                        <h5 className="font-normal text-[14px] mb-4">RESPONSE</h5>
                        <div className="flex flex-col">
                            <code>
                                {`“current_mint_coin” : false,`}
                            </code>
                            <code>
                                {`“last_minted_block” :  {`}
                            </code>
                            <code>
                                {`“index” : 4126,`}
                            </code>
                            <code>
                                {`“timestamp” : 1749803550675,`}
                            </code>
                            <code>
                                {`“transactions” : [`}
                            </code>
                            <code>
                                {`{`}
                            </code>
                            <code>
                                {`“ amount” : 0.528654122,`}
                            </code>
                            <code>
                                {`“sender” : “EfDz4LTNhalh.uaxn”,`}
                            </code>
                            <code>
                                {`“remark” “UAXN”`}
                            </code>
                            <code>
                                {`}`}
                            </code>
                            <code>
                                {`{`}
                            </code>
                            <code>
                                {`“nonce” : 70035,`}
                            </code>
                            <code>
                                {`“hash” : “00056cdyt54qjhu7644b3fe4880”,`}
                            </code>
                            <code>
                                {`“peerID” : “Z_miner”,`}
                            </code>
                            <code>
                                {`}`}
                            </code>
                            <code>
                                {`}`}
                            </code>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}