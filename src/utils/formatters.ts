import { ONE_MINUTE, ONE_HOUR, ONE_DAY } from '@/shared/constants';

export const formatTimeUnit = (time: number) =>
  String(Math.floor(time)).padStart(2, '0');

export const createTimerDate = (timespan: number = 0) => {
  return {
    days: formatTimeUnit(timespan / ONE_DAY),
    hours: formatTimeUnit((timespan % ONE_DAY) / ONE_HOUR),
    minutes: formatTimeUnit((timespan % ONE_HOUR) / ONE_MINUTE),
  };
};
