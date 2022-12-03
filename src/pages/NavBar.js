import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Link to={"blog/about"}>
          <FormattedMessage id="about.title" />{" "}
        </Link>
        <Link to={"blog"}>
          <FormattedMessage id="blog.nav" />{" "}
        </Link>
      </div>
      <LanguageSwitcher />
    </>
  );
};
