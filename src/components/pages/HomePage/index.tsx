import AttendanceForm from '@/components/organisms/AttendanceForm';
import EventInfo from '@/components/organisms/EventInfo';
import Footer from '@/components/organisms/Footer';
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
      <Footer />
    </>
  );
};

export default HomePage;
