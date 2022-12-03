import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("/am");
  }, []);
  return <div>404</div>;
};
