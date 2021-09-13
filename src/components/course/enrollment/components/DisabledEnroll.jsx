import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '@edx/frontend-platform/react';
import { CourseContext } from '../../CourseContextProvider.jsx'

const EnrollBtnDisabled = () => {
  const { enterpriseConfig } = useContext(AppContext);
  const { state: courseData } = useContext(CourseContext);
  return (
     <a href= {`${process.env.LMS_BASE_URL}/enterprise/${enterpriseConfig.uuid}/course/${courseData.activeCourseRun.key}/enroll`}>Enroll Now</a>
);
}

EnrollBtnDisabled.propTypes = {
  enrollLabel: PropTypes.node.isRequired,
};

export default EnrollBtnDisabled;
