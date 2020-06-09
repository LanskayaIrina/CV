import React from 'react'

import { handleScroll } from '../../services/handleScroll'
import { INTERESTS } from '../../constants/pathNames'
import './styles.scss'

export const Contacts = ({ match, history }) => {
  const historyPush = ''
  const historyPushUp = INTERESTS
  const scroll = (e) => {
    const delta = e.deltaY

    handleScroll(match, history, historyPush, historyPushUp, delta)
  }

  return (
    <div onWheel={(e) => scroll(e)}>Contacts</div>
  )
}
