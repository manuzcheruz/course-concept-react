import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Course from './components/Course/Course';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/course' component={CourseDetail} />
          <Route path='/' component={Course} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
