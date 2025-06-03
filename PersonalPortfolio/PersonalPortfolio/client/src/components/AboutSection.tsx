import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#0c151d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {t('최병수 대표에 대해', 'About Byungsoo Choie ')}
        </h2>
        <div className="px-4 space-y-4">
          <p className="text-[#0c151d] text-base font-normal leading-normal">
            {t('최병수 대표는 국제 영업 분야에서 거의 20년간의 경험을 가진 숙련된 전문가입니다. 글로벌 무역의 역동적인 분야를 전문으로 하고 있습니다.',
            'Byungsoo Choie is a seasoned professional with nearly two decades of experience in international sales. He specializes in the dynamic field of global trade.')}
          </p>
          
          <div className="border-l-4 border-[#359dff] pl-4">
            <p className="text-[#0c151d] text-base font-normal leading-normal">
              {t('그의 경력은 혁신과 지속 가능성에 대한 헌신으로 특징지어집니다. 시장 역학에 대한 깊은 이해와 미래 지향적인 접근 방식을 보여줍니다.',
              'His career is marked by a commitment to innovation and sustainability. He demonstrates deep understanding of market dynamics and a forward-thinking approach.')}
            </p>
          </div>
          
          <p className="text-[#0c151d] text-base font-normal leading-normal">
            {t('BIES WORLDWIDE 설립과 함께, 최병수 대표는 AI 기반의 효율적인 업무 시스템을 통해 신무역을 도입하고 있으며, 동시에 윤리적 운영에 집중하고 있습니다. ',
            'With the establishment of BIES WORLDWIDE, CEO Choie is introducing new trade through AI-based efficient business systems while simultaneously focusing on ethical operations. ')}
          </p>
        </div>
        
        <h2 className="text-[#0c151d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {t('주요 성과', 'Key Achievements')}
        </h2>
        
        <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#0c151d] text-base font-medium leading-normal line-clamp-1">
              {t('시장 확장', 'Market Expansion')}
            </p>
            <p className="text-[#4574a1] text-sm font-normal leading-normal line-clamp-2">
              {t('남아프리카, 폴란드 등 이전 근무처의 신규 시장 글로벌 진출에 큰 역할을 담당했습니다.  ', 'Played a key role in global expansion into new markets including South Africa, Poland at previous workplaces. ')}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#0c151d] text-base font-medium leading-normal line-clamp-1">
              {t('AI 통합', 'AI Integration')}
            </p>
            <p className="text-[#4574a1] text-sm font-normal leading-normal line-clamp-2">
              {t('공급망 물류를 최적화하기 위한 관계사 협력 및 시스템 개선을 통하여 비용을 15% 절감했습니다. ', 'Optimized supply chain logistics through affiliate cooperation and system improvements, reducing costs by 15%. ')}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#0c151d] text-base font-medium leading-normal line-clamp-1">
              {t('지속가능성 이니셔티브', 'Sustainability Initiatives')}
            </p>
            <p className="text-[#4574a1] text-sm font-normal leading-normal line-clamp-2">
              {t('글로벌 지속가능성 목표에 부합하는 무역 운영에서 친환경 에너지 분야로의 공급을 지속 확대, 친환경 관행을 주도했습니다. ', 'Championed eco-friendly practices in trading operations, aligning with global sustainability goals.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
