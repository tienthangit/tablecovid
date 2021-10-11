import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux"
import { Input, DatePicker } from 'antd';
import ModalFilter from '../Modal';
const { Search } = Input;

function SearchData() {

    const [state, setstate] = useState({
        dateFrom: "",
        dateTo: ""
    })

    const dispatch = useDispatch();
    const refSearch = useRef(null)

    const onSearch = e => {
        let value = e.target.value

        if (refSearch.current)
        {
            clearTimeout(refSearch.current)
        }
        refSearch.current = setTimeout(() => {
            dispatch({ type: "SET_ARR_FILTER", payload: value })
        }, 400)
    }


    function onChangeFrom(date, dateString) {
        // console.log(date, dateString);
        setstate({
            ...state,
            dateFrom: dateString
        })
    }

    function onChangeTo(date, dateString) {
        setstate({
            ...state,
            dateTo: dateString
        })
    }

    const handleFilter = () => {
        dispatch({ type: "OPEN_MODAL" })
        dispatch({ type: "FILTER_DATA_SAGA", payload: state })
    }

    return (
        <div>
            <div className="row  my-3">
                <div className="date__from col-2">
                    <span> From: </span>
                    <DatePicker onChange={onChangeFrom} />
                </div>
                <div className="date__to col-3">
                    <span> To: </span>
                    <DatePicker onChange={onChangeTo} />
                    <button onClick={handleFilter} className="btn btn-success mx-3"> Filter </button>
                    <ModalFilter />
                </div>
            </div>
            <Search style={{ width: '50%' }} placeholder="Enter name countries" allowClear onChange={onSearch} enterButton />
        </div>
    )
}

export default SearchData
