// E01HTML
import React from 'react'
import PageTitle from 'elements/PageTitle'

const React02 = (props) => {
  return (
    <div>
      <PageTitle
        title='React-02'
        back={props.match}
      />
    </div>
  )
};

export default React02;
