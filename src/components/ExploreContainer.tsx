import './ExploreContainer.css';
import CompConfirm from './Functions/1';

interface ContainerProps {
  name: string;
  comp: number;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, comp }) => {

  return (
    <div className="container">
      {CompConfirm(comp)}
    </div>
  );
};

export default ExploreContainer;
