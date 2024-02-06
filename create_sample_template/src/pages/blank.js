import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Common from "../components/common";

function Blank() {
  return (
    <>
      <div id="wrapper">
        <Navbar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />

            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <Common />

      <script src="../template/vendor/jquery/jquery.min.js"></script>
      <script src="../template/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../template/vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="../template/js/sb-admin-2.min.js"></script>
    </>
  );
}

export default Blank;
