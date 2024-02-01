<h1>Permission Request Management System</h1>

This system manages the permission requests between students and teachers within a course module environment. Here's an overview of how it works:
<h2>1. Entities and Relationships:</h2>

    Three main entities: Students, Teachers, and Modules.
    Students can request permission for specific Modules.
    Many-to-many relationship between Courses and Modules.

<h2>2. Database Tables:</h2>

    Tables include students, teachers, modules, courses.
    Intermediate table (course_modules) handles many-to-many relationship.

<h2>3. User Authentication:</h2>

    Separate login systems for Students and Teachers.
    Authentication mechanisms for validated user access

<h2>4. Routing and Controllers (Node.js):</h2>

    Express.js for routing and handling HTTP requests.
    Separate controllers (studentController, teacherController, courseController, moduleController) for entity logic.

<h2>5. CRUD Operations:</h2>

    Implemented for Courses, Modules, and Students.
    Teachers can create Courses and Modules.
    Students request permission for specific Modules.
    Teachers can view and manage permission requests.

<h2>6. Pug Templates and Styling:</h2>

    Pug templates for HTML views.
    CSS for visually appealing and user-friendly forms and lists.

 <h2> 7. Middleware for Authorization:</h2>

    Middleware checks user roles for proper authorization.
    Authenticated Students request permission.
    Authenticated Teachers manage permission requests.

<h2>8. Permissions and Access Control:</h2>

    Mechanisms restrict actions based on user roles.
    Teachers manage Courses, Modules, and handle permission requests.
    Students can only request permission for Modules.

<h2>9. Handling Relationships in Pug:</h2>

    Loops (each) in Pug templates for displaying lists.
    Links and forms generated dynamically based on entity IDs.
