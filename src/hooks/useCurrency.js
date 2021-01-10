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

const SelectCurrency = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCurrency = (label, initialState, options) => {

    // Hook state
    const [state, setState] = useState(initialState)

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectCurrency
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">- Select -</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectCurrency>
        </Fragment>
    )

    // Return state, ui, interface, and fn that changes state
    return [state, Select, setState]
}

useCurrency.prototype = {
    label: PropTypes.string.isRequired,
    initialState: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default useCurrency