import React, { useState } from 'react';
import { object } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// import { FormDialog } from '../formDialog';
import { Header } from 'components/header/Header';
import photo from 'accets/4.png';
import './styles.scss';

export const Contacts = ({ match, history }) => {
  //const [isDialogEmail, setIsDialogEmail] = useState(false);
  const [isContacts, setIsContacts] = useState(true);
  const [isProjects, setIsProjects] = useState(false);

  // const openDialogEmail = () => {
  //   setIsDialogEmail(true);
  // };

  const showContacts = () => {
    setIsContacts(!isContacts);
    setIsProjects(!isProjects);
  };

  const showProjects = () => {
    setIsProjects(!isProjects);
    setIsContacts(!isContacts);
  };

  const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
  };

  return (
    <div className="container">
      <Header titleName="Contacts" />
      <main>
        {/* {isDialogEmail && <FormDialog open={isDialogEmail} closeDialog={setIsDialogEmail} />} */}
        <div className="img-container">
          <img className="main-img" src={photo} alt="ira" />
        </div>
        <div className="contacts-info">
          <div className="contacts-titles">
            <ListItem button onClick={showContacts}>
              <Typography align="center">
                <span
                  className={
                    isContacts ? 'contact-title contact-title-fontSize' : 'contact-info contact-title-fontSize'
                  }
                >
                  Contacts
                </span>
              </Typography>
            </ListItem>
            <ListItem button onClick={showProjects}>
              <Typography align="center">
                <span className={isProjects ? 'contact-title big-title-fontSize' : 'contact-info big-title-fontSize'}>
                  Projects
                </span>
              </Typography>
            </ListItem>
          </div>
          {isContacts && (
            <List component="nav">
              <ListItem button>
                <span className="contact-title">Phone</span>
                <span className="contact-info contact-digits">066 037 67 66</span>
              </ListItem>
              <ListItem
                button
              //  onClick={() => openDialogEmail()}
              >
                <span className="contact-title">Email</span>
                <span className="contact-info">
                  <span className="contact-digits">0376766</span>@gmail.com
                </span>
              </ListItem>
              <ListItemLink href="https://github.com/LanskayaIrina" target="_blank">
                <span className="contact-title">Git</span>
                <span className="contact-info">github.com/LanskayaIrina</span>
              </ListItemLink>
              <ListItemLink href="https://linkedin.com/in/irina-lanskaya/" target="_blank">
                <span className="contact-title">LinkedIn</span>
                <span className="contact-info">linkedin.com/in/irina-lanskaya/</span>
              </ListItemLink>
              <ListItemLink href="CV_Irina_Lanskaya.pdf" target="_blank">
                <span className="contact-title">Open CV</span>
                <span className="contact-info">(pdf)</span>
              </ListItemLink>
            </List>
          )}
          {isProjects && (
            <List component="nav">
              <ListItemLink href="https://lanskayairina.github.io/Movies/" target="_blank">
                <span className="contact-title">Movies</span>
                <span className="contact-info">https://lanskayairina.github.io/Movies/</span>
              </ListItemLink>
            </List>
          )}
        </div>
      </main>
    </div>
  );
};

Contacts.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};
