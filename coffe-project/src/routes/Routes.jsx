
import { createBrowserRouter } from 'react-router-dom';

import MainLayouts from '../Layouts/MainLayouts';
import Home from '../pages/Home';
import Coffee from '../pages/Coffee';
import Dashbroad from '../pages/Dashbroad';
import CoffeeCard from '../Component/CoffeeCard';
const routes =createBrowserRouter([

{
    path:'/',
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/categories.json'),
            children: [
           {
            path:'/',
            element:<CoffeeCard></CoffeeCard>,
            loader:()=>fetch('../coffees.json'),
           },
           {
            path:'/category/:category',
            element:<CoffeeCard></CoffeeCard>,
            loader:()=>fetch('../coffees.json'),
           }
            ]
        },
        {
            path:'/coffees',
            element:<Coffee></Coffee>,
            loader:()=>fetch('../coffees.json'),
        },
        {
            path:'/dashbroad',
            element:<Dashbroad></Dashbroad>,
        }
    ]
}



])



export default routes;