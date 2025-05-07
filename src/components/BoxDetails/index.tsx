import React, {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import Details from "@/src/components/Details";
import List from "@/src/components/List"


const BoxDetails = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch('/api/characters');
      const characters = await response.json();

      setList(characters.results);

    }
    setLoading(true);
    getCharacters().then();
    setLoading(false);
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
       margin: 'auto',
        left: 0,
        right: 0,
        top: 90,
        bottom: 0,
        zIndex: 999,
          maxWidth: '1023px',
        maxHeight: '720px',
          backgroundColor: '#000',
        borderRadius: '15px',
        display: 'flex',
        direction: 'row'
      }}
    >
      <Box sx={{ width: '50%' }}>
        <Details list={list} />
      </Box>
      <List list={list} />
    </Box>
  );
};

export default BoxDetails;
