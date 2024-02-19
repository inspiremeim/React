import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Nav() {
  const List = [
    {
      Name: "Home",
      URL: "/",
    },
    {
      Name: "Features",
      URL: "/features",
    },
    {
      Name: "FAQs",
      URL: "/faqs",
    },
    {
      Name: "About",
      URL: "/about",
    },
    {
      Name: "Contact",
      URL: "/contact",
    },
  ];

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EA Company
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {List.map((data) => (
              <li className="nav-item" key={data.Name}>
                <Link
                  className={`nav-link ${
                    location.pathname === data.URL ? "active" : ""
                  }`}
                  to={data.URL}
                >
                  {data.Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
