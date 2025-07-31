import { datas } from "@components/data";
import { Template } from "./serverTemplate";

export const Txs = () => {
    return (
        <Template datas={datas.txs} style="xs:justify-start justify-center" />
    )
};