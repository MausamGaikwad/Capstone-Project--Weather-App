 Capstone Project: Weather App

## Introduction
This project is a simple weather application that allows users to retrieve current weather information for a specified city. The application utilizes the OpenWeatherMap API to fetch weather data based on the user's input.

## Features
- **Current Weather Display**: Users can view the current temperature, city name, and weather description.
- **Error Handling**: Proper error handling is implemented to gracefully handle API errors or invalid requests.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices.

## Technologies Used
- **Node.js**: Backend environment for running the server and handling API requests.
- **Express.js**: Web application framework for Node.js used for routing and middleware.
- **Axios**: HTTP client for making requests to the OpenWeatherMap API.
- **HTML/CSS**: Frontend markup and styling.
- **EJS (Embedded JavaScript)**: Templating engine for generating dynamic HTML content.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Obtain an API key from OpenWeatherMap by signing up on their website.
5. Replace `'your_city'` and `'your_actual_api_key'` in the `app.get()` route with your actual city name and API key, respectively.
6. Run the application using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

## File Structure
- **`index.js`**: Main server file containing route definitions and server setup.
- **`public`**: Directory containing static assets such as CSS files.
  - **`css`**: Directory containing CSS stylesheets.
- **`views`**: Directory containing EJS templates.
  - **`index.ejs`**: Main template file for displaying weather information.

## Known Issues
- This application may not handle all possible error cases from the OpenWeatherMap API, such as rate limiting or network failures. Additional error handling can be implemented to improve reliability.

## Future Improvements
- Add support for fetching weather data based on user's geolocation.
- Implement caching mechanisms to reduce the number of API requests and improve performance.
- Enhance the user interface with additional weather information and interactive features.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
- [Mausam Gaikwad](https://github.com/MausamGaikwad)

## Credits
- Author: Mausam Gaikwad
- API: [OpenWeatherMap API](https://openweathermap.org/api)

Feel free to contribute to this project by submitting bug fixes, feature enhancements, or suggestions through pull requests or by opening issues on the project's GitHub repository. Thank you for using the Capstone Weather App!
