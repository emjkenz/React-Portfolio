# React Portfolio
Recreating my old HTML portfolio in React.

![Deployment](https://github.com/emjkenz/React-Portfolio/actions/workflows/pages/pages-build-deployment/badge.svg)

## User Story
```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria
```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Example
You can view the live site [here](https://emjkenz.github.io/React-Portfolio/)

## Installation
1) Install Node.js: Make sure you have Node.js installed on your computer. You can download it from the official [Node.js website](https://nodejs.org)
2) Clone the repository: Clone the project repository to your local machine using Git or download the ZIP file and extract it.
3) Open Terminal: Open a terminal or command prompt and navigate to the project's root directory.
4) Install dependencies: In the terminal, run the following command to install the project dependencies.
```npm install```
5) Start the development server: After the dependencies are installed, start the development server by running the following command.
```npm start```
This command will start the development server and automatically open your default browser with the React app running. If the browser doesn't open, you can manually visit [http://localhost:3000](http://localhost:3000)

## Licence
This project is licnced under MIT