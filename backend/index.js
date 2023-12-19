const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`error connecting: ${err.message}`));

const admissionSchema = new mongoose.Schema({
  name: String,
  age: Number,
  selectedBatch: String,
});

const Admission = mongoose.model("Admission", admissionSchema);

app.post("/api/submitForm", async (req, res) => {
  const { name, age, selectedBatch } = req.body;

  // Basic validation
  if (!name || !age || !selectedBatch) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save data to MongoDB
  const admission = new Admission({ name, age, selectedBatch });
  await admission.save();

  // Assume calling payment function (mocked)
  const paymentResponse = CompletePayment();

  // Return response to frontend
  const response = { success: true, paymentResponse };
  console.log(response);
  res.json(response);
});

app.get("/api/getEnrolledUsers", async (req, res) => {
  try {
    // Fetch enrolled users from the database
    const enrolledUsers = await Admission.find(
      {},
      { _id: 0, name: 1, age: 1, selectedBatch: 1 },
    );

    res.json({ success: true, enrolledUsers });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Error fetching enrolled users" });
  }
});

const CompletePayment = () => {
  // Assume this function is implemented elsewhere
  // For now, return a mock response
  return { status: "success", message: "Payment successful" };
};

const PORT = process.env.PORT || 8000;
