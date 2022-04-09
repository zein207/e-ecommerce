import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { HomeScreen } from '../components/pages/HomeScreen';
import { ContactScreen } from '../components/legal/ContactScreen';
import { PDP } from '../components/product/PDP';
import { PLP } from '../components/product/PLP';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';
import { BlogScreen } from '../components/pages/BlogScreen';
import { MyAccountScreen } from '../components/pages/MyAccountScreen';
import { WishlistScreen } from '../components/pages/WishlistScreen';

export const AppRouter = () => {
  return (
    <Router>
        <div style={{ position: 'relative' }}>
            <header>
                <Navbar />
            </header>
        </div>

        <div style={{ marginTop: '56px' }}>
            <Switch>

                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/contact" component={ ContactScreen } />
                <Route exact path="/blog" component={ BlogScreen } />
                <Route exact path="/my-account" component={ MyAccountScreen } />
                <Route exact path="/wishlist" component={ WishlistScreen } />
                <Route exact path="/category/category-name" component={ PLP } />
                <Route exact path="/category/category-name/product-name" component={ PDP } />

                <Redirect to="/" />

            </Switch>
        </div>

        <footer>
            <Footer />
        </footer>
    </Router>
  )
}
