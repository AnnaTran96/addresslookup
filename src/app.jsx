import { Route, Switch } from 'react-router-dom'
import AddressLookUp from './addresslookup/addresslookup'
import NewAddress from './addresslookup/newaddress'
import PostcodeLookup from './addresslookup/postcodelookup'
import Home from './home'
import './styles.scss'

const App = () => {

    // const API_KEY = process.env.REACT_APP_API_KEY;
    const API_KEY = 'pGTmtTsS5EGNm5Bpga2Bdg33168'

    return (
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addresslookup" component={AddressLookUp} />
            <Route exact path="/postcodelookup" component={PostcodeLookup} />
            <Route exact path="/addnewaddress" component={NewAddress} />
        </Switch>
        </>
    )
}

export default App