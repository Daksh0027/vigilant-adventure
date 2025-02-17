Collecting workspace information

Scrapbook App
This project is a digital scrapbook application built with React and Vite. It allows users to create, edit, and manage scrapbook entries with images, descriptions, and stickers. The application also includes a canvas feature for doodling and adding stickers.

Project Structure
Grp Poject - canvas/
  ├── eslint.config.js
  ├── index.html
  ├── package.json
  ├── public/
  │   └── vite.svg
  ├── README.md
  ├── src/
  │   ├── App.css
  │   ├── App.jsx
  │   ├── assets/
  │   │   └── react.svg
  │   ├── heart.gif
  │   ├── index.css
  │   ├── main.jsx
  │   ├── star.png
  │   └── style.css
  └── vite.config.js
GrpProject/
  ├── loginPage/
  │   ├── .gitignore
  │   ├── eslint.config.js
  │   ├── index.html
  │   ├── package.json
  │   ├── public/
  │   │   ├── beach.jpeg
  │   │   ├── birthday.jpeg
  │   │   ├── mountain.jpeg
  │   │   └── vite.svg
  │   ├── README.md
  │   ├── src/
  │   │   ├── App.css
  │   │   ├── App.jsx
  │   │   ├── assets/
  │   │   ├── components/
  │   │   │   ├── Dashboard/
  │   │   │   │   ├── Scrapbook.module.css
  │   │   │   │   ├── scrapbook.jsx
  │   │   │   │   └── ScrapbookDashboard.jsx
  │   │   │   ├── home/
  │   │   │   │   ├── home.jsx
  │   │   │   │   └── home.module.css
  │   │   │   └── login/
  │   │   │       └── login.jsx
  │   │   ├── index.css
  │   │   ├── main.jsx
  │   │   ├── services/
  │   │   │   ├── authService.js
  │   │   │   └── firebaseConfig.js
  │   └── vite.config.js
  └── README.md
README.md
Features
Scrapbook Entries: Create, edit, and delete scrapbook entries with images and descriptions.
Canvas: Doodle and add stickers on a canvas.
Authentication: Sign up and log in using Firebase authentication.
Dark Mode: Toggle between light and dark modes.
Installation
Clone the repository:git clone https://github.com/Daksh0027/vigilant-adventure.git
cd vigilant-adventure
Install dependencies for both projects: cd "Grp Poject - canvas"
npm install
cd ../GrpProject/loginPage
npm install
Usage:
Start the development server for the canvas project:
cd "Grp Poject - canvas"
npm run dev
Start the development server for the login page project:
cd ../GrpProject/loginPage
npm run dev
Open your browser and navigate to the provided local server URLs to view the application.
Scripts
dev: Start the development server.
build: Build the project for production.
lint: Run ESLint to check for code quality issues.
preview: Preview the production build.
Dependencies
React: A JavaScript library for building user interfaces.
Vite: A build tool that provides a fast development server and optimized production builds.
Fabric.js: A powerful and simple JavaScript HTML5 canvas library.
Firebase: A platform for building web and mobile applications with authentication and real-time databases.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Development
Canvas Project
The canvas project is located in the Grp Poject - canvas directory. It includes the main canvas functionality for doodling and adding stickers.

Login Page Project
The login page project is located in the loginPage directory. It includes the authentication and main dashboard functionality.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Made by Ayush Jha, Vansh, Arshia, and Nishtha.
Special thanks to the creators of React, Vite, Fabric.js, and Firebase for their amazing tools and libraries.
