import { useEffect, useState } from 'react';
import { ONE_SECOND, WEDDING_DATE } from '@/shared/constants';
import { createTimerDate } from '@/utils/formatters';
import TimeCard from '@/components/molecules/TimeCard';
import { SubtitleTypo } from '@/components/atoms/SubtitleTypo';

import './styles.scss';

const Timer = () => {
  const [remaining, setRemaining] = useState(createTimerDate(0));
  const countdownDate = new Date(WEDDING_DATE).getTime();

  useEffect(() => {
    const updateCountdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setRemaining(createTimerDate(distance || 0));
    }, ONE_SECOND);

    return () => {
      clearInterval(updateCountdown);
    };
  }, []);

  return (
    <section className="section__timer">
      <div className="section__timer--title">
        <SubtitleTypo>{'{ titulo_do_timer }'}</SubtitleTypo>
      </div>
      <div className="section__timer--countdown">
        {Object.entries(remaining).map(([key, value]) => (
          <div className="section__timer--time-unit" key={key}>
            <TimeCard label={key} styleClass={`section__timer--${key}`}>
              {value}
            </TimeCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timer;