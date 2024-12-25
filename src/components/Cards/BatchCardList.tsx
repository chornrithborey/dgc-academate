import React, { useState } from "react";
import {
  Box,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import BatchCard from "./BatchCard";
import batches from "../../data/batches";
import { JSX } from "react/jsx-runtime";
import ModalContainer from "../Modals/ModalContainer";
import TabPanel from "../Tabs/TabPanel";
import TabsContainer from "../Tabs/TabsContainer";

const BatchCardList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  interface SubjectListProps {
    subjects: string[];
  }

  const SubjectList: React.FC<SubjectListProps> = ({ subjects }) => (
    <List>
      {subjects.map((subject, index) => (
        <ListItem key={index} sx={{ py: 0, pl: 4, m: 0 }}>
          <ListItemText primary={`${index + 1}. ${subject}`} />
        </ListItem>
      ))}
    </List>
  );

  const cards: JSX.Element[] = [];
  batches.forEach((batch, index) => {
    cards.push(
      <BatchCard
        title={batch.title}
        subtitle={batch.subtitle}
        onButtonClick={() => handleViewDetail()}
        key={index}
      />
    );
  });

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid size={4} key={index}>
          {card}
        </Grid>
      ))}
      <ModalContainer size="md" isOpen={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            m: 0,
          }}
        >
          <h1>Batch Details: 11th - Generations</h1>
          <TabsContainer
            tabLabels={[
              "Overview",
              "Classes",
              "Assignments",
              "Quizzes",
              "Exams",
            ]}
          >
            <TabPanel value={0} index={0}>
              <Box>
                <Typography color="grey" variant="subtitle1">
                  Course
                </Typography>
                <Typography variant="h6">
                  B.Tech In Computer Science and Engineering Specialist
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography color="grey" variant="subtitle1">
                  My Subjects
                </Typography>
                <Grid container direction={"row"} size={12}>
                  <Grid size={6}>
                    <Typography variant="subtitle2">Semester 1</Typography>
                    <SubjectList
                      subjects={[
                        "Mathematics",
                        "Physics",
                        "Chemistry",
                        "Computer Science",
                        "English",
                      ]}
                    />
                  </Grid>

                  <Grid size={6}>
                    <Typography variant="subtitle2">Semester 2</Typography>
                    <SubjectList
                      subjects={[
                        "C++ Language",
                        "Data Structure",
                        "Digital Electronics",
                        "Engineering Drawing",
                      ]}
                    />
                  </Grid>
                </Grid>
                <Grid mt={5} container direction={"row"} size={12}>
                  <Grid size={6}>
                    <Typography variant="subtitle2">Semester 3</Typography>
                    <SubjectList
                      subjects={[
                        "Introduction to Bootstrap",
                        "Graphics Design",
                      ]}
                    />
                  </Grid>

                  <Grid size={6}>
                    <Typography variant="subtitle2">Semester 4</Typography>
                    <SubjectList subjects={["Fundamentals of programming"]} />
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={1} index={1}>
              <h1>Classes</h1>
            </TabPanel>
            <TabPanel value={2} index={2}>
              <h1>Assignments</h1>
            </TabPanel>
            <TabPanel value={3} index={3}>
              <h1>Quizzes</h1>
            </TabPanel>
            <TabPanel value={4} index={4}>
              <h1>Exams</h1>
            </TabPanel>
          </TabsContainer>
        </Box>
      </ModalContainer>
    </Grid>
  );
};

export default BatchCardList;