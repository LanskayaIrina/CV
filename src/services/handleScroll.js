import { SKILLS, CONTACTS } from 'constants/pathNames';

export const handleScroll = (match, history, historyPushDown, historyPushUp, delta) => {
  const lastScroll = 1;

  if (delta > lastScroll) {
    if (match.url === CONTACTS) {
      return null;
    }

    if (match.url !== CONTACTS) {
      history.push(historyPushDown);
    }
  }

  if (delta < lastScroll) {
    if (match.url !== SKILLS) {
      history.push(historyPushUp);
    }
  }
};
