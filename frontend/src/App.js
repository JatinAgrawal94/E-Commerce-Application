import './App.css';
import {HomeScreen} from './screens/HomeScreen'
import {LoginPage} from './screens/LoginPage'
import {ProfilePage} from './screens/ProfilePage'
import {BrowserRouter, Route} from 'react-router-dom';
import {ProductScreen} from './screens/ProductListScreen'
import image from './images/b9.png'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <div className="nav-bar">
            <a className="logo" href='/'><img src={image} alt="Benign"/></a>
            <div className="nav-links">
                <a href="/profile">Profile</a>
                <a href="/login">Sign In</a>
            </div>
      </div>
      </header>
      <main>
        <Route  path='/' component={HomeScreen} exact></Route>
        <Route  path='/profile' component={ProfilePage} exact></Route>
        <Route  path='/login' component={LoginPage} exact></Route>
        <Route  path='/category/:id' component={ProductScreen} ></Route>
      </main>   
    </div>
    </BrowserRouter>
  );
}

export default App;
