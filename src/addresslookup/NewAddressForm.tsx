import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import BlueShape from '../assets/blue-shape.svg';
import RedShape from '../assets/red-shape.svg';
import YellowShape from '../assets/yellow-shape.svg';
import Button from '../components/buttons/NavigationButton';


export interface NewAddressViewValues {
    addressLineOne: string
    addressLineTwo: string
    addressLineThree: string
    addressLineFour: string
    city: string
    county: string
    locality: string
    postcode: string
}

const validationSchema = Yup.object().shape({
    addressLineOne: Yup.string()
        .min(2, 'Too short')
        .required('This is required. Please enter the address'),
    city: Yup.string()
        .required('This is required. Please enter the city'),
    county: Yup.string()
        .required('This is required. Please enter the county'),
    postcode: Yup.string()
        .required('This is required. Please enter the postcode'),
})

const initialValues : NewAddressViewValues = {
    addressLineOne: '',
    addressLineTwo: '',
    addressLineThree: '',
    addressLineFour: '',
    city: '',
    county: '',
    locality: '',
    postcode: ''
}

const NewAddress = () => {

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
            try {
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
            <img src={YellowShape} className="yellow-shape" />
            <img src={RedShape} className="red-shape" />
            <img src={BlueShape} className="blue-shape" />
            <Formik<NewAddressViewValues>
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ errors, touched }: any) => (
                    <Form className="formik-form">
                        <label htmlFor="addressLineOne" className="formik-label">Address Line 1</label>
                        <Field name="addressLineOne" className="formik-field"/>
                        {errors.addressLineOne && touched.addressLineOne ? (
                            <div className="formik-error">{errors.addressLineOne}</div>
                        ) : null}
                        <label htmlFor="addressLineTwo" className="formik-label">Address Line 2</label>
                        <Field name="addressLineTwo" className="formik-field"/>
                        <label htmlFor="addressLineThree" className="formik-label">Address Line 3</label>
                        <Field name="addressLineThree" className="formik-field"/>
                        <label htmlFor="addressLineFour" className="formik-label">Address Line 4</label>
                        <Field name="addressLineFour" className="formik-field"/>
                        <label htmlFor="city" className="formik-label">City</label>
                        <Field name="city" className="formik-field"/>
                        {errors.city && touched.city ? (
                            <div className="formik-error">{errors.city}</div>
                        ) : null}
                        <label htmlFor="county" className="formik-label">County</label>
                        <Field name="county" className="formik-field"/>
                        {errors.county && touched.county ? <div className="formik-error">{errors.county}</div> : null}
                        <label htmlFor="postcode" className="formik-label">Postcode</label>
                        <Field name="postcode" className="formik-field"/>
                        {errors.postcode && touched.postcode ? <div className="formik-error">{errors.postcode}</div> : null}
                        <button type="submit" className="form-button">Submit</button>
                    </Form>
                )}
            </Formik>
            {/* TODO: add home icon */}
            <Button onClick={returnHome}>Back to home page</Button> 
        </div>
     
    )
}

export default NewAddress