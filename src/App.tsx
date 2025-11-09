import './App.css'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
       <Layout>
        <Cart />
      <Products />
    </Layout>
    </>
  )
}

export default App
