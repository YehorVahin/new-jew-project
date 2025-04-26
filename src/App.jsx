import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "Ring",
          img: 'ring.png',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '20000'
        },
        {
          id: 2,
          title: "Ring",
          img: 'ring.png',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '21000'
        },
        {
          id: 3,
          title: "Ring",
          img: 'ring.png',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '22000'
        },
        {
          id: 4,
          title: "Ring",
          img: 'ring.png',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '23000'
        },
        {
          id: 5,
          title: "Ring",
          img: 'ring.png',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '24000'
        },
        {
          id: 6,
          title: "Ring",
          img: 'ring.png',
          desc: 'Lorem ipsum dolor sit amet, consetetur adipisicing',
          category: 'rings',
          price: '25000'
        },
      ]
    }
  }
 render(){
  
  return (
    <div className='wrapper'>
     <Header/>
     <Items items={this.state.items}/>
     <Footer/>
    </div>
  )
}
}

export default App
