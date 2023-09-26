"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState<string[]>(["aaa", "bbb"]);
  return (
    <div className={styles.description}>
      <button
        onClick={async () => {
          // setList([...list, 'ccc']);
        }}
      >
        clink me to add item
      </button>
      <div>
        {list.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}
      </div>
    </div>
  );
}
