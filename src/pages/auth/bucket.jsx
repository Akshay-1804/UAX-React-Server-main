import { useState } from "react";
import { useHooks } from "@hooks";

import { Header } from "@components/layout/header";

import { Box } from "./components/box";
import Logo from '@assets/media/logo.svg';
import Back from '@assets/media/mobile-bg.png';

import { Button } from "@components/common/Button";
import { Input } from "@components/common/Input";

export const Bucket = () => {
    const { navigation } = useHooks();
    const [bucket, setBucket] = useState('TECHMINT-APIs');

    return (
        <>
            <Header style='xs:flex hidden' />
            <img src={Back} alt="No Mobile Back" className="absolute xs:hidden block w-full" />
            <Box>
                <div className="xs:pt-[30px] xs:pb-[26px] pt-5 pb-4 flex gap-[10px] justify-center">
                    <img src={Logo} alt="No logo" />
                </div>
                <div className="xs:px-8 px-4 py-5 flex flex-col items-center">
                    <h1 className="text-[16px] text-left w-full mb-5">Buckets Creation</h1>
                    <div
                        className="flex flex-col items-center bg-[#D9D9D912] w-full p-5 rounded-md border border-[#FFFFFF0D]"
                    >
                        <span className="pink w-full mb-1">Enter Bucket Name</span>
                        <Input
                            state={bucket}
                            style={{
                                input: 'text-white text-[14px] w-full',
                                back: 'border-b border-[#FFFFFFB8] py-1 w-full'
                            }}
                            setState={e => setBucket(e.target.value)}
                        />
                        <Button
                            content={'Create Now'}
                            style="bg-[#E22FFF] w-max px-[20px] mt-[24px]"
                            action={() => navigation('/main')}
                        />

                    </div>
                </div>
            </Box>
        </>
    )
}