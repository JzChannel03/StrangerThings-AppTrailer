import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title3 animate__animated animate__bounceInRight'>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 5</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 5 page" comp={5} />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
