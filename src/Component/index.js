import React, { Component } from 'react';
import Appbar from './AppBar/Appbar';
import Home from './Homepage/Home'
class PostComponent extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <Home />
            </div>
        )
    }
}
export default PostComponent