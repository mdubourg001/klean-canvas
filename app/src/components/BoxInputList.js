import React, { useState, useRef } from "react";

const BoxInputList = () => {
  const [emptyContent, setEmptyContent] = useState("");
  const [entries, setEntries] = useState([]);
  const listNode = useRef();
  const listLastItemNode = useRef();

  return (
    <ul ref={listNode} className="w-full list-inside">
      {entries.map((e, i) => (
        <li
          className="focus:outline-none"
          key={i}
          ref={i === entries.length - 1 ? listLastItemNode : null}
          contentEditable
        >
          {e}
        </li>
      ))}

      <li
        className="focus:outline-none"
        contentEditable
        onInput={e => {
          !e.target.innerText && entries.length === 0
            ? listNode.current.classList.remove("list-disc")
            : listNode.current.classList.add("list-disc");
          setEmptyContent(e.target.innerText);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            setEntries([...entries, e.target.innerText]);
            setEmptyContent("");
          } else if (e.keyCode === 8 && entries.length > 0) {
            console.log(listLastItemNode.current);
            listLastItemNode.current.focus();
          }
        }}
      >
        {emptyContent}
      </li>
    </ul>
  );
};

export default BoxInputList;
