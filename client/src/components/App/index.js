import React from 'react'
import Homepage from '../Homepage'
import Login from '../Login'
import Register from '../Register'
import Dashboard from '../Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />  {/* resets the style accross brower */}
            <Router> {/* from react-router-dom, allow you to add path */}
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                </Switch>
            </Router>
           
        </MuiThemeProvider>
    )
}