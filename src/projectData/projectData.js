import Chef from "../images/sous-chef.PNG";
import Employee from "../images/employee_tracker.gif";
import Fitness from "../images/fitness_tracker.PNG";
import Note from "../images/note_taker.gif";
import Nphase from "../images/nphase3.png";
import Pet from "../images/pet-seeker.PNG";
import PortfolioGen from "../images/portfolioGenerator.PNG";
import PortfolioScreenshot from "../images/PortfolioScreenshot.PNG";
import Snake from "../images/snake_game.gif";
import Team from "../images/team_cards.gif";


//***** Make sure to include 'link: "",' for un-deployed projects *******


export const JSArray = [
  {
    cardImg: Pet,
    cardTitle: "Pet Seeker",
    cardDescription:
      "Pet Seeker is a user-friendly website that can help you find your new four-legged friend! Imports data from PetFinder and The Dog APIs",
    link: "https://brandonnorsworthy.github.io/pet-seeker/",
    repo: "https://github.com/mwallis5110/pet-seeker",
  },
  {
    cardImg: Team,
    cardTitle: "Team Profile Generator",
    cardDescription:
      "Uses Object-Oriented Programming principles to generate profile information cards for team members, then uses Jest for testing",
    link: "",
    repo: "https://github.com/mwallis5110/Team_Profile_Generator_HW_10",
  },
  {
    cardImg: Note,
    cardTitle: "ExpressJS Note Taker",
    cardDescription: "A note taking app built using ExpressJS.",
    link: "https://unit-11-note-taker-32.herokuapp.com/notes",
    repo: "https://github.com/mwallis5110/Note_Taker_HW11",
  },
];

export const ReactArray = [
  {
    cardImg: Nphase,
    cardTitle: "NPhase Records Portfolio",
    cardDescription:
      "A ReactJS-based portfolio website created for NPhase Records. **Under Construction**",
    link: "https://music-portfolio-20.herokuapp.com/",
    repo: "https://github.com/mwallis5110/Music_Portfolio",
  },
  {
    cardImg: PortfolioScreenshot,
    cardTitle: "My Portfolio",
    cardDescription:
      "My personal portfolio, the website you're on right now. Built with ReactJS and NodeJS.",
    link: "https://www.masonwallisatx.com/",
    repo: "https://github.com/mwallis5110/My_Portfolio",
  },
];

export const RelationalArray = [
  {
    cardImg: Employee,
    cardTitle: "Employee Database",
    cardDescription:
      "Using Node.js, MYSQL, and InquirerJS, this program manages a company's employee database via a command-line interface.",
    link: "",  
    repo: "https://github.com/mwallis5110/Employee_Tracker_HW12",
  },
  {
    cardImg: Chef,
    cardTitle: "Sous Chef",
    cardDescription:
      "A full-stack web application that allows a user to browse a recipe library and save recipes to their own user dashboard. Uses NodeJS, Express.js, Handlebars, MySQL, and Sequelize.",
    link: "https://sous-chef-project-2.herokuapp.com/",
    repo: "https://github.com/mwallis5110/Sous-Chef",
  },
];

export const NonRelationalArray = [
  {
    cardImg: Fitness,
    cardTitle: "Fitness Tracker",
    cardDescription:
      "This program uses NoSQL and MongoDB to input and track your workout stats.",
    link: "https://fitness-tracker-hw-15.herokuapp.com/",
    repo: "https://github.com/mwallis5110/Fitness_Tracker_HW_15",
  },
  {
    cardImg: PortfolioGen,
    cardTitle: "Portfolio Generator",
    cardDescription:
      "An application that utilizes GraphQL, React, and MongoDB to generate a detailed and shareable portfolio based on user inputs.",

    link: "https://react-portfolio-generator-uta.herokuapp.com/",
    repo: "https://github.com/mwallis5110/React_Portfolio_Generator",
  },
  // {
  //   cardImg: "",
  //   cardTitle: "Social Media Site",
  //   cardDescription:
  //     "A GraphQL-based social media app. Under Construction",

  //   // link: "https://react-portfolio-generator-uta.herokuapp.com/",
  //   // repo: "https://github.com/mwallis5110/React_Portfolio_Generator",
  // },
];

export const JavaArray = [
  {
    cardImg: Snake,
    cardTitle: "Snake Game",
    cardDescription: "A simple snake game built with Java.",
    link: "",
    repo: "https://github.com/mwallis5110/java_snake_game",
  },
];
