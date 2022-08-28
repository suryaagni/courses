import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ReactStars from "react-rating-stars-component";

import {
  rateCourse,
  fetchSingleCourse,
  listCoursesSelector,
  updateCourseActivity,
} from "../../redux/modules/slices/listCourses.slice";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Activity from "../../components/Activity/Activity";
const DetailPageContainer = () => {
  const dispatch = useDispatch();
  const courseDetail = useSelector(listCoursesSelector);
  const { data: result } = courseDetail;
  const url = window.location.href.split("/");
  const id = url[3];
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState("");
  const handleClose = () => {
    setActiveId("");
    setShow(false);
  };
  const showActivity = (id) => {
    setActiveId(id);
    setShow(true);
  };

  useEffect(() => {
    dispatch(fetchSingleCourse({ id }));
  }, [id]);

  const updateActivity = () => {
    handleClose();
    dispatch(updateCourseActivity({ id, activeId }));
    dispatch(fetchSingleCourse({ id }));
  };

  const getCourseStatus = () => {
    if (result) {
      const getValue =
        result && result[0].activities.filter((data) => data.completed);
      let formattedValue = parseInt(getValue.length) * 33;
      return formattedValue + 1;
    } else {
      return 0;
    }
  };
  return (
    <>
      {show && activeId && result && (
        <Activity
          show={show}
          activeId={activeId}
          link={result[0].activities[activeId - 1].videoLink}
          title={result[0].activities[activeId - 1].title}
          handleClose={handleClose}
          updateActivity={updateActivity}
        />
      )}
      {result && result[0] ? (
        <>
          <Header title={result[0].name} />
          <div className="container">
            <div className="mt-2">
              {" "}
              Course Progress:{getCourseStatus()}%
              <ProgressBar
                className="mt-2"
                variant="success"
                now={getCourseStatus()}
              />
            </div>
            {result[0].activities &&
              result[0].activities.map((data) => {
                return (
                  <Card className="mt-2">
                    <Card.Body>
                      <div className="d-flex">
                        <div className="col-md-4 col-xs-12 cust-img">
                          <i
                            className="fa fa-file-video-o custom-size"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="col-md-8 col-xs-12">
                          <h3>{data.title}</h3>
                        </div>
                      </div>
                      <div className="mt-4 text-muted">
                        Status: {data.completed ? "Completed" : "Not Completed"}
                      </div>
                      <Button
                        variant="primary"
                        className="custom-button"
                        onClick={() => showActivity(data.id)}
                      >
                        Launch
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            <div className="text-muted mt-2">
              <div className="text-center ">
                <h5>Please Rate this Course</h5>
                <div className="d-flex justify-content-center">
                  <ReactStars
                    count={5}
                    onChange={(newRating) => {
                      dispatch(rateCourse({ id, newRating }));
                      dispatch(fetchSingleCourse({ id }));
                    }}
                    size={24}
                    activeColor="#ffd700"
                    value={result[0].rating}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailPageContainer;
