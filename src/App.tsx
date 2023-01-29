import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getIndicators } from './api/indicatorsApi';
import { ErrorMsg } from './components/ErrorMsg';
import { IndicatorItem } from './components/IndicatorItem';
import { Loading } from './components/Loading';

function App() {
  const { isLoading, error, data } = useQuery('getIndicators', async () => {
    const { data } = await getIndicators();
    const { autor, version, fecha, ...otherThings } = data;
    return otherThings;
  });

  if (isLoading) return <Loading />;

  if (error)
    return (
      <ErrorMsg
        msg={`Lo siento, ha ocurrido un error: ${
          (error as AxiosError).message
        } `}
      />
    );

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <span className='navbar-brand mb-0 p-3 h1'>My Indicators!</span>
      </nav>
      <div className='d-flex flex-wrap justify-content-around p-2'>
        {data!! &&
          Object.values(data).map((indicator, idx) => (
            <IndicatorItem key={idx} indicatorData={indicator} />
          ))}
      </div>
    </div>
  );
}

export default App;
