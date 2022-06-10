import { useState, useEffect, useRef } from "react";

const RefTest = () => {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  console.log('a is:', count.current);

  useEffect(() => {
    count.current = count.current + 1;
    console.log('b is:', count.current);
  });


  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  )
}

export default RefTest