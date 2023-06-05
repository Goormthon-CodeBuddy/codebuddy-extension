import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.scss';

const App = () => {
  return (
    <div>
      <h5>CodeBuddy Chrome Extension</h5>
      <p>테스트 창</p>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)