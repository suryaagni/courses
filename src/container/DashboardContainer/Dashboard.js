import React, { useState } from "react";
import { useSelector } from "react-redux";
import { listCoursesSelector } from "../../redux/modules/slices/listCourses.slice";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
const Dashboard = ({ props }) => {
  const completeCourses = useSelector(listCoursesSelector);
  const {
    list: { courses },
  } = completeCourses;
  return (
    <>
    <Header title={"Your Suggested Courses"}/>
    <div className="container">
    <Row  className="col-md-12  d-flex justify-content-left m-3">
      {courses && courses.length > 0
        ? courses.map((x) => {
            return (
            
                <Col xs={12} md={4} className="mb-2">
                    <DisplayCard x={x}/>
                </Col>
            );
          })
        : ""}
    </Row>
    </div>
    </>
  );
};

export default Dashboard;
