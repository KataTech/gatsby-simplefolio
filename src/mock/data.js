import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am ',
  name: 'Kai Hung',
  subtitle: 'CS, STAT, and Living Life at Rice',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Welcome! I am a kid who’s passionate about technology, data science, Marvel, Pokemon, League of Legends, basketball, helping others, and cracking jokes. As someone who immigrated to the US from Hong Kong a decade ago, I love to help students from underrepresented immigrant background to navigate through their needs on foreign soil. I am a firm believer in positive mental attitude, aspirer to uphold my own integrity as Captain America does, and a jokester who couldn’t bare to live a moment of his life in boredom. ',
  paragraphTwo:
    'As a first generation student studying Computer Science and Statistics at Rice University, I am always looking for opportunities to grow, engage with exciting new technology, and build projects that actually benefit the community that has provided me with so much support. Currently, I am working as a research intern at MD Anderson analyzing big Data to extract insights for cancer treatment, learning web development to contribute to Rice Carpool, a ride-sharing web application made for Rice students, and expanding my knowledge by reading Intro to Statistical Learning. ',
  paragraphThree: 'Keep scrolling to see more!',
  resume: 'https://drive.google.com/file/d/175V3xJ6PNKf2r6GZu3yW1Zc2Qt-bRUnI/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Rice Carpool.png',
    title: 'Rice Carpool',
    info: 'Rice Carpool is a ride-sharing platform made by Rice Apps to allow students to connect with those who also want to share a ride to popular locations in Houston such as Rice Village, Galleria, Airports conveniently.',
    info2:
      'I am currently learning web development tools such as HTML, CSS, Javascript (React JS) to contribute to this project. More updates will come soon.',
    url: 'https://carpool.riceapps.org/',
  },
  {
    id: nanoid(),
    img: 'Basketball.jpeg',
    title: 'Jocks Box',
    info: "Jocks Box is my team's project for Rice Datasci Club' Data Education and Exploration Project (DEEP) of 2020. The project entails identifying key factors that contribute to the outcome of an NBA game, splitting our dataset into training vs. testing sets, constructing a predictive model based on these factors, and evaluating the performance of our models via statistical metrics.",
    info2:
      "I was in charge of implementing the linear model, outputing the coefficients and predicted win rates, demonstrating variable coefficient changes over time through visualization, writing presentation-friendly explanations in the Jupyter notebook through the markup tool, and optimizing our project's transferability with new season data by implementing it as a function. Overall, our project predicted the win rates with an average root mean squared error of 6.56%.",
    url: 'https://github.com/KataTech/NBA-Analysis',
    repo: "https://github.com/KataTech/NBA-Analysis/blob/main/Jocks'_Box.ipynb",
  },
  {
    id: nanoid(),
    img: 'Firefighter.jpg',
    title: 'Firefighter Fight What?',
    info: 'This is a data science project my teammates and I started given our interest for the types of problems that firefighters and emergency responders combat. We obtained a dataset from the San Francisco Fire Department and performed data analysis in hopes of determining the most frequent incident types, seasonal patterns, as well as regional patterns based on minority distributions. ',
    info2:
      'Personally, I created a database from the massive CSV, extracted the data through SQL, performed data cleaning, data visualization, and implemented various statistical testings to validates trends that we observed from the data (ANOVA, Multiple Linear Regression) related to common call types, change in response time across regions with varying minority distribution.',
    url: 'https://github.com/KataTech/Firefighters-Fight-What-/blob/main/FireAnalysis_Final.pdf',
    repo: 'https://github.com/KataTech/Firefighters-Fight-What-/blob/main/FireAnalysis_Final.Rmd',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to connect with me? Awesome!',
  btn: 'Shoot me an Email',
  email: 'kmh9@rice.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kai-hung-425a3918b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KataTech',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
