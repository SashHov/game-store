import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/home-pages/Home';
import { Header } from './components/header/Header';
import { GamePage } from './pages/game-page/GamePage';
import { OrderPage } from './pages/order-page/OrderPage';
import { store } from './redux';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            {/* <Route path='/about' element={<About />}/>
          <Route path='/users' element={<Users />}/> */}
            <Route path='/' element={<Home />} />
            <Route path='/app/:title' element={<GamePage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
