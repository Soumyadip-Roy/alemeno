// src/data/coursesData.js
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import img20 from "../assets/img20.png";

const coursesData = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "Rahul Verma",
    description:
      "Learn the fundamentals of React Native and build your first mobile app for iOS and Android. This course covers the complete basics of setting up the development environment, understanding React Native components, and designing robust, cross-platform mobile applications. By the end of this immersive 12-week program, you will have the skills to create and deploy your own app to app stores with confidence.",
    enrollmentStatus: "Open",
    thumbnail: img1,
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction & Environment Setup",
        content:
          "Get an overview of React Native, learn about its core principles, and set up a proper development environment. We’ll also explore the similarities and differences between React for web and React Native.",
      },
      {
        week: 2,
        topic: "JSX & Components",
        content:
          "Understand how JSX works under the hood and learn to build reusable, modular components. By the end of this week, you’ll be comfortable structuring pages with multiple components.",
      },
      {
        week: 3,
        topic: "State & Props",
        content:
          "Discover how to manage data effectively within React Native components. This week covers the fundamentals of passing data between parent and child components, handling complex state changes, and understanding unidirectional data flow.",
      },
      {
        week: 4,
        topic: "Styling & Layouts",
        content:
          "Dive deeper into React Native styling options and learn to design polished interfaces using Flexbox, StyleSheet, and platform-specific optimizations for iOS and Android.",
      },
      {
        week: 5,
        topic: "Navigation",
        content:
          "Implement and configure React Navigation to move between screens. Understand stack navigation, tab navigation, and best practices for user-friendly navigation flows.",
      },
      {
        week: 6,
        topic: "APIs & Data Fetching",
        content:
          "Work with external APIs to fetch and display dynamic data. Delve into asynchronous calls using fetch or Axios, handle errors, and keep your components performant.",
      },
      {
        week: 7,
        topic: "User Input & Forms",
        content:
          "Build complex forms and handle user inputs with controlled components. Explore libraries for form validation and best practices for a seamless user experience.",
      },
      {
        week: 8,
        topic: "Debugging & Testing",
        content:
          "Use debugging tools to track down issues and learn the fundamentals of testing React Native applications. This includes snapshot tests and integration tests.",
      },
      {
        week: 9,
        topic: "Advanced Components",
        content:
          "Enhance your knowledge of component lifecycles, performance optimization, and how to create reusable custom hooks for stateful logic in React Native.",
      },
      {
        week: 10,
        topic: "Animations & Gestures",
        content:
          "Discover how to implement fluid animations and gesture-based interactions. Explore the Animated API, Reanimated, and best practices for crafting interactive UIs.",
      },
      {
        week: 11,
        topic: "Performance Optimization",
        content:
          "Learn strategies to optimize rendering, handle large data lists efficiently, and ensure a smooth user experience on various devices and screen sizes.",
      },
      {
        week: 12,
        topic: "Deployment & Best Practices",
        content:
          "Prepare your app for deployment on both iOS and Android. Explore signing, build configurations, and adopting best practices for long-term maintenance.",
      },
    ],
    students: [
      { id: 123, name: "Soumyadip Roy", email: "soumyadiproy1611@gmail.com" },
      { id: 202, name: "Sneha Kulkarni", email: "sneha.kulkarni@example.com" },
    ],
    likes: 39,
    dueDate: "2025-03-15",
    progress: 0,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    instructor: "Priya Singh",
    description:
      "Dive deep into the modern features of JavaScript and discover advanced topics and best practices. This course covers ES6+ syntax, asynchronous programming, and essential design patterns that will help you write cleaner, more efficient code. By the end, you'll have a solid grasp of the latest JS capabilities and how to apply them in real-world projects.",
    enrollmentStatus: "In Progress",
    thumbnail: img2,
    duration: "4 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "Understanding of DOM"],
    syllabus: [
      {
        week: 1,
        topic: "Deep Dive into ES6 and Beyond",
        content:
          "Uncover the power of modern JavaScript features such as arrow functions, template literals, classes, and modules. Learn how these enhancements simplify code and improve readability.",
      },
      {
        week: 2,
        topic: "Asynchronous Programming",
        content:
          "Master promises, async/await, and the event loop. We’ll also explore how to handle concurrency and avoid common pitfalls like callback hell.",
      },
      {
        week: 3,
        topic: "Design Patterns in JavaScript",
        content:
          "Learn well-known design patterns such as Module, Observer, and Singleton, and see how they can be implemented in JavaScript for cleaner, more maintainable apps.",
      },
      {
        week: 4,
        topic: "Performance Optimization",
        content:
          "Discover techniques and tools like Chrome DevTools, Lighthouse, and memory profiling to optimize JavaScript code for better performance and scalability.",
      },
    ],
    students: [
      { id: 203, name: "Rahul Sharma", email: "rahul.sharma@example.com" },
      { id: 204, name: "Pooja Reddy", email: "pooja.reddy@example.com" },
      {
        id: 123,
        name: "Soumyadip Roy",
        email: "soumyadiproy1611@gmail.com",
      },
    ],
    likes: 25,
    dueDate: "2025-04-01",
    progress: 20,
  },
  {
    id: 3,
    name: "Data Structures and Algorithms",
    instructor: "Amitabh Kumar",
    description:
      "Master the essential data structures and algorithms that form the backbone of efficient software. Throughout this 12-week journey, you will learn how to tackle problems systematically, analyze time and space complexity, and implement critical algorithms used in modern development. This course is ideal for aspiring developers and computer science enthusiasts.",
    enrollmentStatus: "Closed",
    thumbnail: img3,
    duration: "12 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming",
      "Familiarity with any programming language",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Structures",
        content:
          "Examine the significance of various data structures in programming. Learn about abstract data types and the key characteristics that make them optimal for different tasks.",
      },
      {
        week: 2,
        topic: "Arrays and Linked Lists",
        content:
          "Understand how arrays store elements contiguously and learn linked lists for more flexible insertions and deletions. We'll implement common operations and compare time complexities.",
      },
      {
        week: 3,
        topic: "Stacks and Queues",
        content:
          "Explore these fundamental LIFO and FIFO data structures. Implement classic applications such as expression evaluation (stacks) and breadth-first searches (queues).",
      },
      {
        week: 4,
        topic: "Trees: Basics",
        content:
          "Delve into tree terminology, binary tree representations, and recursive traversal techniques. Learn why trees are crucial for hierarchical data organization.",
      },
      {
        week: 5,
        topic: "Binary Search Trees",
        content:
          "Discover how BSTs maintain sorted data, enabling efficient search, insertion, and deletion. Analyze time complexity and build your own BST from scratch.",
      },
      {
        week: 6,
        topic: "Heaps and Priority Queues",
        content:
          "Implement min-heaps and max-heaps, learn about heapify operations, and see how priority queues are indispensable for scheduling and simulation problems.",
      },
      {
        week: 7,
        topic: "Graphs: Representation",
        content:
          "Focus on adjacency matrices and adjacency lists, the two primary ways to represent graphs. We'll also discuss the trade-offs in memory and efficiency.",
      },
      {
        week: 8,
        topic: "Graph Traversal Algorithms",
        content:
          "Dive into Depth-First Search (DFS) and Breadth-First Search (BFS). Understand how they are applied in pathfinding, cycle detection, and bipartite checks.",
      },
      {
        week: 9,
        topic: "Sorting Algorithms",
        content:
          "Compare and contrast different sorting techniques like bubble, merge, quick, and selection sort. Gain insights into best, average, and worst-case complexities.",
      },
      {
        week: 10,
        topic: "Searching Algorithms",
        content:
          "Go beyond linear and binary search with additional searching paradigms. Learn about search optimizations and the significance of data structuring.",
      },
      {
        week: 11,
        topic: "Dynamic Programming",
        content:
          "Unravel top-down and bottom-up approaches to solve complex optimization problems. Practice with classic DP challenges like Knapsack and Fibonacci variations.",
      },
      {
        week: 12,
        topic: "Algorithm Complexity and Optimization",
        content:
          "Develop an understanding of Big O notation, measure algorithm performance, and learn how to optimize code for real-world applications.",
      },
    ],
    students: [
      { id: 205, name: "Kiran Desai", email: "kiran.desai@example.com" },
      { id: 206, name: "Meera Nair", email: "meera.nair@example.com" },
    ],
    likes: 40,
    dueDate: "2025-05-10",
    progress: 50,
  },
  {
    id: 4,
    name: "Machine Learning with Python",
    instructor: "Neha Patel",
    description:
      "Enter the world of predictive analytics and intelligent systems with this in-depth course on machine learning. You’ll learn how to explore data, engineer relevant features, and train models using popular Python libraries. By applying these concepts to real-world scenarios, you’ll develop a strong foundation in both theory and practical implementation.",
    enrollmentStatus: "In Progress",
    thumbnail: img4,
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic Python programming", "Statistics fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content:
          "Discover the basics of machine learning, including various types of learning (supervised, unsupervised, reinforcement) and real-world applications across industries.",
      },
      {
        week: 2,
        topic: "Python for Data Science",
        content:
          "Learn to use NumPy, Pandas, and Matplotlib for data manipulation, cleaning, and visualization. Get comfortable with Jupyter notebooks to streamline your workflow.",
      },
      {
        week: 3,
        topic: "Data Preprocessing",
        content:
          "Handle missing values, outliers, and categorical data effectively. Explore techniques like normalization and standardization to prepare datasets for modeling.",
      },
      {
        week: 4,
        topic: "Supervised Learning Fundamentals",
        content:
          "Distinguish between regression and classification. Build your first simple regression and classification models to see how they make predictions.",
      },
      {
        week: 5,
        topic: "Linear Regression",
        content:
          "Dive into gradient descent, cost functions, and underfitting vs. overfitting. Implement linear regression models using scikit-learn.",
      },
      {
        week: 6,
        topic: "Logistic Regression",
        content:
          "Focus on binary classification problems. Learn the math behind logistic regression and how to interpret model outputs for decision-making.",
      },
      {
        week: 7,
        topic: "Decision Trees & Random Forests",
        content:
          "Understand how tree-based models split data, measure impurity, and how ensemble methods can boost performance and reduce variance.",
      },
      {
        week: 8,
        topic: "Support Vector Machines",
        content:
          "Explore the geometric intuition behind SVMs, kernel functions, and regularization. Practice using SVMs for complex classification tasks.",
      },
      {
        week: 9,
        topic: "Unsupervised Learning: Clustering",
        content:
          "Learn about K-means, hierarchical clustering, and other methods to group data without labels. Understand key challenges like choosing the number of clusters.",
      },
      {
        week: 10,
        topic: "Model Evaluation & Tuning",
        content:
          "Use cross-validation, metrics such as precision and recall, and hyperparameter tuning to refine model performance and avoid overfitting.",
      },
      {
        week: 11,
        topic: "Deep Learning Introduction",
        content:
          "Get a high-level overview of neural networks, backpropagation, and modern deep learning frameworks like TensorFlow or PyTorch.",
      },
      {
        week: 12,
        topic: "Project and Case Studies",
        content:
          "Apply all you’ve learned in a hands-on project. Explore real-world ML use cases in areas such as finance, healthcare, or e-commerce.",
      },
    ],
    students: [
      { id: 207, name: "Sanjay Mehta", email: "sanjay.mehta@example.com" },
      { id: 208, name: "Ritika Singh", email: "ritika.singh@example.com" },
      {
        id: 123,
        name: "Soumyadip Roy",
        email: "soumyadiproy1611@gmail.com",
      },
    ],
    likes: 35,
    dueDate: "2025-06-01",
    progress: 30,
  },
  {
    id: 5,
    name: "Full Stack Web Development",
    instructor: "Suresh Iyer",
    description:
      "Become a versatile developer by mastering both front-end and back-end technologies. This comprehensive 12-week course covers everything from crafting responsive UIs to building RESTful APIs and managing databases. Whether you aim to work at a startup or an enterprise, you’ll gain the practical skills to develop and deploy full-stack applications.",
    enrollmentStatus: "Open",
    thumbnail: img5,
    duration: "12 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with HTML and CSS",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Web Development",
        content:
          "Survey the ecosystem of web technologies, including client-side, server-side, and database layers. Understand how these layers interact in a full-stack application.",
      },
      {
        week: 2,
        topic: "HTML & CSS Fundamentals",
        content:
          "Learn semantic HTML for better structure and modern CSS techniques for styling. Practice building accessible, standards-compliant web pages.",
      },
      {
        week: 3,
        topic: "JavaScript Essentials",
        content:
          "Use JavaScript to add interactivity to web pages. Explore DOM manipulation, events, and the basics of ES6+ features to write cleaner code.",
      },
      {
        week: 4,
        topic: "Responsive Design & Bootstrap",
        content:
          "Create mobile-first layouts using CSS frameworks like Bootstrap. Understand the fundamentals of grid systems and responsive breakpoints.",
      },
      {
        week: 5,
        topic: "Version Control with Git",
        content:
          "Embrace collaborative workflows by learning Git commands, branching strategies, and how to handle merge conflicts effectively.",
      },
      {
        week: 6,
        topic: "Server-side Programming with Node.js",
        content:
          "Build a simple REST API using Express.js. Learn about routes, middleware, and how to handle requests and responses securely.",
      },
      {
        week: 7,
        topic: "Databases & SQL",
        content:
          "Get acquainted with relational databases like MySQL or PostgreSQL. Write basic SQL queries to store, retrieve, and manipulate data.",
      },
      {
        week: 8,
        topic: "RESTful APIs",
        content:
          "Dive deeper into designing and building robust APIs. Understand best practices for endpoints, authentication, and handling errors gracefully.",
      },
      {
        week: 9,
        topic: "Front-end Frameworks: React",
        content:
          "Learn React’s component-based architecture, state management, and how to build modular, scalable user interfaces.",
      },
      {
        week: 10,
        topic: "State Management with Redux",
        content:
          "Handle complex state transitions in large applications using Redux. Dive into concepts like reducers, actions, and the store.",
      },
      {
        week: 11,
        topic: "Deployment & DevOps",
        content:
          "Discover the deployment process with services like Heroku or AWS. Explore continuous integration and continuous delivery (CI/CD) pipelines.",
      },
      {
        week: 12,
        topic: "Capstone Project",
        content:
          "Work in teams to build a complete full-stack project. Apply all your knowledge—from database design to front-end development—before presenting it.",
      },
    ],
    students: [
      { id: 123, name: "Soumyadip Roy", email: "soumyadiproy1611@gmail.com" },
      { id: 210, name: "Deepa Reddy", email: "deepa.reddy@example.com" },
    ],
    likes: 50,
    dueDate: "2025-07-15",
    progress: 10,
  },
  {
    id: 6,
    name: "Cyber Security Fundamentals",
    instructor: "Anjali Mehta",
    description:
      "Delve into the essentials of cybersecurity to protect networks, devices, and data from malicious attacks. This 8-week course focuses on practical skills like recognizing vulnerabilities, encrypting sensitive data, and responding to breaches effectively. Perfect for beginners and IT professionals who want to understand the security landscape.",
    enrollmentStatus: "Open",
    thumbnail: img6,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 5:30 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of computers",
      "Networking basics recommended",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cyber Security",
        content:
          "Examine the types of cyber threats and attack vectors. Learn core principles like confidentiality, integrity, availability, and how these shape a security mindset.",
      },
      {
        week: 2,
        topic: "Network Security",
        content:
          "Understand firewall configurations, VPN setups, and best practices for designing secure network architectures. Implement practical methods to protect data in transit.",
      },
      {
        week: 3,
        topic: "Cryptography Basics",
        content:
          "Explore key cryptographic concepts, including symmetric and asymmetric encryption, hashing, and practical applications like SSL/TLS for secure communication.",
      },
      {
        week: 4,
        topic: "Web Security",
        content:
          "Identify common web vulnerabilities such as SQL injection and XSS. Learn how developers can mitigate these risks through secure coding and frameworks.",
      },
      {
        week: 5,
        topic: "Ethical Hacking Introduction",
        content:
          "Get introduced to penetration testing, reconnaissance techniques, and the legal boundaries that define ethical hacking vs. malicious attacks.",
      },
      {
        week: 6,
        topic: "Security Tools & Practices",
        content:
          "Hands-on practice with popular security tools such as Wireshark, Metasploit, and Nmap. Discuss strategies for maintaining good security hygiene.",
      },
      {
        week: 7,
        topic: "Incident Response & Management",
        content:
          "Develop protocols for identifying breaches, containing damage, and recovering systems. Learn how to document incidents and communicate with stakeholders.",
      },
      {
        week: 8,
        topic: "Emerging Trends in Cyber Security",
        content:
          "Explore modern challenges like IoT security, AI-driven attacks, and the future of cybersecurity. Stay ahead by understanding the evolving threat landscape.",
      },
    ],
    students: [
      { id: 211, name: "Vikram Rao", email: "vikram.rao@example.com" },
      { id: 212, name: "Lakshmi Iyer", email: "lakshmi.iyer@example.com" },
    ],
    likes: 30,
    dueDate: "2025-08-20",
    progress: 15,
  },
  {
    id: 7,
    name: "Cloud Computing with AWS",
    instructor: "Vikram Singh",
    description:
      "Gain a firm grounding in Amazon Web Services, the world’s leading cloud platform. Learn how to deploy virtual machines, store data securely, and implement robust networking solutions. This 4-week crash course will equip you with the skills necessary to launch and manage basic cloud infrastructures on AWS.",
    enrollmentStatus: "In Progress",
    thumbnail: img7,
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic networking knowledge",
      "Understanding of cloud concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cloud Computing",
        content:
          "Learn the fundamentals of Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Understand the core AWS pillars and global infrastructure.",
      },
      {
        week: 2,
        topic: "AWS Core Services",
        content:
          "Deep dive into Amazon EC2 for computing, Amazon S3 for storage, and Amazon VPC for networking. Gain hands-on experience provisioning instances and configuring networks.",
      },
      {
        week: 3,
        topic: "AWS Security & Compliance",
        content:
          "Explore Identity and Access Management (IAM) for controlling user access, AWS CloudTrail for auditing, and best practices for encrypting data at rest and in transit.",
      },
      {
        week: 4,
        topic: "Deployment & Management",
        content:
          "Set up and deploy a simple web application in AWS. Learn about autoscaling, load balancing, and monitoring solutions like Amazon CloudWatch to ensure high availability.",
      },
    ],
    students: [
      { id: 213, name: "Manoj Verma", email: "manoj.verma@example.com" },
      {
        id: 214,
        name: "Shreya Banerjee",
        email: "shreya.banerjee@example.com",
      },
    ],
    likes: 22,
    dueDate: "2025-09-10",
    progress: 40,
  },
  {
    id: 8,
    name: "Android App Development",
    instructor: "Rohit Gupta",
    description:
      "Designed for aspiring Android developers, this course covers the essentials of creating polished apps for the world’s most popular mobile operating system. Over 12 weeks, you’ll master UI design, background processing, data persistence, and the process of submitting your apps to the Play Store. Elevate your coding skills and bring your ideas to life on Android.",
    enrollmentStatus: "Open",
    thumbnail: img8,
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Java programming", "Understanding of XML layouts"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Android & Android Studio",
        content:
          "Discover the Android ecosystem, install Android Studio, and learn how to create your first project. Explore the project structure and Gradle build system.",
      },
      {
        week: 2,
        topic: "Basic UI Components",
        content:
          "Get comfortable with Views, Layouts, and Resource Management. Learn about commonly used UI elements like TextView, EditText, and Button.",
      },
      {
        week: 3,
        topic: "Activities & Intents",
        content:
          "Study the activity lifecycle, understand how to navigate between screens, and pass data using intents. Delve into best practices for code organization.",
      },
      {
        week: 4,
        topic: "Fragments & Navigation",
        content:
          "Implement modular UI design using fragments. Master the Navigation Component to create seamless in-app transitions and handle complex back-stack scenarios.",
      },
      {
        week: 5,
        topic: "Data Persistence",
        content:
          "Learn about storing data locally using SQLite, the Room library, and SharedPreferences. Implement CRUD operations and handle migrations.",
      },
      {
        week: 6,
        topic: "Networking in Android",
        content:
          "Use Retrofit or Volley for making network calls, parse JSON data, and work with APIs. Understand threading and best practices for background tasks.",
      },
      {
        week: 7,
        topic: "Advanced UI & Animations",
        content:
          "Create custom views, leverage Material Design components, and implement animations for intuitive and engaging user experiences.",
      },
      {
        week: 8,
        topic: "Background Processing",
        content:
          "Explore services, WorkManager, and coroutines (if using Kotlin). Ensure smooth performance and responsiveness even under heavy workloads.",
      },
      {
        week: 9,
        topic: "Material Design Principles",
        content:
          "Align your apps with Google’s Material Design guidelines. Learn theming, color systems, and how to create visually consistent UIs.",
      },
      {
        week: 10,
        topic: "Debugging & Testing",
        content:
          "Use Android Studio’s debugger, Logcat, and automated testing frameworks like JUnit and Espresso. Learn how to efficiently fix issues and prevent regressions.",
      },
      {
        week: 11,
        topic: "Publishing Your App",
        content:
          "Generate release builds, create signed APKs, and prepare store listings. Understand the process of launching your app on the Google Play Store.",
      },
      {
        week: 12,
        topic: "Capstone Project",
        content:
          "Design and develop a full-fledged Android application. Implement all major components learned throughout the course and present your final product.",
      },
    ],
    students: [
      { id: 215, name: "Ravi Singh", email: "ravi.singh@example.com" },
      { id: 123, name: "Soumyadip Roy", email: "soumyadiproy1611@gmail.com" },
    ],
    likes: 45,
    dueDate: "2025-10-05",
    progress: 70,
  },
  {
    id: 9,
    name: "Digital Marketing Strategies",
    instructor: "Sunita Desai",
    description:
      "Boost your brand’s online presence by learning the latest digital marketing tactics. This 4-week program delves into search engine optimization, social media marketing, and analytics to help you make data-driven decisions. By the end, you’ll be able to craft compelling campaigns and track their performance across multiple platforms.",
    enrollmentStatus: "In Progress",
    thumbnail: img9,
    duration: "4 weeks",
    schedule: "Wednesdays and Fridays, 6:30 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic marketing knowledge",
      "Understanding of social media platforms",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content:
          "Explore the digital marketing ecosystem, including paid, owned, and earned channels. Understand how these channels work together to support a cohesive strategy.",
      },
      {
        week: 2,
        topic: "SEO & Content Marketing",
        content:
          "Learn on-page and off-page SEO techniques, keyword research, and best practices for creating high-quality, engaging content that ranks well on search engines.",
      },
      {
        week: 3,
        topic: "Social Media Marketing",
        content:
          "Develop channel-specific strategies for platforms like Facebook, Instagram, and LinkedIn. Learn targeting, ad creation, and how to build authentic audience engagement.",
      },
      {
        week: 4,
        topic: "Analytics & Conversion Optimization",
        content:
          "Use tools like Google Analytics and social media insights to track and measure success. Implement conversion optimization tactics to improve ROI and lead generation.",
      },
    ],
    students: [
      { id: 217, name: "Suresh Kumar", email: "suresh.kumar@example.com" },
      { id: 218, name: "Pallavi Joshi", email: "pallavi.joshi@example.com" },
    ],
    likes: 18,
    dueDate: "2025-11-01",
    progress: 60,
  },
  {
    id: 10,
    name: "Blockchain Technology",
    instructor: "Manish Kapoor",
    description:
      "Explore the groundbreaking technology behind Bitcoin and other cryptocurrencies. Over 8 weeks, you’ll learn about decentralized networks, smart contracts, and how blockchain can revolutionize industries from finance to supply chain. Gain insights into the potential and challenges of this rapidly evolving field.",
    enrollmentStatus: "Open",
    thumbnail: img10,
    duration: "8 weeks",
    schedule: "Mondays and Thursdays, 7:30 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of distributed systems",
      "Familiarity with cryptography concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Blockchain",
        content:
          "Trace the evolution of blockchain from its origins with Bitcoin. Learn key concepts like decentralization, immutability, and the basic structure of a blockchain.",
      },
      {
        week: 2,
        topic: "Cryptography & Security",
        content:
          "Delve into the cryptographic methods securing blockchain networks. Study hashing, digital signatures, and how they prevent double-spending and fraud.",
      },
      {
        week: 3,
        topic: "Decentralization & Consensus",
        content:
          "Understand consensus algorithms like Proof of Work (PoW) and Proof of Stake (PoS). Learn how nodes agree on a shared state without a central authority.",
      },
      {
        week: 4,
        topic: "Smart Contracts",
        content:
          "Explore self-executing contracts deployed on blockchain platforms. Write simple contracts and understand how they power decentralized applications (DApps).",
      },
      {
        week: 5,
        topic: "Ethereum & DApps",
        content:
          "Examine Ethereum’s architecture, the Ethereum Virtual Machine (EVM), and tools like Solidity for building and deploying decentralized applications.",
      },
      {
        week: 6,
        topic: "Blockchain in Business",
        content:
          "Analyze real-world use cases in industries such as finance, healthcare, and supply chain. Explore how enterprises are integrating blockchain solutions.",
      },
      {
        week: 7,
        topic: "Challenges & Future Trends",
        content:
          "Discuss scalability issues, energy consumption, and regulatory hurdles. Investigate emerging trends like layer-2 solutions and cross-chain interoperability.",
      },
      {
        week: 8,
        topic: "Hands-on Project",
        content:
          "Design and develop a minimal blockchain application or a smart contract. Present your project and receive feedback from peers and instructors.",
      },
    ],
    students: [
      { id: 123, name: "Soumyadip Roy", email: "soumyadiproy1611@gmail.com" },
      { id: 220, name: "Ritu Agarwal", email: "ritu.agarwal@example.com" },
    ],
    likes: 28,
    dueDate: "2025-12-15",
    progress: 0,
  },

  {
    id: 11,
    name: "Python for Data Analysis",
    instructor: "Harsh Gupta",
    description:
      "Enhance your data skills with Python’s powerful libraries like Pandas, NumPy, and Matplotlib. Over the course of 6 weeks, you’ll learn how to import datasets, clean and transform data, and visualize results for insightful decision-making. Whether you’re a data enthusiast or looking to sharpen your analytics edge, this course will help you thrive.",
    enrollmentStatus: "Open",
    thumbnail: img11,
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge", "Familiarity with Python"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Analysis with Python",
        content:
          "Set up your environment and get acquainted with Jupyter notebooks. Learn how Python’s ecosystem supports data handling, manipulation, and visualization.",
      },
      {
        week: 2,
        topic: "Data Cleaning & Transformation",
        content:
          "Explore Pandas for handling missing data, filtering rows, merging datasets, and reshaping data structures. Apply best practices for ensuring data integrity.",
      },
      {
        week: 3,
        topic: "Exploratory Data Analysis",
        content:
          "Perform descriptive statistics, correlation analysis, and uncover hidden trends. Use visualization libraries to present data insights effectively.",
      },
      {
        week: 4,
        topic: "Working with Dates & Times",
        content:
          "Handle temporal data smoothly. Learn to parse dates, manage timezones, and aggregate data across different time intervals for in-depth analysis.",
      },
      {
        week: 5,
        topic: "Advanced Visualization Techniques",
        content:
          "Dive into Matplotlib and Seaborn for advanced plots like pairplots, heatmaps, and catplots. Generate compelling dashboards and interpret visual patterns.",
      },
      {
        week: 6,
        topic: "Final Project & Reporting",
        content:
          "Bring all your skills together by working on a capstone project. Clean, analyze, and visualize a real-world dataset, then present your findings.",
      },
    ],
    students: [
      { id: 221, name: "Nisha Verma", email: "nisha.verma@example.com" },
      { id: 222, name: "Arun Sharma", email: "arun.sharma@example.com" },
    ],
    likes: 12,
    dueDate: "2026-01-15",
    progress: 0,
  },
  {
    id: 12,
    name: "UI/UX Design Principles",
    instructor: "Anita Rao",
    description:
      "Transform your creative ideas into intuitive digital experiences. This course covers the core principles of user interface and user experience design, including usability, wireframing, and visual hierarchy. By applying these methodologies to real-world projects, you’ll learn to create interfaces that not only look good but also function seamlessly.",
    enrollmentStatus: "In Progress",
    thumbnail: img12,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:30 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of design tools",
      "Interest in product design",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to UI/UX",
        content:
          "Explore the difference between UI and UX. Learn fundamental design principles and how to conduct user research to identify pain points and opportunities.",
      },
      {
        week: 2,
        topic: "Information Architecture",
        content:
          "Organize content in a logical structure. Learn card sorting, sitemap creation, and best practices for ensuring easy navigation.",
      },
      {
        week: 3,
        topic: "Wireframing & Prototyping",
        content:
          "Translate concepts into low-fidelity wireframes and interactive prototypes. Familiarize yourself with popular prototyping tools like Figma or Sketch.",
      },
      {
        week: 4,
        topic: "Visual Design & Branding",
        content:
          "Focus on typography, color theory, and visual hierarchy. Create cohesive brand styles that resonate with target audiences.",
      },
      {
        week: 5,
        topic: "Usability Testing",
        content:
          "Conduct heuristic evaluations, A/B testing, and user feedback sessions. Learn how to iterate on designs based on actionable insights.",
      },
      {
        week: 6,
        topic: "Design Systems & Libraries",
        content:
          "Discover how to build and maintain design systems for consistency across products. Leverage component libraries to speed up development.",
      },
      {
        week: 7,
        topic: "Accessibility & Inclusivity",
        content:
          "Ensure designs are accessible to diverse user groups, including those with disabilities. Learn guidelines like WCAG to create inclusive experiences.",
      },
      {
        week: 8,
        topic: "Final Project & Portfolio",
        content:
          "Work on a comprehensive UI/UX case study. Refine your process, document your findings, and prepare your portfolio for prospective employers or clients.",
      },
    ],
    students: [
      {
        id: 223,
        name: "Priyanka Sharma",
        email: "priyanka.sharma@example.com",
      },
      { id: 224, name: "Ajay Pal", email: "ajay.pal@example.com" },
    ],
    likes: 15,
    dueDate: "2026-02-20",
    progress: 25,
  },
  {
    id: 13,
    name: "DevOps with Jenkins",
    instructor: "Tarun Sethi",
    description:
      "Embrace continuous integration and continuous deployment to deliver software faster and more reliably. This hands-on course teaches you how to set up Jenkins pipelines, automate builds, and integrate testing. You’ll gain an end-to-end understanding of modern DevOps culture and the tools that make efficient development lifecycles possible.",
    enrollmentStatus: "Open",
    thumbnail: img13,
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Linux commands",
      "Familiarity with Git and version control",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to DevOps",
        content:
          "Learn the philosophy behind DevOps, its cultural impact, and why businesses are adopting DevOps practices to streamline their software delivery pipeline.",
      },
      {
        week: 2,
        topic: "Setting Up Jenkins",
        content:
          "Install and configure Jenkins. Explore job configuration, manage plugins, and secure Jenkins with user authentication and authorization.",
      },
      {
        week: 3,
        topic: "Continuous Integration Pipelines",
        content:
          "Create pipelines that automatically build and test code upon every commit. Integrate unit tests and code coverage to ensure high-quality releases.",
      },
      {
        week: 4,
        topic: "Continuous Deployment & Delivery",
        content:
          "Discover how to deploy to staging and production environments using Jenkins pipelines. Roll out updates seamlessly without disrupting live services.",
      },
      {
        week: 5,
        topic: "Docker Integration & Infrastructure",
        content:
          "Containerize applications with Docker. Configure Jenkins to manage containers for consistent and reproducible environments across teams.",
      },
      {
        week: 6,
        topic: "Monitoring & Best Practices",
        content:
          "Set up automated notifications, monitoring, and log management. Learn DevOps best practices for collaboration, iteration, and continuous feedback loops.",
      },
    ],
    students: [
      { id: 225, name: "Rahul Bose", email: "rahul.bose@example.com" },
      { id: 226, name: "Isha Gupta", email: "isha.gupta@example.com" },
    ],
    likes: 10,
    dueDate: "2026-03-05",
    progress: 0,
  },
  {
    id: 14,
    name: "Kotlin for Modern Android Development",
    instructor: "Priyanka Roy",
    description:
      "Stay at the cutting edge of Android development by learning Kotlin, Google’s preferred language for Android apps. This 8-week course dives into Kotlin’s expressive syntax, safety features, and interoperability with Java. You’ll refactor existing projects and build new apps from scratch, harnessing Kotlin’s concise and powerful capabilities.",
    enrollmentStatus: "In Progress",
    thumbnail: img14,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: [
      "Basic Java programming",
      "Familiarity with Android Studio",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Kotlin Basics",
        content:
          "Explore Kotlin’s syntax, variables, data types, and control structures. Learn how Kotlin’s null safety helps avoid common runtime errors.",
      },
      {
        week: 2,
        topic: "Object-Oriented & Functional Features",
        content:
          "Dive deeper into classes, inheritance, interfaces, and functional programming. Understand higher-order functions, lambdas, and extension functions.",
      },
      {
        week: 3,
        topic: "Working with Android APIs",
        content:
          "Refactor existing Java-based Android apps into Kotlin. Use Android’s Jetpack libraries to build modern, maintainable features quickly.",
      },
      {
        week: 4,
        topic: "Coroutines for Asynchronous Tasks",
        content:
          "Manage background threads more gracefully with Kotlin Coroutines. Replace AsyncTask or RxJava solutions for simpler, structured concurrency.",
      },
      {
        week: 5,
        topic: "Advanced UI Components",
        content:
          "Build composable, reactive interfaces using Jetpack Compose (optional). Alternatively, explore advanced XML layouts and custom views using Kotlin.",
      },
      {
        week: 6,
        topic: "Data Persistence & Networking",
        content:
          "Implement Room database for local data storage, Retrofit for networking, and leverage Kotlin’s powerful features for cleaner code.",
      },
      {
        week: 7,
        topic: "Testing & Debugging in Kotlin",
        content:
          "Use JUnit and Espresso in Kotlin-based projects. Learn debugging techniques with Android Studio to maintain code quality and performance.",
      },
      {
        week: 8,
        topic: "Final Project & Deployment",
        content:
          "Build a complete Kotlin-based Android application from scratch. Optimize your code for performance and prepare it for Play Store submission.",
      },
    ],
    students: [
      { id: 227, name: "Vivek Chauhan", email: "vivek.chauhan@example.com" },
      { id: 228, name: "Aditi Sharma", email: "aditi.sharma@example.com" },
    ],
    likes: 16,
    dueDate: "2026-04-10",
    progress: 10,
  },
  {
    id: 15,
    name: "Docker & Kubernetes for Developers",
    instructor: "Sameer Kulkarni",
    description:
      "Containerization and orchestration have become critical for deploying scalable applications. In this 6-week course, learn how to build Docker images, share them on Docker Hub, and use Kubernetes to manage multi-container workloads. Gain practical skills through hands-on labs that will prepare you to tackle cloud-native development and deployment challenges.",
    enrollmentStatus: "Open",
    thumbnail: img15,
    duration: "6 weeks",
    schedule: "Mondays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic command line knowledge",
      "Familiarity with application deployment",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Containers",
        content:
          "Understand containerization concepts and how Docker revolutionized the way we package applications. Set up your environment and build your first Docker images.",
      },
      {
        week: 2,
        topic: "Docker Workflow & Best Practices",
        content:
          "Learn how to structure Dockerfiles for efficient builds, manage container networking, and use volumes for persistent data storage. Explore Docker Compose for multi-container setups.",
      },
      {
        week: 3,
        topic: "Kubernetes Fundamentals",
        content:
          "Transition from Docker to Kubernetes. Deploy simple containerized apps to Kubernetes and learn about pods, services, and replication controllers.",
      },
      {
        week: 4,
        topic: "Scaling & Deployments",
        content:
          "Leverage Kubernetes deployments and autoscaling features. Learn about rolling updates, rollbacks, and how to keep your services running smoothly.",
      },
      {
        week: 5,
        topic: "Advanced Kubernetes Concepts",
        content:
          "Dive into ConfigMaps, Secrets, and Ingress controllers. Understand how to manage networking, security, and persistent volumes in production settings.",
      },
      {
        week: 6,
        topic: "CI/CD Integration & Final Project",
        content:
          "Set up automated pipelines to build, test, and deploy Dockerized apps to Kubernetes clusters. Complete a final project to showcase your container orchestration skills.",
      },
    ],
    students: [
      { id: 229, name: "Jyoti Patel", email: "jyoti.patel@example.com" },
      { id: 230, name: "Samir Hassan", email: "samir.hassan@example.com" },
    ],
    likes: 14,
    dueDate: "2026-05-25",
    progress: 0,
  },
  {
    id: 16,
    name: "AR/VR Basics",
    instructor: "Priya Arora",
    description:
      "Step into the future of interactive media by mastering the fundamentals of Augmented and Virtual Reality. Over 8 weeks, you’ll explore industry-standard tools like Unity and learn how to create immersive experiences for gaming, training, and beyond. This course is perfect for creative technologists and innovators looking to expand their skill set.",
    enrollmentStatus: "In Progress",
    thumbnail: img16,
    duration: "8 weeks",
    schedule: "Wednesdays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with 3D concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AR & VR",
        content:
          "Discover the history, use cases, and future prospects of AR and VR. Learn key concepts like field of view, head tracking, and spatial awareness.",
      },
      {
        week: 2,
        topic: "Unity Setup & Basics",
        content:
          "Get comfortable with the Unity engine, scene setup, assets, and basic scripting in C#. Build simple prototypes to grasp core functionalities.",
      },
      {
        week: 3,
        topic: "VR Development Techniques",
        content:
          "Implement camera rigs, movement, and interactions in a VR environment. Understand motion sickness considerations and how to design around them.",
      },
      {
        week: 4,
        topic: "AR Development Techniques",
        content:
          "Learn to track real-world surfaces, place 3D objects, and blend virtual elements seamlessly with the physical environment.",
      },
      {
        week: 5,
        topic: "User Interaction & UX",
        content:
          "Explore controllers, hand gestures, and voice commands. Design intuitive interfaces that keep users immersed and engaged.",
      },
      {
        week: 6,
        topic: "Optimization & Performance",
        content:
          "Optimize rendering and assets for smooth performance. Manage memory and ensure stable framerates on various AR/VR devices.",
      },
      {
        week: 7,
        topic: "Multiplayer & Collaboration",
        content:
          "Discover techniques for networking in AR/VR. Enable multiple users to interact in shared virtual spaces for gaming, training, or social applications.",
      },
      {
        week: 8,
        topic: "Capstone Project & Future Trends",
        content:
          "Develop a fully functional AR/VR prototype. Present your solution, discuss emerging hardware like AR glasses, and plan next steps in your immersive tech journey.",
      },
    ],
    students: [
      { id: 231, name: "Kunal Jain", email: "kunal.jain@example.com" },
      { id: 232, name: "Anushka Sen", email: "anushka.sen@example.com" },
    ],
    likes: 20,
    dueDate: "2026-06-15",
    progress: 40,
  },
  {
    id: 17,
    name: "Data Visualization with Tableau",
    instructor: "Rahul Nanda",
    description:
      "Turn raw data into actionable insights with Tableau. In this 4-week intensive course, learn to create interactive dashboards, use calculated fields, and design compelling visuals. Whether you’re in business intelligence, marketing, or finance, Tableau will help you communicate data findings more effectively to stakeholders.",
    enrollmentStatus: "Open",
    thumbnail: img17,
    duration: "4 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of data and spreadsheets"],
    syllabus: [
      {
        week: 1,
        topic: "Tableau Fundamentals",
        content:
          "Install Tableau and get familiar with the interface. Learn how to connect data sources, navigate sheets, and drag-and-drop for quick visualizations.",
      },
      {
        week: 2,
        topic: "Building Interactive Dashboards",
        content:
          "Create dashboards and stories that enable users to filter data and discover patterns. Incorporate design best practices for clarity and impact.",
      },
      {
        week: 3,
        topic: "Calculated Fields & Advanced Analytics",
        content:
          "Leverage calculations, parameters, and table calculations for deeper insights. Explore forecasting and trend analysis for robust data exploration.",
      },
      {
        week: 4,
        topic: "Dashboard Presentation & Best Practices",
        content:
          "Polish your dashboards for public or organizational consumption. Discuss data governance, performance optimization, and how to share your work effectively.",
      },
    ],
    students: [
      { id: 233, name: "Simran Chopra", email: "simran.chopra@example.com" },
      { id: 234, name: "Raghav Bhatia", email: "raghav.bhatia@example.com" },
    ],
    likes: 8,
    dueDate: "2026-07-05",
    progress: 0,
  },
  {
    id: 18,
    name: "Salesforce Admin Essentials",
    instructor: "Meghna Sood",
    description:
      "Dive into the world of Salesforce administration and learn how to customize the platform for business needs. Over 6 weeks, you’ll discover how to configure objects, manage security settings, create automated workflows, and generate reports. By course end, you’ll be ready to streamline processes and support organizational success using Salesforce.",
    enrollmentStatus: "In Progress",
    thumbnail: img18,
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 5:30 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic computer skills",
      "Familiarity with CRM concepts is helpful",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Salesforce Platform Overview",
        content:
          "Explore the Salesforce ecosystem, key terminology, and navigation. Understand how Salesforce supports sales, service, and marketing operations.",
      },
      {
        week: 2,
        topic: "Data Modeling & Management",
        content:
          "Customize standard and custom objects, fields, and relationships. Learn how to import, export, and maintain clean data within the platform.",
      },
      {
        week: 3,
        topic: "Security & Access",
        content:
          "Configure profiles, roles, and sharing settings to ensure appropriate data visibility. Understand best practices for safeguarding customer information.",
      },
      {
        week: 4,
        topic: "Automation & Workflows",
        content:
          "Build workflow rules, process builders, and approval processes to automate repetitive tasks. Enhance efficiency and reduce manual errors.",
      },
      {
        week: 5,
        topic: "Reports & Dashboards",
        content:
          "Create reports to visualize key metrics and gain insights. Design dashboards for various stakeholders to track performance at a glance.",
      },
      {
        week: 6,
        topic: "Admin Tasks & Certification Prep",
        content:
          "Manage user accounts, troubleshoot common issues, and explore advanced features. Get an overview of Salesforce Admin certification requirements.",
      },
    ],
    students: [
      { id: 235, name: "Aman Joshi", email: "aman.joshi@example.com" },
      { id: 236, name: "Kavita Dhillon", email: "kavita.dhillon@example.com" },
    ],
    likes: 5,
    dueDate: "2026-08-10",
    progress: 30,
  },
  {
    id: 19,
    name: "Artificial Intelligence with TensorFlow",
    instructor: "Dr. S. Venkat",
    description:
      "Venture into deep learning with TensorFlow, one of the most popular libraries for building neural networks. Across 10 weeks, you’ll develop an understanding of convolutional networks for image recognition, recurrent networks for sequence modeling, and more. By the end, you’ll be equipped to tackle complex AI problems with confidence and clarity.",
    enrollmentStatus: "Open",
    thumbnail: img19,
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Python programming",
      "Introductory knowledge of machine learning",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to TensorFlow & Deep Learning",
        content:
          "Set up the TensorFlow environment. Understand computational graphs, tensors, and how deep learning differs from traditional machine learning.",
      },
      {
        week: 2,
        topic: "Neural Network Basics",
        content:
          "Construct feedforward networks, learn about activation functions, and master backpropagation. Train your first simple multi-layer perceptron.",
      },
      {
        week: 3,
        topic: "Convolutional Neural Networks (CNNs)",
        content:
          "Explore CNN architectures for image classification tasks. Implement convolution, pooling layers, and train models on popular datasets.",
      },
      {
        week: 4,
        topic: "Regularization & Optimization",
        content:
          "Prevent overfitting using dropout, batch normalization, and data augmentation. Compare optimizers like SGD, Adam, and RMSProp for performance.",
      },
      {
        week: 5,
        topic: "Recurrent Neural Networks (RNNs)",
        content:
          "Model sequential data with RNNs, LSTMs, and GRUs. Apply them to tasks like language modeling and time-series forecasting.",
      },
      {
        week: 6,
        topic: "Advanced Architectures",
        content:
          "Dive into sophisticated models such as ResNet or Transformers. Understand skip connections, attention mechanisms, and advanced layering techniques.",
      },
      {
        week: 7,
        topic: "TensorFlow Extended (TFX)",
        content:
          "Explore production-level pipelines, data validation, and model serving. Learn how to package your models for real-world deployment.",
      },
      {
        week: 8,
        topic: "Model Interpretability",
        content:
          "Use techniques like saliency maps or Grad-CAM to visualize model decision-making. Discuss ethical considerations in AI deployments.",
      },
      {
        week: 9,
        topic: "Edge AI & Optimization",
        content:
          "Optimize neural networks for mobile and embedded devices. Learn about TensorFlow Lite, quantization, and pruning to reduce model size.",
      },
      {
        week: 10,
        topic: "Capstone Project",
        content:
          "Implement a deep learning project from dataset selection to final presentation. Demonstrate your end-to-end proficiency in building AI solutions.",
      },
    ],
    students: [
      { id: 237, name: "Snehal Patil", email: "snehal.patil@example.com" },
      { id: 238, name: "Dinesh Rao", email: "dinesh.rao@example.com" },
    ],
    likes: 11,
    dueDate: "2026-09-25",
    progress: 0,
  },
  {
    id: 20,
    name: "Big Data Engineering with Hadoop",
    instructor: "Mohit Jain",
    description:
      "Learn how to handle massive datasets using Hadoop, the reliable and scalable open-source framework. Over 8 weeks, you’ll explore HDFS, MapReduce, YARN, and the Hadoop ecosystem, including tools like Hive and Pig. Gain the skills to store, process, and analyze huge amounts of data, paving your way into a career in Big Data engineering.",
    enrollmentStatus: "In Progress",
    thumbnail: img20,
    duration: "8 weeks",
    schedule: "Mondays and Thursdays, 8:00 PM - 9:30 PM",
    location: "Online",
    prerequisites: [
      "Basic programming",
      "Familiarity with SQL and database concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Big Data & Hadoop",
        content:
          "Understand the characteristics of Big Data, the Hadoop Distributed File System (HDFS), and how Hadoop manages data across clusters.",
      },
      {
        week: 2,
        topic: "HDFS & YARN",
        content:
          "Dive deeper into HDFS architecture, data replication, and fault tolerance. Learn YARN’s role in resource management and job scheduling.",
      },
      {
        week: 3,
        topic: "MapReduce Programming Model",
        content:
          "Break down large datasets into parallel tasks. Implement map and reduce functions for distributed data processing in Java or Python.",
      },
      {
        week: 4,
        topic: "Advanced MapReduce & Optimization",
        content:
          "Enhance MapReduce jobs with combiners, partitioners, and custom input formats. Optimize performance and handle data skew efficiently.",
      },
      {
        week: 5,
        topic: "Hive & Pig",
        content:
          "Leverage SQL-like querying with Apache Hive and simpler script-based data manipulation with Pig. Understand how they abstract away low-level MapReduce code.",
      },
      {
        week: 6,
        topic: "Data Ingestion & Workflow",
        content:
          "Use Sqoop, Flume, or Kafka to ingest streaming and batch data into Hadoop. Explore scheduling tools like Oozie for automated data workflows.",
      },
      {
        week: 7,
        topic: "Ecosystem Tools & Security",
        content:
          "Get an overview of complementary tools like HBase, Spark, and ZooKeeper. Learn security best practices for authentication, authorization, and encryption in Hadoop.",
      },
      {
        week: 8,
        topic: "Final Project & Real-world Scenarios",
        content:
          "Design and implement a data pipeline that ingests, processes, and analyzes a large dataset. Present your project’s architecture and results.",
      },
    ],
    students: [
      { id: 239, name: "Pooja Das", email: "pooja.das@example.com" },
      { id: 240, name: "Aditya Shukla", email: "aditya.shukla@example.com" },
    ],
    likes: 13,
    dueDate: "2026-10-15",
    progress: 35,
  },
];

export default coursesData;
