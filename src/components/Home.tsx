import './ExploreContainer.css';
import './Home.css';


interface ContainerProps {
  name: string;
}

const Home: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <img className='stranger' src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2016/08/stranger-things-cartel.jpg?itok=mUDp2AQM" alt="" />
      <br />
      <div className='netflixdiv'>
        <img className='netflix animate__animated animate__bounceInDown' src="https://bn1305files.storage.live.com/y4mUAP9R_74kzmp6SDoF-rvGVQ0Nb5FBj5Mw-1npumVKrBPTgDldXzclWDqsACB4aELaEhPvyoRsPMmMF36As8dTYb2-PmmN7azwhH4IICOPnKqwPB_TIi_PYTN4HLbQSgLXpNRTscB-5_KTgbU3UO9ndZG6uJZOTSUw8-qUkqWa3ceWPd5XPWPuVrKV5DRzf7f?width=512&height=512&cropmode=none" alt="" />
        <h6>Co-produced and distributed by Netflix.</h6>
      </div>
      
      <br /><br />
    </div>
  );
};

export default Home;
