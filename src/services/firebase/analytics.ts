import {
  AnalyticsCallOptions,
  EventParams,
  getAnalytics,
  logEvent,
  setAnalyticsCollectionEnabled,
} from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { ENV } from '~/utils';

import { firebaseConfig } from './config';

initializeApp(firebaseConfig);
const analytics = getAnalytics();

if (ENV === 'PRD') {
  setAnalyticsCollectionEnabled(analytics, true);
} else {
  setAnalyticsCollectionEnabled(analytics, false);
}

const setLogEvent = (
  eventName: string,
  eventParams?: EventParams,
  option?: AnalyticsCallOptions,
): void => {
  logEvent(analytics, eventName, eventParams, option);
};

export const Analytics = {
  setLogEvent,
};
