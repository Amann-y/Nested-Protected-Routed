import { redirect } from "react-router-dom";

export default function checkAuth() {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    return redirect("/");
  } else {
    return null;
  }
}
