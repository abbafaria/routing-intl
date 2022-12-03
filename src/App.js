import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import language, { languageRefresh } from "./redux/language";
import { NavBar } from "./pages/NavBar";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import en from "./translations/locale/en.json";
import ru from "./translations/locale/ru.json";
import am from "./translations/locale/am.json";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { langID } = useParams();
  const lang = useSelector((state) => state.language.langID);

  const messages = {
    en: en,
    ru: ru,
    am: am,
  };

  // useEffect(() => {
  //   if (!(langID === "am" || langID === "en" || langID === "ru")) {
  //     console.log(langID, "langID");
  //     navigate("/" + lang);
  //   }
  // }, []);

  const { language, languages } = navigator;
  return (
    <div className="App">
      <IntlProvider locale={langID || "am"} messages={messages[langID || "am"]}>
        <NavBar />
        <Outlet />
      </IntlProvider>
    </div>
  );
}

export default App;
