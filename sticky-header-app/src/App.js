import React, { useEffect, useState } from 'react';

import { HeaderTable } from './data'
import StickyHeader from './StickyHeader';

const App = () => {
    const { isSticky, tableRef } = StickyHeader();
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((data) => data.json())
            .then((data) => {

                setCountries(data)
            })
    }, [])

    const renderHeader = () => (
        <thead>
            <tr>
                {
                    HeaderTable.map((th) => <th key={th}>{th}</th>)
                }
            </tr>
        </thead>
    )

    return (
        <div>
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
                    {renderHeader()}
                </table>
            )}
            <table ref={tableRef}>
                {renderHeader()}
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
        </div>
    )
}

export default App;