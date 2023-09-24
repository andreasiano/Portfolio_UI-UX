import img1 from '../assets/Blog.png'
import img2 from '../assets/Sorrentino.png'
import img3 from '../assets/Siepelunga.png'
import img4 from '../assets/ViviLittlle.png'
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
    description: "This is an East Asian Culture Blog built by using ReactJs, and  Bootstrap.",
    button: "See Project",
    link: "https://east-asian-blog.netlify.app/",
    icon: <BsFillArrowRightCircleFill/>,
  },
  {
    id: 2,
    title: "Photography Project",
    img: img2,
    description: "For this photography portfolio I used HTML, CSS, and JavaScript Modals.",
    button: "See Project",
    link: "https://sorrentinoportfolio.netlify.app/",
    icon: <BsFillArrowRightCircleFill/>
  },
  {
    id: 3,
    title: "Siepelunga24",
    img: img3,
    description: "A Website for a cigar's club built with Lunevedy. A tool to speed up web development.",
    button: "See Project",
    link: "https://siepelunga24.netlify.app/",
    icon: <BsFillArrowRightCircleFill/>
  },
  {
    id: 4,
    title: "Vivi Littlegreen",
    img: img4,
    description: "Because I wanted to work with a CMS, I built this website by using WordPress.",
    button: "See Project",
    link: "https://dev-vivilittlegreen.pantheonsite.io/",
    icon: <BsFillArrowRightCircleFill/>
  },
];

