import {
  ecommecrce,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tictac,
  tesla,
  shopify,
  carrent,
  jobit,
  validation,
  tripguide,
  threejs,
  SocialMedia,
  Dashboard,
  snake,
  desk,
  porfolio,
  form,
  chat,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
  {
    title: 'Boostrap developer',
    icon: desk,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Bootsrap',
    icon: desk,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'E-commerce Web site',
    icon: ecommecrce,
    iconBg: '#383E56',

    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'i Uused REactJs ,NodeJs,Srapi,axios,Etc..',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Pure HTML,CSS,Javascript Developer',
    company_name: 'tictac',
    icon: tictac,
    iconBg: '#E6DEDD',

    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing game functionality',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Spotify',
    icon: shopify,
    iconBg: '#383E56',

    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Developer',
    company_name: 'Form Validation',
    icon: validation,
    iconBg: '#E6DEDD',

    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Developing full form validation in react and it full',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Excited to dive into the world of identities and authentication self sovereign identity at the smartSense Consulting Solutions! Ready to learn, network, and connect with fellow developers .',
    name: 'Abhijit sinh jadeja',
    designation: 'Principal',
    company: 'SCJPCCS',
  },
  {
    testimonial:
      'Unveiling the future! Join my journey into the latest tech wonders. 🌐💡 Explore innovation, share insights, and embrace the future together!',
    name: 'Trupti Prajapati',
    designation: 'Senior database engineer',
    company: 'Infosenseglobal Inc',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Pinki Prajapati',
    designation: 'Professor',
    company: 'SK University',
  },
];

const projects = [
  {
    name: 'full E-commrece Dashboard',
    description:
      'Product catalog, order management, user authentication, real-time sales tracking, inventory management, payment processing, analytics, and customer support integration.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Syncfusion components',
        color: 'yellow-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'ExpressJS',
        color: 'white-text-gradient',
      },
    ],
    image: Dashboard,
    source_code_link: 'https://github.com/Deeppjp116/E-commece_Dashboard',
  },
  {
    name: 'SocialMedia App',
    description:
      'Create profiles, post updates, follow friends, like and comment on posts, direct messaging, notifications, and explore trending content.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'ExpressJS',
        color: 'white-text-gradient',
      },
      {
        name: 'Redux',
        color: 'purple-text-gradient',
      },
    ],
    image: SocialMedia,
    source_code_link: 'https://github.com/Deeppjp116/Social_Media_App',
  },
  {
    name: 'Snake Game',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'Javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'HTML',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: snake,
    source_code_link: 'https://github.com/Deeppjp116/Snake-Game-in-javascript',
  },
  {
    name: 'Advance Chat-bot',
    description:
      'Streamline customer interactions, assist with product selection, process orders, provide order status updates, and offer support.',
    tags: [
      {
        name: 'Python',
        color: 'yellow-text-gradient',
      },
      {
        name: 'FastAPI',
        color: 'blue-text-gradient',
      },
      {
        name: 'Dialogflow',
        color: 'orange-text-gradient',
      },
    ],
    image: chat,
    source_code_link: 'https://github.com/Deeppjp116/Chat-bot',
  },
  {
    name: '3D Portfolio ',
    description:
      'Crafting immersive 3D portfolios with Three.js library, showcasing creativity through dynamic visualizations, enhancing web experiences with interactive designs.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Canvas',
        color: 'green-text-gradient',
      },
      {
        name: 'Three JS',
        color: 'white-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: porfolio,
    source_code_link: 'https://github.com/Deeppjp116/3D_website',
  },
];

export { services, technologies, experiences, testimonials, projects };
