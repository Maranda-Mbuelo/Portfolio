import { Injectable } from '@angular/core';
import { Project } from '../types/project-Interface';

@Injectable({
  providedIn: 'root'
})
export class SupplyerService {

  constructor() { }

  myServices = [
    {
      name: 'Full-Stack Web Development:', 
      display: 'I specialize in TypeScript and web technologies, enabling me to develop dynamic and interactive web applications. Using frameworks like Angular, I create captivating front-end designs. With my proficiency in and ASP.NET, I build robust server-side solutions, ensuring scalability and reliability. I excel in data management, API integrations, and crafting engaging user interfaces. My goal is to provide seamless browsing experiences through innovative web development.',
      image: '/assets/images/nobgprofile.png'
    },
    {
      name: 'Desktop Application Development:', 
      display: 'As a skilled desktop application developer, I specialize in creating customized software solutions to meet your unique requirements. With expertise in languages like C++, C#, and Python, I have the ability to develop efficient desktop applications. From standalone applications to seamless integrations, I ensure smooth performance and user-friendly interfaces. Whether you need to streamline processes, enhance productivity, or achieve specific business objectives, I deliver tailored desktop solutions that meet your needs.',
      image: '/assets/images/nobgprofile.png'
    },
    {
      name: 'Mobile App Development and Expert Instruction:', 
      display: `I specialize in Ionic mobile app development, creating cross-platform applications for iOS and Android. With my expertise in Ionic, Angular, and C++, I offer teaching classes to individuals who are eager to learn and master these technologies. Whether you're a beginner or an experienced developer, join me on a learning journey to unlock your mobile app development skills and gain a deeper understanding of programming concepts. Let's build innovative and impactful mobile applications together.`,
      image: '/assets/images/nobgprofile.png'
    }
  ]

