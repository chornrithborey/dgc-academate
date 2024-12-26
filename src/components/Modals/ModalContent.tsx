import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

interface ModalContentProps {
  onClose: () => void;
  onPublish: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose, onPublish }) => {
  return (
    <div>
    <Stack justifyContent={"space-between"} direction="row" spacing={2}>
      <Typography variant="h5">
        Declare Result
      </Typography>
      <Button onClick={onPublish} disableElevation variant="contained" color="primary">
        Publish Result
      </Button>
    </Stack>
    <Stack justifyContent={"space-between"} direction="row" spacing={2}>
      <Typography variant="h6">
        BHI Health Informatics mid semester Exam.
      </Typography>
    </Stack>
    <Stack my={3} direction="row">
      <Button
        sx={{
          backgroundColor: "#EEEFF9",
          color: "grey",
          px: 5,
        }}
        disableElevation variant="contained"
      >
        Details
      </Button>
      <Button
        sx={{
          px: 5,
        }}
        disableElevation variant="contained" color="primary"
      >
        Result
      </Button>
    </Stack>
    </div>
  );
};

export default ModalContent;
