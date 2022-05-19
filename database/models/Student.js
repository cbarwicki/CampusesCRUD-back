/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://e7.pngegg.com/pngimages/59/478/png-clipart-norfolk-state-university-christopher-newport-university-hampton-campus-university-university-bulding-building-university.png", 
  },
  gpa: {
    type: Sequelize.DECIMAL(4,0)
  }
});

// Export the student model
module.exports = Student;