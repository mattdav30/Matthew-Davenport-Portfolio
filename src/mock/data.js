import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Davenport | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio showcasing my current and past work.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Matthew Davenport',
  subtitle: 'Developer and designer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpeg',
  paragraphOne:
    'Hi, my name is Matthew Davenport. My expertise lies in User Experience Design, this includes prototyping, wireframes, front-end design, research and general design. Apart from technical digital work, I have a keen interest working with others. I have experience in customer service, administration and general office duties.',
  paragraphTwo:
    'I have a general coding knowledge which includes both programming and web developement in multiple languages. I am proficient in using standard CMS platforms such as Wordpress and Squarespace, the Adobe Suite, filming, video editing, designing and creating graphics, and creating digital content.',
  paragraphThree:
    'I also have experience growing large social media audiences and executing digital campaign strategies. I have experience in creating and sending email campaigns to over 1 Million individuals, and serving digital ads and content to similar audiences.',
  resume: 'https://www.linkedin.com/in/matthew-davenport-b536a210b/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chat.png',
    title: 'Chat Application',
    info:
      'This is a small chat application project I have worked on which used React JS to talk to other people in real time.',
    info2:
      'As I use this personally, please contact me to learn more. Otherwise head to my Github to check out the code for it.',
    url: 'https://chattingapplication.netlify.app/',
    repo: 'https://github.com/mattdav30/chat_application', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'code.png',
    title: 'Website Example',
    info:
      'I have designed and redesigned a number of websites through the use of Squarespace and Wordpress. Another example of these websites can be seen here.',
    info2: '',
    url: 'https://paulscarr.com.au',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'code.png',
    title: 'Website Example',
    info:
      'I have designed and redesigned a number of websites through the use of Squarespace and Wordpress. Another example of these websites can be seen here.',
    info2: '',
    url: 'https://lnp.org.au',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'design_Page_01.png',
    title: 'Graphic design portfolio',
    info:
      'Created during a graphic design course at university (DECO2200), I not only showcase the work I created throughout the semester, but also express my personal style of graphic design. (Artwork is done in Illustrator, portfolio made in InDesign)',
    info2: '',
    url:
      'https://www.linkedin.com/in/matthew-davenport-b536a210b/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABuwNe8Bio7ZSN68wYfiGnHQL2PWC-Fgso0,1593422055033)/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'food.png',
    title: 'Prototyping example',
    info:
      'I have worked on a number of small prototyping projects. You can find an example to one of them below.',
    info2:
      'This shows my ability to create a functioning prototype, wireframes and conduct research for an applciation.',
    url: 'https://github.com/deco3500-2019/FoodForThought',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together or know more?',
  btn: 'Contact me',
  email: 'matt@matthewdavenport.com.au',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-davenport-b536a210b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mattdav30',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
