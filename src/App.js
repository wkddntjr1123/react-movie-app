import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
import "./App.css"
function App(){
  return(
    <>
    <BrowserRouter>
    <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
      <Route path="/movie/:id" exact={true} component={Detail}></Route>
    </BrowserRouter>
    </>
  )
}

export default App