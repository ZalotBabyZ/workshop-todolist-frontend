// import { Route, Switch } from 'react-router-dom';
// import Login from './pages/Login';
// import Todo from './pages/Todo';
// import NotFound from './pages/NotFound';
import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';

function App() {
  const [role, setRole] = useState(LocalStorage.getRole())

  return (
    <>
      {/* <Switch>
        // Switch ต้องเลือกของ react-router-dom นะ 
        <Route exact path="/" component={Todo} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch> */}
      < PrivateRoutes role={role} setRole={setRole} />
    </>
  );
}

export default App;