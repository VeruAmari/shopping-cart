import { useState } from 'react'
import styled from 'styled-components'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const Container = styled.div`
  display: grid;
  justify-content: center;

`


  return (
    <><Container>
      <h1 className="header">Header</h1>
      <h2 className="smaller-header">Smaller Header</h2>
      <p className="paragraph">Paragraph with some dummy text.</p>
      <ul>
        <li>Dummy 1</li>
        <li>Dummy 2</li>
      </ul>
    </Container>
    </>
  )
}

export default App
