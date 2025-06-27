ResolveNow - Your Platform for Online Complaints
ResolveNow is a comprehensive web application designed to streamline the process of submitting, managing, and resolving online complaints. It provides distinct interfaces for users, agents, and administrators, ensuring efficient communication and oversight.

Features
User Management: Secure user registration, login, and authentication with email verification and OTP.

Complaint Submission: Users can easily submit new complaints.

Complaint Tracking: Users can view and manage their submitted complaints.

Role-Based Dashboards: Dedicated dashboards for Users, Agents, and Admins with tailored functionalities.

Real-time Communication: Integrated chat functionality for direct interaction between users, agents, and admins regarding complaints.

Agent Workload Management: Agents can view assigned complaints and manage their workload.

Admin Oversight: Administrators can manage users, oversee all complaints, generate reports, and configure settings.

Responsive Design: Optimized for various screen sizes using Tailwind CSS.

Technologies Used
Backend
Node.js

Express.js

MongoDB (with Mongoose ORM)

JWT (JSON Web Tokens) for authentication

Nodemailer for email services

Socket.IO for real-time communication

Frontend
React.js

Vite (for fast development)

Tailwind CSS (for styling)

Axios (for API calls)

Socket.IO Client (for real-time communication)

Folder Structure

.
├── ProjectCode
│   ├── Backend
│   │   ├── Controllers
│   │   │   ├── Auth.webtoken.js
│   │   │   ├── Connect.db.js
│   │   │   ├── Login.js
│   │   │   ├── Vertify.email.otp.js
│   │   │   └── userManagement.js
│   │   ├── attachments
│   │   │   └── (image files)
│   │   ├── models
│   │   │   ├── complaints.js
│   │   │   └── user.js
│   │   ├── routes
│   │   │   ├── ComplaintRouter.js
│   │   │   ├── initializeSocketHandlers.js
│   │   │   └── login.js
│   │   ├── utils
│   │   │   ├── email.js
│   │   │   └── optUtils.js
│   │   ├── .env
│   │   ├── index.js
│   │   ├── package-lock.json
│   │   └── package.json
│   └── Frontend
│       ├── public
│       ├── src
│       │   ├── Components
│       │   │   ├── Fottor
│       │   │   │   └── Fottor.jsx
│       │   │   ├── Layouts
│       │   │   │   ├── MainLayout.jsx
│       │   │   │   └── MainPage.jsx
│       │   │   ├── Login
│       │   │   │   └── Login.jsx
│       │   │   └── Navbar
│       │   │       └── Navbar.jsx
│       │   ├── Dashboards
│       │   │   ├── Admin
│       │   │   │   ├── AddUser.jsx
│       │   │   │   ├── AdminChat.jsx
│       │   │   │   ├── AdminDashboardHome.jsx
│       │   │   │   ├── AdminOverview.jsx
│       │   │   │   ├── AdminReports.jsx
│       │   │   │   ├── AllComplaints.jsx
│       │   │   │   ├── ConformMessage.jsx
│       │   │   │   ├── MessageModel.jsx
│       │   │   │   ├── MyWorkLoad.jsx
│       │   │   │   ├── SettingsPage.jsx
│       │   │   │   └── UserManagement.jsx
│       │   │   ├── Agent
│       │   │   │   ├── AgentComplaintDetail.jsx
│       │   │   │   ├── AgentComplamtSection.jsx
│       │   │   │   ├── AgentDashboardHome.jsx
│       │   │   │   ├── AgentOverview.jsx
│       │   │   │   ├── AgentWorkLoad.jsx
│       │   │   │   ├── ComplaintChatSection.jsx
│       │   │   │   └── ProfileSettings.jsx
│       │   │   └── user
│       │   │       ├── Home.jsx
│       │   │       ├── MyComplaints.jsx
│       │   │       ├── NewComplaint.jsx
│       │   │       ├── OverView.jsx
│       │   │       └── Settingspage.jsx
│       │   ├── Pages
│       │   │   ├── Dashboard
│       │   │   │   ├── AddComplaintForm.jsx
│       │   │   │   ├── ComplaintChatSection.jsx
│       │   │   │   ├── ComplaintDetail.jsx
│       │   │   │   ├── ComplaintDetailInfo.jsx
│       │   │   │   ├── ComplaintTable.jsx
│       │   │   │   ├── InfoField.jsx
│       │   │   │   ├── OverViewPage.jsx
│       │   │   │   ├── TimelineItem.jsx
│       │   │   │   └── settingsPage.jsx
│       │   │   ├── Aboutus.jsx
│       │   │   ├── DashboardHomeOutlet.jsx
│       │   │   ├── DashboardType.jsx
│       │   │   ├── Features.jsx
│       │   │   ├── HeaderPage.jsx
│       │   │   ├── Heading.jsx
│       │   │   └── HowItWorks.jsx
│       │   ├── api
│       │   │   └── AxiosInstance.jsx
│       │   ├── assets
│       │   │   └── About.avif
│       │   ├── context
│       │   │   ├── AuthContext.jsx
│       │   │   ├── Notification.jsx
│       │   │   └── ScoketContext.jsx
│       │   ├── App.jsx
│       │   ├── index.css
│       │   └── main.jsx
│       ├── .env
│       ├── .gitignore
│       ├── README.md
│       ├── eslint.config.js
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.cjs
│       ├── tailwind.config.cjs
│       └── vite.config.js


Setup
Prerequisites
Node.js (LTS version recommended)

npm (Node Package Manager)

MongoDB instance (local or cloud-based like MongoDB Atlas)

Backend Setup
Navigate to the ProjectCode/Backend directory:

cd ProjectCode/Backend

Install backend dependencies:

npm install

Create a .env file in the ProjectCode/Backend directory and add your environment variables.

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:your_frontend_port

Start the backend server:

npm start

Frontend Setup
Navigate to the ProjectCode/Frontend directory:

cd ProjectCode/Frontend

Install frontend dependencies:

npm install

Create a .env file in the ProjectCode/Frontend directory and add your environment variables.

VITE_BACKEND_URL=http://localhost:3000

Start the frontend development server:

npm run dev

Usage
After both the backend and frontend servers are running, open your web browser and navigate to the frontend URL (default: http://localhost:5173 or as configured in your .env file). You can then:

Register as a new user.

Log in with your credentials.

Submit new complaints.

Explore the different dashboards based on your user role (User, Agent, Admin).
