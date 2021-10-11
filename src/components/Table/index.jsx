import React from 'react'
import { Table } from 'antd';


const columns = [
    {
        title: 'CountryCode',
        dataIndex: 'CountryCode',
        key: 'CountryCode',
    },
    {
        title: 'Country',
        dataIndex: 'Country',
        key: 'Country',
    },
    {
        title: 'NewConfirmed',
        dataIndex: 'NewConfirmed',
        key: 'NewConfirmed',
    },
    {
        title: 'TotalConfirmed',
        dataIndex: 'TotalConfirmed',
        key: 'TotalConfirmed',
    },
    {
        title: 'NewDeaths',
        dataIndex: 'NewDeaths',
        key: 'NewDeaths',
    },
    {
        title: 'TotalDeaths',
        dataIndex: 'TotalDeaths',
        key: 'TotalDeaths',
    },
    {
        title: 'NewRecovered',
        dataIndex: 'NewRecovered',
        key: 'NewRecovered',
    },
    {
        title: 'TotalRecovered',
        dataIndex: 'TotalRecovered',
        key: 'TotalRecovered',
    },
];

function TableData(props) {

    return (
        <div className="mt-3">
            <Table columns={columns} dataSource={props.dataCountries}  />
        </div>
    )
}

export default TableData
