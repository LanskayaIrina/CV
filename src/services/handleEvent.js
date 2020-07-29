import { SKILLS, CONTACTS } from 'constants/pathNames';

const changePage = (match, history, historyPushDown, historyPushUp, delta) => {
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

export const handleEvent = (e, match, history, historyPushDown, historyPushUp) => {
  const delta = e;

  changePage(match, history, historyPushDown, historyPushUp, delta);
};
