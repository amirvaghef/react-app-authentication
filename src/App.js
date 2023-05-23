import { Link, useNavigate } from "react-router-dom";
import { Layout, theme, Menu } from "antd";
import { getCookie } from "./Utility";
import "./App.css";
import AppRoutes from "./AppRoutes";

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

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "2":
        document.cookie = "userName=; max-age=0";
        localStorage.removeItem("token");
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
        <AppRoutes />
      </Content>
      <Footer style={{ textAlign: "center" }}>Authentication</Footer>
    </Layout>
  );
}

export default App;