  myProjects: Project[] = [
    {
      projectName: 'Tshindolo Park Web App',
      projectType: 'Angular',
      typeIcon: 'Angular',
      projectImages: [
        `/assets/images/TshindoloBefore.png`,
        '/assets/images/TshindoloBefore(2).png',
        '/assets/images/TshindoloNow.png',
        '/assets/images/TshindoloNow(2).png',
      ],
      projectInformation: 'Tshindolo Web App is an online dynamic Angular application that showcases a real-time Park located at Venda/Mafukani. This website offers a captivating experience by displaying stunning pictures and providing various interactive features. <br><br> With Tshindolo Web App, you have the option to enjoy an autoplay slideshow of the park pictures, immersing yourself in the beauty of the surroundings.<br> Alternatively, you can browse the pictures manually using the convenient next and previous buttons, allowing you to explore the park at your own pace. <br><br> Experience the wonders of Tshindolo Park through this engaging web app. Visit the following link to access the application:<br> <a href="https://tshindolo-bymbuelo.web.app">tshindolo-bymbuelo.web.app</a>.',
      projectGitHubRepo: '',
      steps: [
        'Step 1: Research and Planning',
        'Step 2: Design and Prototyping',
        'Step 3: Development and Implementation',
        'Step 4: Testing and Deployment'
      ]
    },
    {
      projectName: 'Blog App',
      projectType: 'Angular',
      typeIcon: 'Angular',
      projectImages: [
        {
          image1: '/assets/images/blog(1).png',
          image2: '/assets/images/blog-app(2)',
          image3: '/assets/images/blog-app(3)',
          image4: '/assets/images/blog-app(4)',
        }
      ],
      projectInformation: 'My Blog App is a dynamic Angular application that serves as a platform for sharing and managing blog posts. This powerful app is built with Angular and TypeScript, providing a seamless user experience and a modern interface. With its CRUD (Create, Read, Update, Delete) functionality, users can effortlessly create new blog posts, read existing ones, update content, and delete posts when needed. <br><br> Behind the scenes, the app is powered by a robust C# API developed using ASP.NET, which handles the backend operations and communicates with the SQL database. The SQL database efficiently stores and manages all blog post data, ensuring data integrity and reliability.<br><br> Find more of My Blog App by visiting the following link: <a href="https://your-blog-app-website.com">BrightMarsh Blog</a>.',
      projectGitHubRepo: '',
      steps: [
        'Step 1: Planning and Requirements Gathering',
        'Step 2: Frontend Development with Angular',
        'Step 3: Backend Development with ASP.NET',
        'Step 4: Integration and Testing'
      ]
    },
    {
      projectName: 'Blog-App C# Api',
      projectType: 'C#, .NET CORE & ASP.NET',
      typeIcon: 'C#',
      projectImages: [
        {
          image1: '/assets/images/BrightMarsh(1).png',
          image2: '/assets/images/blog-app-api(2)',
          image3: '/assets/images/blog-app-api(3)',
          image4: '/assets/images/blog-app-api(4)',
        }
      ],
      projectInformation: `My C# CRUD API serves as the backend for my Angular blog app. Built using ASP.NET and Microsoft NuGet packages, this API provides robust functionality for managing blog posts. With seamless integration and efficient database management, the API allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. It enables the creation of database tables, implementation of migrations, and establishes a secure connection between the Angular frontend and the backend database. Additionally, the API supports uploading pictures, providing a rich multimedia experience for blog authors and readers. Whether it's creating, editing, or deleting blog posts, this C# CRUD API offers a reliable and scalable solution for your Angular blog app.<br><br>You can learn more about my C# CRUD API for the blog app by visiting the github link: <a href="https://your-crud-api-website.com">blog api</a>`,
      projectGitHubRepo: '',
      steps: [
        'Step 1: Project Setup and Configuration',
        'Step 2: Database Design and Setup',
        'Step 3: API Development with ASP.NET',
        'Step 4: Testing and Deployment'
      ]
    },
    {
      projectName: 'Football Prediction Console App',
      projectType: 'C# Console App',
      typeIcon: 'C#',
      projectImages: [
        {
          image1: '/assets/images/footballConsole(2).png',
          image2: '/assets/images/football-Prediction(2)',
          image3: '/assets/images/football-Prediction(3)',
          image4: '/assets/images/football-Prediction(4)',
        }
      ],
      projectInformation: 'My Football Match Prediction Console App is a powerful tool for analyzing and predicting the outcomes of football matches. Developed in C#, this feature-rich app leverages an API to fetch comprehensive soccer data from a reliable football database. The app utilizes advanced mathematical algorithms and statistical analysis to identify patterns, trends, and key factors that influence match results. By applying cutting-edge prediction models, the app generates accurate forecasts for upcoming matches, empowering users to make informed decisions.<br><br> In the development of this console app, I utilized various technologies and libraries, including C#, .NET framework, and Newtonsoft.Json. The integration of Newtonsoft.Json enables seamless handling of JSON data, allowing the app to efficiently process and extract relevant information from the API responses. Furthermore, the app provides functionalities to write and read data in JSON format, facilitating the management and storage of prediction data.<br><br> My Football Match Prediction Console App offers a user-friendly interface, making it easy for users to input match data, view predictions, and explore detailed insights. Users can also customize prediction settings, including factors such as team form and match conditions, to enhance the accuracy of the predictions.<br><br> Explore the capabilities of My Football Match Prediction Console App by visiting the following link: <a href="https://your-console-app-website.com">Football Console App</a>.',
      projectGitHubRepo: '',
      steps: [
        'Step 1: Project Setup and Configuration',
        'Step 2: API Integration and Data Retrieval',
        'Step 3: Algorithm Development and Prediction Models',
        'Step 4: User Interface and Testing'
      ]
    },
    {
      projectName: 'Calculator (GUI) App',
      projectType: 'C#',
      typeIcon: 'C#',
      projectImages: [
        {
          image1: '/assets/images/calculator(1).png',
          image2: '/assets/images/calculator(2).png',
          image3: '/assets/images/calculator(3).png',
          image4: '/assets/images/calculator(4).png',
        }
      ],
      projectInformation: 'The Calculator GUI App is a desktop application developed using C# and Windows Forms. It provides a user-friendly interface for performing basic mathematical calculations. With a visually appealing design and intuitive functionality, the app allows users to input numbers, perform calculations, and view the results in real-time.<br><br>The Calculator GUI App supports various arithmetic operations, including addition, subtraction, multiplication, and division. It also includes additional features such as memory storage and retrieval, decimal precision control, and a history log of previous calculations. The app leverages event-driven programming and object-oriented principles to ensure a responsive and efficient user experience.<br><br>Explore the capabilities of the Calculator GUI App by downloading it from the following link: <a href="https://your-calculator-app-website.com">Calculator App</a>.',
      projectGitHubRepo: '',
      steps: [
        'Step 1: Project Setup and Configuration',
        'Step 2: Designing the User Interface',
        'Step 3: Implementing Calculator Logic',
        'Step 4: Testing and Deployment'
      ]
    },
    {
      projectName: 'Tic Tac Toe Game (GUI)',
      projectType: 'C#',
      typeIcon: 'C#',
      projectImages: [
        {
          image1: '/assets/images/ticO.png',
          image2: '/assets/images/ticStart.png',
          image3: '/assets/images/ticX.png',
          image4: '/assets/images/ticO.png',
        }
      ],
      projectInformation: `My Tic Tac Toe game, developed using C#, offers an exciting gaming experience that combines mathematics and critical thinking. This interactive game challenges players to strategically place their X or O marks on a 3x3 grid, aiming to create a winning combination before their opponent. With an intuitive user interface and engaging gameplay, the Tic Tac Toe game tests players' logic, decision-making, and problem-solving skills. It implements mathematical algorithms to determine winning moves and block opponents from achieving victory. Whether playing against the computer or challenging friends, this C# Tic Tac Toe game guarantees hours of fun and intellectual stimulation.<br><br>You can enjoy playing my Tic Tac Toe game by visiting the following link: <a href="https://your-tic-tac-toe-game-website.com">tic-tac-toe-game</a> <br> Just clone my Repo and run the solution and enjoy my Game`, 
      projectGitHubRepo: '',
      steps: [
        'Step 1: Project Setup and Initialization\n\nSet up the development environment for C# console application development.\nCreate a new C# console application project.\nSet up the project structure and dependencies.\nInitialize the project repository.',
        'Step 2: Fetching Football Data\n\nResearch and identify a reliable football database or API that provides comprehensive soccer data.\nIntegrate the selected football database/API into the console app.\nImplement the necessary logic to fetch football match data, including fixtures, team information, and match results.\nHandle API authentication and error handling.',
        'Step 3: Data Processing and Analysis\n\nDesign and implement algorithms for processing and analyzing football match data.\nExtract relevant information from the fetched data, such as team statistics, player performance, and match conditions.\nApply mathematical models, statistical analysis, and prediction algorithms to generate match predictions.\nImplement functions to calculate and display prediction accuracy and performance metrics.',
        'Step 4: User Interface and Interaction\n\nDesign and implement the user interface for the console app.\nDevelop a user-friendly menu system and command-line interface.\nEnable user input to provide match data, set prediction parameters, and interact with the app.\nDisplay match predictions, insights, and other relevant information to the user.\nHandle user interactions and provide appropriate responses and feedback.'
      ]      
    }
  ];
  
}
