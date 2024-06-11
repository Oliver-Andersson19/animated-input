import { useState } from 'react'
import AnimatedInput from './components/AnimatedInput.jsx'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    email: {
      content: "",
      active: false
    },
    repeatEmail: {
      content: "",
      active: false
    },
    password: {
      content: "",
      active: false
    },
  })
  
  const handleInputChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: {
          ...prevFormData[e.target.name],
          content: e.target.value
      }
    }));
  }


  return (
    <main>
      <form>
        
        <h2>Logga In</h2>

        <AnimatedInput
          name="email"
          label="Email"
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
        />

        <AnimatedInput
          name="password"
          label="Password"
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
        />

        <button>Logga In</button>

      </form>
    </main>
  )
}

export default App
