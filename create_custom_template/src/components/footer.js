import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Fotoer() {
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

  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {List.map((data) => (
          <li className="nav-item" key={data.Name}>
            <Link to={data.URL} className="nav-link px-2 text-muted">
              {data.Name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center text-muted">© 2024 EA Company Pvt. Ltd.</p>
    </footer>
  );
}

export default Fotoer;
