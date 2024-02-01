<h1>Permission Request Management System</h1>

This system manages the permission requests between students and lectures within a course module environment. Here's an overview of how it works:
<h2>Usefull material</h2>

    Use details below to have access to the Admin Panel
        email: noberth@gmail.com
        password: 12345

<h2>1. Entities and Relationships:</h2>

    Three main entities: Students, lectures, and Modules.
    Students can request permission for specific Modules.
    Many-to-many relationship between Courses and Modules.

<h2>2. Database Tables:</h2>

    Tables include students, lectures, modules, courses.
    Intermediate table (course_modules) handles many-to-many relationship.

<h2>3. User Authentication:</h2>

    Separate login systems for Students and lectures.
    Authentication mechanisms for validated user access

<h2>4. Routing and Controllers (Node.js):</h2>

    server.js for routing and handling HTTP requests.
    Separate controllers (studentController, lectureController, courseController, moduleController) for entity logic.

<h2>5. CRUD Operations:</h2>

    Implemented for Courses, Modules, and Students.
    lectures can create Courses and Modules.
    Students request permission for specific Modules.
    lectures can view and manage permission requests.

<h2>6. Pug Templates and Styling:</h2>

    Pug templates for HTML views.
    CSS for visually appealing and user-friendly forms and lists.

 <h2> 7. Middleware for Authorization:</h2>

    Middleware checks user roles for proper authorization.
    Authenticated Students request permission.
    Authenticated lectures manage permission requests.

<h2>8. Permissions and Access Control:</h2>

    Mechanisms restrict actions based on user roles.
    lectures manage Courses, Modules, and handle permission requests.
    Students can only request permission for Modules.

<h2>9. Handling Relationships in Pug:</h2>

    Loops (each) in Pug templates for displaying lists.
    Links and forms generated dynamically based on entity IDs.
