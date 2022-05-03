/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import './ExploreContainer.css';
import './Character.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IonModal } from '@ionic/react';


interface ContainerProps {
  name: string;
}

const Character: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonModal id='ModalChar'>
        <h1>Millie Bobby Brown</h1>
        <p>También conocida como Ce, es un personaje ficticio de la serie original de Netflix, Stranger Things, interpretada por Millie Bobby Brown. Once es una joven con habilidades psíquicas y un limitado vocabulario, muy probablemente debido a estar casi la totalidad de su vida encerrada en un laboratorio sin contacto con otras personas (exceptuando los científicos que estudian su extraño poder) y siendo maltratada por el director del Laboratorio de Hawkins, Martin Brenner, que se hacía pasar por su padre para que Once le tuviera más confianza al momento de que realizarán sus experimentos con ella.</p>
        <button onClick={() => Modal(1)}>Ok</button>
      </IonModal>

      <IonModal id='ModalChar2'>
        <h1>David Kenneth Harbour</h1>
        <p>Es el jefe del Departamento de Policía de Hawkins. Hopper ha vivido en Hawkins casi toda su vida, habiendo asistido a la escuela secundaria con Joyce Byers y Bob Newby. Hopper estaba casado y tuvieron una hija juntos, Sara. Se divorciaron después de que su hija pequeña muriera de cáncer, lo que le hizo caer en el alcoholismo y tomar pastillas para hacer frente al dolor. Durante unos años después de la muerte de Sara, fue detective de homicidios en la ciudad de Nueva York. Cuando estuvo en la ciudad el tiempo suficiente, regresó a Hawkins. Eventualmente, crece para ser más responsable, salvando a Will Byers y aceptando a Eleven como su hija adoptiva. En la temporada 3, intenta romper a Eleven y Mike ya que su relación se está moviendo demasiado rápido para él, mientras que el propio Hopper se está enamorando de Joyce.</p>
        <button onClick={() => Modal(2)}>Ok</button>
      </IonModal>

      <IonModal id='ModalChar3'>
        <h1>Noah Cameron Schnapp</h1>
        <p>Es un chico tímido, amable y a menudo tímido. Se le conoce como "Will the Wise". En noviembre de 1983, desaparece en algún lugar cerca de "Mirkwood" después de encontrarse con el monstruo que escapó a través de una grieta al "Upside Down", una dimensión alternativa descubierta por los científicos del Laboratorio Hawkins. Cuando Jim Hopper y Joyce se aventuran en el Upside Down para encontrarlo casi muerto, lo reviven con RCP y lo traen de vuelta al mundo real, pero todavía tiene efectos secundarios de su tiempo en la dimensión alternativa, incluida una que emerge de su boca, visiones del Upside Down y una conexión con el Mind Flayer.</p>
        <button onClick={() => Modal(3)}>Ok</button>
      </IonModal>

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div>
          <img src="https://bn1305files.storage.live.com/y4mVRqhNmf5l9Xb0dGEMI7fT7GLtZzK42At2vb559So7J13R2K6HymResI9COoOhWPepw__v5KXZC_OvyAZCOwc-mpZTdNNhKs4Ga1DEXBqhafTw5uRj9UMEgr4d6Or36Xhnh6c3UJ72hx8FgzdNNi_4_sXee3nEus0_Asjr1Vb6hs5759dTgLF7TjA4ZwT88QW?width=404&height=600&cropmode=none" alt="" />
          <h3>Once</h3>
          <button type='button' onClick={() => Modal(1)}>Info</button>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src="https://bn1305files.storage.live.com/y4mkhElEZi8t1qyFYrMgp4meUM9xNIPcnMUCkQ597ZmRuggtX9v6IDo2esmqqrPzqNLw-sxUwQbTEWyzRuo_1ImqF4_pYPqtRpox90BlmBwzKd0ye49wJmga4k-mDg2MZpv0FEROcvekWw-KQly_nF_aa0CaVlISC5gMQoULTagUawBflSouz9KXafE3Ql8h4gF?width=404&height=600&cropmode=none" alt="" />
        <h3>Jim Hopper</h3>
        <button onClick={() => Modal(2)}>Info</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src="https://bn1305files.storage.live.com/y4mb3ymMJr02pjqADnoFVvbt_jwviHM8tl9nQMQMcMhnSCsGyxY4hqhBwlhy5btfu6NxeJRNtv58WeET_khD9erxLFj9fYJ8BaxXzGCaN8yGSLiRW85Doxqc0IFHz-YIG_yS_nu7HB9B-glDA3-AuaVtrnujSUxh5AXPMr_SJYh52iXUWm_m7NOSP5WDWsX9ILJ?width=1809&height=3176&cropmode=none" alt="" />
        </div>
        <h3>Will Byers</h3>
        <button onClick={() => Modal(3)}>Info</button>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};

function Modal(num: number) {

  let modal;
  if(num === 1) {
    modal = document.getElementById('ModalChar') as HTMLIonModalElement;
  }else if(num === 2) {
    modal = document.getElementById('ModalChar2') as HTMLIonModalElement;
  } else{
    modal = document.getElementById('ModalChar3') as HTMLIonModalElement;
  }

  if(modal.isOpen !== true) {
    
    modal.present();
  }

  modal.dismiss();
  
}





export default Character;
