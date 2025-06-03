import { useLanguage } from '../contexts/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      period: '2020-2024',
      title: t('부장, 현대그룹 본사', 'Chief Manager, Hyundai Corporation HQ'),
      description: t('본사에서 글로벌 비즈니스 전략을 총괄하며 조직을 이끌었습니다', 'Led global business strategy and organizational development at headquarters'),
      side: 'left'
    },
    {
      period: '2017-2020',
      title: t('수석 과장, 현대 유럽 (독일)', 'Senior Manager, Hyundai Europe GmbH (Germany)'),
      description: t('독일을 거점으로 유럽 시장 확장을 주도했습니다', 'Led European market expansion based in Germany'),
      side: 'right'
    },
    {
      period: '2012-2016',
      title: t('수석 영업 과장, 현대그룹', 'Senior Sales Manager, Hyundai Corporation'),
      description: t('글로벌 영업 팀을 이끌며 매출 성장을 달성했습니다', 'Led global sales team achieving significant revenue growth'),
      side: 'left'
    },
    {
      period: '2007-2012',
      title: t('영업 대리, 코오롱 글로벌', 'Assistant Sales Manager, Kolon Global'),
      description: t('국제 무역 분야에서 경력을 시작하며 기초를 다졌습니다', 'Started career in international trade, building strong foundations'),
      side: 'right'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('경력 타임라인', 'Experience Timeline')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('18년간의 국제 비즈니스 여정', '18 years of international business journey')}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${exp.side === 'right' ? 'md:justify-end' : ''}`}>
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${exp.side === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-primary-600 font-semibold mb-2">{exp.period}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
