import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'antd'
import moment from 'moment'

const columns = [
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
        title: 'NewRecovered',
        dataIndex: 'NewRecovered',
        key: 'NewRecovered',
    },
    {
        title: 'TotalRecovered',
        dataIndex: 'TotalRecovered',
        key: 'TotalRecovered',
    },
    {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
        render: (text, record, index) => {
            return <span key={index}> {moment(text).format('YYYY/MM/DD')} </span>
        }
    },

];


function ModalFilter() {

    const dispatch = useDispatch();
    const isStatus = useSelector(state => state.modalReducer.isStatus)
    const dataFilter = useSelector(state => state.covidDataReducer.dataFilter)


    const handleOk = () => {
        dispatch({ type: "CANCEL_MODAL" })
    };

    const handleCancel = () => {
        dispatch({ type: "CANCEL_MODAL" })
    };


    return (
        <>
            <Modal title="World covid news" width={1000} visible={isStatus} onOk={handleOk} onCancel={handleCancel}>
                <Table columns={columns} dataSource={dataFilter} />
            </Modal>
        </>
    )
}

export default ModalFilter
