import React from "react";
import { list } from "./utils/list";

function List() {
  const renderList = list.map((item) => {
    return <div key={item.todo}>{item.todo}</div>;
  });
  return (
    <div>
      <h2>map함수를 이용한 배열 렌더링</h2>
      {renderList}
    </div>
  );
}

export default List;
