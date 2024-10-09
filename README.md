# Face Landmark Detection

This project is a React application using TypeScript and Vite for face landmark detection. It leverages TensorFlow.js and MediaPipe for real-time face mesh detection. The application captures video from the user's webcam and detects facial landmarks, drawing them on a canvas overlay.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [ESLint Configuration](#eslint-configuration)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/face-landmark.git
   cd face-landmark
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:

   ```sh
   npm start
   ```

2. Build the project:

   ```sh
   npm run build
   ```

3. Preview the production build:
   ```sh
   npm run preview
   ```

## Scripts

- `start`: Starts the development server using Vite.
- `build`: Builds the project using TypeScript and Vite.
- `lint`: Runs ESLint on the project.
- `preview`: Previews the production build using Vite.

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

  ```js
  export default tseslint.config({
    languageOptions: {
      // other options...
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
