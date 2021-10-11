import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TableData from '../../components/Table';
import { useSelector } from "react-redux"
import moment from "moment";
import SearchData from '../../components/Search';




function Home() {


    const dispatch = useDispatch();
    const { dataNews, dataCountries } = useSelector(state => state.covidDataReducer)
    const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered } = dataNews


    useEffect(() => {
        dispatch({ type: "FETCH_DATA_SAGA" })
    }, [])



    return (
        <div className="container">
            <div className="text-center">
                <h3> Covid - Data </h3>
                <h5 className="text-success">{moment(dataNews.Date).format("DD/MM/YYYY hh:mm")}</h5>
            </div>
            <h3>World news: </h3>
            <br />
            <ul>
                <li> NewConfirmed: <span className="text-danger">{NewConfirmed}</span>  </li>
                <li> TotalConfirmed:  <span className="text-danger">{TotalConfirmed}</span> </li>
                <li> NewDeaths:  <span className="text-danger">{NewDeaths}</span></li>
                <li> TotalDeaths:  <span className="text-danger">{TotalDeaths}</span></li>
                <li> NewRecovered:  <span className="text-danger">{NewRecovered}</span> </li>
                <li> TotalRecovered:  <span className="text-danger">{TotalRecovered}</span> </li>
            </ul>
            <SearchData />
            <TableData dataCountries={dataCountries} />
        </div>

    )
}

export default Home
