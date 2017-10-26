// E01HTML
import React from 'react'
// import styles from './style.css'
import PageTitle from 'elements/PageTitle'

const Html01 = (props) => {
  return (
    <div >
      <PageTitle
        title='Html-01'
        back={props.match}
      />
    </div>
  )
};

export default Html01;
