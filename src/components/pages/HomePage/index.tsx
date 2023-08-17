import AttendanceForm from '@/components/organisms/AttendanceForm';
import EventInfo from '@/components/organisms/EventInfo';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Minimap from '@/components/organisms/Minimap';
import Timer from '@/components/organisms/Timer';
import useScreenWidth from '@/hooks/useScreenWidth';
import useScrollToTop from '@/hooks/useScrollToTop';
import ErrorPage from '@/components/pages/ErrorPage';
import Banner from '@/components/organisms/Banner';
import { TitleTypo } from '@/components/atoms/TitleTypo';

const HomePage = () => {
  const { isMobile } = useScreenWidth();

  if (!isMobile) {
    return (
      <ErrorPage
        title="Olá!"
        message="A versão desktop do site ainda não está pronta. Por enquanto, por favor acesse o site pelo celular!"
        btnVisible={false}
      />
    );
  }

  useScrollToTop();

  return (
    <>
      <Header />
      <Banner imgPath="/images/park/park-2.webp">
        <TitleTypo
          styleClass="banner__content --text"
          fontStyles={{ size: 'large', color: 'white' }}
        >
          — Pri & Lucas —
        </TitleTypo>
      </Banner>

      <Timer color="dark-blue" />

      <EventInfo />
      <AttendanceForm />
      <Minimap />
      <Footer />
    </>
  );
};

export default HomePage;
