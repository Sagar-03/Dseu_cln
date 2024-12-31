import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseStructure = () => {
  const [selectedYear, setSelectedYear] = useState('1st Year');
  const { programCode } = useParams();

  const programData = {
    "114500": {
      title: "B.Sc (Data Analytics)",
      code: "114500",
      campus: "BPIBS DSEU Campus-II",
      university: "DSEU University India",
      eligibility: "X & XII (min 50%) with min. 60% in PCM",
      duration: "4 Years",
      courseContent: {
        "1st Year": {
          "Semester 1": [
            "Aspects of Indian History for Engineers (Human Social Sciences & Management)",
            "Mathematics I",
            "Physics",
            "Programming Fundamentals"
          ],
          "Semester 2": [
            "Aspects of Indian History for Engineers (Human Social Sciences & Management Courses)",
            "Mathematics II",
            "Data Structures",
            "Database Management"
          ]
        }
        
      }
    }
   
  };

  const program = programData[programCode] || programData["114500"];
  const yearContent = program.courseContent[selectedYear] || {};

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Card */}
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <h1 className="text-xl font-bold mb-1">{program.title}</h1>
        <p className="text-gray-700">Program Code {program.code}</p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Campuses</h2>
          <p>{program.campus}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <h2 className="font-medium mb-2">University</h2>
          <p>{program.university}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Eligibility</h2>
          <p>{program.eligibility}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Duration</h2>
          <p>{program.duration}</p>
        </div>
      </div>

      
      <div className="flex justify-center mb-8">
        <button className="bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-500 transition-colors">
          Apply Now
        </button>
      </div>

    
      <div>
        <h2 className="text-xl font-bold text-center mb-6">Course Structure</h2>
        
        {/* Year Selection */} <div className="flex flex-wrap justify-center gap-4 mb-6">
          {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full ${
                selectedYear === year 
                  ? 'bg-orange-400 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

       
        <div className="bg-blue-900 text-white p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {Object.keys(yearContent).map((semester) => (
              <button 
                key={semester}
                className="bg-orange-400 px-4 py-2 rounded-md"
              >
                {semester}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {Object.entries(yearContent).map(([semester, courses]) => (
              <div key={semester}>
                {courses.map((course, index) => (
                  <div key={index} className="ml-4">
                    <h3 className="text-lg mb-2">• {course}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;