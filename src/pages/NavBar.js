import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { Tabs } from 'antd';
import { businessTypeRefresh } from "../redux/language";


export const NavBar = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation()
  const { businessType, langID } = useParams()
  const dispatch = useDispatch()

  console.log(pathname, 'pathname');


  const onChangeSegmentType = (val) => {
    let url = pathname;

    dispatch(businessTypeRefresh(val))
    console.log(businessType, 'businessType117');
    console.log(pathname, 'pathname');


    if(val === 'individual') {
      url = pathname.replace(businessType + '/', '')
    } else {
      if(langID) {
        url = pathname.replace(langID, langID + '/' + val)
      } else {
        url = pathname.replace('/', val)
      }
    }

    navigate(url)
    
  }

  if(langID === 'am') {
    navigate('/')
  }

  console.log(businessType, langID, 'businessType, langID');

  return (
    <div  style={{
      margin: '10px 30px'
    }}>
    <Tabs defaultActiveKey="individual" onChange={onChangeSegmentType}>
    <Tabs.TabPane tab="Individual" key="individual">
      Individual
    </Tabs.TabPane>
    <Tabs.TabPane tab="Business" key="business">
        Business 
    </Tabs.TabPane>
   
  </Tabs>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Link to={"./blog/about"}>
          <FormattedMessage id="about.title" />{" "}
        </Link>
        <Link to={"./blog"}>
          <FormattedMessage id="blog.nav" />{" "}
        </Link>
      </div>
      <LanguageSwitcher />
    </div>
  );
};
