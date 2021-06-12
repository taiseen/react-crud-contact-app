import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';
import Contact_Add from './Components/Contact_Add';
import Contact_List from './Components/Contact_List';
import ContactContextProvider from './Components/Context/ContactContext';


const App = () => {

    return (
        <div className="ui container">
            <ContactContextProvider>
                <Router >
                    <Header />
                    <Contact_Add />
                    <Contact_List />

                    <Switch>
                        <Route path="/home">

                        </Route>

                        <Route exact path="/">

                        </Route>

                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Router>
            </ContactContextProvider>
        </div>
    );
};

export default App;