import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [counterA, setCounterA] = useState(10);
  const [counterB, setCounterB] = useState(10);



  return (
      <div className="App">
        <h1>Big Game</h1>
        <br/>
        <div className='header'>
          <div className='playerA'>
            <button onClick={() => setCounterA((prevCount) => prevCount + 1)}>+</button>
            <h4>{counterA}</h4>
            <button onClick={() => setCounterA((prevCount) => prevCount - 1)}>{counterA < 0 ? "Neg" : "-"}</button>
          </div>

          <div className='playerB'>
            <button onClick={() => setCounterB((prevCount) => prevCount + 1)}>+</button>
            <h4>{counterB}</h4>
            <button onClick={() => setCounterB((prevCount) => prevCount - 1)}>{counterB < 0 ? "Neg" : "-"}</button>
          </div>
        </div>

      <table className='grid'>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
        <tr>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
        </tr>
        <tr>
          <th>12</th>
          <th>13</th>
          <th>14</th>
          <th>15</th>
          <th>16</th>
        </tr>
        <tr>
          <th>17</th>
          <th>18</th>
          <th>19</th>
          <th>20</th>
          <th>21</th>
        </tr>
        <tr>
          <th>22</th>
          <th>23</th>
          <th>24</th>
          <th>25</th>
          <th>26</th>
        </tr>
      </table>
      </div>

  );
}




export default App;
