import { ONE_MINUTE, ONE_HOUR, ONE_DAY } from '@/shared/constants';

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatTimeUnit = (time: number) =>
  String(Math.floor(time)).padStart(2, '0');

export const formatPhoneNumber = (phone: string) => {
  const cleanedNumber = phone.replace(/\D/g, '');
  const countryCode = cleanedNumber.slice(0, 2);
  const restOfNumber = cleanedNumber.slice(2);

  const formattedNumber = `(${countryCode}) ${restOfNumber.slice(
    0,
    4,
  )}-${restOfNumber.slice(4)}`;

  return formattedNumber;
};

export const createTimerDate = (timespan: number = 0) => {
  return {
    dias: formatTimeUnit(timespan / ONE_DAY),
    horas: formatTimeUnit((timespan % ONE_DAY) / ONE_HOUR),
    minutos: formatTimeUnit((timespan % ONE_HOUR) / ONE_MINUTE),
  };
};
