import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import { routers } from "./routers"



function App() {

  return (
    <div className="relative">
      <div className="container mx-auto">
        <Header/>
        <Routes>
          {routers.map((router) => (
            <Route
              key={router.id}
              path={router.path}
              element={router.element}
            ></Route>
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App
