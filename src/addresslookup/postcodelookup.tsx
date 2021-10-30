import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AsyncSelect from 'react-select/async'
import BlueShape from '../assets/blue-shape.svg'
import RedShape from '../assets/red-shape.svg'
import YellowShape from '../assets/yellow-shape.svg'
import Button from '../components/buttons/NavigationButton'
import './styles.scss'

// TODO: add unit tests

type OptionType = {
    value: string,
    label: string
}

const PostcodeLookup = () => {

    const [state, setState] = useState({
        lineOne: '',
        lineTwo: '',
        lineThree: '',
        lineFour: '',
        town: '',
        country: '',
        postcode: '',
    })
    const [selectedOption, setSelectedOption] = useState<OptionType>()

    const history = useHistory()
    const API_KEY = process.env.REACT_APP_API_KEY

    const loadOptions = async (inputText: string, callback: any) => {
        const res = await fetch(`https://api.getAddress.io/find/${inputText}?api-key=${API_KEY}&expand=true`)
        const data = await res.json()
        setState({
            ...state,
            postcode: data.postcode
        })
        callback(data.addresses.map((suggestion: any) => ({
            label: suggestion.formatted_address.filter((a: string[]) => a).join(', '),
            value: suggestion.formatted_address.filter((a: string[]) => a).join(', '),
            lineOne: suggestion.line_1, 
            lineTwo: suggestion.line_2, 
            lineThree: suggestion.line_3, 
            lineFour: suggestion.line_4, 
            town: suggestion.town_or_city, 
            country: suggestion.country,
        })))
    }

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
        setState({
            ...state,
                lineOne: selectedOption.lineOne,
                lineTwo: selectedOption.lineTwo,
                lineThree: selectedOption.lineThree,
                lineFour: selectedOption.lineFour,
                town: selectedOption.town,
                country: selectedOption.country,
        })
        setSelectedOption({
            value: '',
            label: ''
        })
    }

    const returnHome = () => {
        history.replace('/')
    }

    const addNewAddress = () => {
        history.replace('/addnewaddress')
    }   

    return(
        
        <div className="postcode-container">
            <div className="postcode-inner-container-first"></div>
            <div className="postcode-inner-container-second"></div>
            <img src={YellowShape} className="yellow-shape" />
            <img src={RedShape} className="red-shape" />
            <img src={BlueShape} className="blue-shape" />
            <div className="postcode-wrapper">
                <h1 className="postcode-title">Search by postcode</h1>
                <AsyncSelect 
                    loadOptions={loadOptions}
                    onChange={handleChange}
                    value={selectedOption}
                    className="select"
                    placeholder="Search address by postcode"
                />
                {selectedOption &&
                <div className="address">
                    <p>Address Line 1: {state.lineOne}</p>
                    {state.lineTwo.length > 0 &&
                            <p>Address Line 2: {state.lineTwo}</p>
                    }
                    {state.lineThree.length > 0 &&
                            <p>Address Line 3: {state.lineThree}</p>
                    }
                    <p>Town: {state.town}</p>
                    <p>Country: {state.country}</p>
                    <p>Postcode: {state.postcode}</p>
                </div>
                }
            </div>
            <Button onClick={returnHome}>Back to home page</Button> 
            <Button id="new-address" onClick={addNewAddress}>Add new address</Button>
        </div>
    )
}

export default PostcodeLookup