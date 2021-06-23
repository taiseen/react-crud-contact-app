import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header';
import Contact_Add from './Components/Contact_Add';
import Contact_List from './Components/Contact_List';
import Contact_Info from './Components/Contact_Info';
import PageNotFound from './Components/PageNotFound';
import ContactContextProvider from './Components/Context/ContactContext';
import Contact_Edit from './Components/Contact_Edit';

// 12-Jun-2021 

const App = () => {

    return (
        <div className="ui container">
            <ContactContextProvider>
                <Router >
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Contact_List} />
                        <Route path="/contact/:id" component={Contact_Info} />
                        <Route path="/contact_add" component={Contact_Add} />
                        <Route path="/contact_edit" component={Contact_Edit} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Router>
            </ContactContextProvider>
        </div>
    );
};

export default App;