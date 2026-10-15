import { ProjectCaseStudy, ExperienceItem, SkillItem, EducationItem, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  fullName: "Harsha Vardhan Chithirala",
  title: "Associate Software Engineer | Full Stack Developer",
  currentCompany: "Pirnav Software Technology",
  currentLocation: "Hyderabad, Telangana, India",
  homeLocation: "Tripuranthakam, Andhra Pradesh, India",
  phone: "+91 95429 23371",
  email: "Chithirala.harsha@gmail.com",
  linkedin: "https://www.linkedin.com/in/chithirala-harsha-vardhan-fullstack",
  github: "https://github.com/HarshaV45developer",
  heroIntro: "I design and develop modern web applications, business dashboards, management systems, and responsive user interfaces. My work includes professional application design and independent development projects involving modern web technologies and backend APIs.",
  supportingStatement: "Explore my professional experience, business application projects, technical skills, and personal development work through an interactive portfolio designed to demonstrate both engineering capabilities and creative thinking.",
  aboutBio: "I am an Associate Software Engineer and Full Stack Developer based in Hyderabad, currently building core business management software at Pirnav Software Technology. With a strong foundation in Computer Science from KL University (8.3 CGPA) and hands-on experience designing intuitive enterprise portals and scalable RESTful microservices, I bridge interface architecture with robust engineering discipline.",
};

export const professionalExperience: ExperienceItem[] = [
  {
    id: "pirnav-software",
    company: "Pirnav Software Technology",
    role: "Associate Software Engineer",
    location: "Hyderabad, Telangana, India",
    period: "June 2026 – Present",
    summary: "Working on the design of business management applications, including an HRMS Portal with Admin and User dashboards and a College Management System. Focus areas include structured interface layouts, role-specific navigation, and consistent user experiences for enterprise systems.",
    highlights: [
      "Engineered comprehensive dashboard layouts and information architecture for complex enterprise workflows.",
      "Established modular, role-tailored navigation paradigms separating administrative functions from end-user interactions.",
      "Developed high-fidelity design prototypes and interface components adhering to clean visual hierarchy and accessibility standards.",
      "Collaborated on responsive design strategies to ensure seamless operation across tablet, desktop, and administrative workstations."
    ],
    projects: ["hrms-portal", "cms-portal"]
  }
];

