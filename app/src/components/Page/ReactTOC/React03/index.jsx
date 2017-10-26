// E01HTML
import React from 'react'
import PageTitle from 'elements/PageTitle'

const React03 = (props) => {
  return (
    <div>
      <PageTitle
        title='React-03'
        back={props.match}
      />
    </div>
  )
};

export default React03;
