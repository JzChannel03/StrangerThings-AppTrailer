import './InMyLife.css';

interface ContainerProps {
  name: string;
}

const InMyLife: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <h1>Por qué es importante para mí?</h1>
      <p>Es una serie que me saca un rato de la realidad.
        La rutina de mi vida es eliminada mientras la veo.
        La emoción de cada capítulo es única, y la vibra de los personajes por igual.
        <br />
        Enumerar los que más me gustan fue una tarea difícil, todos aplican peso necesario en la misma.
        <br />
        <br />
        <u>Serie totalmente recomendada!</u>
      </p>
    </div>
  );
};

export default InMyLife;
