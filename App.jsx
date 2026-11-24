import './App.css'

function Header(){
  return(
    <div className="header">
      <h1>Header component</h1>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer">
      <h1>Footer component</h1>
    </div>
  )
}

function PersonDetails(){
  const name = "Aditya"
  const age = 19

  return(
    <div className="person">
      <h2>Person Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function App(){
  const a = 10
  const b = 20

  return(
    <div className="container">
      <Header />

      <h1>Hello World</h1>

      <div className="dynamic">
        <h2>Dynamic Expressions</h2>
        <p>Addition: {a + b}</p>
        <p>Multiplication: {a * b}</p>
      </div>

      <PersonDetails />

      <Footer />
    </div>
  )
}

export default App