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

    // let replacer = '/' + lang

    let url = ''

    if(lang === 'am') {
      if(langID) {
        url = pathname.replace('/'+langID, '')
      } else {
        console.log('petq chi');
        // url = pathname.replace('/', lang)
      }
    } else {
      if(langID) {
        url = pathname.replace(langID, lang)
      } else {
        url = pathname.replace('/', lang + '/')
      }
    }


  
    navigate(url)
    // let replacer = "/" + lang;
    // let url = "";

    // if (lang === "am") {
    //   replacer = "";
    //   url = pathname.replace("/" + langID, replacer);
    // } else {
    //   if (langID) {
    //     replacer = "/" + lang;
    //     url = pathname.replace("/" + langID, replacer);
    //   } else {
    //     replacer = "/" + lang + "/";
    //     url = pathname.replace("/", replacer);
    //   }
    // }
    // navigate(url);
  };
  return (
    <select defaultValue={langID || "am"} onChange={onChange}>
      <option value="am"> Armenian</option>
      <option value="ru"> Russian </option>
      <option value="en"> English </option>
    </select>
  );
};
