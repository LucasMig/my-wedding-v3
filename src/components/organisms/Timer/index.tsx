import { useEffect, useState } from 'react';
import './styles.scss';
import { ONE_SECOND } from '@/shared/constants';
import { createTimerDate } from '@/utils/formatters';
import TimeCard from '@/components/molecules/TimeCard';

const Timer = () => {
  const [remaining, setRemaining] = useState(createTimerDate(0));
  const countdownDate = new Date('Dec 17, 2023 15:00:00').getTime();

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
        <h3>Contagem regressiva...</h3>
      </div>
      <div className="section__timer--countdown">
        {Object.entries(remaining).map(([key, value], i, arr) => (
          <div className="section__timer--time-unit" key={key}>
            <TimeCard styleClass={`section__timer--${key}`}>{value}</TimeCard>
            {i < arr.length - 1 && (
              <span className="section__timer--separator">:</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timer;
