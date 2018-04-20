import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'

// Your top level component
import App from './App'
import './sass/index.scss'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(
      <Provider>
        <Comp />
      </Provider>
      , document.getElementById('root'))
  }

  // Render!
  render(App)
}
