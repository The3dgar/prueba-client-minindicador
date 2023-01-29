import { Bitcoin } from '../interfaces/indicators.interface';

interface Props {
  indicatorData: Bitcoin;
}

const map = {
  Pesos: 'CLP',
  Porcentaje: '%',
  Dólar: 'USD',
};
export const IndicatorItem = ({ indicatorData }: Props) => {
  const { codigo, fecha, nombre, unidad_medida, valor } = indicatorData;
  return (
    <div className='card border-primary mb-3' style={{ width: '18rem' }}>
      {/* <img className='card-img-top' src='' alt='Card image cap' /> */}
      <div className='card-header'>{codigo.toUpperCase()}</div>
      <div className='card-body'>
        <h5 className='card-title'>{`${valor}  ${map[unidad_medida]}`}</h5>
        <p className='card-text'>{nombre}</p>
      </div>
    </div>
  );
};
