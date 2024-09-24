import React, { Component } from 'react';
import './Sunglass'
import Watch from '../Watch/Watch';
import { add, multiply } from '../Utils/Calculater';


class Sunglass extends Component {
    const first = 50;
    const secound = 100;
    const sum = add(fitst, secound);
    const multy - multiply(fitst, secound);
    render() {
        return (
            <div>
                <Watch></Watch>
            </div>
        );
    }
}

export default Sunglass;