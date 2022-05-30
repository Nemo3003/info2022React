import './cards.css';
import Noticia from './Noticia';
import Expenseltem from './Expenseltem';

export default function Practice() {
  const expenses = [
    { title : 'Car Insurance', amount : 200, date : new Date(2020,7,14) },
    { title : 'Rent', amount : 1000 , date : new Date(2022,9,11)},
    { title : 'Coffee', amount : 2 , date : new Date(2023,6,14)},
    { title : 'Restaurant', amount : 10, date : new Date(2021,4,14) },
    { title : 'Gym', amount : 50 , date : new Date(2024,2,14)}
  ]

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Noticia />
      <Expenseltem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></Expenseltem>
      <Expenseltem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></Expenseltem>
      <Expenseltem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></Expenseltem>
      <Expenseltem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></Expenseltem>
      <Expenseltem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}></Expenseltem>
    </div>
  );
}
