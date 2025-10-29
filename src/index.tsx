import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { designSystemStyles } from './lib/theme'

const basename = process.env.PUBLIC_BASE_PATH || ''

// eslint-disable-next-line no-console
console.log('basename', basename)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <ChakraProvider value={designSystemStyles}>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/page1' element={<App />} />
          <Route path='/page1/page2' element={<App />} />
          <Route path='/page1/page2/page3' element={<App />} />
          <Route path='/page1/page2/page3/page4' element={<App />} />
          <Route path='/page1/page2/page3/page4/page5' element={<App />} />
          <Route
            path='/page1/page2/page3/page4/page5/page6'
            element={<App />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  // </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export * from './components'
