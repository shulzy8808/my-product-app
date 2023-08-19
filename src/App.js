import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Description from './components/Description';
import Name from './components/Name';
import Price from './components/Price';
import Image from './components/Image';
import { product } from './product';
import { Card } from 'react-bootstrap';

function App() {

  const firstName = "Nabil"
  return (
    <div className="App">
      <div className="container mt-4">
      <Card className="mx-auto" style={{ maxWidth: '500px'}}>
        <Card.Body>
        <Image Image={product.Image} />
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p className="text-center mt-3">Hello, {firstName || 'there'}</p>
      {firstName && <Image Image={product.Image} />}
      </div>
    </div>
  );
}

export default App;
