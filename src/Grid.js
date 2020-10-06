import React, { Component } from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

class Grid extends Component {
    render() {
        return (
            <div className="w3-row-padding">
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default Grid
