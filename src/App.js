import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alomgir', 'Salmansha', 'Bappi', 'shuvo']
  const products = [{ name: 'photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$6.99' }, { name: 'Primiere Element', price: '$249.99' }]

  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);


  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>

        {/* counter */}
        <Counter></Counter>

        <Users></Users>


        {/* nayok list */}
        <h2>nayok names</h2>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <h2>product names </h2>
          {
            products.map(product => <li>{product.name}</li>)
          }

        </ul>

        {
          products.map(x => <Products product={x}></Products>)
        }



        <Person name="Munna" job="Doctor"> </Person>
        <Person name="Masum" job="Teacher"> </Person>
        <Person name="Masum" job="Teacher"> </Person>
        <Person name="Masum" job="Teacher"> </Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCounter] = useState(10);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCounter(count - 1)}>Decrease</button>
      <button onClick={() => setCounter(count + 1)}>Increase</button>

    </div>
  )
}
function Users() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users :  {users.length} </h3>

      <ul>
        {
          console.log(users)

        }
        {
          users.map(x => <li>{x.email}</li>)
        }
      </ul>

    </div>
  )


}

function Products(props) {

  const ProductStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const { name, price } = props.product;
  // console.log('this is convert name ' + name);
  // console.log(price);
  return (
    <div style={ProductStyle}>
      <h3> {name} </h3>
      <h5>{price}</h5>
      <button>Buy Now </button>
    </div>
  )

}
function Person(props) {
  return (
    <div style={{ border: '2px solid red', width: '700px' }}>
      <h3>My name : {props.name}</h3>
      <h3>My Prpfesstion : {props.job}</h3>
    </div>
  )
}

export default App;
