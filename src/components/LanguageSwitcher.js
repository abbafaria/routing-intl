import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { languageRefresh } from "../redux/language";

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { langID } = useParams();

  const onChange = (e) => {
    const lang = e.target.value;
    dispatch(languageRefresh(lang));
    let replacer = "/" + lang;
    let url = "";

    if (lang === "am") {
      replacer = "";
      url = pathname.replace("/" + langID, replacer);
    } else {
      if (langID) {
        replacer = "/" + lang;
        url = pathname.replace("/" + langID, replacer);
      } else {
        replacer = "/" + lang + "/";
        url = pathname.replace("/", replacer);
      }
    }
    navigate(url);
  };
  return (
    <select defaultValue={langID || "am"} onChange={onChange}>
      <option value="am"> Arm</option>
      <option value="ru"> Ru</option>
      <option value="en"> En</option>
    </select>
  );
};
