import React from 'react';
import ReactDOM from 'react-dom';
import Footer  from "./component/Footer"
import Navbar from "./component/Navbar"
import MainContent from "./component/MainContent"
import Header from "./component/Header"
import TodoItem from "./component/todolist/Todoitem"
import Props from "./component/Props"

import Product from "./component/Products"
import productsData from "./component/vschoolProducts"

import todoData from "./component/todolist/todosData"

function App(){

    const todoItems = todoData.map(item => <TodoItem item={item} key={item.id}/>)
    const productComponents = productsData.map(item => <Product product={item} key={item.id}/>)

  return (
      <div className="todo-list">

          <div>
              {todoItems}
          </div>


      {/*exercise- separate React object*/}

          <div>
              <Header/>
              <Navbar/>
              <MainContent/>
              <Footer />
          </div>

      {/*exercise - using props*/}
          <div className="props">
              <Props name="chung" url="google.com.hk" title="google"/>
              <Props name="Elvis" url="google.com.hk" title="Yahoo"/>
          </div>


      {/*exercose - map*/}
          {console.log(productComponents)}
          <div>
              {productComponents}
          </div>
      </div>



  )
}

export default App
