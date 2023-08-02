import './styles.scss';
import { eventInfoData } from './data';
import SectionDivider from '@/components/molecules/SectionDivider';
import { SubtitleTypo } from '@/components/atoms/SubtitleTypo';
import InfoCard from '@/components/molecules/InfoCard';

const EventInfo = () => {
  return (
    <section className="event-info" id="event-info">
      <SectionDivider mirror styleClass="custom-color">
        <SubtitleTypo>O que você precisa saber?</SubtitleTypo>
      </SectionDivider>
      <div className="event-info__container">
        {eventInfoData.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default EventInfo;
