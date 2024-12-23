import React from "react";
import { Container } from "@mui/material";

const About: React.FC = () => {
  const [getCount, setCount] = React.useState(0.0);

  function handleIncrement() {
    setCount(getCount + 1);
  }

  return (
    <Container sx={{ py: 3,

    }}>
      <h1>About Us</h1>
    </Container>
  );
};

export default About;
