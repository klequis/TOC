// E01HTML
import React from 'react'
import Link from 'elements/Link'

const React01 = (props) => {
  return (
    <div>
      <h1>React01</h1>
      <Link back={props.match}><button>Back</button></Link>
    </div>
  )
};

export default React01;
