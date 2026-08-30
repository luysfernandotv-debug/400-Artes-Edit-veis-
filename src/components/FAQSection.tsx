import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, ChevronRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Preciso saber design para usar as artes?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Não. As artes já estão prontas. Você só precisa trocar a foto, editar o nome e publicar.
        </p>
      )
    },
    {
      question: "As artes são editáveis?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. Todas as artes podem ser personalizadas no Canva de forma simples e rápida.
        </p>
      )
    },
    {
      question: "Funciona pelo celular?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. Você pode editar diretamente pelo aplicativo do Canva no celular ou pelo computador.
        </p>
      )
    },
    {
      question: "Como vou receber o acesso?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Assim que o pagamento for confirmado, você recebe o acesso imediato, seu e-mail ou WhatsApp.
        </p>
      )
    },
    {
      question: "Quantas artes vou receber?",
      answer: (
        <div className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed space-y-4">
          <p>
            Você terá acesso a mais de <strong className="text-neutral-900 font-bold">400 artes editáveis para futebol amador</strong>, incluindo categorias como:
          </p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-center gap-2">✅ Craque da Rodada</li>
            <li className="flex items-center gap-2">✅ Artilharia</li>
            <li className="flex items-center gap-2">✅ Time da Rodada</li>
            <li className="flex items-center gap-2">✅ Resultado Final</li>
            <li className="flex items-center gap-2">✅ Escalações</li>
            <li className="flex items-center gap-2">✅ Patrocinadores</li>
          </ul>
          <p>E muito mais.</p>
        </div>
      )
    },
    {
      question: "Vou receber acesso imediatamente após a compra?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. Assim que o pagamento for aprovado, o acesso é enviado automaticamente.
        </p>
      )
    },
    {
      question: "Essas artes servem para qualquer baba ou campeonato?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. As artes podem ser utilizadas em babas, peladas, várzeas, campeonatos amadores e páginas de futebol amador em geral.
        </p>
      )
    },
    {
      question: "Posso trocar as cores e informações?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. Você pode alterar fotos, nomes, escudos, cores e demais informações para adaptar ao seu time ou campeonato.
        </p>
      )
    },
    {
      question: "O acesso é vitalício?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. Após a compra, o material continuará disponível para você acessar sempre que precisar.
        </p>
      )
    },
    {
      question: "O que recebo no Plano Completo?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Além das 400 Artes Editáveis, você recebe todos os bônus disponíveis na oferta, incluindo packs extras e materiais complementares.
        </p>
      )
    },
    {
      question: "E se eu não gostar do material?",
      answer: (
        <div className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed space-y-2">
          <p>Você estará protegido pela Garantia de 7 Dias</p>
          <p>Se dentro desse período entender que o material não é para você, basta solicitar o reembolso</p>
        </div>
      )
    },
    {
      question: "Posso usar as artes para vários times ou campeonatos?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Sim. Como os modelos são editáveis, você pode adaptar e utilizar quantas vezes desejar.
        </p>
      )
    },
    {
      question: "Em quanto tempo consigo criar uma arte?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Em poucos minutos. Basta abrir a arte, trocar as informações e exportar para publicação.
        </p>
      )
    },
    {
      question: "Como faço para começar?",
      answer: (
        <p className="text-neutral-700 text-sm sm:text-base font-normal leading-relaxed">
          Clique no botão abaixo, escolha seu plano e receba acesso imediato às <strong className="text-neutral-900 font-bold">400 Artes Editáveis para Futebol Amador</strong>.
        </p>
      )
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="perguntas-frequentes"
      className="relative w-full bg-[#ffffff] text-neutral-900 pt-10 sm:pt-14 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full filter blur-[150px] opacity-15 bg-emerald-100" />
        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full filter blur-[140px] opacity-10 bg-emerald-100" />
      </div>

      <div className="w-full max-w-4xl mx-auto z-10 relative space-y-12 sm:space-y-16">
        
        {/* HEADER BLOCK */}
        <div className="text-center space-y-4">
          <div 
            className="inline-flex items-center gap-1.5 bg-neutral-100 border border-neutral-300 rounded-full px-3.5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-700 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Suporte & Dúvidas</span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-neutral-950 uppercase leading-tight"
            style={{ fontSize: '50px', lineHeight: '45px' }}
          >
            PERGUNTAS FREQUENTES
          </h2>

          <p 
            className="text-sm sm:text-base font-sans font-bold text-black uppercase tracking-wider max-w-md mx-auto"
            style={{ color: '#000000', fontWeight: '800' }}
          >
            Clique na pergunta para expandir a resposta
          </p>
        </div>

        {/* ACCORDION ITEMS CONTAINER */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-neutral-200/90 rounded-2xl overflow-hidden shadow-[0_6px_0_0_#e5e7eb,0_10px_20px_rgba(0,0,0,0.06)]"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-black font-sans text-emerald-700 tracking-tight">
                    {faq.question}
                  </span>
                  
                  {/* Custom +/- Icons */}
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 shadow-sm ${
                    isOpen ? 'border-emerald-500 text-emerald-700 bg-emerald-100 font-black' : 'border-neutral-300 text-neutral-600 bg-neutral-100'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Collapse content wrapper */}
                {isOpen && (
                  <div 
                    className="px-6 pb-6 sm:pb-7 pt-3 border-t-2 border-emerald-100 bg-emerald-50/40 font-semibold text-base leading-relaxed"
                    style={{ color: '#000000' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM METADATA / FOOTER */}
        <div className="pt-0 -mt-4 mb-6 text-center max-w-md mx-auto">
          {/* Green CTA Button "Acessar Agora mesmo" */}
          <div className="flex justify-center text-center w-full">
            <a
              href="#escolha-seu-plano"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('escolha-seu-plano')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 sm:px-12 sm:py-5.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black font-mono uppercase tracking-wider shadow-[0_8px_30px_rgba(16,185,129,0.45)] cursor-pointer border border-emerald-500"
            >
              <span style={{ fontSize: '17px' }}>Acessar Agora mesmo</span>
              <ChevronRight className="w-6 h-6 text-white stroke-[3.5]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
