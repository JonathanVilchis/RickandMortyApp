import React, { useEffect, useState } from "react";
import "../styles/TextBox.css";
// import { Configuration, OpenAIApi } from "openai";

export default function TextBox() {
  const [response, setResponse] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // const openai = new OpenAIApi(
  //   new Configuration({
  //     apikey: VITE_OPENAI_API_KEY,
  //   })
  // );

  // openai
  //   .createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: "Hello ChatGPT" }],
  //   })
  //   .then((res) => {
  //     setResponse(res);
  //   });

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="text-box">
      <label>Ask Rick something</label>
      <input type="text" onChange={handleInputChange} />
      <textarea value={inputValue} readOnly rows="10" cols="30" />
    </div>
  );
}
