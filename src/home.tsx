import { useHistory } from 'react-router-dom'
import BlueShape from './assets/blue-shape.svg'
import RedShape from './assets/red-shape.svg'
import YellowShape from './assets/yellow-shape.svg'
import Button from './components/buttons/NavigationButton'

const Home = () => {

    const history = useHistory()

    const handleOnClickAddressLookup = () => {
        history.replace('/addresslookup')
    }

    const handleOnClickPostcodeLookup = () => {
        history.replace('/postcodelookup')
    }

    return(
        <div className="home-container">
            <div className="home-wrapper">
                <h1 className="main-title">Address Lookup</h1>
                <Button id="city-button" onClick={handleOnClickAddressLookup}>Search By City</Button>
                <Button id="postcode-button" onClick={handleOnClickPostcodeLookup}>Search By Postcode</Button>
                </div>
            <div className="home-inner-container"></div>
            <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="image" className="happy"></img>
            <img src={YellowShape} className="yellow-shape" />
            <img src={RedShape} className="red-shape" />
            <img src={BlueShape} className="blue-shape" />
        </div>
    )
}

export default Home