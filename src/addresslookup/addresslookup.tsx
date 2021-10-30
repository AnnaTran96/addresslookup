import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AsyncSelect from 'react-select/async'
import BlueShape from '../assets/blue-shape.svg'
import RedShape from '../assets/red-shape.svg'
import YellowShape from '../assets/yellow-shape.svg'
import Button from '../components/buttons/NavigationButton'

type OptionType = {
    id: string,
    value: string,
    label: string
}

const AddressLookUp = () => {

    const [selectedOption, setSelectedOption] = useState<OptionType>()
    const [state, setState] = useState({
        id: '',
        address: ''
    })
    
    const history = useHistory()
    const API_KEY = process.env.REACT_APP_API_KEY

    const loadOptions = async (inputText: string, callback: any) => {
        const res = await fetch(`https://api.getAddress.io/autocomplete/${inputText}?api-key=${API_KEY}`)
        const data = await res.json()
        callback(data.suggestions.map((suggestion: any) => ({
            id: suggestion.id,
            label: suggestion.address,
            value: suggestion.address,
        })))
    }

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        setState({
            ...state,
            id: selectedOption.id,
            address: selectedOption.value
        })
    }

    const splitAddress = state.address.split(',').map(line => <span>{line},<br/></span>)

    const returnHome = () => {
        history.replace('/')
    }

    const addNewAddress = () => {
        history.replace('/addnewaddress')
    }

    return(
        
        <div className="address-container">
            <div className="address-inner-container-first"></div>    
            <div className="address-inner-container-second"></div>
            <img src={YellowShape} className="yellow-shape" />
            <img src={RedShape} className="red-shape" />
            <img src={BlueShape} className="blue-shape" />
            <div className="address-wrapper">
                <h1 className="address-title">Search by city</h1>
                <AsyncSelect 
                    loadOptions={loadOptions}
                    onChange={handleChange}
                    value={selectedOption}
                    className="select"
                    placeholder="Search address by city"
                    isClearable
                />
                {selectedOption && 
                    <div className="address-search-result">
                        <h3>Address</h3>
                        {splitAddress}
                    </div>
                }
            </div>
            <Button id="home" onClick={returnHome}>Back to home page</Button>
            <Button id="new-address" onClick={addNewAddress}>Add new address</Button>
        </div>
    )
}

export default AddressLookUp