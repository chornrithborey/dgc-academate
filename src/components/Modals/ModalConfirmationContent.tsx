import React from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';

interface ModalConfirmationContentProps {
  onClose: () => void;
  onPublish: () => void;
}

const ModalConfirmationContent: React.FC<ModalConfirmationContentProps> = ({ onClose, onPublish }) => {
  return (
    <Box p={3}>
      <Typography mt={2} variant="subtitle1" align="center">
        Publish Result of <strong>"BHI Health Informatics mid semester Exam".</strong>?
      </Typography>
      <Typography mt={2} variant="subtitle2" align="center">
        Result once published cannot be altered/reversed.
      </Typography>
      <Stack
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        alignSelf={"center"}
        direction="row"
        spacing={2}
        mt={5}
      >
        <Button
          onClick={onClose}
          sx={{
            border: "1px solid #E0E0E0",
            color: "grey",
            px: 5,
          }}
          disableElevation variant="outlined"
        >
          No
        </Button>
        <Button
          onClick={onPublish}
          sx={{
            px: 5,
          }}
          disableElevation variant="contained" color="primary"
        >
          Publish
        </Button>
      </Stack>
    </Box>
  );
};

export default ModalConfirmationContent;
