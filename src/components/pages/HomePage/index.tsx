import AttendanceForm from '@/components/organisms/AttendanceForm';
import EventInfo from '@/components/organisms/EventInfo';
import Header from '@/components/organisms/Header';
import Minimap from '@/components/organisms/Minimap';
import Timer from '@/components/organisms/Timer';
import useScrollToTop from '@/hooks/useScrollToTop';

const HomePage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <Timer />
      <EventInfo />
      <AttendanceForm />
      <Minimap />
    </>
  );
};

export default HomePage;
