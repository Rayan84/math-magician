//import { getNodeText } from '@testing-library/dom';
import React from 'react';
//import React, {useState} from 'react';
import '../index.css';
import Calculate from '../logic/calculate';
import '../logic/operate';


class Calculator extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        total: 0,
        next: '',
        operation: '',
      };
    }
    click = (event) => {
      this.setState((obj) => Calculate(obj, event.target.textContent))
    }
       
    render(){
        return <div>
            <div className="calculator-container">
              <table>
                  <tbody>
                    <tr>
                      <td id="display" colSpan="4">{this.total}</td>
                    </tr>                  
                    <tr>
                      <td className="background-color-grey" onClick={ this.click }>AC</td>
                      <td className="background-color-grey" onClick={ this.click }>+/-</td>
                      <td className="background-color-grey" onClick={ this.click }>%</td>
                      <td className="background-color-orange" onClick={ this.click }>÷</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" onClick={ this.click }>7</td>
                      <td className="background-color-grey" onClick={ this.click }>8</td>
                      <td className="background-color-grey" onClick={ this.click }>9</td>
                      <td className="background-color-orange" onClick={ this.click }>x</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" onClick={ this.click }>4</td>
                      <td className="background-color-grey" onClick={ this.click }>5</td>
                      <td className="background-color-grey" onClick={ this.click }>6</td>
                      <td className="background-color-orange" onClick={ this.click }>-</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" onClick={ this.click }>1</td>
                      <td className="background-color-grey" onClick={ this.click }>2</td>
                      <td className="background-color-grey" onClick={ this.click }>3</td>
                      <td className="background-color-orange" onClick={ this.click }>+</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" colSpan="2" onClick={ this.click }>0</td>
                      <td className="background-color-grey" onClick={ this.click }>.</td>
                      <td className="background-color-orange" onClick={ this.click }>=</td>
                    </tr>
                  </tbody>
            </table>
          </div>
        </div>
    }
}

export default Calculator