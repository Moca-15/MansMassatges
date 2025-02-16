# Prototype for fregata space website
[From https://nodejs.org]

To run a React and Tailwind CSS project downloaded from GitHub on your Mac or Linuxnpm start
 using Visual Studio Code (VSC), follow these steps:

### Step 1: Install Prerequisites
Make sure you have the following installed on your Mac:
1. *Node.js and npm*: Check by running node -v and npm -v in the terminal. If not installed, download and install from [Node.js official website](https://nodejs.org/).
2. *Visual Studio Code (VSC)*: Download and install from [Visual Studio Code official website](https://code.visualstudio.com/).

### Step 2: Open the Project in VSC
1. Open Visual Studio Code.
2. Click *File > Open Folder* and navigate to the folder where you downloaded the project.
3. Click *Open* to load the project in VSC.

### Step 3: Install Dependencies
1. Open a terminal in VSC by clicking *View > Terminal* or pressing `` Ctrl+` ``.
2. Run the following command to install the project's dependencies:
   bash
   npm install
   
   This will read the package.json file and install all required dependencies.

### Step 4: Verify Tailwind CSS Configuration
Ensure Tailwind CSS is properly configured by checking for the following files in the project:
- A tailwind.config.js file, which defines Tailwind's custom configuration.
- A postcss.config.js file, which may include Tailwind's integration with PostCSS.

If these files are missing or the configuration seems incomplete, refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

### Step 5: Start the Development Server
Run the following command in the terminal:
bash
npm start

or, if the project uses yarn:
bash
yarn start


This should start the development server, and you can access the web page in your browser at the address displayed in the terminal (typically http://localhost:3000).

### Step 6: Troubleshooting Common Issues
1. *Port in Use Error*: If you see an error about the port being in use, close the other process using the port or run:
   bash
   npm start -- --port=<new-port>
   
2. *Dependencies Issues*: If npm install fails, ensure you have the correct version of Node.js. Check the engines field in package.json or refer to the project documentation.

### Step 7: Edit and Save Changes
Make edits to the React components or Tailwind CSS classes in VSC. The development server will automatically reload the changes in your browser.

You’re all set to run and work on your React and Tailwind CSS project!
