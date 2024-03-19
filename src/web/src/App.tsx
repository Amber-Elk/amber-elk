import './App.css';
import Home from './Pages/Pages';
import MyAccount from './Pages/Pages/MyAccount';
import MyOrder from './Pages/Pages/MyOrder';
import MyOrders from './Pages/Pages/MyOrders';
import NotFound from './Pages/Pages/NotFound';
import SignIn from './Pages/Pages/SignIn';

function App() {
  return(
    <>
      <div className='bg-gray-500'>Hello World</div>
      <div className='flex flex-col'>
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SignIn/>
      </div>
    </>
  );
}


export default App;