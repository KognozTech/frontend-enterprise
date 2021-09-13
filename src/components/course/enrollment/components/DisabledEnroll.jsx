import React,{useContext} from 'react';
import PropTypes from 'prop-types';

import { EnrollButtonCta } from '../common';
import { AppContext } from '@edx/frontend-platform/react';
import { CourseContext } from '/home/azureuser/apps/openedx/frontend-app-learner-portal-enterprise/src/components/course/CourseContextProvider'

const EnrollBtnDisabled = ({ enrollLabel }) => {
     
  const { enterpriseConfig } = useContext(AppContext);
  console.log(enterpriseConfig);
  console.log(enterpriseConfig.uuid)
  const { state: courseData } = useContext(CourseContext);
  console.log(courseData);
 console.log(courseData.activeCourseRun.key);
 
  return (
     <a href= {`${process.env.LMS_BASE_URL}/enterprise/${enterpriseConfig.uuid}/course/${courseData.activeCourseRun.key}/enroll`}>Enroll Now</a>
);
}

EnrollBtnDisabled.propTypes = {
  enrollLabel: PropTypes.node.isRequired,
};

export default EnrollBtnDisabled;
