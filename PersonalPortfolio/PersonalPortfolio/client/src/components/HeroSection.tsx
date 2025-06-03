import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="px-4 lg:px-40 flex flex-1 justify-center py-12">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="p-4">
          <div
            className="flex min-h-[200px] flex-col gap-4 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-4 pb-6 lg:px-8 mb-8"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600")'
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                {t('최 병 수 대표이사', 'CEO Byungsoo Choie')}
              </h1>
              <h2 className="text-white text-sm lg:text-base font-normal leading-normal">
                {t('BIES WORLDWIDE CEO, 18년간의 해외 영업 경험을 바탕으로 AI 솔루션과 함께 독립적인 글로벌 무역을 이끌고 있습니다.', 'CEO of BIES WORLDWIDE, with 18 years of experience in overseas sales, now leading independent global trading with AI solutions.')}
              </h2>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 lg:h-12 lg:px-5 bg-[#359dff] text-[#0c151d] text-sm lg:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2a8ae6] transition-colors"
            >
              <span className="truncate">{t('더 알아보기', 'Learn More')}</span>
            </button>
          </div>
          
          {/* Additional content area to make the section longer */}
          <div className="text-center py-8">
            <p className="text-[#4574a1] max-w-2xl mx-auto text-[16px] text-left">
              {t('글로벌 비즈니스의 새로운 패러다임을 주목, 한국과 세계를 연결하는 가교 역할을 하고 있습니다.', 'Presenting a new paradigm in global business, serving as a bridge connecting Korea with the world.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
