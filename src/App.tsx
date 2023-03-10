import { PageIndex } from "./pages/index";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<PageIndex />} />
      <Route path="/?chat_id=:id" element={<PageIndex />} />
      {/*<Route path="/*" element={<Navigate to={"/chatId=1"} />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
