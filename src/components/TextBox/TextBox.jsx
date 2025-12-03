import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>Arffy International CBSE School</h1>
      <p>
        Empowering students with strong academics, discipline, and values. We
        aim to create a nurturing environment where every child can learn, grow,
        and succeed.
      </p>
      <Link to="/" className="hero-btn">
        Visit us To Know More
      </Link>
    </div>
  );
};

export default TextBox;
