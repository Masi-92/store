import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Home from "../pages/Home/Home";
import Layout from "../component/layout/Layout";
import AdminPanelLayout from "../component/admin/AdminPanelLayout";
import CategoryList from "../component/admin/CategoryList";
import CreateCategoryAdmin from "../component/admin/CreateCategoryAdmin";
import CreateProduct from "../component/admin/prodact/CreateProduct";
import ProductList from "../component/admin/ProductList";
import ProductListCategory from "../pages/productList/ProductListCategory";
import Details from "../pages/details/Details";
import FavProduct from "../pages/FavProduct/favProduct";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin/*" element={<AdminPanelLayout />}>
        <Route path="CategoryList" element={<CategoryList />} />
        <Route path="createCategory" element={<CreateCategoryAdmin />} />
        <Route path="createProduct" element={<CreateProduct />} />
        <Route path="ProductList" element={<ProductList />} />
        <Route path="*" element={<Navigate to={"/admin/ProductList"} />} />
      </Route>
      <Route path="/*" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="productList/:id" element={<ProductListCategory />} />
        <Route path="details/:id" element={<Details/>}/>
        <Route path="favProduct" element={<FavProduct/>}/>

      </Route>
    </Routes>
  );
};

export default Router;
