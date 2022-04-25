import { Chart } from 'react-google-charts';
import Card from './ui/Card';
import { useTranslation } from 'react-i18next';

const SankeyChart = ({ isLoading, data }) => {
  const { t } = useTranslation();

  const options = {
    sankey: {
      link: { color: { fill: '#1e1e1e' } },
      node: {
        colors: ['orange'],
        label: { color: 'black' },
      },
    },
  };
  return (
    <Card>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {data.length <= 1 ? (
            <h2>{t('addSomeData')}</h2>
          ) : (
            <Chart
              chartType='Sankey'
              width='100%'
              height='500px'
              data={data}
              options={options}
            />
          )}
        </>
      )}
    </Card>
  );
};

export default SankeyChart;
