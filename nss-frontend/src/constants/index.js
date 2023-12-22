import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { IIITD_1,IIITD_2,IIITD_3, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';
export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/team", label: "Team"},
    { href: "/admin", label: "Admin"},
];

export const navlinksadmin = [
    {
      name: 'Home',
      imgUrl: dashboard,
      link: '/admin',
    },
    {
      name: 'Events',
      imgUrl: createCampaign,
      link: '/admin/adminEvent',
    },
    {
      name: 'Blogs',
      imgUrl: payment,
      link: '/admin/adminBlog',
    //   disabled: true,
    },
    {
      name: 'Testimonies',
      imgUrl: withdraw,
      link: '/adminTestimonies',
      disabled: true,
    },
    {
      name: 'Team',
      imgUrl: profile,
      link: '/adminTeam',
    },
    {
      name: 'logout',
      imgUrl: logout,
      link: '/',
      disabled: true,
    },
  ];

export const IIITDImages = [
    {
        thumbnail: IIITD_1,
        bigShoe: IIITD_1,
    },
    {
        thumbnail: IIITD_2,
        bigShoe: IIITD_2,
    },
    {
        thumbnail: IIITD_3,
        bigShoe: IIITD_3,
    },
    {
        thumbnail: IIITD_3,
        bigShoe: IIITD_3,
    },
];

export const statistics = [
    { value: '1k+', stat: 'Volunteers' },
    { value: '500+', stat: 'Collaborations' },
    { value: '250+', stat: 'Initiatives' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            { name: "Gallery", link: "/Gallery" },
            { name: "Testimonials", link: "/Testimonial" },

            { name: "Blog", link: "/Subscribe" },
            
            
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/about-us" },
            { name: "FAQs", link: "/FAQs" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Email", link: "mailto:nss@iiitd.ac.in" },
            { name: "Phone", link: "tel:+9717807101" },
        ],
    },
];

export const socialMedia = [
    { href:"#" ,src: facebook, alt: "facebook logo" },
    { href:"#" ,src: twitter, alt: "twitter logo" },
    { href:"#", src: instagram, alt: "instagram logo" },
];