import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Snackbar,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    selectedBatch: "",
  });

  const [enrolledUsers, setEnrolledUsers] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URI}/api/submitForm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();
    setSnackbarMessage(
      data.success
        ? "Enrolled successfully"
        : "Invalid name or age, please try again!",
    );

    if (data.success) {
      setEnrolledUsers([
        ...enrolledUsers,
        {
          name: formData.name,
          age: formData.age,
          batch: formData.selectedBatch,
        },
      ]);
    }

    setSnackbarOpen(true);
  };

  useEffect(() => {
    const fetchEnrolledUsers = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}/api/getEnrolledUsers`,
      );
      const data = await response.json();
      setEnrolledUsers(data.enrolledUsers);
    };
    console.log(process.env.SERVER_URI);
    fetchEnrolledUsers();
  }, [enrolledUsers]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Yoga Class Admission Form
      </Typography>
      <form>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        <TextField
          select
          label="Batch"
          name="selectedBatch"
          value={formData.selectedBatch}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="6-7AM">6-7 AM</MenuItem>
          <MenuItem value="7-8AM">7-8 AM</MenuItem>
          <MenuItem value="8-9AM">8-9 AM</MenuItem>
          <MenuItem value="5-6PM">5-6 PM</MenuItem>
        </TextField>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ margin: "auto" }}
        >
          Submit
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
      <Container maxWidth="sm" style={{ marginTop: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Enrolled Users
        </Typography>
        <List>
          {enrolledUsers.map((user, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${user.name}, Age: ${user.age}, Batch: ${user.selectedBatch}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Container>
  );
};

export default AdmissionForm;
