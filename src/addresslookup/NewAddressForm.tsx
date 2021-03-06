import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
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
        .required('This is required'),
    city: Yup.string()
        .min(2, 'Too short')
        .required('This is required'),
    county: Yup.string()
        .min(2, 'Too short')
        .required('This is required'),
    postcode: Yup.string()
        .required('This is required'),
})

const initialValues: NewAddressViewValues = {
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

    const [error, setError] = useState<String>('')
    const history = useHistory()

    const handleSubmit = async (values: NewAddressViewValues) => {
        const { addressLineOne, addressLineTwo, addressLineThree, addressLineFour, city, county, locality, postcode } = values;
        const body = {
            addressLineOne: addressLineOne,
            addressLineTwo: addressLineTwo,
            addressLineThree: addressLineThree,
            addressLineFour: addressLineFour,
            city: city,
            county: county,
            locality: locality,
            postcode: postcode
        }
        
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(body)
        }

        fetch("http://localhost:5000/createnewaddress", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
         .then(res => res.json())
         .then(data => console.log(data))
         .catch(err => {
            setError(prevState => ({
                ...prevState,
                error
            }))
            console.error(err)
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
            {error ? (
                <div className="error-message status-message">
                    {error.error.message}. Please try again
                </div>
            ) : null   
            }
            <Button id="home-button" onClick={returnHome}>Back to home page</Button> 
        </div>
     
    )
}

export default NewAddress