# Faculty Billing System

## 📋 Challenges with Manual Billing
In universities, the payment process for faculty members remains largely manual, involving the completion of tedious forms and meticulous tracking of every expense. This manual approach incurs additional costs for maintaining and collecting these forms on time, which is crucial for timely faculty payments. Furthermore, there's always a risk of human error, and this manual process can cause significant delays in essential processes like faculty payroll.

## 🚀 Brief Overview of Our Solution
Our solution aims to automate the billing process workflow, significantly increasing the efficiency of university operations. By eliminating the need to sift through paper forms, mail, email, scan, or process them manually, our automated system allows you to “set and forget” certain steps. Key features of our solution include:

#### Comprehensive Automation of Faculty Compensation based on
- Evaluation of Answer Sheets
- Creation of Question Papers
- Teaching Hours Logged
- Practical Exams Conducted
- Travel Expenses

#### Streamlined Workflow
Efficiently manages the entire process from expense reimbursement to proper compensation, ensuring seamless operations. Faculty members can generate bills at their convenience, freeing up time and resources for both faculty and staff to focus on more critical matters. This shift from manual to automated processes ensures that the academic institution runs more smoothly and efficiently, reducing the likelihood of errors and delays.

#### Key Features
- **Database Management** : All faculty data is stored in a main database using MySQL. This includes data related to question papers, evaluation, and teaching hours, which are used to fetch details in real-time based on the course and subject chosen by the faculty.
- **User Authentication** : Secure access and operations are ensured through the use of session tokens and CORS headers.
- **Real-Time Updates** : Details on the homepage can be edited in real-time, with any changes directly reflected in the database. This guarantees that information is always current.
- **Automated PDF Generation for Bills** : All faculty expenses, including travel, evaluations, and teaching, are compiled and presented as detailed PDF bills. This provides a clear and professional record for faculty members and administration.
- **Local Web Server Deployment** : The project is deployed using a local web server environment called XAMPP, facilitating easy setup and management.

## 💻 Technology Stack 

| Frontend                                  | Backend                                       | Database                               | Authentication                               |
|-------------------------------------------|-----------------------------------------------|----------------------------------------|----------------------------------------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) <br> ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | ![PHP](https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white) <br> ![XAMPP](https://img.shields.io/badge/-XAMPP-FB7A24?logo=xampp&logoColor=white) | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white) | ![Session Tokens](https://img.shields.io/badge/-Session%20Tokens-000000?logo=key&logoColor=white) <br> ![CORS](https://img.shields.io/badge/-CORS-000000?logo=shield&logoColor=white) |

## 🎥 Detailed Walkthrough
Experience our automated billing system in action through a series of videos. This section showcases each key feature of our web application, providing a visual tour of how the system efficiently handles faculty compensation, real-time data updates, and more. Watch these videos to see our solution’s capabilities and functionalities firsthand.

<details>
<summary>🔑 User Authentication and Account Creation</summary>
  
  - Login: Users can log in using their email ID and password if they already have an account.

  [login.webm](https://github.com/user-attachments/assets/5acca6f9-14f8-47e4-b68c-83390114d5ee)

  - Sign Up: New users can create an account by providing necessary details.

  [signup.mp4](https://github.com/user-attachments/assets/4b2c85e9-b6b4-4c31-b663-016fe889a719)


</details>

<details>
  <summary>🏠 Homepage</summary>
  The homepage provides a comprehensive display of user details, including:
   
  - Profile Information: Name, email, contact number, and profile picture.
  - Role and Designation: Faculty role and designation within the university.
  - Bank Details: Bank account number, IFSC code, and other relevant banking information.
  - Edit Options for updating personal information, changing passwords, and managing preferences.

  [editing_details.webm](https://github.com/user-attachments/assets/56718454-ff9c-49e7-ad5a-b1afe6c5603a)
</details>

<details>
  <summary>⏱️ Hours Worked Module</summary>
   
  - Input Details: Users can input their designation and the number of hours taught, which will be compensated on an hourly basis.
  - Total Amount: The total amount is generated based on the hours input.

  [hours_taught.webm](https://github.com/user-attachments/assets/68b201b0-b201-488f-93fe-dfefe39fb3bc)     
</details>

<details>
  <summary>📊 Evaluation Module</summary>
   
  - Input Details: Users can input the number of students whose sheets are checked, degree, year, number of students, and whether the question paper was made by the faculty.
  - Multiple Entries: Users can add multiple entries by submitting each set of details, with a table below recording all entries for this module.
  - Entry Management: Option to edit or delete existing entries directly from the table.

  [evaluation.webm](https://github.com/user-attachments/assets/c649b092-fb7d-42f4-a72c-17d8c4974748)
</details>

<details>
  <summary>📄 Question Paper Module</summary>
   
  - Input Details: Users can input which subject question paper was set, subject code, degree, and year.
  - Multiple Entries: Similar to the Evaluation module, users can add multiple entries with a table below recording all entries.
  - Entry Management: Option to edit or delete existing entries directly from the table.

  [question_paper.webm](https://github.com/user-attachments/assets/01621b2e-2d1f-4537-954b-0964bf89522a)
</details>

<details>
  <summary>💵 Final Bill Generation</summary>
   
  - Generate Bill: Users can click on the "Submit and Generate Bill" button to compile entries across different modules and display the final amount.
  - Bill Summary: A detailed breakdown of the bill, including individual entries from each module, total amounts.
  - Download Print Option: Users can download and print the final bill for their records.

  [bill-generation.webm](https://github.com/user-attachments/assets/076a24b6-3ef8-4fbe-bcf3-3bd34d919402)
</details>

## 🎬 Demonstration
Watch a demo video of our Faculty Billing System web app to see these features in action.

[demo.mp4](https://github.com/user-attachments/assets/e44cb66b-c9cf-40d6-88af-1aaa6ce9b0dc)


## 🚀 Future Work
Creating an admin side in the web app with the following features:
- Admin Login: A separate login system for admins, who can view and manage all bills generated.
- Database Management: Admins will have access to the entire database.
- User Management: Admins can add, edit, or remove users and assign roles and permissions.
- Audit Logs: Detailed logs of all actions taken within the system for accountability and transparency.
