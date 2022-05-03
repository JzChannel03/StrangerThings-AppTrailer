import './About.css';

interface ContainerProps {
  name: string;
}

const About: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div>
        
        <p><span className='info'>Info:</span> Es una serie de televisión web estadounidense de suspenso y ciencia ficción coproducida y distribuida por Netflix. Escrita y dirigida por los hermanos Matt y Ross Duffer y producida ejecutivamente por Shawn Levy.
        <br />
        Fue estrenada en la plataforma Netflix el 15 de julio de 2016</p>
        <br />
        <br />
        <p><span className='info'># Temporadas: </span> 3</p>
        <br />
        <br />
        <p><span className='info'>Creador: </span> Escrita y dirigida por los hermanos Matt y Ross Duffer y producida ejecutivamente por Shawn Levy.</p>

      </div>
      
    </div>
  );
};

export default About;
