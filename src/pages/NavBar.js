import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const NavBar = () => {
  return (
    <>
      <ul>
        <Link to={"blog/about"}>
          <FormattedMessage id="about.title" />{" "}
        </Link>
      </ul>
      <LanguageSwitcher />
    </>
  );
};
