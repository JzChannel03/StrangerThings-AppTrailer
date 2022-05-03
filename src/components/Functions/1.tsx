import About from '../About';
import Character from '../Character';
import Home from '../Home';
import InMyLife from '../InMyLife';
import Moments from '../Moments';

function CompConfirm(num: number){
    let components = [
    <InMyLife name='' />, 
    <Character name='' />, 
    <Home name='' />, 
    <Moments name=''/>, 
    <About name='' />
];

    return components[num - 1];
}

export default CompConfirm;