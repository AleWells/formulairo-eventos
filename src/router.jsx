import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Error404 from './component/Error404/Error404.jsx';
import  Index  from './component/Index/Index.jsx';
import DynamicForm from './component/DynamicForm/DynamicForm.jsx';
import ViewForm from "./component/DynamicForm/ViewForm.jsx";
import Admin from "./component/Admin/Admin.jsx";
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error404 />,
      children:[
        {
          index:true,
          element:<Index/>
        },
        {
          path:'/formulario',
          element:<DynamicForm/>
        },
        {
          path:'/formulario/:id',
          element:<ViewForm/>
        },
        {
          path:'/admin',
          element:<Admin/>
        }
      ]
    },
    
  
  ]);
  
  export default router;