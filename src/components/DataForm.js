import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addRow, deleteRow } from '../features/sankey/sankeySlice';
import Card from './ui/Card';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';
import Input from './ui/Input';

const DataForm = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(store => store.data);
  const isLoading = useSelector(store => store.isLoading);

  const { t } = useTranslation();

  const [newData, setNewData] = useState({
    id: '',
    data: { from: '', to: '', weight: '' },
  });
  const [isEdit, setIsEdit] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    const data = {
      id: newData.id || uuid(),
      data: newData.data,
    };
    setNewData({ id: '', data: { from: '', to: '', weight: '' } });
    if (isEdit) {
      dispatch(deleteRow(data));
      setIsEdit(false);
    }
    dispatch(addRow(data));
  };

  const DataRow = item => {
    return (
      <tr key={item.id}>
        <td className='px-4 py-2'>{item.data.from}</td>
        <td className='px-4 py-2'>{item.data.to}</td>
        <td className='px-4 py-2'>{item.data.weight}</td>
        <td className='px-4 py-2'>
          <Button onClick={() => dispatch(deleteRow(item))}>
            {t('delete')}
          </Button>
          <Button
            onClick={() => {
              setIsEdit(true);
              setNewData({
                id: item.id,
                data: {
                  from: item.data.from,
                  to: item.data.to,
                  weight: item.data.weight,
                },
              });
            }}
          >
            {t('edit')}
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Card>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {storeData.length > 0 && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th className='px-4 py-2'>{t('from')}</th>
                    <th className='px-4 py-2'>{t('to')}</th>
                    <th className='px-4 py-2'>{t('weight')}</th>
                    <th className='px-4 py-2'></th>
                  </tr>
                </thead>
                <tbody>{storeData.map(item => DataRow(item))}</tbody>
              </table>
            </div>
          )}
          <div className='my-8'>
            <form onSubmit={submitHandler}>
              <Input
                required
                type='text'
                placeholder={t('from')}
                value={newData.data.from}
                onChange={e =>
                  setNewData(prev => {
                    return {
                      ...prev,
                      data: { ...prev.data, from: e.target.value },
                    };
                  })
                }
              />
              <Input
                required
                type='text'
                placeholder={t('to')}
                value={newData.data.to}
                onChange={e =>
                  setNewData(prev => {
                    return {
                      ...prev,
                      data: { ...prev.data, to: e.target.value },
                    };
                  })
                }
              />
              <Input
                required
                min='1'
                type='number'
                placeholder={t('weight')}
                value={newData.data.weight}
                onChange={e =>
                  setNewData(prev => {
                    return {
                      ...prev,
                      data: { ...prev.data, weight: e.target.value },
                    };
                  })
                }
              />
              <Button type={'submit'}>{t('save')}</Button>
            </form>
          </div>
        </>
      )}
    </Card>
  );
};

export default DataForm;
