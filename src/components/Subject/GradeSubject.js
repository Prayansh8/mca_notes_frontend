// src/components/GradeSection.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectsData } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import "./GradeSubject.css"

const GradeSection = () => {
  const dispatch = useDispatch();
  const { subjectData, isLoading, error } = useSelector(
    (state) => state.subjectData
  );

  useEffect(() => {
    dispatch(fetchSubjectsData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {subjectData.map((grade, index) => (
            <div key={index}>
              <Link to={`/grade/${grade._id}`}>
                <button className="grade-button">
                  {grade.subject} [{grade.subjectCode}]
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GradeSection;
