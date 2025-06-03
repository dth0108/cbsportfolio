import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('personal');

  const services = {
    personal: {
      title: t('개인 무역', 'Personal Trading'),
      description: t('개별 고객의 요구에 맞춘 개인화된 무역 전략을 제공하며, 광범위한 시장 지식과 윤리적 관행에 대한 헌신을 활용합니다.', 'Offering personalized trading strategies tailored to individual client needs, leveraging extensive market knowledge and a commitment to ethical practices.')
    },
    ai: {
      title: t('AI 솔루션', 'AI Solutions'),
      description: t('비즈니스가 무역 효율성을 높이고, 공급망을 최적화하며, 지속 가능한 운영을 보장할 수 있도록 최첨단 AI 솔루션을 제공합니다.', 'Providing cutting-edge AI solutions for businesses to enhance trading efficiency, optimize supply chains, and ensure sustainable operations.')
    }
  };

  return (
    <section id="services" className="px-4 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#0c151d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {t('서비스', 'Services')}
        </h2>
        
        <div className="pb-3">
          <div className="flex border-b border-[#cddcea] px-4 gap-8">
            <button 
              onClick={() => setActiveTab('personal')}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === 'personal' 
                  ? 'border-b-[#359dff] text-[#0c151d]' 
                  : 'border-b-transparent text-[#4574a1]'
              }`}
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === 'personal' ? 'text-[#0c151d]' : 'text-[#4574a1]'
              }`}>
                {services.personal.title}
              </p>
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === 'ai' 
                  ? 'border-b-[#359dff] text-[#0c151d]' 
                  : 'border-b-transparent text-[#4574a1]'
              }`}
            >
              <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                activeTab === 'ai' ? 'text-[#0c151d]' : 'text-[#4574a1]'
              }`}>
                {services.ai.title}
              </p>
            </button>
          </div>
        </div>
        
        <p className="text-[#0c151d] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {services[activeTab as keyof typeof services].description}
        </p>
      </div>
    </section>
  );
}
