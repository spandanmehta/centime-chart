import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';
import Card from './ui/Card';
import { useTranslation } from 'react-i18next';

const SankeyChart = () => {
  const storeData = useSelector(store => store.data);
  const dataArr = storeData.reduce(
    (arr, item) => [...arr, [item.data.from, item.data.to, item.data.weight]],
    []
  );
  const { t } = useTranslation();
  const data = [['From', 'To', 'Weight'], ...dataArr];

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
      {storeData.length < 1 ? (
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
    </Card>
  );
};

export default SankeyChart;
