import React from "react";
import Error from "containers/error";

function ErrorPage() {
  return (
    <Error>
      <h1>
        Страница
        <br />
        не найдена
      </h1>
      <p>
        Если вам кажется, что что-то пошло не так,{" "}
        <a href="mailto:artem@shkurenko.ru?subject=404">напишите</a> мне об
        этом.
      </p>
    </Error>
  );
}

export default ErrorPage;
