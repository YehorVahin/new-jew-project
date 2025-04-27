import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items: [
        {
          id: 1,
          title: "Chair",
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'chairs',
          price: '20000 UAH'
        },
        {
          id: 2,
          title: "Chair",
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'chairs',
          price: '21000 UAH'
        },
        {
          id: 3,
          title: "Sofa",
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'sofas',
          price: '22000 UAH'
        },
        {
          id: 4,
          title: "Table",
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'tables',
          price: '23000 UAH'
        },
        {
          id: 5,
          title: "Wall-lite",
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'lights',
          price: '24000 UAH'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
 render(){
  
  return (
    <div className='wrapper'>
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory}/>
     <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
     <Footer/>
    </div>
  )
}

chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({currentItems: this.state.items.filter(el => el.category === category)})
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
