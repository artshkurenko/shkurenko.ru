import React from "react";
import Index from "containers/index";

function IndexPage() {
  return (
    <Index title={"Артём Шкуренко"} description={"Артём Шкуренко"}>
      <p>
        Меня зовут
        <br />
        Артём Шкуренко.
      </p>
      <p>
        Я веб-технолог,
        <br />
        реже desiigner.
      </p>
      <p>
        Вырабатываю
        <br />
        систему ценностей.
      </p>
      <p>
        На этом сайте
        <br />
        описываю, собираю
        <br />и структурирую себя.
      </p>
    </Index>
  );
}

export default IndexPage;
