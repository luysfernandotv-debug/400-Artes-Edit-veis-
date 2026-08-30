import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      id="rodape"
      className="relative w-full bg-[#030303] text-white pt-6 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto z-10 relative space-y-5 sm:space-y-6">
        
        {/* UPPER ROW: Brand Name, Links and Trust Signal */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 pb-5 sm:pb-6 border-b border-neutral-900">
          
          {/* Brand Identification */}
          <div className="text-center md:text-left space-y-1">
            {/* EXACT COPY: Pack Futebol Amador */}
            <h3 className="text-base sm:text-lg font-black font-display tracking-wider text-white uppercase">
              Pack Futebol Amador
            </h3>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              SISTEMA DE BRANDING ESPORTIVO
            </span>
          </div>

          {/* Institutional Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center">
            {[
              { label: 'Política de Privacidade', href: '#privacidade' },
              { label: 'Termos de Uso', href: '#termos' },
              { label: 'Suporte', href: '#suporte' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs sm:text-sm font-medium font-sans text-neutral-400 hover:text-amber-500 transition-colors uppercase tracking-widest duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Trust indicator */}
          <div className="flex items-center gap-2.5 bg-neutral-900 border border-neutral-850 px-4 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            {/* EXACT COPY: Pagamento 100% seguro */}
            <span className="text-[10px] sm:text-xs font-mono text-neutral-300 uppercase tracking-widest font-bold">
              Pagamento 100% seguro
            </span>
          </div>

        </div>

        {/* BOTTOM ROW: Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 pt-4 text-neutral-500">
          
          {/* EXACT COPY: © Todos os direitos reservados */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">
              © Todos os direitos reservados
            </p>
            <p className="text-[9px] font-sans text-neutral-600">
              Desenvolvido com sofisticação para os apaixonados por Várzea e Futebol Amador
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
