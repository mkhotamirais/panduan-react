import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { SnackbarProvider } from "notistack";
import Layout from "./layouts/Layout.jsx";
import ErrorBoundary from "./pages/ErrorBoundary.jsx";
import Home from "./pages/Home.jsx";
import Components from "./pages/components/Components.jsx";
import Hooks from "./pages/hooks/Hooks.jsx";
import Pagination from "./pages/components/pagination/Pagination.jsx";
import LifecycleClass from "./pages/hooks/lifecycleClass/LifecycleClass.jsx";
import { Accordion } from "./pages/components/accordion/Accordion.jsx";
import { UseState } from "./pages/hooks/useState/UseState.jsx";
import { UseEffect } from "./pages/hooks/useEffect/UseEffect.jsx";
import { CustomHook } from "./pages/hooks/customHook/CustomHook.jsx";
import { UseCallback } from "./pages/hooks/useCallback/UseCallback.jsx";
import HomeReferensi from "./pages/home/HomeReferensi.jsx";
import HomeRingkasan from "./pages/home/HomeRingkasan.jsx";
import { Carousel } from "./pages/components/carousel/Carousel.jsx";
import HomeComponents from "./pages/home/HomeComponents.jsx";
import Accessibility from "./pages/accessibility/Accessibility.jsx";
import MiniProjects from "./pages/mini-projects/MiniProjects.jsx";
import ReactCrud from "./pages/mini-projects/react-crud/ReactCrud.jsx";
import ReduxCrud from "./pages/mini-projects/redux-crud/ReduxCrud.jsx";
import ReduxCrudPost from "./pages/mini-projects/redux-crud/ReduxCrudPost.jsx";
import ReduxCrudDetail from "./pages/mini-projects/redux-crud/ReduxCrudDetail.jsx";
import ReduxCrudUpdate from "./pages/mini-projects/redux-crud/ReduxCrudUpdate.jsx";
import Welcome from "./pages/Welcome.jsx";
import HomeTips from "./pages/home/HomeTips.jsx";
import UseContext from "./pages/hooks/useContext/UseContext.jsx";
import UseReducer from "./pages/hooks/useReducer/UseReducer.jsx";
import TodoList from "./pages/mini-projects/todo-list/TodoList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Welcome />} />
      <Route path="home">
        <Route index element={<Home />} />
        <Route path="referensi" element={<HomeReferensi />} />
        <Route path="ringkasan" element={<HomeRingkasan />} />
        <Route path="vanilla-components" element={<HomeComponents />} />
        <Route path="tips" element={<HomeTips />} />
      </Route>
      <Route path="components">
        <Route index element={<Components />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="pagination" element={<Pagination />} />
        <Route path="carousel" element={<Carousel />} />
      </Route>
      <Route path="hooks">
        <Route index element={<Hooks />} />
        <Route path="lifecycleclass" element={<LifecycleClass />} />
        <Route path="usestate" element={<UseState />} />
        <Route path="useeffect" element={<UseEffect />} />
        <Route path="customHook" element={<CustomHook />} />
        <Route path="usecallback" element={<UseCallback />} />
        <Route path="usecontext" element={<UseContext />} />
        <Route path="usereducer" element={<UseReducer />} />
      </Route>
      <Route path="mini-projects">
        <Route index element={<MiniProjects />} />
        <Route path="react-crud" element={<ReactCrud />} />
        <Route path="redux-crud">
          <Route index element={<ReduxCrud />} />
          <Route path="post" element={<ReduxCrudPost />} />
          <Route path="detail/:id" element={<ReduxCrudDetail />} />
          <Route path="update/:id" element={<ReduxCrudUpdate />} />
        </Route>
        <Route path="todo-list" element={<TodoList />} />
      </Route>
      <Route path="accessibility">
        <Route index element={<Accessibility />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
