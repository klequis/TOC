// ReactTOC
import React from 'react'
import MenuItems from 'elements/MenuItems'
import { reactMenuItems } from 'data/menu-items'
import * as ku from 'lib/ke-utils'
import PageTitle from 'elements/PageTitle'

const ReactTOC = (props) => {
  // ku.log('ReactTOC', '', 'blue')
  return (
    <div>
      <PageTitle
        title='React-TOC'
        back={props.match}
      />
      <MenuItems src={reactMenuItems}/>
    </div>

  )
}

export default ReactTOC
