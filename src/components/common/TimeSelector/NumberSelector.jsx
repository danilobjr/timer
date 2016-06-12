import React, { Component } from 'react';
import { IconAngleUp, IconAngleDown } from 'components/common';

export class NumberSelector extends Component {
    render() {
        return (
            <div className="number-selector">
                <div className="slider">
                    <div className="scroller">
                        <ul className="numbers">
                            <li className="number">00</li>
                            <li className="number">01</li>
                            <li className="number">02</li>
                            <li className="number">03</li>
                            <li className="number">04</li>
                            <li className="number">05</li>
                            <li className="number">06</li>
                            <li className="number">07</li>
                            <li className="number">08</li>
                            <li className="number">09</li>
                            <li className="number">10</li>
                            <li className="number">11</li>
                            <li className="number">12</li>
                            <li className="number">13</li>
                            <li className="number">14</li>
                            <li className="number">15</li>
                            <li className="number">16</li>
                            <li className="number">17</li>
                            <li className="number">18</li>
                            <li className="number">19</li>
                            <li className="number">20</li>
                            <li className="number">21</li>
                            <li className="number">22</li>
                            <li className="number">23</li>
                        </ul>
                    </div>
                    <button className="btn -up"><IconAngleUp /></button>
                    <button className="btn -down"><IconAngleDown /></button>
                </div>
                <span className="label">hours</span>
            </div>
        );
    }
}