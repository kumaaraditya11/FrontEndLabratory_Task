import { useState } from 'react'
import './App.css'

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container">
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <h2>Submitted Details</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <ContactForm />
  )
}

export default App