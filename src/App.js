import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import language, { languageRefresh } from "./redux/language";
import { NavBar } from "./pages/NavBar";
import { createBrowserRouter, Outlet, RouterProvider, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import en from "./translations/locale/en.json";
import ru from "./translations/locale/ru.json";
import am from "./translations/locale/am.json";
import { defaultRoutes, router } from "./routing/routes";

function App() {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const { langID, businessType } = useParams();
  const lang = useSelector((state) => state.language.langID);

  const messages = {
    en: en,
    ru: ru,
    am: am,
  };


  const { language, languages } = navigator;
  const { routes } = useSelector(state => state.routes)
  const { langID, businessType } = useSelector(state => state.language)

  // console.log(langID, 'langID');
  // console.log(businessType, 'businessType')

  const [ temp , setTemp ] = useState(defaultRoutes)




  useEffect(() => {
    const temp = defaultRoutes.map(item => {
      const tempRoute = {
        path: item.path,
        element: item.component
      }
  
      if(langID !== 'am') {
          tempRoute.path += ':langID'
      }

      if(businessType !== 'individual') {
        tempRoute.path += ':businessType'
      }
      return tempRoute;
    })

    console.log(temp,'temp');
    // setTemp(temp)

  }, [langID, businessType])

 
  const r = createBrowserRouter(defaultRoutes)
  console.log(r, 'routes');
  return (
    <div className="App">
      <IntlProvider locale={ "am"} messages={messages[lang]}>
        {/* <NavBar /> */}
        <RouterProvider router={r} />

      </IntlProvider>
    </div>
  );
}

export default App;
