import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import InMyLife from '../components/InMyLife';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title3 animate__animated animate__bounceInLeft'>In My Life</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" comp={1} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
