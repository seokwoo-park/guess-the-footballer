import React, { useEffect } from "react";

type Props = {};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return res.json();
}

const InGuessGame = async (props: Props) => {
  const data = await getData();

  console.log(data);

  return <div>PlayGuess</div>;
};

export default InGuessGame;
