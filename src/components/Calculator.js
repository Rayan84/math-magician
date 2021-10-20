import React from 'react';
import '../index.css';
class Calculator extends React.Component {
    render(){
        return <div>
            <div className="calculator-container">
              <table>
                  <tbody>
                    <tr>
                      <td id="display" colSpan="4">0</td>
                    </tr>                  
                    <tr>
                      <td className="background-color-grey">AC</td>
                      <td className="background-color-grey">+/-</td>
                      <td className="background-color-grey">%</td>
                      <td className="background-color-orange">÷</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey">7</td>
                      <td className="background-color-grey">8</td>
                      <td className="background-color-grey">9</td>
                      <td className="background-color-orange">X</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey">4</td>
                      <td className="background-color-grey">5</td>
                      <td className="background-color-grey">6</td>
                      <td className="background-color-orange">-</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey">1</td>
                      <td className="background-color-grey">2</td>
                      <td className="background-color-grey">3</td>
                      <td className="background-color-orange">+</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" colSpan="2">0</td>
                      <td className="background-color-grey">.</td>
                      <td className="background-color-orange">=</td>
                    </tr>
                  </tbody>
            </table>
          </div>
        </div>
    }
}

export default Calculator