import React from 'react';
import Course from './components/Course/Course';
// import Homepage from './components/Homepage/Homepage';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <Layout>
      {/* <Homepage /> */}
      <Course />
    </Layout>
  )
}

export default App;
