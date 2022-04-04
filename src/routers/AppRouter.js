import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { HomeScreen } from '../components/pages/HomeScreen';
import { ContactScreen } from '../components/legal/ContactScreen';
import { PDP } from '../components/product/PDP';
import { PLP } from '../components/product/PLP';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';
import { BlogScreen } from '../components/pages/BlogScreen';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <header>
                <Navbar />
            </header>
        </div>

        <div>
            <Switch>

                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/contact" component={ ContactScreen } />
                <Route exact path="/blog" component={ BlogScreen } />
                <Route exact path="/category/category-name" component={ PLP } />
                <Route exact path="/category/category-name/product-name" component={ PDP } />

                <Redirect to="/" />

            </Switch>
        </div>

        <div>
            <Footer />
        </div>
    </Router>
  )
}
