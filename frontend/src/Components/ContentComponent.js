import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Pages/Home'


const ContentComponent = () => {
    return (
        <Switch>
            <RestrictRoute exact to='/'>
                <Home />
            </RestrictRoute>
            <PublicRoute exact to='/login'>
                <h1>login</h1>
            </PublicRoute>
        </Switch>

    )
}



export default ContentComponent;

const loggedIn = true

const RestrictRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() =>
                loggedIn ? children : <Redirect to='/login' />
            }
        />
    )
}

const PublicRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={() => !loggedIn ? children : <Redirect to='/' />}
        />
    )
}