import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import WorkExamples from "./pages/WorkExamples";
import RootLayout from "./components/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path:"/", 
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/work-examples",
          element:<WorkExamples/>
        },
        {
          path:"/contact-information",
          element:<About/>
        },
      ]
      }
    ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
