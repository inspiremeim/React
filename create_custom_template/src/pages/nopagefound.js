import { Link } from "react-router-dom";

function NoPageFound() {
  return (
    <main>
      <section>
        <h1>
          This page is not found. Please go to <Link to="/">Home</Link>.
        </h1>
      </section>
    </main>
  );
}

export default NoPageFound;
