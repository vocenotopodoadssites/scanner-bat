import React from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Calculator, 
  Target, 
  ArrowRight,
  Smartphone,
  BarChart3,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-20 pb-16 px-4">
        {/* Animated Background Profits */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "110%", 
                opacity: 0,
                scale: 0.5 + Math.random()
              }}
              animate={{ 
                y: "-10%", 
                opacity: [0, 1, 1, 0],
                rotate: Math.random() * 20 - 10
              }}
              transition={{ 
                duration: 10 + Math.random() * 15, 
                repeat: Infinity, 
                delay: Math.random() * 10,
                ease: "linear"
              }}
              className="absolute text-emerald-500 font-black whitespace-nowrap select-none"
              style={{ fontSize: Math.random() * 20 + 14 + "px" }}
            >
              +{["R$ " + (Math.random() * 200 + 20).toFixed(2), (Math.random() * 15 + 2).toFixed(1) + "%"][Math.floor(Math.random() * 2)]}
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-6">
              Matemática Aplicada ao Lucro
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Pare de "tentar a sorte" e comece a lucrar com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">matemática das Surebets.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Receba em tempo real as falhas das casas de apostas e garanta lucro independente do resultado final do jogo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                QUERO ENTRAR PARA O VIP AGORA
                <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <ShieldCheck size={16} className="text-emerald-500" />
                Acesso imediato via Telegram
              </div>
            </div>
          </motion.div>
        </div>
      </header>



      {/* Problem vs Solution */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Por que você ainda <span className="text-red-500">perde dinheiro</span> nas apostas?
              </h2>
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">O Problema</h3>
                    <p className="text-zinc-400">95% dos apostadores perdem dinheiro porque dependem de palpites, sorte e emoção. As casas de apostas sempre têm a vantagem matemática sobre você.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                A <span className="text-emerald-500">Vantagem Matemática</span> ao seu favor.
              </h2>
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">A Solução</h3>
                    <p className="text-zinc-400">Nosso Scanner utiliza Arbitragem Esportiva. Encontramos situações onde a Bet365 paga muito por um resultado e a Betano paga muito pelo oposto. Você aposta nos dois e o lucro é garantido.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você vai receber no VIP</h2>
            <p className="text-zinc-400">Tudo o que você precisa para operar sem dor de cabeça.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="text-emerald-500" />,
                title: "Scanner 24h",
                desc: "Robô monitorando as principais casas (Bet365, Betano, Sportingbet, etc) sem parar."
              },
              {
                icon: <Calculator className="text-blue-500" />,
                title: "Cálculos Prontos",
                desc: "O bot já diz exatamente quanto apostar em cada lado para garantir o lucro."
              },
              {
                icon: <Smartphone className="text-purple-500" />,
                title: "Foco no Brasil",
                desc: "Sinais de jogos que você conhece e são fáceis de encontrar nas casas nacionais."
              },
              {
                icon: <MessageSquare className="text-amber-500" />,
                title: "Suporte VIP",
                desc: "Canal direto para tirar dúvidas sobre como operar e configurar sua banca."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Real-time Profits Marquee */}
      <section className="py-24 px-4 bg-emerald-500/5 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold mb-4">
              <TrendingUp size={18} />
              LUCROS EM TEMPO REAL
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos alunos estão <span className="text-emerald-500">lucrando agora.</span>
            </h2>
            <p className="text-zinc-400">Veja os últimos lucros realizados pelos membros do VIP:</p>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30">
            {/* Gradient Overlays for smooth fade */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent z-10" />

            <motion.div 
              animate={{ y: [0, -2000] }}
              transition={{ 
                duration: 35, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-4 p-4"
            >
              {[...Array(2)].map((_, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  {[
                    { name: "João Pedro", profit: "R$ 142,50", time: "há 1 min" },
                    { name: "Maria Clara", profit: "R$ 89,20", time: "há 3 min" },
                    { name: "Lucas Henrique", profit: "R$ 215,00", time: "há 5 min" },
                    { name: "Fernanda Souza", profit: "R$ 56,40", time: "há 7 min" },
                    { name: "Gabriel Lima", profit: "R$ 120,00", time: "há 8 min" },
                    { name: "Patrícia Gomes", profit: "R$ 310,00", time: "há 10 min" },
                    { name: "Rafael Costa", profit: "R$ 45,00", time: "há 12 min" },
                    { name: "Juliana Silva", profit: "R$ 178,30", time: "há 15 min" },
                    { name: "Matheus Oliveira", profit: "R$ 92,00", time: "há 18 min" },
                    { name: "Camila Rocha", profit: "R$ 250,00", time: "há 20 min" },
                    { name: "Vinícius Santos", profit: "R$ 67,80", time: "há 22 min" },
                    { name: "Letícia Almeida", profit: "R$ 134,00", time: "há 25 min" },
                    { name: "Rodrigo Ferreira", profit: "R$ 412,00", time: "há 28 min" },
                    { name: "Aline Meireles", profit: "R$ 88,50", time: "há 30 min" },
                    { name: "Igor Guimarães", profit: "R$ 155,00", time: "há 32 min" },
                    { name: "Daniela Viana", profit: "R$ 203,00", time: "há 35 min" },
                    { name: "Fábio Júnior", profit: "R$ 74,20", time: "há 38 min" },
                    { name: "Sabrina Paiva", profit: "R$ 119,00", time: "há 40 min" },
                    { name: "Eduardo Teles", profit: "R$ 340,00", time: "há 42 min" },
                    { name: "Bárbara Luz", profit: "R$ 95,00", time: "há 45 min" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-white/10 shrink-0">
                          <img 
                            src={`https://picsum.photos/seed/profit-${item.name}/100/100`} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-200">{item.name}</p>
                          <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Lucro Realizado</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-emerald-500 font-black text-lg">+{item.profit}</div>
                        <div className="text-[10px] text-zinc-500 flex items-center justify-end gap-1">
                          <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                          {item.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials Marquee */}
      <section className="py-24 px-4 bg-zinc-900/20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mb-4">
              <MessageSquare size={18} />
              DEPOIMENTOS DE ALUNOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem usa, <span className="text-blue-500">aprova e lucra.</span>
            </h2>
            <p className="text-zinc-400">Veja o que os membros do nosso grupo VIP estão dizendo:</p>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30">
            {/* Gradient Overlays */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent z-10" />

            <motion.div 
              animate={{ y: [-2000, 0] }}
              transition={{ 
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-4 p-4"
            >
              {[...Array(2)].map((_, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  {[
                    { name: "Ricardo Silva", text: "No começo achei que era golpe, mas a matemática não mente. 15% de banca no primeiro mês.", role: "Aluno há 3 meses" },
                    { name: "Ana Paula", text: "O suporte é nota 10. Me ajudaram a configurar as casas e já tô lucrando muito.", role: "Aluna há 1 mês" },
                    { name: "Marcos Oliveira", text: "Melhor investimento que fiz esse ano. O bot é muito rápido e as odds não somem.", role: "Aluno há 5 meses" },
                    { name: "Juliana Costa", text: "Finalmente parei de perder dinheiro com tipster de palpite. Aqui é certeza de lucro.", role: "Aluna há 2 meses" },
                    { name: "Felipe Santos", text: "Surebet é vida. O scanner pega umas falhas absurdas da Bet365 e Betano.", role: "Aluno há 4 meses" },
                    { name: "Beatriz Lima", text: "Consigo fazer as entradas pelo celular no intervalo do trabalho. Muito prático.", role: "Aluna há 2 meses" },
                    { name: "Thiago Souza", text: "Já recuperei o valor da assinatura na primeira semana. Recomendo demais o VIP.", role: "Aluno há 1 mês" },
                    { name: "Carla Mendes", text: "O robô é muito preciso. Os cálculos de quanto apostar facilitam tudo pra gente.", role: "Aluna há 3 meses" },
                    { name: "Gustavo Rocha", text: "Nunca tinha ouvido falar de arbitragem, o material de apoio é excelente e direto.", role: "Aluno há 6 meses" },
                    { name: "Letícia Ferreira", text: "Lucro garantido independente de quem ganha o jogo. É surreal a matemática.", role: "Aluna há 2 meses" },
                    { name: "Bruno Almeida", text: "Scanner 24h é o diferencial. Sempre tem oportunidade, não importa a hora.", role: "Aluno há 4 meses" },
                    { name: "Amanda Xavier", text: "Minha banca cresceu 20% em 15 dias. O VIP vale cada centavo investido.", role: "Aluna há 1 mês" }
                  ].map((testimonial, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-white/10">
                          <img 
                            src={`https://picsum.photos/seed/${testimonial.name}/100/100`} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-200">{testimonial.name}</p>
                          <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 italic leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, starIdx) => (
                          <Zap key={starIdx} size={12} className="text-amber-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-md mx-auto relative z-10">
          <div className="p-10 rounded-3xl bg-zinc-900 border-2 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)] text-center">
            <h3 className="text-2xl font-bold mb-2">Assinatura Mensal VIP</h3>
            <p className="text-zinc-400 mb-8">Garanta sua vaga no grupo VIP agora.</p>
            
            <div className="mb-8">
              <p className="text-zinc-500 line-through text-lg">De: R$ 97,00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-zinc-400">Por apenas</span>
                <span className="text-5xl font-black text-white">R$ 47,00</span>
                <span className="text-zinc-400 font-bold">/mês</span>
              </div>
            </div>

            <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-lg rounded-2xl transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(16,185,129,0.4)] mb-6">
              QUERO ENTRAR PARA O VIP AGORA
            </button>

            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                7 dias de garantia incondicional
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Cancelamento fácil a qualquer momento
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center text-zinc-600 text-sm">
        <p>© 2024 Surebet Scanner VIP. Todos os direitos reservados.</p>
        <p className="mt-2">A arbitragem esportiva envolve riscos de gestão. Opere com responsabilidade.</p>
      </footer>
    </div>
  );
};

export default App;
