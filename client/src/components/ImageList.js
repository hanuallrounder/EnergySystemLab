import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import itemData from "../assets/Data/aboutImagedata.js"

export default function StandardImageList() {
  return (
    <ImageList  cols={3} rowHeight={300} >
      {itemData.map((item, idx) => (
        <ImageListItem key={idx}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

