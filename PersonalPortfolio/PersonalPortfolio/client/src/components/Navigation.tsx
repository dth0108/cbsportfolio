import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import logoPath from '@assets/BIESWDWD_BG.png';

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6edf4] px-10 py-3 bg-slate-50">
      <div className="flex items-center gap-2 text-[#0c151d]">
        <div className="size-8">
          <img 
            src={logoPath} 
            alt="BIES WORLDWIDE Logo" 
            className="w-8 h-8 object-contain"
          />
        </div>
        <h2 className="text-[#0c151d] text-lg font-bold leading-tight tracking-[-0.015em]">BIES WORLDWIDE</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-[#0c151d] text-sm font-medium leading-normal hover:text-primary-600 transition-colors"
          >
            {t('소개', 'About')}
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-[#0c151d] text-sm font-medium leading-normal hover:text-primary-600 transition-colors"
          >
            {t('서비스', 'Services')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-[#0c151d] text-sm font-medium leading-normal hover:text-primary-600 transition-colors"
          >
            {t('연락처', 'Contact')}
          </button>
        </div>
        <button
          onClick={toggleLanguage}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e6edf4] text-[#0c151d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#cddcea] transition-colors"
        >
          <div className="text-[#0c151d]" data-icon="Globe" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.9a142.77,142.77,0,0,0-5.18-23.15A87.78,87.78,0,0,1,206.37,88ZM90.28,64.85A142.77,142.77,0,0,0,85.1,88H49.63A87.78,87.78,0,0,1,90.28,64.85ZM49.63,168H85.1a142.77,142.77,0,0,0,5.18,23.15A87.78,87.78,0,0,1,49.63,168Zm116.09,23.15A142.77,142.77,0,0,0,170.9,168h35.47A87.78,87.78,0,0,1,165.72,191.15Z"
              />
            </svg>
          </div>
          {language === 'ko' ? 'EN' : '한국어'}
        </button>
        
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150")'}}
        ></div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#0c151d] hover:text-primary-600 focus:outline-none"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-50 border-t border-[#e6edf4] z-50">
          <div className="px-4 py-3 space-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-[#0c151d] hover:text-primary-600 transition-colors"
            >
              {t('소개', 'About')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-[#0c151d] hover:text-primary-600 transition-colors"
            >
              {t('서비스', 'Services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-[#0c151d] hover:text-primary-600 transition-colors"
            >
              {t('연락처', 'Contact')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
