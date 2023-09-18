import Jotter from '../../assets/Jotter3.png'
import JotterLogo from '../../assets/Jotter.png'
import Food from '../../assets/foodApp.png'
import ToDo from '../../assets/cat.png'
import Converter from '../../assets/currency-converter.png'

const projectData = {
  "projects": [
    {
      "id": 1,
      "title": "Jotter Blog App",
      "description": "My first fullstack project. Created a blog app using the MERN stack, integrating MongoDB for data storage and Express.js for RESTful API endpoints. Used TailwindCSS to enhance user interface resulting in a better user experience. Implemented user authentication and authorization system using JWT and Bcrypt to ensure secure data privacy and user access control.",
      "source": Jotter,
      "github": "https://github.com/j-ferber/MERN-Projects/tree/Main/Blog",
      "live": "https://jotterblog.vercel.app/",
      "image2": JotterLogo,
      "note": "The backend takes a while to start if it has not been opened for while. It will load if given some time and then refreshed.",
      "technologies": ["Node.js", "React.js", "MongoDB", "Express.js", "TailwindCSS"]
    },
    {
      "id": 2,
      "title": "React Food App",
      "source": Food,
      "github": "https://github.com/j-ferber/React-Projects/tree/main/foodApp",
      "live": "https://jferber-food-app.netlify.app/",
      "technologies": ["React.js", "CSS", "TheMealDB API"],
      "description": "My first React project. Served as a great learning experience for the basic hooks of React and introduced me to many npm packages."
    }, 
    {
      "id": 3,
      "title": "To-Do List",
      "source": ToDo,
      "github": "https://github.com/j-ferber/JavaScript-Projects/tree/main/Personal/To-Do",
      "live": "https://cat-todolist.netlify.app/",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "description": "My most complex JavaScript project at the time. Used more advanced JavaScript functions to create a working to-do list. Also introduced me to local storage."
    }, {
      "id": 4,
      "title": "Currency Converter",
      "source": Converter,
      "github": "https://github.com/j-ferber/JavaScript-Projects/tree/main/Personal/Currency%20Converter",
      "live": "https://jferber-currency-converter.netlify.app/",
      "technologies": ["HTML", "CSS", "JavaScript", "OpenCurrency API"],
      "description": "This was my first project using an API. In this project, I used the Open Exchange Rates API to build a working and up-to-date currency converter."
    }
  ]
}

export default projectData