import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { FormDialog } from '../formDialog';
import { Header } from '../header/Header';
import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { handleEvent } from 'services/handleEvent';
import { INTERESTS } from 'constants/pathNames';
import photo from 'accets/4.png';
import './styles.scss';

export const Contacts = ({ match, history, location }) => {
  const [isDialogEmail, setIsDialogEmail] = useState(false);
  const [isContacts, setIsContacts] = useState(true);
  const [isWorks, setIsWorks] = useState(false);
  // const { pathname } = location;
  const historyPushDown = '';
  const historyPushUp = INTERESTS;

  const openDialogEmail = () => {
    setIsDialogEmail(true);
  };

  const showContacts = () => {
    setIsContacts(!isContacts);
    setIsWorks(!isWorks);
  };

  const showWorks = () => {
    setIsWorks(!isWorks);
    setIsContacts(!isContacts);
  };

  const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
  };

  return (
    <div className="container-last" onWheel={(e) => handleEvent(e.deltaY, match, history, historyPushDown, historyPushUp)}>
      <Header titleName="Contacts" />
      {isDialogEmail && <FormDialog open={isDialogEmail} closeDialog={setIsDialogEmail} />}
      <img className="main-picture" src={photo} alt="ira" />

      <div className="contacts-info">
        <div className="contacts-titles">
          <ListItem button onClick={showContacts}>
            <Typography align="center">
              <span className={isContacts ? 'contact-title big-title-fontSize' : 'contact-info big-title-fontSize'}>
                Contacts
              </span>
            </Typography>
          </ListItem>
          <ListItem button onClick={showWorks}>
            <Typography align="center">
              <span className={isWorks ? 'contact-title big-title-fontSize' : 'contact-info big-title-fontSize'}>
                Works
              </span>
            </Typography>
          </ListItem>
        </div>
        {isContacts && (
          <List component="nav">
            <ListItem button>
              <span className="contact-title">Phone</span>
              <span className="contact-info">0660376766</span>
            </ListItem>
            {/* <li>
            <NavLink to={`${pathname}/email`}>
              <span className="contact-title">Email</span>0376766@gmail
            </NavLink>
          </li> */}
            <ListItem button onClick={() => openDialogEmail()}>
              <span className="contact-title">Email</span>
              <span className="contact-info">0376766@gmail.com</span>
            </ListItem>
            <ListItemLink href="https://github.com/LanskayaIrina" target="_blank">
              <span className="contact-title">Git</span>
              <span className="contact-info">github.com/LanskayaIrina</span>
            </ListItemLink>
            <ListItemLink href="https://linkedin.com/in/irina-lanskaya/" target="_blank">
              <span className="contact-title">LinkedIn</span>
              <span className="contact-info">linkedin.com/in/irina-lanskaya/</span>
            </ListItemLink>
          </List>
        )}
        {isWorks && (
          <List component="nav">
            <ListItemLink href="https://lanskayairina.github.io/Movies/" target="_blank">
              <span className="contact-title">Movies</span>
              <span className="contact-info">https://lanskayairina.github.io/Movies/</span>
            </ListItemLink>
          </List>
        )}
      </div>
      <div className="expand-less">
        <ExpandLessButton onClick={() => handleEvent(0, match, history, historyPushDown, historyPushUp)} />
      </div>
    </div>
  );
};

Contacts.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};
