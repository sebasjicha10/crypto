import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Error from "./Error"
import useCurrency from "../hooks/useCurrency"
import useCrypto from "../hooks/useCrypto"
import axios from 'axios'


const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Form = ({setCurrency, setCrypto}) => {

    // Crypto List State
    const [crytoList, setCrytoList] = useState([]) 
    const [error, setError] = useState(false)

    const CURRENCIES = [
        {code: "USD", name: "United States Dollar"}, 
        {code: "MXN", name: "Mexican Peso"}, 
        {code: "EUR", name: "Euro"}, 
        {code: "GBP", name: "Pound Sterling"},
        {code: "CRC", name: "Costa Rican Colon"},
    ]

    // Use useCurrency custom hook
    const [currency, SelectCurrencies] = useCurrency("Choose your Currency", "", CURRENCIES)

    // Use useCrypto custom hook
    const [crypto, SelectCrypto] = useCrypto("Choose your Crypto", "", crytoList)

    // Call the API
    useEffect(() => {
        const callAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const result = await axios.get(url)
            setCrytoList(result.data.Data)
        }
        callAPI()
    }, [])

    // On Submit
    const getPrice = e => {
        e.preventDefault()

        // Validate both fields
        if(currency === "" || crypto === "") {
            setError(true)
            return
        }

        // Send data to main component
        setError(false)
        setCurrency(currency)
        setCrypto(crypto)
    }

    return (  
        <form
            onSubmit={getPrice}
        >
            {error ? <Error message="All fields are mandatory" /> : null}

            <SelectCurrencies />
            <SelectCrypto />
            <Button 
                type="submit"
                value="Calculate"
            />
        </form>
    )
}

Form.prototype = {
    setCurrency: PropTypes.func.isRequired,
    setCrypto: PropTypes.func.isRequired
}
 
export default Form