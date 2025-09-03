import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('')

  const handleShow = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShow((prev) => !prev);
};
  const hasDigit = (str: string) => str.split('').some(char => !isNaN(Number(char)));
  const hasSpecial = (str: string) => str.split('').some(char => char === '/' || char === '_' || char === '*');
  const hasUpper = (str: string) => str.split('').some(char => char.toUpperCase() === char);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(hasDigit(password) && hasSpecial(password) && hasUpper(password)) {
        setMsg('Password is great')
    }
    else{
        setMsg('Password is weak')
    }
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        placeholder="Enter your email"
        className="px-2 py-1 w-56 rounded border"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={show ? "text" : "password"}
        value={password}
        placeholder="Create Password"
        className="px-2 py-1 w-56 rounded border"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleShow}>{show ? 'Hide Password' : 'Show Password'}</button>
      <ul className="flex flex-col gap-2">
        <input type="checkbox" checked={hasDigit(password)}/><li>Has digits</li>
        <input type="checkbox" checked={hasSpecial(password)}/><li>Has special chars</li>
        <input type="checkbox" checked={hasUpper(password)}/><li>Has upper case</li>
      </ul>
      <button className="px-2 py-1 w-56 rounded border" onClick={handleSubmit}>Submit</button>
      {msg && <p>{msg}</p>}
    </form>
  );
};

export default Form;
