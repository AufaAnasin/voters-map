import { useRoutes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//page
import SelectRegion from './page/SelectRegion';
import Statistic from './page/Statistic';
import Login from './page/Login';


// import page

function App() {
  let element = useRoutes([
    { path: '/', element: <Login /> },
    { path: 'select-region', element: <SelectRegion /> },
    { path: 'statistic', element: <Statistic /> },
  ])

  return element;
}

export default App
