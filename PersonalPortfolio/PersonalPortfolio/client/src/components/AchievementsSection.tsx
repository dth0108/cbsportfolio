import { useLanguage } from '../contexts/LanguageContext';

export default function AchievementsSection() {
  const { t } = useLanguage();

  const achievements = [
    {
      number: '3',
      title: t('해외 지사 설립', 'International Branches'),
      subtitle: t('브라질, 남아공, 폴란드', 'Brazil, South Africa, Poland')
    },
    {
      number: '15%',
      title: t('유럽 지역 매출 성장', 'European Sales Growth'),
      subtitle: t('연간 매출 증가율', 'Annual revenue increase')
    },
    {
      number: '15',
      title: t('신규 주요 고객 확보', 'New Key Accounts'),
      subtitle: t('대형 계약 체결', 'Major contract acquisitions')
    },
    {
      number: 'CITP',
      title: t('국제무역사 자격증', 'Trade Certification'),
      subtitle: t('한국무역협회 인증', 'Korea International Trade Association')
    }
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('주요 성과', 'Key Achievements')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('숫자로 보는 성공적인 비즈니스 성과', 'Quantified business success and impact')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600">
                {achievement.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
