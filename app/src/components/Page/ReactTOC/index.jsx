// ReactTOC
import React from 'react'
import MenuItems from 'elements/MenuItems'
import { reactMenuItems } from 'data/menu-items'
import * as ku from 'lib/ke-utils'
import Link from 'elements/Link'

const ReactTOC = (props) => {
  ku.log('ReactTOC', '', 'blue')
  return (
    <div>
      <h1>ReactTOC</h1>
      <Link back={props.match}><button>Back</button></Link>
      <MenuItems
        src={reactMenuItems}
      />
    </div>

  )
}

export default ReactTOC
