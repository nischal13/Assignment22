/**********************************************************************************
 *  WEB700 – Assignment 2* I declare that this assignment is my own work in accordance with Seneca Academic Policy.*
 *  No part of this assignment has been copied manually or electronically from any other source*
 *  (including web sites) or distributed to other students.**
 *  Name: Nischal Maharjan Student ID: 146739222 Date: 2/3/2024**
 * *******************************************************************************/

const collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then(successMessage => {
    console.log(successMessage);
    
    collegeData.getAllStudents()
      .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });

    collegeData.getCourses()
      .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });

    collegeData.getTAs()
      .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });