import React from 'react'

import { handleScroll } from '../../services/handleScroll'
import { COURSES } from '../../constants/pathNames'
import './styles.scss'

export const Skills = ({ match, history }) => {
  const historyPushDown = COURSES
  const historyPushUp = ''

  const scroll = (e) => {
    const delta = e.deltaY

    handleScroll(match, history, historyPushDown, historyPushUp, delta)
  }

  return <div onWheel={(e) => scroll(e)}>skills</div>
}
