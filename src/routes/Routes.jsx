import {BrowserRouter as Router , Route} from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

const Routes = () => {
    return (
        <Router>
            <Route exact path ="/" element = {<SignUp />} />
            <Route exact path ="/login" element = {<Login />} />
        </Router>
    )
}

export default Routes;
