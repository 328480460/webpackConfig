import React from "react";
import style from "./index.less";
import { count } from "../../utils";
import { cloneDeep } from "lodash";

const obj = { age: "你好" };
const cloneObj = cloneDeep(obj);
const Body = () => (
  <section className={style.content}>
    {count("哈哈哈123123123123")}
    {cloneObj.age}
  </section>
);

export default Body;
