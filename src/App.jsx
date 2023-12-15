import { BrowserRouter, useRoutes } from "react-router-dom";
import './App.css'
import ProductsView from "./views/Products/ProductsView";
import ProfileView from "./views/Profile/ProfileView";
import CategoriesView from "./views/Categories/CategoriesView";
import NavbarComponent from "./components/base/NavBarComponent";
import LayoutComponent from "./components/layout/LayoutComponent";
import HomeView from "./views/Home/HomeView";
import CreateProductView from "./views/Products/CreateProductView";
import FooterComponent from "./components/base/FooterComponent";

const AppRoutes = () => {
  let r = useRoutes(
    [
      { path: '/', element: <HomeView /> },
      { path: '/Products', element: <ProductsView /> },
      { path: '/CreateProduct', element: <CreateProductView /> },
      { path: '/Profile', element: <ProfileView /> },
      { path: '/Categories', element: <CategoriesView /> },
      { path: '/*', element: <HomeView /> }
    ]
  );
  return r;
}

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <LayoutComponent>
          <AppRoutes />
        </LayoutComponent>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
