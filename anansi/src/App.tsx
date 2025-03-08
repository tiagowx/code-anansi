import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout'
import Match from './components/match'

function App() {

  return (
    <>
      <Layout>
        <Match />
      </Layout>
    </>
  )
}

export default App
