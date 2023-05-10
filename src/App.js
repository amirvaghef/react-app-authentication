import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Layout, theme, Menu } from "antd";
import Cartable from "./pages/Cartable";

const { Header, Content, Footer } = Layout;

function App() {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: <Link to={"/"}>خانه</Link>,
      key: 0,
    },
    {
      label: <Link to={"/Register"}>ثبت نام</Link>,
      key: 1,
      style: {
        visibility: getCookie("userName") ? "hidden" : "visible",
      },
    },
    {
      label: "خروج",
      key: 2,
      style: {
        visibility: getCookie("userName") ? "visible" : "hidden",
      },
    },
  ];

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "2":
        document.cookie = "userName=; max-age=0";
        navigate("/");
        break;

      default:
        break;
    }
  };

  return (
    <Layout className="App">
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          onClick={handleMenuClick}
          items={items}
        />
      </Header>
      <Content
        style={{
          background: colorBgContainer,
          padding: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route
            index
            path="/"
            element={getCookie("userName") ? <Cartable /> : <Login />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cartable" element={<Cartable />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>Authentication</Footer>
    </Layout>
  );
}

export default App;