export const professionalProjects: ProjectCaseStudy[] = [
  {
    id: "hrms-portal",
    title: "HRMS Portal — Human Resource Management System",
    subtitle: "Enterprise Business Management Application with Dual-Role Architecture",
    category: "professional",
    projectType: "Business Management Application",
    organization: "Pirnav Software Technology",
    role: "Associate Software Engineer — HRMS Portal & Dashboard Design",
    period: "June 2026 – Present",
    overview: "The Human Resource Management System (HRMS) is a business application engineered to streamline organizational personnel workflows. My core responsibility centers on designing the interface architecture with distinct Admin and User dashboards, ensuring role-specific permissions and friction-free navigation for both HR executives and general employees.",
    problemStatement: "Enterprise HR operations often struggle with fragmented tools, disjointed employee records, and cluttered user interfaces that confuse everyday staff while bottlenecking HR administrators with routine inquiries.",
    objectives: [
      "Design distinct, role-tailored interfaces for administrative personnel and everyday employees.",
      "Eliminate navigation friction by creating high-clarity hierarchical dashboards.",
      "Standardize reusable design components for tables, filters, modal forms, and summaries.",
      "Ensure full responsiveness across desktop workstations and mobile viewport sizes."
    ],
    responsibilities: [
      "Designed the overarching HRMS portal interface and dashboard layout.",
      "Designed a dedicated Admin Dashboard for organizational oversight, staff management, and reporting.",
      "Designed an independent User Dashboard for personal records, leave tracking, and announcements.",
      "Organized information hierarchy to eliminate cognitive load across multi-step HR workflows.",
      "Structured interface sections according to the strict operational boundaries of each user persona.",
      "Maintained aesthetic consistency across forms, data tables, metrics cards, and status panels.",
      "Considered component reusability and responsive behavior throughout the application lifecycle."
    ],
    features: [
      {
        name: "Admin Dashboard Suite",
        description: "Administrative command center with staff count overviews, department directory, quick filter tables, and aggregated organizational summaries.",
        workflow: "Admin signs in -> views real-time department metrics -> filters staff by designation or status -> accesses employee management records."
      },
      {
        name: "Employee Self-Service User Dashboard",
        description: "Personalized workspace displaying employee profile, personal attendance trends, leave balances, and company notices.",
        workflow: "User signs in -> sees personal status card -> checks remaining leave balance -> submits request with zero clutter."
      },
      {
        name: "Role-Specific Navigation Architecture",
        description: "Dynamic sidebar that adapts to authenticated user privileges, hiding confidential administrative modules from standard employees.",
        workflow: "Authentication token dictates accessible route guards and visual menu trees automatically."
      },
      {
        name: "Standardized Data Filtering & Inspection",
        description: "Consistent search, column sorting, pagination controls, and detailed slide-over inspector panels for employee files.",
        workflow: "Search query filters employee roster -> clicking table row triggers slide-over drawer with contact and role details."
      }
    ],
    uiUxDesign: [
      "Dual-mode role comparison layout ensuring administrators have high-density analytical tables while users enjoy clean, card-based summaries.",
      "Obsidian dark / high-contrast slate surfaces calibrated for long hours of enterprise desktop usage.",
      "Strict zero-pill metadata discipline: tags and status values rendered as quiet unboxed text with subtle dot separators.",
      "Consistent 8px spatial grid across all forms, input groups, and table cell heights."
    ],
    techStack: [
      { name: "React & TypeScript", role: "Component architecture, strict typing, and state management" },
      { name: "Modern CSS / Tailwind", role: "Responsive utility styling and ergonomic layout grids" },
      { name: "Component Library", role: "Reusable data tables, modal dialogs, and slide-over drawers" },
      { name: "Figma & Prototyping", role: "High-fidelity wireframes, user flow diagrams, and design tokens" }
    ],
    architecture: "Modular UI architecture separating Common Presentation Components (Tables, Metrics, Form Controls) from Role-Based Layout Shells (AdminLayout vs UserLayout), driven by shared design tokens and stateful route providers.",
    implementationDetails: [
      "Constructed reusable data grid components with integrated search filtering and sorting handlers.",
      "Implemented strict separation between presentation logic and organizational data structures.",
      "Engineered layout wrappers that enforce role guards and navigation states smoothly without page reload flickering.",
      "Applied defensive UX patterns such as confirmation dialogs for destructive administrative actions."
    ],
    challengesAndSolutions: [
      {
        challenge: "Organizing extensive employee data fields without causing visual clutter on standard laptop screens.",
        solution: "Designed prioritized summary tables with progressive disclosure slide-over drawers for in-depth profile views."
      },
      {
        challenge: "Maintaining visual consistency between the data-dense Admin view and the simple, focused User view.",
        solution: "Established a unified design system of cards, typographic scales, and color hierarchies shared across both interfaces."
      }
    ],
    testing: [
      "Usability walk-throughs across simulated admin and employee workflows.",
      "Viewport responsiveness testing from 375px mobile screens up to 4K desktop displays.",
      "WCAG AA contrast validation for text readability and form input focus rings."
    ],
    results: [
      "Successfully delivered modular UI designs adopted across Pirnav Software Technology's HRMS initiative.",
      "Significantly reduced navigational depth for standard employee tasks from 4 clicks to 1 click.",
      "Formulated a reusable component design system leveraged across subsequent enterprise projects."
    ],
    lessonsLearned: [
      "The value of early information architecture mapping before jumping into high-fidelity component design.",
      "How role-based access control directly dictates UI layout hierarchy and cognitive load distribution.",
      "Techniques for creating enterprise density without sacrificing typographic breathing room."
    ]
  },
  {
    id: "cms-portal",
    title: "CMS — College Management System",
    subtitle: "Comprehensive Higher Education Academic Administration Platform",
    category: "professional",
    projectType: "Education Management Application",
    organization: "Pirnav Software Technology",
    role: "Associate Software Engineer — College Management System Design",
    period: "June 2026 – Present",
    overview: "The College Management System (CMS) is an education management platform engineered to coordinate academic schedules, student enrollments, faculty allocations, and administrative announcements across university departments. My work focused on structured screen layouts, intuitive academic calendars, and consistent multi-entity management.",
    problemStatement: "Higher education institutions face communication silos between faculty, students, and administration, with fragmented systems for syllabus distribution, attendance recording, and circular notifications.",
    objectives: [
      "Create a unified portal interface for academic administration and institutional tracking.",
      "Organize complex academic data into clear, modular screens with intuitive breadcrumbs.",
      "Standardize UI components across Student, Faculty, and Course management modules.",
      "Support responsive layouts so faculty and students can access updates via mobile devices."
    ],
    responsibilities: [
      "Designed the College Management System interface and multi-tiered application layouts.",
      "Organized academic records into structured screens with straightforward navigation patterns.",
      "Created consistent UI patterns for student profiles, course catalogs, and faculty rosters.",
      "Focused on clear information presentation for announcements, timetables, and academic circulars.",
      "Evaluated component reusability to accelerate development across interconnected academic modules.",
      "Designed responsive grid systems tailored for both desktop administration and tablet/mobile viewports."
    ],
    features: [
      {
        name: "Student Directory & Enrollment Tracking",
        description: "Centralized roster for tracking student registrations, branch allocations, semester progression, and academic standing.",
        workflow: "Admin searches by roll number or branch -> views semester credit summary -> inspects attendance percentage."
      },
      {
        name: "Course & Curriculum Roster",
        description: "Structured catalogue of active courses, syllabus outlines, assigned professors, and schedule slots.",
        workflow: "Faculty selects active semester -> views enrolled students -> uploads course syllabus and session milestones."
      },
      {
        name: "Institutional Circulars & Notice Feed",
        description: "Priority bulletin board for examination notices, holiday announcements, and academic notifications.",
        workflow: "Admin posts announcement with priority tag -> system highlights notice at top of student and faculty feeds."
      },
      {
        name: "Academic Timetable & Schedule Grid",
        description: "Visual weekly timetable mapping lecture hours, lab sessions, and classroom allocations without time conflicts.",
        workflow: "Interactive schedule grid displays active day timeline with instant classroom location chips."
      }
    ],
    uiUxDesign: [
      "Academic schedule visualization utilizing structured grid columns and clear time blocks.",
      "Consistent card containers with hairline borders and subtle depth for course syllabi.",
      "Multi-level hierarchical navigation with breadcrumb trails for deep academic records.",
      "Accessible typography using Plus Jakarta Sans for rapid scanning of registration numbers and dates."
    ],
    techStack: [
      { name: "React & TypeScript", role: "State-driven views and component lifecycle management" },
      { name: "Modern CSS / Bootstrap / Tailwind", role: "Grid layouts, responsive containers, and utility classes" },
      { name: "Iconography & UI Tokens", role: "Clear domain indicators for courses, faculty, and departments" },
      { name: "Design System Architecture", role: "Atomic component library for forms, tables, and modal drawers" }
    ],
    architecture: "Academic Domain Hierarchy: Institution -> Departments -> Courses -> Sections -> Enrolled Students, represented through nested view controllers and modular card grids.",
    implementationDetails: [
      "Developed modular table layouts with custom search bars and batch filter selectors.",
      "Created reusable schedule component rendering weekly lecture slots dynamically.",
      "Implemented clean status indicators for course statuses (Active, Upcoming, Completed).",
      "Structured layout templates ensuring zero visual stutter during route changes."
    ],
    challengesAndSolutions: [
      {
        challenge: "Accommodating disparate user workflows (Dean, Professor, Student) in a unified design language.",
        solution: "Established a core set of neutral design primitives that flex from administrative tables to student-friendly card feeds."
      },
      {
        challenge: "Displaying dense weekly timetable schedules clearly on smaller laptop screens.",
        solution: "Built a responsive daily/weekly toggle that condenses views into a chronological list on compact screens."
      }
    ],
    testing: [
      "Cross-browser verification on Chrome, Firefox, Safari, and Edge.",
      "Keyboard tab navigation testing across complex data entry forms.",
      "Validation of tabular numeral alignment for grades, percentages, and attendance records."
    ],
    results: [
      "Engineered full CMS screen layouts currently serving as the production design benchmark.",
      "Received unanimous positive feedback from engineering leads for component reusability and clarity.",
      "Created design patterns now standard across Pirnav Software Technology's education vertical."
    ],
    lessonsLearned: [
      "How to balance high-volume administrative data with student-facing simplicity.",
      "The criticality of consistent design token variables across large multi-module codebases.",
      "Techniques for designing future-proof modular grids that scale with institutional growth."
    ]
  }
];

