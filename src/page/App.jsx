import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NationalGeographic from "./NationalGeographic";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NationalGeographic />,
    },
  ]);

  return (
    <div className="h-[100dvh]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
