import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title: "Chair",
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '20000 UAH'
        },
        {
          id: 2,
          title: "Chair",
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '21000 UAH'
        },
        {
          id: 3,
          title: "Sofa",
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '22000 UAH'
        },
        {
          id: 4,
          title: "Table",
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '23000 UAH'
        },
        {
          id: 5,
          title: "Wall-lite",
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '24000 UAH'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
 render(){
  
  return (
    <div className='wrapper'>
     <Header orders={this.state.orders}/>
     <Items items={this.state.items} onAdd={this.addToOrder}/>
     <Footer/>
    </div>
  )
}
addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el => {
    if (el.id === item.id) 
      isInArray = true
    
  })
    if (!isInArray) {
      this.setState({orders:[...this.state.orders, item]})
    }
}
}

export default App
