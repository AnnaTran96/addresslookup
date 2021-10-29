import { Route, Switch } from 'react-router-dom'
import AddressLookUp from './addresslookup/AddressLookup'
import NewAddressForm from './addresslookup/NewAddressForm'
import PostcodeLookup from './addresslookup/PostcodeLookup'
import Home from './home'
import './styles.scss'

const App = () => {

    return (
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addresslookup" component={AddressLookUp} />
            <Route exact path="/postcodelookup" component={PostcodeLookup} />
            <Route exact path="/addnewaddress" component={NewAddressForm} />
        </Switch>
        </>
    )
}

export default App