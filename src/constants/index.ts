import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "CyberSecurity",
    icon: mobile,
  },
  {
    title: "Computer Networking",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Intent Based ChatBot",
    companyName: "Shell-AICTE-Edunet",
    icon: starbucks,
    iconBg: "#383E56",
    date: "16 December 2024 - 16 January 2025",
    points: [
      "Use tokenization and TF-IDF vectorization to preprocess and convert textual data into numerical formats suitable for machine learning.",
      "Build and train a Logistic Regression model to classify user inputs into intents with high accuracy and reliability.",
      "Use the Streamlit framework to create a user-friendly chatbot interface. The interface will allow users to input messages and view real-time responses.",
      "Based on the predicted intent, the chatbot will generate appropriate responses by selecting from a list of predefined answers corresponding to each intent.",
    ],
  },
  {
    title: "Steganography",
    companyName: "IBM-AICTE-Edunet",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "15 January 2025 - 26 February 2025",
    points: [
      "Message is hidden in image pixels using RGB channels - Each character is stored in the Red, Green, or Blue values of pixels.",
      "Passcode is prepended to the message before encoding - This helps verify access during decryption.",
      "Flask handles image upload and response routing - It manages user requests and returns encoded/decoded results.",
      "Bootstrap improves UI with responsive and styled forms - Makes the web pages look clean and user-friendly.",
    ],
  },
  {
    title: "Medical Diagnosis System",
    companyName: "SAP-AICTE-Edunet",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2025 - April 2025",
    points: [
      "The system uses machine learning and deep learning models like SVM, Random Forest, and CNNs to predict diseases based on patient symptoms and medical data.",
      "A Streamlit-based web interface enables real-time predictions, voice input, and chatbot support for user-friendly diagnosis.",
      "The Random Forest model achieved 91% accuracy, showcasing its strong potential for accurate and scalable medical diagnostics.",
      "Explainable AI and data visualization tools are integrated to ensure transparency and assist healthcare professionals in interpreting results effectively.",
    ],
  },
  {
    title: "Image Segmentation and Object Detection",
    companyName: "Microsoft-AICTE-Edunet",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "10 April 2025 - 10 May 2025",
    points: [
      "The image is segmented using K-Means clustering (cv2.kmeans) where the number of clusters k is adjustable via the sidebar.",
      "After segmentation, HSV color thresholding (cv2.inRange) is used to isolate specific color regions, followed by contour detection to draw bounding boxes.",
      "The app has a stylish dark-themed UI using custom CSS with section-wise containers, styled buttons, sliders, and image outputs.",
      "Users can upload images, adjust clustering and HSV thresholds via the sidebar, and download the final result with detected objects.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Earned a Master's degree in Computer Applications (MCA) focusing on software development and modern technologies with 8.74 SGPA.",
    name: "Reva University",
    designation: "",
    company: "Bengaluru",
    image: "https://theadmissiongroup.com/wp-content/uploads/2023/10/REVA_UNIVERSITY-1-1024x575.jpg",
  },
  {
    testimonial:
      "Graduated with a Bachelor's degree in Computer Applications (BCA) with 8.74 overall CGPA.                                       ",
    name: "National College Basavanagudi",
    designation: "",
    company: "Bengaluru",
    image: "https://content3.jdmagicbox.com/v2/comp/bangalore/06/080p38406/catalogue/national-college-basavanagudi-bangalore-colleges-vdf7wq57hb.jpg",
  },
  {
    testimonial:
      "Completed 12th with a focus on Science and Scored 85% in the board exams.                                                       ",
    name: "BGS Gurukula Independent PU College",
    designation: "",
    company: "Bhadravathi",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no6KT4RPr1JcWilzOB0F69xKdcXf70fJ0xZ-X5wprqmXTw0H4bmeDusWQlmsi3ShYPJLPTyie49qtTprKu-Xej6fMKgjdiZzHqD-NQfs3m1w4J_Dv5uY9q226FQ06vxYIHSJgHDbQ=s1360-w1360-h1020-rw",
  },
];

const projects: TProject[] = [
  {
    name: "Image Segmentation",
    description:
      "Developed and implemented an Image Segmentation Model to predict the objects in the Image. The code segments the image to identify blue regions, likely representing the objects, and draws bounding boxes around them.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/MR-BHARATH-T/Image-Segmentation-and-Object-Detection",
  },
  {
    name: "Steganography",
    description:
      "Developed a web-based IMAGE STEGANOGRAPHY APPLICATION using Flask, OpenCV, and Python to hide and retrieve messages within images securely. Implemented passcode-protected encryption with a user-friendly interface for seamless and secure communication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/MR-BHARATH-T/Steganography",
  },
  {
    name: "College Event Management",
    description:
      "COLLEGE EVENTS HANDLER WEB APP Where The Requirements Were Collected from our College and Developed using HTML, CSS, PHP, BOOTSTRAP, and MYSQL Using the XAMPP server. The application allows users to register and view details of an event. ",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/MR-BHARATH-T/College-Event-Management",
  },
];

export { services, technologies, experiences, testimonials, projects };
