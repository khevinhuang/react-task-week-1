import { useState } from "react";
import "./form.scss";

function Form() {
  const [name, setName] = useState("");
  const [jobDesk, setJobDesk] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      jobDesk,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Input Name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Your Job Desk"
          className="input"
          value={jobDesk}
          onChange={(e) => setJobDesk(e.target.value)}
        />
      </div>

      <button className="submitBtn" type="submit">Submit</button>
    </form>
  );
}

export default Form;
