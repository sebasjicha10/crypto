import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"


const Result = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`

const Information = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`

const Quote = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`

const Price = ({result}) => {
    if(Object.keys(result).length === 0) return null
    return ( 
        <Result>
            <Quote>The price is: <span>{result.PRICE}</span></Quote>
            <Information>Max day: <span>{result.HIGHDAY}</span></Information>
            <Information>Min day: <span>{result.LOWDAY}</span></Information>
            <Information>24 Hour Variation: <span>{result.CHANGEPCT24HOUR}</span></Information>
            <Information>Last updated: <span>{result.LASTUPDATE}</span></Information>
        </Result>
    )
}

Price.prototype = {
    result: PropTypes.object.isRequired
}
 
export default Price