import { useEffect, useState } from "react";

// Substitua estes links pelos canais oficiais quando forem fornecidos.
const contactLinks = {
  whatsapp: "https://wa.me/558197234036?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  email: "mailto:?subject=Novo%20projeto%20de%20arquitetura",
  instagram: "https://www.instagram.com/gibsonjatoba.arq/",
};

const services = [
  ["01", "Projetos arquitetônicos", "Residências e espaços concebidos do zero, da estratégia ao detalhamento executivo."],
  ["02", "Arquitetura de interiores", "Ambientes onde materialidade, luz e mobiliário constroem uma experiência integrada."],
  ["03", "Reformas e requalificação", "Novas possibilidades para espaços existentes, preservando sua história e ampliando seu potencial."],
  ["04", "Consultoria arquitetônica", "Direcionamento especializado para decisões seguras, coerentes e sensíveis."],
];

const projects = [
  {
    number: "01",
    title: "Casa Horizonte",
    type: "Residencial",
    location: "São Paulo, SP",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1760067538022-8ef8739b1b18?auto=format&fit=crop&w=1800&q=88",
    description:
      "Uma residência que se abre para a paisagem e transforma luz, matéria e silêncio em experiência cotidiana.",
  },
  {
    number: "02",
    title: "Casa Entre Jardins",
    type: "Residencial",
    location: "Goiânia, GO",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1742587852133-6d607d20cd95?auto=format&fit=crop&w=1400&q=88",
    description:
      "Volumes essenciais entrelaçados à vegetação criam percursos de pausa, intimidade e contemplação.",
  },
  {
    number: "03",
    title: "Espaço Essencial",
    type: "Interiores",
    location: "Brasília, DF",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1760067537064-b3a93d6e4bc2?auto=format&fit=crop&w=1400&q=88",
    description:
      "Texturas naturais e proporções precisas definem um interior sereno, tátil e profundamente humano.",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo--light" : ""}`} href="#inicio" aria-label="Gibson Jatobá — início">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 7h34v34H7zM16 16h16v16H20v-8h12M24 7v34" />
      </svg>
      <span>
        <strong>GIBSON JATOBÁ</strong>
        <small>ARQUITETURA</small>
      </span>
    </a>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setOffset(window.scrollY * 0.16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, activeProject]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`header ${scrolled || menuOpen ? "header--solid" : ""}`}>
        <Logo light={!scrolled && !menuOpen} />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {["Início", "Sobre", "Projetos", "Serviços", "Contato"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contato">
            Vamos conversar <span>↗</span>
          </a>
        </nav>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <span className="eyebrow">Navegação</span>
        {["Início", "Sobre", "Projetos", "Serviços", "Contato"].map((item, index) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
            <small>0{index + 1}</small> {item}
          </a>
        ))}
        <p>Arquitetura com intenção.<br />Espaços com identidade.</p>
      </div>

      <section id="inicio" className="hero">
        <div
          className="hero-image"
          style={{
            transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1760067538022-8ef8739b1b18?auto=format&fit=crop&w=2400&q=90')",
          }}
        />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker">ARQUITETURA <i /> DESIGN <i /> IDENTIDADE</p>
          <h1>
            Espaços que traduzem <em>essência.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Arquitetura autoral que equilibra matéria, natureza e emoção para criar lugares que
              atravessam o tempo.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projetos">
                Explorar projetos <span>↘</span>
              </a>
              <a className="button button--ghost" href="#sobre">
                Conheça o arquiteto
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-note">
          <span>ROLE PARA DESCOBRIR</span>
          <i />
        </div>
        <div className="hero-index">GJ — 01</div>
      </section>

      <section id="manifesto" className="manifesto">
        <div className="section-label">
          <span>01</span>
          <p>Manifesto</p>
        </div>
        <div className="manifesto-title">
          <span className="title-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <h2>
            Arquitetar é mais do que construir. É dar forma ao <em>que importa.</em>
          </h2>
        </div>
        <div className="manifesto-body">
          <div className="detail-image">
            <img
              src="https://images.unsplash.com/photo-1521194263619-39ecc5b55c61?auto=format&fit=crop&w=1000&q=86"
              alt="Detalhe arquitetônico com luz e sombra sobre concreto"
            />
            <span>Matéria / Luz / Tempo</span>
          </div>
          <div className="manifesto-copy">
            <p className="lead">
              Cada projeto nasce da escuta. Do lugar, das pessoas e da vida que deseja acontecer
              ali.
            </p>
            <p>
              Para Gibson Jatobá, arquitetura é o encontro entre precisão e sensibilidade. Uma
              prática que respeita o contexto, revela a beleza dos materiais e transforma
              necessidades em espaços singulares — desenhados para serem sentidos antes mesmo de
              serem compreendidos.
            </p>
            <a className="text-link" href="#servicos">
              Conheça nossa abordagem <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="projetos" className="projects">
        <div className="projects-heading">
          <div className="section-label section-label--light">
            <span>02</span>
            <p>Projetos selecionados</p>
          </div>
          <h2>
            Arquitetura em sua <em>melhor forma.</em>
          </h2>
          <p>Uma seleção de projetos guiados pelo essencial, onde cada decisão tem propósito.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              className={`project-card project-card--${index + 1}`}
              key={project.title}
              onClick={() => setActiveProject(project)}
              aria-label={`Ver detalhes de ${project.title}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="view-project">VER PROJETO ↗</span>
              </div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type} · {project.location}</p>
                </div>
                <small>{project.year}</small>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="sobre" className="architect">
        <div className="architect-portrait">
          <img
            src="/gibson-jatoba.png"
            alt="Retrato de Gibson Jatobá"
          />
          <span>Gibson Jatobá / Arquiteto</span>
        </div>
        <div className="architect-copy">
          <div className="section-label">
            <span>03</span>
            <p>O arquiteto</p>
          </div>
          <h2>
            Uma visão própria. Uma arquitetura com <em>propósito.</em>
          </h2>
          <div className="architect-text">
            <p>
              A arquitetura começa nas pessoas: em seus ritmos, memórias e na maneira como desejam
              viver. É dessa escuta atenta que surgem espaços capazes de acolher, inspirar e criar
              novas experiências.
            </p>
            <p>
              Com olhar contemporâneo e abordagem sensível, Gibson Jatobá conduz cada projeto como
              uma narrativa única — equilibrando contexto, proporção e materialidade para chegar ao
              que é verdadeiramente essencial.
            </p>
          </div>
          <a className="dark-link" href="#diferenciais">
            Conheça mais <span>↗</span>
          </a>
        </div>
        <span className="architect-monogram" aria-hidden="true">GJ</span>
      </section>

      <section id="servicos" className="services">
        <div className="services-intro">
          <div className="section-label">
            <span>04</span>
            <p>Serviços</p>
          </div>
          <h2>Do conceito ao <em>espaço.</em></h2>
          <p>Uma atuação completa e próxima, em todas as escalas do projeto.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <article className="service-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="principles">
        <div className="principles-geometry" aria-hidden="true"><i /><i /><i /></div>
        <div className="section-label section-label--light">
          <span>05</span>
          <p>Nossa essência</p>
        </div>
        <h2>Cada detalhe tem uma <em>razão de existir.</em></h2>
        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Intenção</h3>
            <p>Cada escolha responde a uma necessidade real e contribui para a experiência do todo.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Equilíbrio</h3>
            <p>Forma, função, luz e matéria em uma composição serena, precisa e duradoura.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Identidade</h3>
            <p>Projetos singulares, conectados à história de quem vive e à essência de cada lugar.</p>
          </article>
        </div>
      </section>

      <section id="contato" className="contact-cta">
        <div className="contact-background" />
        <div className="contact-overlay" />
        <div className="contact-content">
          <span>VAMOS CRIAR JUNTOS</span>
          <h2>Seu próximo projeto começa com uma <em>conversa.</em></h2>
          <p>Vamos transformar suas ideias em espaços que tenham significado, presença e permanência.</p>
          <div>
            <a className="button button--primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
              Falar com Gibson <span>↗</span>
            </a>
            <a className="button button--ghost" href={contactLinks.email}>
              Enviar um e-mail <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <Logo light />
          <p>Arquitetura com intenção.<br />Espaços com identidade.</p>
          <div className="footer-social">
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer">@gibsonjatoba.arq ↗</a>
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            <a href={contactLinks.email}>E-mail ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Gibson Jatobá Arquitetura</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      {activeProject && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Fechar">
            <span />
            <span />
          </button>
          <div className="modal-image">
            <img src={activeProject.image} alt={activeProject.title} />
          </div>
          <div className="modal-content">
            <p>{activeProject.number} / {activeProject.type}</p>
            <h2>{activeProject.title}</h2>
            <p className="modal-description">{activeProject.description}</p>
            <dl>
              <div><dt>Local</dt><dd>{activeProject.location}</dd></div>
              <div><dt>Ano</dt><dd>{activeProject.year}</dd></div>
            </dl>
          </div>
        </div>
      )}
    </main>
  );
}
