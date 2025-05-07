import React from 'react';
import { Body} from "@/src/interfaces";
import {Grid, Container} from "@mui/material";
import Image from "next/image";

interface Props {
  list: Body[]
}
const Details = ({ list }: Props) => {
  return (
    <Container>
      {list?.map(it => (
        <>
        <Image src={it.image} alt="Image" fill/>
        <p key={it.id}>{it.id}</p>
        </>
      ))}
    </Container>
  );
};

export default Details;