import Jotter from '../../assets/Jotter3.png'
import JotterLogo from '../../assets/Jotter.png'
import Food from '../../assets/foodApp.png'
import Translator from '../../assets/nauticalTranslator.png'
import SocialImage from '../../assets/social-media-app.png'

const projectData = {
  "projects": [
    {
      "id": 1,
      "title": "Social Media App",
      "source": SocialImage,
      "github": "https://github.com/j-ferber/social-media-app",
      "live": "https://sma.jferber.xyz/",
      "technologies": ["Next.js", "AWS S3", "AWS EC2", "PostgreSQL", "TailwindCSS", "Prisma", "TRPC"],
      "description": "A social media app that allows users to post, like, and comment on posts. The app is hosted on an AWS EC2 instance and uses an S3 bucket to store images."
    },
    {
      "id": 2,
      "title": "Nautical Translator",
      "source": Translator,
      "github": "https://github.com/Caposto/nautical_translator",
      "live": "https://nautical-translator.vercel.app/",
      "technologies": ["React", "Tailwind CSS", "Kintone", "Express.js", "Node.js"],
      "description": "This project was made in a group of 4 for HackNJIT 2023. Won 'Best use of Kintone' award with over 200+ participants."
    },
    {
      "id": 3,
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
      "id": 4,
      "title": "React Food App",
      "source": Food,
      "github": "https://github.com/j-ferber/React-Projects/tree/main/foodApp",
      "live": "https://jferber-food-app.netlify.app/",
      "technologies": ["React.js", "CSS", "TheMealDB API"],
      "description": "My first React project. Served as a great learning experience for the basic hooks of React and introduced me to many npm packages."
    }
  ]
}

export default projectData