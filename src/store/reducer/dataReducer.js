
const initialState = {
    dataNews: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: ''
    },
    dataCountries: [],
    dataCountriesDefault: [],
    dataFilter: []
}

const covidDataReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {

        case 'SET_DATA':
            state.dataNews = payload.Global
            state.dataCountries = payload.Countries
            state.dataCountriesDefault = payload.Countries
            return { ...state }
        case 'SET_ARR_FILTER':
            state.dataCountries = state.dataCountriesDefault.filter(item => item.Country.toLowerCase() === payload.toLowerCase())
            if (payload === "")
            {
                state.dataCountries = state.dataCountriesDefault
            }
            return { ...state }
        case 'SET_DATA_FILTER':
            state.dataFilter = payload
            return { ...state }
        default:
            return state
    }
}

export default covidDataReducer