export const Select = ({
    options,
    style: { select, option } = {}
}) => {
    return (
        <select className={`pb-[3px] pt-[1px] w-[74px] px-2 ${select}`}>
            {
                options.map((_itm, _idx) => (
                    <option value={_itm.value} key={_idx}>{_itm.label}</option>
                ))
            }
        </select>
    )
};