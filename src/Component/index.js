import React, { Component } from 'react';
import Appbar from './AppBar/Appbar';
import Home from './Homepage/Home';
import Footer from "./Footer/Footer"
class PostComponent extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <Home />
                <Footer />
            </div>
        )
    }
}
export default PostComponent