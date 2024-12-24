import React from "react";
import { Grid2 as Grid } from "@mui/material";
import BatchCard from "./BatchCard";

const BatchCardList: React.FC = () => {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(<BatchCard key={i} />);
  }

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid
        size={4}
        key={index}>
          {card}
        </Grid>
      ))}
    </Grid>
  );
};

export default BatchCardList;