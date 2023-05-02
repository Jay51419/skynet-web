import { JSX, createEffect } from "solid-js";
import Header from "./header";
import { useNavigate } from "@solidjs/router";

const Layout = (props: {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | JSX.FunctionElement
    | (string & {})
    | null
    | undefined;
}) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  createEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    } 
  });
  return (
    <div class="h-screen w-full md:flex md:flex-grow">
      <Header />
      <div class="pt-24 md:pt-4 w-full">{props.children}</div>
    </div>
  );
};

export default Layout