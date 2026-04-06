import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/topic", label: "Topic" },
  { to: "/answers", label: "Answers" }
];

const accountItems = [
  { to: "/login", label: "Dang nhap" },
  { to: "/register", label: "Dang ky" }
];

function LayoutDefault() {
  return (
    <div className="layout-default">
      <header className="layout-default__header">
        <div className="layout-default__brand">Quiz</div>

        <nav className="layout-default__nav">
          <ul className="layout-default__nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `layout-default__nav-link${isActive ? " layout-default__nav-link--active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="layout-default__account">
          {accountItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `layout-default__account-link${isActive ? " layout-default__account-link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </header>

      <main className="layout-default__main">
        <Outlet />
      </main>

      <footer className="layout-default__footer">Copyright @ 2023 by 28Tech</footer>
    </div>
  );
}

export default LayoutDefault;
