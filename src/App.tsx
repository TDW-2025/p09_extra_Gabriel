import './App.css'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Cart from './components/Cart/Cart'
import { useSelector } from "react-redux";
import type { RootState } from "./Store";

function App() {
  const cartIsVisible = useSelector((state: RootState) => state.ui.cartIsVisible);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
