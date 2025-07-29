# Juspay Dashboard React

## Description
This is a React-based dashboard application for Juspay. It features a main dashboard with various charts, tables, and panels for displaying data. The application includes a left side panel, main dashboard components, and a right side panel with interactive UI elements.

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) installed (version 14 or above recommended).
2. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```bash
   cd juspay-dashboard-react
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server and run the application locally:

```bash
npm start
```

This will start the app on [http://localhost:3000](http://localhost:3000) by default. The app will automatically reload if you make edits to the source files.

## Folder Structure

- `src/` - Contains the source code for the React application.
  - `components/` - React components organized by feature (LeftSide, MainDashboard, RighSide).
  - `public/` - Static assets and the main HTML file.
  - `index.js` - Entry point for the React application.
  - `App.js` - Main app component.

## Available Scripts

- `npm start` - Runs the app in development mode.
- `npm test` - Launches the test runner.
- `npm run build` - Builds the app for production.
- `npm run eject` - Ejects the app configuration (use with caution).

## Notes

- Ensure all dependencies are installed before running the app.
- The project uses React functional components and hooks.
- The UI includes charts and tables using libraries such as `react-table` and `@mui/material`.

## License

This project is licensed under the MIT License.
