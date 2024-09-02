import React from "react";
import { list } from "./utils/list";

function ConditionalList() {
  const renderList = list.map((item) => {
    return (
      <div key={item.todo}>
        {item.done ? "✅ " : "❌ "}
        {item.todo}
      </div>
    );
  });
  return (
    <div>
      {" "}
      <h2>조건부 렌더링 </h2>
      {renderList}
    </div>
  );
}

export default ConditionalList;
