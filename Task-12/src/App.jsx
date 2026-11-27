import './App.css'

function Header() {
  return (
    <div>
      <h1>My React Page</h1>
    </div>
  )
}

function PersonDetails() {
  let name = "Aditya Kumar"
  let age = 19
  let address = "Mathura, Uttar Pradesh"
  let food = "Chole Bhature"

  return (
    <>
      <h2>Personal Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <p>Favourite Food: {food}</p>
    </>
  )
}

function HelloWorld() {
  return (
    <h2>Hello World!</h2>
  )
}

function Footer() {
  return (
    <h3>Created by Aditya Kumar</h3>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <PersonDetails />
      <hr />
      <HelloWorld />
      <hr />
      <Footer />
    </div>
  )
}

export default App