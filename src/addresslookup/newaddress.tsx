import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SubmitButton from '../components/buttons/FormButton'
import Button from '../components/buttons/NavigationButton'

const NewAddress = () => {
    // const [postcode, setPostcode] = useState('')
    const [results, setResults] = useState<any[]>([])
    const [state, setState] = useState({
        addressLineOne: '',
        addressLineTwo: '',
        addressLineThree: '',
        addressLineFour: '',
        locality: '',
        city: '',
        county: '',
        postcode: ''
    })

    const history = useHistory()
    // const { addressLineOne, addressLineTwo, addressLineThree, addressLineFour, locality, county, postcode } =  formInput

    const API_KEY = 'W7Ky26qT5EeUMsi0t1R0LA33168'

    // const handleSubmit = (e: any) => {
    //     e.preventDefault()
    //     // setFormInput(prevValues => {
    //     //     return {...prevValues, [postcode]: e.target.value,}
    //     // })
    //     setState({
    //         ...state,
    //         postcode: e.target.value
    //     })
    //     fetch(`https://api.getAddress.io/private-address/${state.postcode}?api-key=${API_KEY}`, {
    //         method: 'POST', 
    //         mode: 'cors',
    //         // credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'POST',
    //             "Access-Control-Allow-Headers": "*"
    //         },
    //         body: JSON.stringify({
    //             line1: state.addressLineOne,
    //             line2: state.addressLineTwo,
    //             line3: state.addressLineThree,
    //             line4: state.addressLineFour,
    //             locality: state.locality,
    //             townOrCity: state.city,
    //             county: state.county
    //         }),
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(response.error)
    //         } 
    //         response.json()
    //     })
    //     .then(data => {
    //     console.log('Success:', data);
    //     // setResults(data.addresses)
    //     })
    //     .catch((error) => {
    //     console.error('Error:', error);
    //     })
    // }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // setPostcode(e.target.value)
        setState({
            ...state,
            postcode: e.target.value
        })

        const getData = async () => {
            // const options = {
            //     method: 'POST', 
            //     mode: 'cors',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Methods': 'POST',
            //     "Access-Control-Allow-Headers": "*"
            // },
            // }
            try {
                // const res = await fetch(`https://api.getAddress.io/private-address/${state.postcode}?api-key=${API_KEY}`)
                const res = await fetch(`https://api.getAddress.io/private-address/${state.postcode}?api-key=${API_KEY}`, {mode: 'cors', method: 'POST'})
                const data = await res.json()
                console.log({data})
            } catch (err) {
                return err
            }
        }

        getData()
    }

    const makeAPICall = async () => {
        try {
          const response = await fetch('http://localhost:8000/', {mode:'cors'});
          const data = await response.json();
          console.log({ data })
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        makeAPICall();
      }, [])

    const handleOnChange = (e: any) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const returnHome = () => {
        history.replace('/')
    }

    return(
        <div className="new-address-container">
            <div className="new-address-inner-container-first"></div>
            <div className="new-address-inner-container-second"></div>
            <div className="new-address-wrapper">
                <h1 className="new-address-title">Add new address</h1>
                <div className="new-address-form">
                <label htmlFor="addressLineOne">Address Line 1</label>
                <input name="addressLineOne" type="text" id="addressLineOne" value={state.addressLineOne} onChange={handleOnChange}/>
                <label htmlFor="addressLineTwo">Address Line 2</label>
                <input name="addressLineTwo" type="text" id="addressLineTwo" value={state.addressLineTwo} onChange={handleOnChange}/>
                <label htmlFor="addressLineThree">Address Line 3</label>
                <input name="addressLineThree" type="text" id="addressLineThree" value={state.addressLineThree} onChange={handleOnChange}/>
                <label htmlFor="addressLineFour">Address Line 4</label>
                <input name="addressLineFour" type="text" id="addressLineFour" value={state.addressLineFour} onChange={handleOnChange}/>
                <label htmlFor="locality">Locality</label>
                <input name="locality" type="text" id="locality" value={state.locality} onChange={handleOnChange}/>
                <label htmlFor="city">Town or City</label>
                <input name="city" type="text" id="city" value={state.city} onChange={handleOnChange}/>
                <label htmlFor="county">County</label>
                <input name="county" type="text" id="county" value={state.county} onChange={handleOnChange}/>
                <label htmlFor="county">Postcode</label>
                <input name ="postcode" type="text" id="postcode" value={state.postcode} onChange={handleOnChange}/>
                {/* <input type="submit"/> */}
                <SubmitButton id="add-new-address" onClick={handleSubmit}>Add</SubmitButton>
            </div>
            </div>
            {/* TODO: add home icon */}
            <Button onClick={returnHome}>Back to home page</Button> 
        </div>
     
    )
}

export default NewAddress