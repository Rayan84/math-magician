//import React from 'react';
import React, { useState } from "react";
import '../index.css';
import calculate from '../logic/calculate';
import '../logic/operate';


 function Calculator () {
  const [calculatorState, setCalculatorState ] = useState (
    {
      total: null,
      next: null,
      operation: null
    }
  );
  
  const handleClick = (event) => {
     const object = calculate(calculatorState, event.target.textContent);
     setCalculatorState(object) }
   
      let output;

        if (calculatorState.total || calculatorState.next || calculatorState.operation){
          output = [calculatorState.total, ' ', calculatorState.operation, ' ', calculatorState.next];
          output.map(item => item !== null);

        }else{
          output = 0;
        }
      
        return <div>
            <div className="calculator-container">
              <table>
                  <tbody>
                    <tr>
                      <td id="display" colSpan="4">{ output }</td>
                    </tr>                  
                    <tr>
                      <td className="background-color-grey" onClick={ handleClick }>AC</td>
                      <td className="background-color-grey" onClick={ handleClick }>+/-</td>
                      <td className="background-color-grey" onClick={ handleClick }>%</td>
                      <td className="background-color-orange" onClick={ handleClick }>÷</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" onClick={ handleClick }>7</td>
                      <td className="background-color-grey" onClick={ handleClick }>8</td>
                      <td className="background-color-grey" onClick={ handleClick }>9</td>
                      <td className="background-color-orange" onClick={ handleClick }>x</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" onClick={ handleClick }>4</td>
                      <td className="background-color-grey" onClick={ handleClick }>5</td>
                      <td className="background-color-grey" onClick={ handleClick }>6</td>
                      <td className="background-color-orange" onClick={ handleClick }>-</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" onClick={ handleClick }>1</td>
                      <td className="background-color-grey" onClick={ handleClick }>2</td>
                      <td className="background-color-grey" onClick={ handleClick }>3</td>
                      <td className="background-color-orange" onClick={ handleClick }>+</td>
                    </tr>
                    <tr>
                      <td className="background-color-grey" colSpan="2" onClick={ handleClick }>0</td>
                      <td className="background-color-grey" onClick={ handleClick }>.</td>
                      <td className="background-color-orange" onClick={ handleClick }>=</td>
                    </tr>
                  </tbody>
            </table>
          </div>
        </div>
    
}

export default Calculator