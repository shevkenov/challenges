import React, { useEffect, useState }  from 'react'

import TableHeader from './TableHeader';
import StickyHeader from '../hook/StickyHeader';

function Table() {
    const { isSticky, tableRef } = StickyHeader();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((data) => data.json())
            .then((data) => {

                setCountries(data)
            })
    }, [])

    return (
        <>
             {isSticky && (
                <table
                    className="sticky"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                >
                    <TableHeader />
                </table>
            )}
            <table ref={tableRef}>
                <TableHeader />
                <tbody>
                    {
                        countries && countries.map(item => (
                            <tr key={item.alpha3Code}>
                                <td className="country" >{item.name}</td>
                                <td>{item.alpha3Code}</td>
                                <td>{item.area}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;
