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
import ModalContainer from "../Modals/ModalContainer";
import TabPanel from "../Tabs/TabPanel";
import TabsContainer from "../Tabs/TabsContainer";

const BatchCardList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(0);

  const handleViewDetail = (index: number) => {
    setIsModalOpen(true);
    setSelectedBatch(index);
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

  return (
    <Grid container spacing={2}>
      {batches.map((batch, index) => (
        <Grid size={4} key={index}>
          <BatchCard
            title={batch.title}
            subtitle={batch.subtitle}
            onButtonClick={() => handleViewDetail(index)}
          />
        </Grid>
      ))}
      <ModalContainer size="md" isOpen={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ m: 0 }}>
          <Typography mb={2} variant="h5">
            Batch Details: {batches[selectedBatch].title}
          </Typography>
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
                <Grid container direction="row" spacing={2}>
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
                <Grid mt={5} container direction="row" spacing={2}>
                  <Grid size={6}>
                    <Typography variant="subtitle2">Semester 3</Typography>
                    <SubjectList
                      subjects={[
                        "Introduction to Bootstrap",
                        "Graphics Design",
                      ]}
                    />
                  </Grid>
                  <Grid  size={6}>
                    <Typography variant="subtitle2">Semester 4</Typography>
                    <SubjectList subjects={["Fundamentals of programming"]} />
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={1} index={1}>
              <Typography variant="h6">Classes</Typography>
            </TabPanel>
            <TabPanel value={2} index={2}>
              <Typography variant="h6">Assignments</Typography>
            </TabPanel>
            <TabPanel value={3} index={3}>
              <Typography variant="h6">Quizzes</Typography>
            </TabPanel>
            <TabPanel value={4} index={4}>
              <Typography variant="h6">Exams</Typography>
            </TabPanel>
          </TabsContainer>
        </Box>
      </ModalContainer>
    </Grid>
  );
};

export default BatchCardList;
