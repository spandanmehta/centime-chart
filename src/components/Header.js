import CentimeLogo from '../images/centime-logo-full.svg';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';
import { useState } from 'react';

const Header = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en');
  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };
  return (
    <nav className='flex h-16 bg-slate-100 shadow-md p-4 justify-between'>
      <img src={CentimeLogo} alt={'centime logo'}></img>
      <div className=' self-center'>
        <Button
          className='m-4 p-4'
          onClick={() => changeLanguage('en')}
          active={currentLang === 'en'}
        >
          English
        </Button>
        <Button
          className='m-4 p-4'
          onClick={() => changeLanguage('hi')}
          active={currentLang === 'hi'}
        >
          Hindi
        </Button>
      </div>
    </nav>
  );
};

export default Header;
