import React, { useState }  from 'react';
import { Button} from 'react-bootstrap';
import carImage from './car.png';

const CartWidget = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };
return (
    <div>
        <Button onClick={incrementarContador} style={{backgroundColor: '#E7E2E1', borderColor: '#E7E2E1', position: 'fixed', right: '20px'}}>
            <img src={carImage} alt="imagen carro compras"style={{ width: '20px' }}/>
            <span style={{color: '#000000', marginLeft: '10px'}}>{contador}</span>
        </Button>
    </div>
      );
    };
export default CartWidget;