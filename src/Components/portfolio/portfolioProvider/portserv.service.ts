import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortservService {
  data:any[] = [
    {
      id: 1,
      category: 'Full-Stack',
      image: 'assets/roberto-cortese-ejhjSZKTeeg-unsplash.jpg',
      title: "E-commerce Using ASP MVC",
      desc: "I created an ASP.NET e-commerce application with user authentication, product browsing, cart management, and secure checkout. Features include real-time inventory updates and order management, designed to provide a seamless shopping experience.",
      demo: 'https://youtu.be/sl1fW3qiESI',
      github: 'https://github.com/osama-ibrahem-mohammed/Eagles'
  },
    {
        id: 2,
        category: 'Fundamental(back-End)',
        image: 'assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg',
        title: "Bank queue management system",
        desc: "This project implements a bank queue management system in C++, featuring efficient customer queue handling using linked lists and priority queues. It optimizes customer service by prioritizing transactions and ensuring smooth operations.",
        demo: 'https://youtu.be/qvG6xORPyr4',
        github: 'https://github.com/osama-ibrahem-mohammed/Bank-Queue-managment-system '
    },
    {
      id: 6,
      category: 'Fundamental(front-End)',
      image: 'assets/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg',
      title: "portfolio Using JQuery ",
      desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
      demo: 'https://www.youtube.com/watch?v=PKgHXVJnJhw',
      github: 'https://github.com/egattor'
  },
    {
        id: 3,
        category: 'BACK-END',
        image: 'assets/austrian-national-library-t5qnrCVkUz8-unsplash.jpg',
        title: "HelperPlan(back end)",
        desc: "HelperPlan is designed to streamline the hiring process, providing a user-friendly interface for both employers and job seekers",
        demo: 'https://www.youtube.com/watch?v=FEX0KKY3-Lk',
        github: 'https://github.com/ahmedsolimanelkomy/HelperPlan-Backend'
    },
    {
        id: 4,
        category: 'Front-END',
        image: 'assets/austrian-national-library-t5qnrCVkUz8-unsplash.jpg',
        title: "HelperPlan(Front end)",
        desc: "HelperPlan is designed to streamline the hiring process, providing a user-friendly interface for both employers and job seekers",
        demo: 'https://www.youtube.com/watch?v=FEX0KKY3-Lk',
        github: 'https://github.com/shroukgamall17/Helper-Place-Angular'
    },
    {
        id: 5,
        category: 'Fundamental(back-End)',
        image: 'assets/low_quality-JmCIH4uBRa.jpg',
        title: "Mini store using c",
        desc: "Using C language, I developed a mini store system to efficiently manage various aspects of product management. This system allows for adding, deleting, and modifying products, ensuring accurate and up-to-date inventory management. Additionally, it handles the process of purchasing product",
        demo: 'https://youtu.be/ewafDodidiA',
        github: 'https://github.com/osama-ibrahem-mohammed/Mini-store'
    },

    {
        id: 7,
        category: 'Front-END',
        image: 'assets/jeshoots-com--2vD8lIhdnw-unsplash.jpg',
        title: "BrainBoost Elearning (Frontend)",
        desc: "I developed an e-learning platform using Angular and .NET, featuring interactive quizzes, course management, and user profiles. It supports dynamic content updates, personalized learning paths, and secure access, enhancing the educational experience for users.",
        demo: '#',
        github: 'https://github.com/Hagar-Ibrahim11/BrainBoost'
    },
    {
        id: 8,
        category: 'BACK-END',
        image: 'assets/jeshoots-com--2vD8lIhdnw-unsplash.jpg',
        title: "BrainBoost Elearning (Backend)",
        desc: "I developed an e-learning platform using Angular and .NET, featuring interactive quizzes, course management, and user profiles. It supports dynamic content updates, personalized learning paths, and secure access, enhancing the educational experience for users.",
        demo: '#',
        github: 'https://github.com/PoulaMaher/BrainBoost-API2'
    },

]

  constructor() { }
}
