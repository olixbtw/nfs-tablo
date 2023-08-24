'use client'

import { useState } from "react";
import styles from "./styles.module.scss";

const API_PATH = "/api/analyzer";

const Analyzer = () => {
  const api1 = API_PATH + "/32";

  console.log(api1);

  const karts = [
    { name: "32", time: "42.1" },
    { name: "22", time: "42.2" },
    { name: "88", time: "42.115" },
  ];

  const [sortBy, setSortBy] = useState<"time" | "name" | "default">("default");
  const soretdkarts =
    sortBy === "default"
      ? karts
      : karts.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));

  console.log(soretdkarts);

  return (
    < div className={styles.wrapper}>
      <h1>karts:</h1>

      <button onClick={() => setSortBy("time")}>time</button>
      <br />
      <button onClick={() => setSortBy("name")}>name</button>
      <br />
      <br />

      <table className={styles.table}>
        {soretdkarts.map((e) => (
          <tr className={styles.row}>
            <td className={styles.column}>{e.name}</td>
            <td className={styles.column}>{e.time}</td>
          </tr>
        ))}
      </table>
    </ div >
  );
};

export default Analyzer;
