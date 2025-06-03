import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('최병수', 'Byungsoo Choi')}
            </h3>
            <p className="text-gray-400">
              CEO of Bies Worldwide<br />
              {t('글로벌 비즈니스 전문가', 'Global Business Expert')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">
              {t('연락처', 'Contact')}
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>cbsplus@gmail.com</p>
              <p>+82 10 9059 3235</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">
              {t('서비스', 'Services')}
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>{t('국제 비즈니스 컨설팅', 'International Business Consulting')}</p>
              <p>{t('무역 및 공급망 솔루션', 'Trade & Supply Chain Solutions')}</p>
              <p>{t('웰니스 제품 글로벌 소싱', 'Wellness Products Global Sourcing')}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Byungsoo Choi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
