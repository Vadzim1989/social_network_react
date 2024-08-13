import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Routes, Route} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   console.error(promiseRejectionEvent);
  // }

  componentDidMount() {
    this.props.initializeApp();
    // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  // }

  render() {
    if(!this.props.initialized) return <Preloader/>
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer/>} />
            <Route path='/dialogs/*' element={<Suspense fallback={<Preloader/>}><DialogsContainer /></Suspense>} />
            <Route path='/users' element={<Suspense fallback={<Preloader/>}><UsersContainer /></Suspense>} />
            <Route path='/login' element={<LoginContainer/>} />
          </Routes>
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose(
  connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = (props) => {
  return <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>   
    </HashRouter>  
  </React.StrictMode>
}

export default SocialNetworkApp;
