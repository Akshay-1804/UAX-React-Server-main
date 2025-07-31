export const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        data.thead.map((_itm, _idx) => (
                            <th key={_idx}>{_itm}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.tbody.map((_itm, _idx) => (
                        <tr key={_idx}>
                            {
                                _itm.map((_contentItm, _contentIdx) => (
                                    <td className={_contentItm.style} key={_contentIdx}>
                                        {_contentItm.content}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}