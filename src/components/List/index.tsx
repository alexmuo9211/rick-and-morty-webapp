import React from 'react';
import {Body} from "@/src/interfaces";
interface Props {
  list: Body[]
}
const List = ({ list }: Props) => {
  return (
    <div>
      {list?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default List;