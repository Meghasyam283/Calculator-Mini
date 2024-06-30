import { useState } from "react";
import "./calci.css";

function Calci() {
  const [value, setValue] = useState("");

  function clear() {
    setValue("");
  }
  function handleDelete() {
    setValue(value.slice(0, -1)); // Slice: 0 stands reading chars from first and -1 deletes 1 char from end
  }
  function evaluate() {
    if (value.includes("sin")) {
      var res = value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
      setValue(Math.sin(res).toFixed(5));
    } else if (value.includes("cos")) {
      var res = value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
      setValue(Math.cos(res).toFixed(5));
    } else if (value.includes("tan")) {
      var res = value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
      setValue(Math.tan(res).toFixed(5));
    } else if (value.includes("log")) {
      var res = value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
      setValue(Math.log(res).toFixed(5));
    } else if (value.includes("%")) {
      var a = value.slice(0, -1);
      var b = value.slice(0, 1);
      console.log(a);
      var res = Math.round((a * 100) / b).toFixed(3);
      setValue(res);
    } else if (value.includes("^")) {
      var res = value.split("^");
      setValue(Math.pow(parseInt(res[0]), parseInt(res[1])));
    } else {
      console.log(value);
      setValue(eval(value));
    }
  }
  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <input type="text" className="display" value={value} />
            <div>
              <input type="button" value="AC" onClick={clear} />
              <input type="button" value="Del" onClick={handleDelete} />
              <input
                type="button"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="("
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value=")"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="log"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="sin"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="sqrt"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="cos"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="^"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="tan"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                className="equal"
                value="="
                onClick={evaluate}
              />
              <input
                type="button"
                value="log"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="%"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
          </form>
          <p>{value}</p>
        </div>
      </div>
    </>
  );
}
export default Calci;
