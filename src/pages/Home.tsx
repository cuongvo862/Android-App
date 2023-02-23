import { IonContent, IonPage, IonText} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent id="background">
        <IonText id="rentalz">RentalZ</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
