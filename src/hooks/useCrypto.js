import React, {Fragment, useState} from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"


const Label = styled.label`
    font-family: "Bebas Neue", cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const SelectCrypto = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCrypto = (label, initialState, options) => {

    // Hook state
    const [state, setState] = useState(initialState)

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectCrypto
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="MXN">- Select -</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </SelectCrypto>
        </Fragment>
    )

    // Return state, ui, interface, and fn that changes state
    return [state, Select, setState]
}

useCrypto.prototype = {
    label: PropTypes.string.isRequired,
    initialState: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired
}

export default useCrypto