export const personalProjects: ProjectCaseStudy[] = [
  {
    id: "mr-vardhan-dev",
    title: "Mr.-Vardhan.dev — Developer Portfolio",
    subtitle: "Previous Responsive React Portfolio Website",
    category: "personal",
    projectType: "Personal Portfolio Website",
    role: "Full Stack Developer / UI Designer",
    period: "2024",
    overview: "Developed a personal portfolio website to present developer information, skills, projects, and professional background through a responsive, component-driven web interface.",
    problemStatement: "Needed a clean digital presence to present early technical capabilities, university projects, and contact channels in an accessible, mobile-ready format.",
    objectives: [
      "Construct a component-based portfolio using modern React and Vite.",
      "Showcase technical projects and proficiencies with clear navigation.",
      "Ensure fast page load times and responsive performance on mobile devices."
    ],
    responsibilities: [
      "Built a React-based portfolio structure with Vite build tooling.",
      "Organized content into reusable components and structured sections.",
      "Implemented responsive styling using Bootstrap and custom CSS.",
      "Created intuitive navigation and interface elements for exploring projects.",
      "Focused on presenting professional information with clarity."
    ],
    features: [
      {
        name: "Interactive Project Showcase",
        description: "Responsive project cards displaying technology tags, project descriptions, and source repository links."
      },
      {
        name: "Structured Skills Matrix",
        description: "Categorized overview of technical competencies across frontend, backend, and development tools."
      },
      {
        name: "Responsive Contact Channels",
        description: "Direct email and social media integration allowing recruiters to reach out effortlessly."
      }
    ],
    uiUxDesign: [
      "Responsive layout leveraging Bootstrap grid systems and custom CSS utilities.",
      "Clean dark-mode aesthetic with high contrast text for readability.",
      "Smooth scroll transitions between navigation anchors."
    ],
    techStack: [
      { name: "React", role: "Component architecture and view rendering" },
      { name: "Vite", role: "Fast development server and bundling" },
      { name: "Bootstrap 5", role: "Responsive grid and core layout components" },
      { name: "CSS3 & JavaScript", role: "Custom animations and interactive behaviors" }
    ],
    architecture: "Single Page Application (SPA) structured with modular section components and centralized data objects.",
    implementationDetails: [
      "Created modular section components for Hero, About, Projects, and Skills.",
      "Optimized static asset bundling to achieve near-instant initial render times on Vercel.",
      "Configured production build scripts and custom CSS reset rules."
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring consistent appearance across both Safari and Chromium mobile browsers.",
        solution: "Applied normalized CSS rules and verified viewport meta tags across multiple physical test devices."
      }
    ],
    testing: [
      "Responsive layout audits on mobile, tablet, and widescreen desktop viewports.",
      "Lighthouse performance and accessibility auditing."
    ],
    results: [
      "Deployed live on Vercel at mr-vardhan-dev.vercel.app with high uptime and instant loads.",
      "Served as the initial portfolio baseline, leading directly to the new 3D portfolio evolution."
    ],
    lessonsLearned: [
      "Strengths and constraints of combining CSS utility frameworks with React components.",
      "The value of structured JSON data stores for maintaining project listings."
    ],
    githubUrl: "https://github.com/HarshaV45developer/Mr.-Vardhan.dev",
    liveDemoUrl: "https://mr-vardhan-dev.vercel.app/"
  },
  {
    id: "meetx-activity-booking-api",
    title: "MeetX Activity Booking API",
    subtitle: "RESTful Backend Microservice with JWT Authentication",
    category: "personal",
    projectType: "Backend Development",
    role: "Backend Engineer",
    period: "2024",
    overview: "Developed a RESTful backend API for an activity booking application as part of an internship technical assignment. Implemented secure user authentication, activity catalogue queries, and transactional booking operations.",
    problemStatement: "Activity booking platforms require robust backend protection against unauthorized reservations, double bookings, and unauthenticated access while delivering low-latency query responses.",
    objectives: [
      "Design and build a scalable REST API using Node.js and Express.",
      "Implement secure JWT authentication and password hashing.",
      "Provide complete CRUD endpoints for activity listings and user bookings.",
      "Document API endpoints for seamless frontend integration."
    ],
    responsibilities: [
      "Implemented secure user registration and login endpoints with password hashing.",
      "Used JWT-based authentication for protected booking routes via custom middleware.",
      "Developed high-performance endpoints for listing and filtering available activities.",
      "Implemented authenticated activity booking workflows with validation.",
      "Implemented retrieval endpoints for bookings belonging to authenticated users.",
      "Organized backend architecture into routes, controllers, models, and middleware.",
      "Utilized MongoDB and Mongoose for schema modeling and data persistence.",
      "Authored API documentation and local execution instructions in README."
    ],
    features: [
      {
        name: "JWT Authentication & Authorization Middleware",
        description: "Token-based route security verifying Bearer tokens on protected operations with granular error feedback.",
        workflow: "User submits credentials -> receives signed JWT -> attaches token in Authorization header for booking actions."
      },
      {
        name: "Activity Catalogue Endpoints",
        description: "RESTful endpoints returning available activities with pricing, location, capacity, and schedule metadata."
      },
      {
        name: "Transactional Booking Engine",
        description: "Authenticated endpoint handling reservation requests, ensuring activity exists and linking booking to user ID."
      },
      {
        name: "User Booking History Retrieval",
        description: "Secure query endpoint fetching all current and historical bookings associated exclusively with the authenticated user."
      }
    ],
    uiUxDesign: [
      "Clean JSON response payloads following standardized envelope structures ({ success, data, error }).",
      "Meaningful HTTP status codes (200, 201, 400, 401, 403, 404, 500) for easy client-side handling."
    ],
    techStack: [
      { name: "Node.js", role: "JavaScript runtime environment" },
      { name: "Express.js", role: "RESTful HTTP server routing and middleware framework" },
      { name: "MongoDB & Mongoose", role: "NoSQL document database and schema validation" },
      { name: "JSON Web Tokens (JWT)", role: "Stateless user authentication and session claims" },
      { name: "bcryptjs", role: "Cryptographic password hashing and salt generation" }
    ],
    architecture: "Layered MVC Architecture: Express Router -> Auth & Validation Middleware -> Controller Handlers -> Mongoose Data Models -> MongoDB Database.",
    implementationDetails: [
      "Enforced schema validation rules on user registration (email format, password length).",
      "Created centralized error handling middleware to capture unhandled exceptions cleanly.",
      "Configured environment variable isolation using dotenv for database connection strings."
    ],
    challengesAndSolutions: [
      {
        challenge: "Preventing users from accessing or modifying other users' booking records.",
        solution: "Enforced strict user ID matching in the booking query middleware, scoping all queries to req.user._id."
      }
    ],
    testing: [
      "Postman collection testing covering happy paths and edge cases (expired tokens, invalid IDs, duplicate emails).",
      "MongoDB query performance verification."
    ],
    results: [
      "Delivered a fully verified backend API meeting 100% of the internship technical assignment specifications.",
      "Zero unhandled exception leaks across all tested invalid payload scenarios."
    ],
    lessonsLearned: [
      "Best practices for stateless JWT authentication and token expiration handling.",
      "Importance of schema validation at both the route layer and database model layer."
    ],
    githubUrl: "https://github.com/HarshaV45developer/meetx-activity-booking-api"
  },
  {
    id: "book-review-api",
    title: "Book Review API",
    subtitle: "Full-Featured RESTful Book & Review Management System",
    category: "personal",
    projectType: "Backend API Development",
    role: "Backend Engineer",
    period: "2024",
    overview: "Developed a comprehensive RESTful API for a community book review system, supporting user authentication, book catalog management, paginated filtering, text search, and review score aggregation.",
    problemStatement: "Building a scalable book catalog requires handling variable user ratings, calculating dynamic averages, supporting multi-criteria search, and preventing duplicate reviews.",
    objectives: [
      "Build a RESTful API with complete book management and review workflows.",
      "Implement paginated book listings and keyword search capabilities.",
      "Provide review creation, editing, and average rating calculations.",
      "Ensure robust security with JWT authentication and bcrypt password hashing."
    ],
    responsibilities: [
      "Implemented user signup and login using JWT authentication.",
      "Developed endpoints for creating, retrieving, and updating book records.",
      "Implemented paginated book listing with genre and author filtering.",
      "Added book search functionality across titles and summaries.",
      "Implemented review creation and management endpoints with rating validations (1–5).",
      "Supported retrieving book details with associated reviews and dynamically computed average ratings.",
      "Organized backend logic into routes, controllers, models, and custom validation middleware."
    ],
    features: [
      {
        name: "User Authentication & Profiles",
        description: "Secure signup, login, and profile retrieval utilizing salted password hashing and signed JWT tokens."
      },
      {
        name: "Paginated Book Exploration",
        description: "High-performance listing endpoint with page and limit queries, sorting options, and genre filters."
      },
      {
        name: "Full-Text Book Search",
        description: "Regex-based or indexed search enabling users to locate books by partial title or author name."
      },
      {
        name: "Review & Rating Aggregation",
        description: "CRUD review endpoints calculating live average star ratings when retrieving book detail views."
      }
    ],
    uiUxDesign: [
      "Standardized RESTful response bodies with clear pagination metadata ({ page, totalPages, totalItems }).",
      "Descriptive validation error messages guiding API consumers."
    ],
    techStack: [
      { name: "Node.js", role: "Backend runtime environment" },
      { name: "Express.js", role: "RESTful web framework" },
      { name: "MongoDB", role: "Document database storing books, users, and reviews" },
      { name: "Mongoose", role: "Object data modeling and relational population" },
      { name: "JWT & bcryptjs", role: "Security, authentication, and password encryption" }
    ],
    architecture: "Controller-Service-Model architecture with Mongoose virtuals and population references linking books to user reviews.",
    implementationDetails: [
      "Leveraged Mongoose populate to merge author and reviewer information without duplicate storage.",
      "Implemented query pagination math: skip = (page - 1) * limit.",
      "Added validation checks restricting review ratings strictly between 1 and 5 stars."
    ],
    challengesAndSolutions: [
      {
        challenge: "Calculating accurate average ratings efficiently as the review volume grows.",
        solution: "Implemented aggregation pipelines to calculate average scores without loading all review documents into memory."
      }
    ],
    testing: [
      "Comprehensive Postman endpoint test suites covering pagination boundaries and authentication guards.",
      "Database index validation for fast search query execution."
    ],
    results: [
      "Verified API successfully supporting full book search, review submission, and rating aggregation.",
      "Published as a verified open-source repository on GitHub with setup guide."
    ],
    lessonsLearned: [
      "Techniques for building performant pagination in MongoDB.",
      "How to design relational data patterns cleanly inside a document-oriented database."
    ],
    githubUrl: "https://github.com/HarshaV45developer/Book-review-API"
  },
  {
    id: "fama-barber-shop",
    title: "Fama Barber Shop Landing Page",
    subtitle: "Modern Responsive Commercial Salon Website",
    category: "personal",
    projectType: "Frontend Development",
    role: "Frontend Developer",
    period: "2024",
    overview: "Built a responsive commercial landing page for a barber shop and salon to showcase frontend engineering, interactive UI components, lightbox media viewing, and mobile-friendly styling.",
    problemStatement: "Local grooming businesses need high-conversion digital landing pages that display price menus, showcase past work, and collect appointment inquiries without requiring complex backend apps.",
    objectives: [
      "Construct a responsive, aesthetic landing page with structured business sections.",
      "Integrate interactive UI elements including testimonial carousels and image lightboxes.",
      "Implement a working contact form with Web3Forms integration.",
      "Ensure fluid responsive adaptation across all mobile and tablet screens."
    ],
    responsibilities: [
      "Developed a responsive landing page with structured business sections.",
      "Implemented navigation and call-to-action elements.",
      "Created service and pricing presentation sections.",
      "Added an image gallery with lightbox functionality using Fancybox.",
      "Implemented a testimonial carousel utilizing Swiper.js.",
      "Integrated scroll-based entrance animations using AOS (Animate on Scroll).",
      "Added appointment/contact form integration via Web3Forms.",
      "Focused on mobile-friendly hamburger navigation and responsive typography."
    ],
    features: [
      {
        name: "Interactive Services & Pricing Table",
        description: "Categorized grooming service cards with clear pricing, durations, and booking triggers."
      },
      {
        name: "Lightbox Gallery Showcase",
        description: "High-resolution portfolio gallery with full-screen zoom and swipe transitions powered by Fancybox."
      },
      {
        name: "Testimonial Carousel",
        description: "Touch-swipeable customer review slider built with Swiper.js."
      },
      {
        name: "Appointment Inquiry Form",
        description: "Client-side validated inquiry form delivering direct email notifications via Web3Forms."
      }
    ],
    uiUxDesign: [
      "Warm vintage-modern aesthetic tailored for high-end grooming parlors.",
      "Scroll-triggered subtle animations giving life to section cards as users scroll.",
      "Large touch targets on mobile for instant phone calls and appointment bookings."
    ],
    techStack: [
      { name: "HTML5 & CSS3", role: "Semantic markup and custom layout styles" },
      { name: "JavaScript (ES6+)", role: "DOM manipulation and interactive component initialization" },
      { name: "Swiper.js", role: "Touch-enabled mobile carousel slider" },
      { name: "Fancybox", role: "Responsive lightbox image modal" },
      { name: "AOS Library", role: "Scroll-triggered entrance animations" },
      { name: "Web3Forms", role: "Serverless contact form email forwarding" }
    ],
    architecture: "Modern static frontend application with modular CSS stylesheets and vendor script bundling.",
    implementationDetails: [
      "Wired Web3Forms endpoint with async fetch API for seamless submissions without page refresh.",
      "Configured Fancybox gallery groups for smooth next/previous photo navigation.",
      "Implemented mobile navigation drawer with touch gesture closing."
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring third-party animation libraries did not cause layout shifts on mobile devices.",
        solution: "Pre-allocated aspect-ratio dimensions on all image containers and applied CSS will-change optimizations."
      }
    ],
    testing: [
      "Form submission verification across test email inboxes.",
      "Touch gesture testing on Android and iOS mobile browsers."
    ],
    results: [
      "Published open-source repository demonstrating polished frontend layout and third-party library integration.",
      "Clean, verified codebase with 0 console warnings."
    ],
    lessonsLearned: [
      "Integrating multiple UI micro-libraries cohesively into a single fast-loading static site.",
      "Handling serverless form submissions with error and success feedback loops."
    ],
    githubUrl: "https://github.com/HarshaV45developer/Fama-Barber-Shop-Landing"
  },
  {
    id: "little-miami-brewing",
    title: "Little Miami Brewing",
    subtitle: "Craft Brewery & Hospitality Web Showcase",
    category: "personal",
    projectType: "Frontend Web Development",
    role: "Frontend Developer",
    period: "2024",
    overview: "Exploratory frontend web development project focused on crafting a responsive web interface for a craft brewery, featuring menu categorizations, venue location details, and responsive styling.",
    problemStatement: "Brewery websites must balance beverage menus, taproom hours, and brand storytelling in an easily digestible layout for visitors on the go.",
    objectives: [
      "Inspect and build responsive layouts showcasing brewery offerings.",
      "Create structured drink and food menu presentations.",
      "Implement responsive navigation and brand storytelling sections."
    ],
    responsibilities: [
      "Built semantic HTML structure and responsive CSS layouts.",
      "Organized beverage categories and venue highlights into clean visual grids.",
      "Ensured mobile responsiveness across multiple device dimensions.",
      "Documented codebase and repository structure on GitHub."
    ],
    features: [
      {
        name: "Beverage & Food Roster",
        description: "Visual display of craft beer selections, ABV details, flavor profiles, and seasonal releases."
      },
      {
        name: "Taproom & Event Information",
        description: "Operational hours, location map integration, and event guidelines."
      }
    ],
    uiUxDesign: [
      "Rustic, artisanal color palette reflecting craft brewing heritage.",
      "Clear typographic hierarchy for rapid mobile scanning."
    ],
    techStack: [
      { name: "HTML5 & CSS3", role: "Layout structure, Flexbox, and CSS Grid" },
      { name: "JavaScript", role: "Responsive menu toggles and dynamic UI states" }
    ],
    architecture: "Multi-section static website structure with modular CSS styles.",
    implementationDetails: [
      "Organized menu items with CSS Grid for clean column alignment.",
      "Implemented sticky navigation header for persistent accessibility."
    ],
    challengesAndSolutions: [
      {
        challenge: "Displaying extensive menu lists cleanly on small screens.",
        solution: "Implemented categorized accordion sections to prevent excessive vertical scrolling on phones."
      }
    ],
    testing: [
      "Responsive layout audits on mobile and tablet screen widths."
    ],
    results: [
      "Verified GitHub repository representing structured frontend web development skills."
    ],
    lessonsLearned: [
      "Effective use of CSS Grid and Flexbox for menu-driven hospitality websites."
    ],
    githubUrl: "https://github.com/HarshaV45developer/Little-Miami-Brewing"
  },
  {
    id: "microfox",
    title: "Microfox (Ecosystem Exploration)",
    subtitle: "Open-Source Developer Tooling & TypeScript Study (Fork)",
    category: "personal",
    projectType: "Developer Tools / TypeScript Ecosystem",
    role: "Open-Source Contributor / Explorer",
    period: "2024",
    overview: "A verified GitHub fork and study of the Microfox developer tooling framework, examined to understand advanced TypeScript architecture, modular micro-framework patterns, and build system configurations.",
    problemStatement: "Understanding how modern micro-frameworks optimize package boundaries, TypeScript typing definitions, and developer CLI workflows.",
    objectives: [
      "Study upstream TypeScript patterns and architectural modularity.",
      "Inspect build configurations, package manifests, and developer tool chains.",
      "Examine modern TypeScript compilation and typing distributions."
    ],
    responsibilities: [
      "Forked and explored the Microfox codebase to study advanced TypeScript patterns.",
      "Analyzed upstream modular component architecture and type inference design.",
      "Inspected configuration files for bundling and linting in high-performance TypeScript tools."
    ],
    features: [
      {
        name: "TypeScript Architectural Study",
        description: "Examination of strict typing, generics, and modular code encapsulation in modern tooling."
      },
      {
        name: "Build Pipeline Inspection",
        description: "Analysis of development environment orchestration and package compilation."
      }
    ],
    uiUxDesign: [
      "Developer-centric architecture and CLI interface design."
    ],
    techStack: [
      { name: "TypeScript", role: "Strict typing and architectural modeling" },
      { name: "Node.js", role: "Developer tooling runtime" }
    ],
    architecture: "Modular TypeScript framework architecture (Identified strictly as an open-source fork).",
    implementationDetails: [
      "Evaluated upstream TypeScript build pipeline configurations.",
      "Studied type inference mechanisms and package modularity."
    ],
    challengesAndSolutions: [
      {
        challenge: "Navigating deep TypeScript generic abstractions in third-party tooling codebases.",
        solution: "Mapped out type definitions and execution call stacks to deepen understanding of framework design."
      }
    ],
    testing: [
      "Local build execution and TypeScript compilation audits."
    ],
    results: [
      "Gained deep foundational insights into modern TypeScript library architecture and developer tooling.",
      "Accurately presented as a fork study in adherence to professional engineering transparency."
    ],
    lessonsLearned: [
      "How enterprise-grade TypeScript libraries structure their internal abstractions.",
      "Professional ethics in software development: transparently distinguishing forks from original independent creations."
    ],
    githubUrl: "https://github.com/HarshaV45developer/microfox",
    isFork: true
  }
];

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "Frontend", level: "Advanced", featured: true },
  { name: "TypeScript", category: "Frontend", level: "Advanced", featured: true },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Advanced", featured: true },
  { name: "Three.js / WebGL", category: "Frontend", level: "Intermediate", featured: true },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", featured: true },
  { name: "Bootstrap 5", category: "Frontend", level: "Advanced", featured: true },
  { name: "HTML5 & Semantic CSS", category: "Frontend", level: "Advanced", featured: true },
  { name: "Responsive UI/UX", category: "Frontend", level: "Advanced", featured: true },
  
  // Backend
  { name: "Node.js", category: "Backend", level: "Advanced", featured: true },
  { name: "Express.js", category: "Backend", level: "Advanced", featured: true },
  { name: "RESTful APIs", category: "Backend", level: "Advanced", featured: true },
  { name: "JWT Authentication", category: "Backend", level: "Advanced", featured: true },
  { name: "Role-Based Access (RBAC)", category: "Backend", level: "Intermediate", featured: true },
  { name: "Microservices Architecture", category: "Backend", level: "Intermediate", featured: false },
  
  // Database
  { name: "MongoDB", category: "Database", level: "Advanced", featured: true },
  { name: "Mongoose ODM", category: "Database", level: "Advanced", featured: true },
  { name: "SQL Basics", category: "Database", level: "Intermediate", featured: false },
  { name: "Data Aggregation", category: "Database", level: "Intermediate", featured: false },
  
  // Cloud & Tools
  { name: "Git & GitHub", category: "Cloud & Tools", level: "Advanced", featured: true },
  { name: "Vite", category: "Cloud & Tools", level: "Advanced", featured: true },
  { name: "Postman", category: "Cloud & Tools", level: "Advanced", featured: true },
  { name: "Vercel / Netlify", category: "Cloud & Tools", level: "Advanced", featured: true },
  { name: "AWS Cloud Practitioner", category: "Cloud & Tools", level: "Certified", featured: true },
  { name: "Azure AZ-900 Fundamentals", category: "Cloud & Tools", level: "Certified", featured: true },
  { name: "GCP Cloud Concepts", category: "Cloud & Tools", level: "Intermediate", featured: false },
  
  // Architecture & Design
  { name: "Dashboard & Portal UI Design", category: "Architecture", level: "Advanced", featured: true },
  { name: "Information Architecture", category: "Architecture", level: "Advanced", featured: true },
  { name: "Component Reusability", category: "Architecture", level: "Advanced", featured: true },
  { name: "API Security & Validation", category: "Architecture", level: "Advanced", featured: true }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology — Computer Science and Information Technology",
    institution: "KL University, Vijayawada",
    period: "2020 – 2024",
    score: "CGPA: 8.3 / 10",
    location: "Vijayawada, Andhra Pradesh, India",
    description: "Completed rigorous undergraduate coursework encompassing software engineering principles, full stack web development, data structures and algorithms, database management systems, computer networks, and cloud computing.",
    highlights: [
      "Graduated with distinction holding a strong 8.3/10 cumulative grade point average.",
      "Developed multiple full-stack academic and capstone assignments in Node.js, Express, and React.",
      "Active participant in technical assignments, API design hackathons, and software engineering labs."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Cloud Architecture Foundations",
    badge: "AWS Certified",
    status: "Certified"
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Cloud Concepts & Azure Core Services",
    badge: "Microsoft Certified",
    status: "Certified"
  },
  {
    title: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud Platform",
    date: "GCP Infrastructure Foundations",
    badge: "Google Cloud",
    status: "In Progress"
  },
  {
    title: "AWS APAC Solutions Architecture Virtual Experience Program",
    issuer: "Forage",
    date: "July 2025",
    badge: "Solutions Architecture",
    status: "Virtual Experience"
  }
];
