import React from 'react'

import { handleScroll } from '../../services/handleScroll'
import { CONTACTS, COURSES } from '../../constants/pathNames'
import './styles.scss'

export const Interests = ({ match, history }) => {
  const historyPush = CONTACTS
  const historyPushUp = COURSES

  const scroll = (e) => {
    const delta = e.deltaY

    handleScroll(match, history, historyPush, historyPushUp, delta)
  }

  return (
    <div onWheel={(e) => scroll(e)}>Interests</div>
  )
}
