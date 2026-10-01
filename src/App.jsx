import "./App.css";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <h2>SimpleTech</h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#solucao">Solução</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#equipe">Equipe</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-content">
            <span className="hero-tag">Tecnologia para todos</span>

            <h1>Tecnologia simples para uma vida mais conectada.</h1>

            <p>
              Aprenda a utilizar a tecnologia de forma simples, segura e
              acessível.
            </p>

            <a href="#solucao" className="hero-button">
              Conheça o SimpleTech
            </a>
          </div>

          <div className="phone">
            <div className="phone-top">
              <span>SimpleTech</span>
              <span className="phone-status"></span>
            </div>

            <div className="phone-content">
              <span className="phone-welcome">Olá!</span>

              <h3>O que você deseja aprender?</h3>

              <div className="phone-option">
                <span className="phone-option-icon">01</span>
                <span>Usar o celular</span>
              </div>

              <div className="phone-option">
                <span className="phone-option-icon">02</span>
                <span>Fazer uma chamada</span>
              </div>

              <div className="phone-option">
                <span className="phone-option-icon">03</span>
                <span>Segurança digital</span>
              </div>

              <div className="phone-option">
                <span className="phone-option-icon">04</span>
                <span>Falar com assistente</span>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section problem-section">
          <div className="problem-text">
            <span className="section-tag">O problema</span>

            <h2>Por que o SimpleTech existe?</h2>

            <p>
              A tecnologia está cada vez mais presente no dia a dia, mas nem
              sempre é fácil acompanhar todas essas mudanças.
            </p>

            <p>
              O SimpleTech busca tornar esse aprendizado mais simples, acessível
              e seguro para pessoas com 50 anos ou mais.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-item">
              <div className="problem-icon">01</div>

              <div>
                <h3>Dificuldade com aplicativos</h3>

                <p>
                  Aprender a utilizar novas ferramentas pode ser desafiador.
                </p>
              </div>
            </div>

            <div className="problem-item">
              <div className="problem-icon">02</div>

              <div>
                <h3>Segurança digital</h3>

                <p>É importante reconhecer situações de risco na internet.</p>
              </div>
            </div>

            <div className="problem-item">
              <div className="problem-icon">03</div>

              <div>
                <h3>Mais autonomia</h3>

                <p>
                  O objetivo é ajudar o usuário a realizar tarefas com mais
                  confiança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="section section-light">
          <div className="section-header">
            <span className="section-tag">Nossa proposta</span>

            <h2>Uma tecnologia mais simples e acessível</h2>

            <p>
              O SimpleTech foi pensado para ajudar pessoas 50+ a desenvolverem
              autonomia no uso da tecnologia.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-icon">01</div>

              <h3>Tecnologia</h3>

              <p>
                Aprenda tarefas digitais do cotidiano através de conteúdos
                simples e fáceis de entender.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">02</div>

              <h3>Segurança</h3>

              <p>
                Aprenda boas práticas para utilizar aplicativos, internet e
                dispositivos com mais segurança.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">03</div>

              <h3>Acessibilidade</h3>

              <p>
                Conteúdos desenvolvidos pensando nas necessidades do público com
                50 anos ou mais.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="section">
          <div className="section-header">
            <span className="section-tag">Passo a passo</span>

            <h2>Como funciona?</h2>

            <p>Aprender tecnologia pode ser simples.</p>
          </div>

          <div className="steps">
            <div className="step">
              <strong>01</strong>

              <h3>Escolha</h3>

              <p>Escolha o que deseja aprender.</p>
            </div>

            <div className="step">
              <strong>02</strong>

              <h3>Aprenda</h3>

              <p>Siga o tutorial passo a passo.</p>
            </div>

            <div className="step">
              <strong>03</strong>

              <h3>Pratique</h3>

              <p>Pratique no seu próprio ritmo.</p>
            </div>

            <div className="step">
              <strong>04</strong>

              <h3>Evolua</h3>

              <p>Acompanhe seu aprendizado.</p>
            </div>
          </div>
        </section>

        {/* PÚBLICO */}
        <section className="section audience">
          <div className="audience-content">
            <span className="section-tag">Público-alvo</span>

            <h2>Tecnologia feita para pessoas 50+</h2>

            <p>
              O SimpleTech foi pensado para pessoas com 50 anos ou mais que
              desejam aprender tecnologia de forma simples, tranquila e segura.
            </p>

            <div className="audience-tags">
              <span>Celular</span>
              <span>Comunicação</span>
              <span>Internet</span>
              <span>Segurança</span>
            </div>
          </div>

          <div className="audience-highlight">
            <div className="audience-number">50+</div>

            <h3>Mais autonomia</h3>

            <p>
              Aprender tecnologia no próprio ritmo e realizar tarefas do dia a
              dia com mais confiança.
            </p>
          </div>
        </section>

        {/* EQUIPE */}
        <section id="equipe" className="section">
          <div className="section-header">
            <span className="section-tag">Quem somos</span>

            <h2>Nossa equipe</h2>

            <p>
              Um projeto desenvolvido com foco em tecnologia, acessibilidade e
              impacto social.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">DE</div>

              <h3>Desenvolvimento</h3>

              <p>João Eduardo e Thauany Liziane</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">OR</div>

              <h3>Organização</h3>

              <p>Thauany Liziane, Paulo Henrique e Arthur Alves</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">EX</div>

              <h3>Experiência</h3>

              <p>
                Desenvolvimento de uma experiência simples, acessível e fácil de
                utilizar.
              </p>
            </div>
          </div>
        </section>

        {/* GOVERNANÇA */}
        <section className="section section-light governance">
          <div className="section-header">
            <span className="section-tag">Organização</span>

            <h2>Governança do projeto</h2>

            <p>
              O desenvolvimento do SimpleTech será organizado utilizando
              práticas ágeis para manter as atividades acompanhadas e o projeto
              bem estruturado.
            </p>
          </div>

          <div className="governance-grid">
            <div className="governance-card">
              <div className="governance-icon">01</div>

              <h3>Planejamento</h3>

              <p>
                Organização das tarefas e definição das atividades que serão
                desenvolvidas.
              </p>
            </div>

            <div className="governance-card">
              <div className="governance-icon">02</div>

              <h3>Desenvolvimento</h3>

              <p>
                Utilização de práticas ágeis para organizar as etapas e
                acompanhar a evolução do projeto.
              </p>
            </div>

            <div className="governance-card">
              <div className="governance-icon">03</div>

              <h3>Acompanhamento</h3>

              <p>
                Monitoramento das atividades, entregas e resultados obtidos
                durante o projeto.
              </p>
            </div>
          </div>
        </section>

        {/* IA */}
        <section className="ai-section">
          <div className="ai-content">
            <div className="ai-main">
              <div className="ai-icon">IA</div>

              <div>
                <span className="ai-tag">TECNOLOGIA</span>

                <h2>Um assistente para ajudar você</h2>

                <p>
                  O SimpleTech contará com um assistente baseado em Inteligência
                  Artificial para responder dúvidas e orientar o usuário durante
                  sua jornada de aprendizado.
                </p>
              </div>
            </div>

            <div className="ai-features">
              <div className="ai-feature">
                <span>01</span>
                <p>Responde dúvidas</p>
              </div>

              <div className="ai-feature">
                <span>02</span>
                <p>Orienta o usuário</p>
              </div>

              <div className="ai-feature">
                <span>03</span>
                <p>Explica de forma simples</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <h3>SimpleTech</h3>

        <p>Tecnologia simples para uma vida mais conectada.</p>

        <span>Projeto acadêmico • 2026</span>
      </footer>
    </div>
  );
}

export default App;
