import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
