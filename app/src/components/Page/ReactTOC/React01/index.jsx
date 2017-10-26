// E01HTML
import React from 'react'
import PageTitle from 'elements/PageTitle'

const React01 = (props) => {
  return (
    <div>
      <PageTitle
        title='React-01'
        back={props.match}
      />
    </div>
  )
};

export default React01;
