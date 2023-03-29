import {
  CLSReportCallback,
  onCLS,
  onFCP,
  onFID,
  onLCP,
  onTTFB,
} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: CLSReportCallback): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
