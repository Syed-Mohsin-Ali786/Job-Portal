import React, { useState } from "react";

function RecuritorLogin() {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  return (
    <div>
      <form action="">
        <h1>Recuriter {state}</h1>
      </form>
    </div>
  );
}

export default RecuritorLogin;
