import React from "react";
import TopNavbar from "./Component/Header/TopNavbar";
import MidNavbar from "./Component/Header/MidNavbar";
import BottomNavbar from "./Component/Header/BottomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from "./Component/Body/Banner";
import OurCampuses from "./Component/Body/OurCampuses";
import Footer from "./Component/Footer/Footer";
import FacultyProfile from "./Component/Body/FacultyProfile";
import Message from "./Component/Body/Message";
import Announcements from "./Component/Body/Announcements";
import Card from "./Component/Body/Card";
import News from "./Component/Body/News";
import OurPartners from "./Component/Body/OurPartners";
import DepartmentPage from "./Component/Body/DepartmentPage";
import ListOfFaculties from "./Component/Body/ListOfFaculties";
import StudyProgramsSection from "./Component/Body/StudentProgram";
import EventsAndActivities from "./Component/Body/StudentEvents";
import UGPrograms from "./Component/Courses/UGPrograms";
import CourseStructure from "./Component/Courses/CourseStructure";
import North from "./Component/Campuses/North";
import South from "./Component/Campuses/South";
import East from "./Component/Campuses/East";
import West from "./Component/Campuses/West";
import PGPrograms from "./Component/Courses/PGProgram";
import DiplomaPrograms from "./Component/Courses/Diploma";



function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <MidNavbar />
      <BottomNavbar />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <HomeBody />
              <Announcements />
              <Message />
              <Card />
              <StudyProgramsSection />
              <OurCampuses />
              <OurPartners />
              <News />
              <EventsAndActivities />
            </>
          }
        />
        <Route path="/campus/north" element={<North />} />
        <Route path="/campus/south" element={<South />} />
        <Route path="/campus/east" element={<East />} />
        <Route path="/campus/west" element={<West />} />
        <Route path="/courses/ug" element={<UGPrograms />} />
        <Route path="/courses/pg" element={<PGPrograms />} />
        <Route path="/courses/diploma" element={<DiplomaPrograms />} />
        <Route path="/courses/diploma" element={<UGPrograms />} />
        <Route path="/academics/faculty" element={<ListOfFaculties />} />
        <Route path="/dept/:departmentPath" element={<DepartmentPage />} />
        <Route path="/faculty/:id" element={<FacultyProfile />} />
        <Route path="/course-structure/:programCode" element={<CourseStructure />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
