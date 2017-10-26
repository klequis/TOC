// ReactTOC
import React from 'react'
import MenuItems from 'elements/MenuItems'
import { htmlMenuItems } from 'data/menu-items'
import PageTitle from 'elements/PageTitle'
import * as ku from 'lib/ke-utils'

const HtmlTOC = (props) => {
  // ku.log('HtmlTOC', '', 'blue')
  return (
    <div>
      <PageTitle
        title='Html-TOC'
        back={props.match}
      />
      <MenuItems src={htmlMenuItems}/>
    </div>
  )
}

export default HtmlTOC
