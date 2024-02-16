import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Set up static file serving
app.use(express.static("public"));



app.get("/", async (req, res) => {
  try {
    // Replace 'your_city' and 'your_actual_api_key' with actual values
    const city = "CaliFornia";
    const apiKey = "4973321e1e256d3d217b8d8ee4fee400";

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const weatherData = response.data;

    res.render("index.ejs", { weatherData, error: null });

  } catch (error) {
    console.error(error.response.data);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
