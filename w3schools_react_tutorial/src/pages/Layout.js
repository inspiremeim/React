import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/forms">Forms</Link>
                    </li>
                    <li>
                        <Link to="/memos">Memos</Link>
                    </li>
                    <li>
                        <Link to="/effect">Effect</Link>
                    </li>
                    <li>
                        <Link to="/context">Context</Link>
                    </li>
                    <li>
                        <Link to="/reference">Reference</Link>
                    </li>
                    <li>
                        <Link to="/reducer">Reducer</Link>
                    </li>
                    <li>
                        <Link to="/callbacks">Callbacks</Link>
                    </li>
                    <li>
                        <Link to="/newmemo">New Memo</Link>
                    </li>
                    <li>
                        <Link to="/custom">Custom Hooks</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;