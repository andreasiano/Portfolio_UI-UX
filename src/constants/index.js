import img1 from '../assets/Blog.webp'
import img2 from '../assets/Sorrentino-2.png'
import img3 from '../assets/TravelApp.jpg'
import img4 from '../assets/Wallet.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const imgData = [
         {
           id: 1,
           title: "East Asian Blog",
           img: img1,
           description:
             "This is a personal project based on my passion for East Asian Cultures. It is a Blog built with React and Bootstrap.",
           button: "See Project",
           link: "https://east-asian-blog.netlify.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 2,
           title: "Wallet App",
           img: img4,
           description:
             "This is a Wallet App that helps you to view your personal finance analytics.",
           button: "View Case Study",
           link:
             "https://www.figma.com/file/lz1iEHveQYDxKmOdyb2yH3/Wallet-mobile-app-(Copy)?type=design&node-id=271-7&mode=design&t=AGqHnE71nIx4afkS-0",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 3,
           title: "Travel App",
           img: img3,
           description:
             "A Travel Mobile App Prototype for a client based in Ireland focused on simplifying travel planning.",
           button: "View Case Study",
           link:
             "https://www.figma.com/file/bohhBEUAqAzkZO6bV7XcxC/Travel-Mobile-App?type=design&node-id=514-1028&mode=design&t=Fm9WaPBFnwjv9BsJ-0",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 4,
           title: "Photography Project",
           img: img2,
           description:
             "This project is a photography portfolio built with HTML, Bootstrap and JavaScript.",
           button: "See Project",
           link: "https://sorrentinoportfolio.netlify.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
       ];

