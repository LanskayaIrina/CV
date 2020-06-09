import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { BASE_URL, SKILLS, COURSES, INTERESTS, CONTACTS } from '../constants/pathNames'
import { Skills } from '../components/skills'
import { Courses } from '../components/courses'
import { Interests } from '../components/interests'
import { Contacts } from '../components/contacts'

export const AppRouter = () => {

  return (
    <Switch>
      <Route exact path={BASE_URL}>
        <Redirect to={SKILLS} />
      </Route>
      <Route path={SKILLS} component={Skills} />
      <Route path={COURSES} component={Courses} />
      <Route path={INTERESTS} component={Interests} />
      <Route path={CONTACTS} component={Contacts} />
    </Switch>
  )
}
