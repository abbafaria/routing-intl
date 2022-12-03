import { FormattedMessage } from "react-intl";
import { Outlet } from "react-router-dom";

export const Blog = () => {
  return (
    <div>
      <FormattedMessage
        defaultMessage={"hello blog"}
        description={"des"}
        id="blog.title"
      />
      <Outlet />
    </div>
  );
};
