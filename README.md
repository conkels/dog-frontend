# Cloud Native - Dog Pound Project
Conor Kelly

Presentation link :https://docs.google.com/presentation/d/1ZIexaNT77doxSCOtGp_9zZy0M_TqHKAGV9fx1hpn9ck/edit#slide=id.gc6f9e470d_0_0

## Introduction:
The task was to create a CRUD application that encapsulated all the core modules covered during the training.

Project Management - A fully expanded Jira board, clear documentation from a design phase. Code integrated into a Version Control System.

Databases - A relational database to store persistent data from the project.

Java SE & Spring Boot - Functional application created in OOP language which meets requirements of Kanban board.

Testing - Acceptable level of test coverage on back-end using MockMVC.

Front-End Development - Functioning front-end website with API integration (Postman).

### Planning Resources
For my project management I created a kanban board modelled as a Scrum using Jira software from which I created epics containing user stories which also contained tasks. I assigned the user stories story points and prioritised them using the MoSCoW method. An example of a sprint I cretaed is shown below with 5 user stories:

![frontEndSprint](https://user-images.githubusercontent.com/84275849/157700295-44d4c71d-88b4-4e1e-a790-917ad18a241b.png)

Also shown here is the roadmap which displays all of the epics I decided to create for this project:

![dogRoadMap](https://user-images.githubusercontent.com/84275849/157700993-d53b550f-34ed-44be-a94b-4151f2ea9b56.png)

I took the approach of creating two Github repositories, one for the back-end of my project and one for the front-end that will also include all documentation including this README file.

### Databases
Throughout this project I used two databases. One was a local h2 database used for testing the back-end and the other database was one I cresated myself in mySQL for storing the persistent data from the application.

Along with the h2 database, I created a dog-schema.sql file and a dog-data.sql file in order to create a dummy database and data to test on

Below can be seen the layout of the mySQL database with populated data:

![dogDB](https://user-images.githubusercontent.com/84275849/157703461-f4663d37-afbb-4269-ab4b-f2910e90a7a2.png)

### Backend
The backend of this project was completed using Java with a Spring Boot framework. Below, the methods within my controller class:

![dogBackend](https://user-images.githubusercontent.com/84275849/157705228-0eb49db7-eab9-47fc-91bc-9b29e34501d2.png)

### Testing
To ensure the program was functioning it should, I conducted Integration tests on the controller class using MockMVC. This testing allowed me to perform HTTP requests and test the outcomes of them requests.

![dogtest1](https://user-images.githubusercontent.com/84275849/157730658-5638e2c4-f611-4287-af99-dce0b293b11a.png)

![dogtest2](https://user-images.githubusercontent.com/84275849/157730848-dfab10db-61cf-4938-86c3-1655294a5336.png)

As can be seen by the images above, All of the tests ran successfully and the backend acheived a 96.3% coverage.

### Frontend
The frontend is built using a html file to determine the structure of the web page, a javascript file to determine the functionality of the web page and a css file to determine how the web page is displayed to the user.
Bootstrap was also implemented for the javascript and css files.

![dogpage](https://user-images.githubusercontent.com/84275849/157752419-f2ce149d-9990-4178-9f31-878befdb387c.png)



### Deployment
From the command line run mvn clean package and then change the directory to \target and run the .jar file using: java -jar CKDogPound-0.0.1-SNAPSHOT.jar. Use mvn clean package in the target to build out application again.
