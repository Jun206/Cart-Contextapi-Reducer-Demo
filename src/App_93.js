import React from 'react'
import { useGlobalContext } from './context_93'

// components
import Navbar_93 from './Navbar_93'
import CartContainer_93 from './CartContainer_93'
// items

function App_93() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar_93 />
      <CartContainer_93 />
    </main>
  )
}

export default App_93
