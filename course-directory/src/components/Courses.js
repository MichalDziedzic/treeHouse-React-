import React from 'react';
import {Route,NavLink, Redirect} from 'react-router-dom';
import { HTMLCourses , CSSCourses , JSCourses } from '../data/courses';

// import HTML from './courses/HTML';
// import CSS from './courses/CSS';
// import JavaScript from './courses/JavaScript';
import CourseCointainer from './courses/CourseContainer';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.url} render={()=> <Redirect to={`${match.url}/html`} /> } />

    <Route path={`${match.url}/html`} render={()=><CourseCointainer data={HTMLCourses} />}/>
    <Route path={`${match.url}/css`} render={()=><CourseCointainer data={CSSCourses} />}/>
    <Route path={`${match.url}/javascript`} render={()=><CourseCointainer data={JSCourses} />}/>
  </div>
);

export default Courses;