const fs = require('fs');

// Read the current index.html as base
const baseHtml = fs.readFileSync('index.html', 'utf8');

// Extract CSS (lines inside <style>...</style>)
const styleMatch = baseHtml.match(/<style>([\s\S]*?)<\/style>/);
const cssContent = styleMatch ? styleMatch[1] : '';

// Definition of TEAMS for Turma da Manhã
const TEAMS_MANHA = {
  E1: {
    id: "E1",
    name: "ConectaPro",
    description: "Plataforma acessível para conectar pessoas em situação de vulnerabilidade e grupos desfavorecidos (PCDs, 1º emprego, baixa renda) a oportunidades de trabalho centralizadas.",
    po: "Alexander Gabriel da Silva Nascimento",
    integrantes: "Alexander Gabriel (PO), Erika Tainá (UX), Lorranny Keylla (UX), Lucas Medeiros (Requisitos), Marina Pereira (Qualidade e Doc), Zaqueu Dos Santos (Qualidade e Doc)",
    trello: "https://trello.com/b/MjDflejf/conectapro-backlog"
  },
  E2: {
    id: "E2",
    name: "Veil",
    description: "Plataforma de recrutamento às cegas focada em mitigar vieses inconscientes e promover oportunidades equitativas no mercado de tecnologia, avaliando puramente competências técnicas e comportamentais.",
    po: "Jhulia Medeiros de Queiroz",
    integrantes: "Jhulia Medeiros (PO), Alessandro Viana (Requisitos e UX), Laryssa Albuquerque (Requisitos e UX), Bárbara Alves (Qualidade e Doc), Davi Argemiro (Qualidade e Doc), Rafaela Bezerra (Qualidade e Doc)",
    prototipo: "https://www.figma.com/design/4VmacdpoD7OVWSeBJb7Grf/Prototipo-Veil?node-id=0-1&t=qDH7iNMh0lc1fZKD-1",
    trello: "https://github.com/users/Jhuliamq/projects/2"
  },
  E3: {
    id: "E3",
    name: "ConnectLAB",
    description: "Conexão entre pessoas em início de carreira e empresas por meio de microexperiências profissionais orientadas (Labs práticos) com avaliação e feedback de competências.",
    po: "Luan Alves do Nascimento",
    integrantes: "Luan Alves (PO), Kayke Ryan (Requisitos e UX), Vilmar Gomes (Requisitos), Dinaldo do Nascimento (Qualidade e Doc), Luís Felipe Gonçalves (Qualidade e Doc)",
    prototipo: "https://www.figma.com/design/DacA0zF3Rop523hhsADxGu/ConnectLAB?node-id=0-1&t=ohF6ukAMWjYn8WTX-1",
    trello: "https://trello.com/invite/b/HbXtndXN/ATTI3e3d2b8d844b6dae48e31bacb02501213BAB9741/projeto-eng-software"
  },
  E4: {
    id: "E4",
    name: "Conecta Estágio Patos",
    description: "Conexão entre estudantes universitários de Patos-PB e oportunidades de estágio locais compatíveis com seu curso, suas habilidades e a disponibilidade de horário.",
    po: "Abdon Werner",
    integrantes: "Abdon Werner (PO), Gustavo Barbosa (Requisitos e UX), Filipe Medeiros (Requisitos e UX), Júlio César (Qualidade e Doc), Tarcísio Fontes (Qualidade e Doc)"
  },
  E5: {
    id: "E5",
    name: "ConectaCarreiras",
    description: "Tecnologia com situações simuladas do mercado de trabalho para autodescoberta de habilidades, identificação de pontos fortes e orientação vocacional de jovens.",
    po: "Marcos Gustavo de Andrade Ferreira",
    integrantes: "Marcos Gustavo (PO e Doc), Alef William (Requisitos e UX), Joel Feitosa (Requisitos e UX), Kayky Gomes (Qualidade e Doc)",
    prototipo: "https://v0.app/chat/q6iLHBNoZAt",
    trello: "https://trello.com/invite/b/6abc678f84667ab1c513d79b/ATTIa55538495667f07e358b32316ad8af6c12D2FB49/projeto-de-laboratorio-de-engenharia-de-software"
  }
};

// Examples for Turma da Manhã
const EXAMPLES_MANHA = {
  E1: [
    {
      code: "R1",
      teamKey: "E1",
      risco: "Dificuldade na centralização e filtragem correta das vagas dispersas",
      causaConsequencia: "As oportunidades de emprego estão distribuídas em múltiplos canais informais. Pode dificultar a localização de vagas compatíveis com a realidade do candidato.",
      probabilidade: "50%",
      impacto: "Alto",
      nivel: "Alto",
      resposta: "Definir campos padronizados para curso, habilidades e localização, e validar os filtros prioritários logo no primeiro ciclo.",
      responsavel: "Lucas Medeiros (Requisitos)",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E2: [
    {
      code: "R1",
      teamKey: "E2",
      risco: "Vazamento acidental de dados sensíveis na triagem às cegas",
      causaConsequencia: "Nome, e-mail, foto ou dados de identificação aparecendo na tela ou resposta da triagem às cegas, quebrando a proposta de anonimato do processo.",
      probabilidade: "50%",
      impacto: "Muito Alto",
      nivel: "Alto",
      resposta: "Separar claramente os dados privados da conta dos dados públicos da triagem e testar o retorno das rotas/telas antes de fechar cada tarefa.",
      responsavel: "Jhulia Medeiros (PO) e QA",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    },
    {
      code: "R2",
      teamKey: "E2",
      risco: "Inconsistência no cálculo de compatibilidade por falta de padronização nas habilidades",
      causaConsequencia: "Escrita não padronizada de habilidades (ex: Node, NodeJS, Node.js) prejudicando o cruzamento de compatibilidade entre candidato e vaga.",
      probabilidade: "70%",
      impacto: "Moderado",
      nivel: "Médio",
      resposta: "Implementar catálogo controlado de skills com autocomplete e normalização de sinônimos no backend antes do matchmaking.",
      responsavel: "Alessandro Viana (Requisitos e UX)",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    },
    {
      code: "R3",
      teamKey: "E2",
      risco: "Quebra de anonimato por inferência indireta em campos de texto livre",
      causaConsequencia: "Candidatos citando nomes de empresas, projetos ou faculdades nas descrições de experiência.",
      probabilidade: "70%",
      impacto: "Muito Alto",
      nivel: "Alto",
      resposta: "Estruturar o perfil prioritariamente por tags padronizadas de hard/soft skills e aplicar sanitização nos campos descritivos.",
      responsavel: "Bárbara Alves e Davi Argemiro (QA)",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    },
    {
      code: "R4",
      teamKey: "E2",
      risco: "Análise de linguagem excludente genérica ou com falsos positivos",
      causaConsequencia: "Errar sugestões de termos capacitistas, etaristas ou de gênero nas descrições de vagas cadastradas pelas empresas.",
      probabilidade: "50%",
      impacto: "Moderado",
      nivel: "Médio",
      resposta: "Começar com lista objetiva de termos mais comuns em português para apoiar a revisão humana do recrutador.",
      responsavel: "Laryssa Albuquerque e Rafaela Bezerra",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E3: [
    {
      code: "R1",
      teamKey: "E3",
      risco: "Empresas cadastrarem Labs com duração ou exigências desproporcionais",
      causaConsequencia: "Falta de limitação clara no escopo dos desafios práticos pode desvirtuar a proposta pedagógica e sobrecarregar os estudantes.",
      probabilidade: "50%",
      impacto: "Alto",
      nivel: "Alto",
      resposta: "Limitar o tempo de duração e exigir objetivos e entregas bem definidos no formulário de criação de Labs.",
      responsavel: "Kayke Ryan (Requisitos e UX)",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E4: [
    {
      code: "R1",
      teamKey: "E4",
      risco: "Incompatibilidade entre horários das vagas e turnos de aulas dos estudantes",
      causaConsequencia: "Ausência de informação clara sobre turnos de trabalho pode levar a candidaturas inviáveis e desistência precoce dos universitários.",
      probabilidade: "70%",
      impacto: "Alto",
      nivel: "Alto",
      resposta: "Tornar obrigatória a indicação de horário/turno no cadastro da vaga e no perfil do estudante para permitir filtragem direta.",
      responsavel: "Gustavo Barbosa e Filipe Medeiros (Requisitos e UX)",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E5: [
    {
      code: "R1",
      teamKey: "E5",
      risco: "Usuários confundirem catálogo de orientação vocacional com painel de vagas imediatas",
      causaConsequencia: "Nomenclatura ambígua na interface pode gerar frustração no estudante que procura contratação direta em vez de simulação prática.",
      probabilidade: "50%",
      impacto: "Moderado",
      nivel: "Médio",
      resposta: "Ajustar o nome da seção para 'Catálogo de Carreiras / Trilhas' e esclarecer no topo da tela o objetivo didático de autoavaliação.",
      responsavel: "Alef William e Joel Feitosa (Requisitos e UX)",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ]
};

// Definition of TEAMS for Turma da Noite
const TEAMS_NOITE = {
  E1: {
    id: "E1",
    name: "Sertão Ágil",
    description: "Conecta trabalhadores autônomos e prestadores de serviços da região a oportunidades locais de trabalho.",
    po: "PO da Equipe E1",
    integrantes: "Equipe E1 - Turma da Noite"
  },
  E2: {
    id: "E2",
    name: "DuckTrampos",
    description: "Aplicativo para contratação rápida e segura de serviços pontuais e freelancers na comunidade.",
    po: "PO da Equipe E2",
    integrantes: "Equipe E2 - Turma da Noite"
  },
  E3: {
    id: "E3",
    name: "VagaCerta",
    description: "Sistema para ajudar pequenas e médias empresas a divulgar vagas e selecionar candidatos.",
    po: "PO da Equipe E3",
    integrantes: "Equipe E3 - Turma da Noite"
  },
  E4: {
    id: "E4",
    name: "Primeira Oportunidade",
    description: "Portal para ajudar jovens e estudantes a encontrar vagas de estágio e primeiro emprego.",
    po: "PO da Equipe E4",
    integrantes: "Equipe E4 - Turma da Noite"
  },
  E5: {
    id: "E5",
    name: "StarTI",
    description: "Plataforma para conectar estudantes de tecnologia a projetos práticos e vagas de estágio.",
    po: "PO da Equipe E5",
    integrantes: "Equipe E5 - Turma da Noite"
  }
};

// Examples for Turma da Noite
const EXAMPLES_NOITE = {
  E1: [
    {
      code: "R1",
      teamKey: "E1",
      risco: "Dificuldade para integrar a API de mapas e localização",
      causaConsequencia: "A equipe ainda não usou a biblioteca de mapas. Isso pode impedir a busca de serviços por proximidade.",
      probabilidade: "50%",
      impacto: "Alto",
      nivel: "Alto",
      resposta: "Testar a API logo na primeira semana e tirar dúvidas com a documentação oficial.",
      responsavel: "Desenvolvedor Front-end",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E2: [
    {
      code: "R1",
      teamKey: "E2",
      risco: "Problemas na criação do login e níveis de acesso",
      causaConsequencia: "Pouca experiência com autenticação de usuários. Pode deixar o sistema vulnerável ou atrasar as telas principais.",
      probabilidade: "70%",
      impacto: "Alto",
      nivel: "Alto",
      resposta: "Escolher uma biblioteca pronta de login e implementar essa parte primeiro.",
      responsavel: "Desenvolvedor Back-end",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E3: [
    {
      code: "R1",
      teamKey: "E3",
      risco: "Dúvidas na modelagem do banco de dados das vagas",
      causaConsequencia: "Incerteza em como relacionar candidatos, empresas e vagas. Pode gerar retrabalho nas tabelas do banco.",
      probabilidade: "50%",
      impacto: "Moderado",
      nivel: "Médio",
      resposta: "Revisar o diagrama do banco com a professora antes de começar a criar as tabelas.",
      responsavel: "Responsável pelo Banco",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E4: [
    {
      code: "R1",
      teamKey: "E4",
      risco: "Telas e formulários desconfigurados no celular",
      causaConsequencia: "Formulários de cadastro longos podem ficar ruins de preencher em telas pequenas de celular.",
      probabilidade: "70%",
      impacto: "Baixo",
      nivel: "Médio",
      resposta: "Desenvolver pensando primeiro na tela do celular e usar componentes prontos de interface.",
      responsavel: "Desenvolvedor Front-end",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ],
  E5: [
    {
      code: "R1",
      teamKey: "E5",
      risco: "Baixa adesão inicial de empresas parceiras com vagas de tecnologia",
      causaConsequencia: "Estudantes não encontrarem projetos práticos suficientes cadastrados na plataforma.",
      probabilidade: "50%",
      impacto: "Alto",
      nivel: "Alto",
      resposta: "Cadastrar projetos pilotos da própria universidade e parcerias acadêmicas antes do lançamento.",
      responsavel: "Product Owner",
      isExample: true,
      createdAt: "2026-11-25T10:00:00Z"
    }
  ]
};

function generateHtml(turmaKey) {
  const isManha = (turmaKey === 'manha');
  const badgeLabel = isManha ? 'Turma da Manhã' : 'Turma da Noite';
  const repoName = isManha ? 'TaskManager-Manha' : 'TaskManager';
  const teamsObj = isManha ? TEAMS_MANHA : TEAMS_NOITE;
  const examplesObj = isManha ? EXAMPLES_MANHA : EXAMPLES_NOITE;
  const storagePrefix = isManha ? 'taskmanager_manha_' : 'taskmanager_noite_';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laboratório de Engenharia de Software I - ${badgeLabel}</title>
<style>
${cssContent}
</style>
</head>
<body>

<div class="site-wrapper">
  <!-- Cabecalho Institucional Academico -->
  <header class="institutional-header">
    <div class="inst-top-bar">
      <span class="inst-semester" id="inst-badge">${badgeLabel}</span>
    </div>
    <h1 class="inst-title">Laboratório de Engenharia de Software I</h1>
    <p class="inst-subtitle" id="inst-subtitle">
      Painel de Riscos dos Projetos de Software
    </p>
    <nav class="nav-bar noprint" id="main-nav-bar">
      <a href="index.html" class="nav-btn nav-btn-primary" id="btn-home-nav">Ver Todos os Projetos</a>
      <button id="btn-refresh" class="nav-btn" title="Recarregar dados" onclick="fetchIssues(true)">Atualizar Dados</button>
      <button id="btn-new-risk-header" class="nav-btn nav-btn-primary" style="display:none;">+ Adicionar Risco na Tabela</button>
    </nav>
  </header>

  <div id="status-bar" style="display:none;" class="status-message"></div>

  <!-- Conteudo Principal -->
  <main id="app-content"></main>

  <!-- Rodape Institucional -->
  <footer class="site-footer">
    <div>
      UNIVERSIDADE ESTADUAL DA PARAÍBA (UEPB)
    </div>
    <div>
      Laboratório de Engenharia de Software I · ${badgeLabel}
    </div>
  </footer>
</div>

<!-- Modal de Exclusao de Risco -->
<div id="delete-modal" class="modal-backdrop" style="display:none;" onclick="if(event.target===this) closeDeleteModal()" role="dialog" aria-modal="true" aria-labelledby="modal-delete-title">
  <div class="modal-box">
    <h3 class="modal-title" id="modal-delete-title">Remover Risco</h3>
    <div id="modal-delete-desc" class="modal-desc"></div>
    <div class="modal-actions">
      <button type="button" id="modal-btn-cancel" class="nav-btn" onclick="closeDeleteModal()">Cancelar</button>
      <button type="button" id="modal-btn-confirm" class="btn-danger-solid" onclick="confirmDelete()">Remover da tela</button>
    </div>
  </div>
</div>

<script>
// CONFIGURAÇÕES EXCLUSIVAS DA TURMA
const TURMA_KEY = "${turmaKey}";
const TURMA_LABEL = "${badgeLabel}";
const STORAGE_PREFIX = "${storagePrefix}";

// EQUIPES E PROJETOS ACADÊMICOS
const TEAMS = ${JSON.stringify(teamsObj, null, 2)};

// EXEMPLOS DIDÁTICOS DE RISCOS
const DEFAULT_EXAMPLES = ${JSON.stringify(examplesObj, null, 2)};

// REGRAS DA MATRIZ (5x5)
const PROB_ROWS = ["90%", "70%", "50%", "30%", "10%"];
const IMP_COLS = ["Muito Baixo", "Baixo", "Moderado", "Alto", "Muito Alto"];

const MATRIX_LEVELS = {
  "90%": { "Muito Baixo": "Médio", "Baixo": "Médio", "Moderado": "Alto", "Alto": "Alto", "Muito Alto": "Alto" },
  "70%": { "Muito Baixo": "Baixo", "Baixo": "Médio", "Moderado": "Médio", "Alto": "Alto", "Muito Alto": "Alto" },
  "50%": { "Muito Baixo": "Baixo", "Baixo": "Baixo", "Moderado": "Médio", "Alto": "Alto", "Muito Alto": "Alto" },
  "30%": { "Muito Baixo": "Baixo", "Baixo": "Baixo", "Moderado": "Médio", "Alto": "Médio", "Muito Alto": "Alto" },
  "10%": { "Muito Baixo": "Baixo", "Baixo": "Baixo", "Moderado": "Baixo", "Alto": "Baixo", "Muito Alto": "Médio" }
};

// DONO E REPOSITÓRIO NO GITHUB
const REPO_INFO = { owner: "Rebecabl", repo: "${repoName}" };

// PARSER DE ISSUES DO GITHUB
function parseIssueBody(bodyText) {
  const data = {};
  if (!bodyText) return data;

  const sections = bodyText.split(/###\\s+/);
  sections.forEach(function(sec) {
    const lines = sec.trim().split('\\n');
    const header = lines[0] ? lines[0].trim().toLowerCase() : '';
    const content = lines.slice(1).join('\\n').trim();

    if (header.includes("equipe")) {
      const m = content.match(/E[1-5]/i);
      if (m) data.equipe = m[0].toUpperCase();
    } else if (header.includes("risco") && !header.includes("resposta") && !header.includes("ação") && !header.includes("acao")) {
      data.risco = content;
    } else if (header.includes("causa")) {
      data.causaConsequencia = content;
    } else if (header.includes("probabilidade")) {
      const m = content.match(/10%|30%|50%|70%|90%/);
      if (m) data.probabilidade = m[0];
    } else if (header.includes("impacto")) {
      if (/muito\\s*baixo/i.test(content)) data.impacto = "Muito Baixo";
      else if (/muito\\s*alto/i.test(content)) data.impacto = "Muito Alto";
      else if (/baixo/i.test(content)) data.impacto = "Baixo";
      else if (/moderado/i.test(content)) data.impacto = "Moderado";
      else if (/alto/i.test(content)) data.impacto = "Alto";
    } else if (header.includes("resposta") || header.includes("ação") || header.includes("acao")) {
      data.resposta = content;
    } else if (header.includes("respons")) {
      data.responsavel = content;
    }
  });

  return data;
}

function formatRiskFromIssue(issue) {
  const parsed = parseIssueBody(issue.body);
  let teamKey = parsed.equipe;

  if (!teamKey && issue.title) {
    const m = issue.title.match(/\\[(E[1-5])\\]/i) || issue.title.match(/\\b(E[1-5])\\b/i);
    if (m) teamKey = m[1].toUpperCase();
  }

  if (!teamKey && issue.labels) {
    issue.labels.forEach(function(l) {
      const name = typeof l === 'string' ? l : l.name;
      const m = name.match(/E[1-5]/i);
      if (m) teamKey = m[0].toUpperCase();
    });
  }

  if (!teamKey) teamKey = "E1";

  const prob = parsed.probabilidade || "50%";
  const imp = parsed.impacto || "Moderado";
  let nivel = "Médio";
  if (MATRIX_LEVELS[prob] && MATRIX_LEVELS[prob][imp]) {
    nivel = MATRIX_LEVELS[prob][imp];
  }

  return {
    code: "R" + issue.number,
    issueNumber: issue.number,
    issueUrl: issue.html_url,
    teamKey: teamKey,
    risco: parsed.risco || issue.title || "",
    causaConsequencia: parsed.causaConsequencia || "",
    probabilidade: prob,
    impacto: imp,
    nivel: nivel,
    resposta: parsed.resposta || "",
    responsavel: parsed.responsavel || (issue.user ? issue.user.login : ""),
    createdAt: issue.created_at
  };
}

let allRisks = [];

function getStorageKey(teamKey) {
  return STORAGE_PREFIX + "risks_" + teamKey;
}

function getTeamRisks(teamKey) {
  let deletedIssues = [];
  try {
    deletedIssues = JSON.parse(localStorage.getItem(STORAGE_PREFIX + "deleted_issues") || "[]");
  } catch (e) {}

  const fromGithub = allRisks
    .filter(function(r) {
      if (r.teamKey !== teamKey) return false;
      if (r.issueNumber && deletedIssues.includes(Number(r.issueNumber))) return false;
      return true;
    })
    .sort(function(a, b) { return new Date(a.createdAt) - new Date(b.createdAt); });

  let localRisks = [];
  const primaryKey = getStorageKey(teamKey);
  const localRaw = localStorage.getItem(primaryKey);

  if (localRaw) {
    try {
      const parsed = JSON.parse(localRaw);
      if (Array.isArray(parsed)) localRisks = parsed;
    } catch (e) {}
  }

  if (fromGithub.length > 0) {
    const result = fromGithub.map(function(ghRisk) {
      const localEdit = localRisks.find(function(lr) { return lr.issueNumber === ghRisk.issueNumber; });
      if (localEdit) {
        return Object.assign({}, ghRisk, {
          risco: localEdit.risco || ghRisk.risco,
          causaConsequencia: localEdit.causaConsequencia || ghRisk.causaConsequencia,
          probabilidade: localEdit.probabilidade || ghRisk.probabilidade,
          impacto: localEdit.impacto || ghRisk.impacto,
          nivel: localEdit.nivel || ghRisk.nivel,
          resposta: localEdit.resposta || ghRisk.resposta,
          responsavel: localEdit.responsavel || ghRisk.responsavel
        });
      }
      return Object.assign({}, ghRisk);
    });

    const extraLocal = localRisks.filter(function(lr) {
      return !lr.issueNumber && !lr.isExample;
    });
    extraLocal.forEach(function(el) { result.push(el); });

    return result.map(function(r, idx) {
      return Object.assign({}, r, { code: "R" + (idx + 1) });
    });
  }

  if (localRisks.length > 0) {
    return localRisks.map(function(r, idx) {
      return Object.assign({}, r, { code: "R" + (idx + 1) });
    });
  }

  const examples = DEFAULT_EXAMPLES[teamKey];
  if (examples && examples.length > 0) {
    return examples.map(function(ex, idx) {
      return Object.assign({}, ex, { code: "R" + (idx + 1) });
    });
  }

  return [];
}

function saveTeamRisks(teamKey, risks) {
  try {
    localStorage.setItem(getStorageKey(teamKey), JSON.stringify(risks));
  } catch (e) {}
}

function resetTeamRisks(teamKey) {
  localStorage.removeItem(getStorageKey(teamKey));
  localStorage.removeItem(STORAGE_PREFIX + "deleted_issues");
  renderApp();
}

function getTotalRisksCount() {
  let count = 0;
  Object.keys(TEAMS).forEach(function(teamKey) {
    count += getTeamRisks(teamKey).length;
  });
  return count;
}

async function fetchIssues(isManualClick) {
  const statusBar = document.getElementById("status-bar");
  if (isManualClick && statusBar) {
    statusBar.style.display = "block";
    statusBar.innerHTML = "Atualizando dados...";
  }

  try {
    const apiUrl = "https://api.github.com/repos/" + REPO_INFO.owner + "/" + REPO_INFO.repo + "/issues?state=open&per_page=100&_t=" + Date.now();
    const response = await fetch(apiUrl, { cache: "no-store" });

    if (response.ok) {
      const issues = await response.json();
      const riskIssues = issues.filter(function(issue) {
        return !issue.pull_request;
      });
      allRisks = riskIssues.map(formatRiskFromIssue);
    }
    if (statusBar) statusBar.style.display = "none";
    if (isManualClick) {
      showSaveFeedback("Dados atualizados com sucesso!");
    }
  } catch (error) {
    if (statusBar) statusBar.style.display = "none";
    if (isManualClick) {
      showSaveFeedback("Dados locais prontos e atualizados!");
    }
  } finally {
    if (statusBar && !isManualClick) {
      statusBar.style.display = "none";
    }
    renderApp();
  }
}

// ATUALIZAÇÃO DO CABEÇALHO E NAVEGAÇÃO
function updateHeaderNavigation(selectedTeam) {
  const btnHome = document.getElementById("btn-home-nav");
  const btnNewRisk = document.getElementById("btn-new-risk-header");

  if (btnHome) {
    if (selectedTeam) {
      btnHome.classList.remove("nav-btn-primary");
    } else {
      btnHome.classList.add("nav-btn-primary");
    }
  }

  if (btnNewRisk) {
    if (selectedTeam && TEAMS[selectedTeam]) {
      btnNewRisk.style.display = "inline-flex";
      btnNewRisk.onclick = function(e) {
        e.preventDefault();
        addNewRow(selectedTeam);
      };
    } else {
      btnNewRisk.style.display = "none";
    }
  }
}

// RENDERIZADOR PRINCIPAL DO APLICATIVO
function renderApp() {
  const params = new URLSearchParams(window.location.search);
  const selectedTeam = params.get("equipe") ? params.get("equipe").toUpperCase() : null;

  updateHeaderNavigation(selectedTeam);

  const appContent = document.getElementById("app-content");

  if (selectedTeam && TEAMS[selectedTeam]) {
    renderTeamView(selectedTeam, appContent);
  } else {
    renderHomeView(appContent);
  }
}

// TELA: LISTAGEM DE PROJETOS DA TURMA
function renderHomeView(container) {
  const countTurma = getTotalRisksCount();

  let html = '';

  html += '<div class="panel-header-block">';
  html += '  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">';
  html += '    <div>';
  html += '      <h2 class="panel-title">Projetos da Turma</h2>';
  html += '      <p class="panel-desc">Escolha a equipe do seu grupo para ver a Matriz de Riscos e acompanhar as ações planejadas.</p>';
  html += '    </div>';
  html += '    <div class="noprint">';
  html += '      <span class="count-tag">Total da turma: ' + countTurma + (countTurma === 1 ? ' risco' : ' riscos') + '</span>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="projects-cards-grid">';
  Object.keys(TEAMS).forEach(function(teamKey) {
    const team = TEAMS[teamKey];
    const teamRisks = getTeamRisks(teamKey);
    const count = teamRisks.length;

    html += '<div class="project-card">';
    html += '  <div class="project-card-top">';
    html += '    <div class="project-card-header">';
    html += '      <span class="team-code-tag">' + team.id + '</span>';
    html += '      <h3 class="project-card-title">' + team.name + '</h3>';
    html += '    </div>';
    html += '    <p class="project-card-scope">' + team.description + '</p>';
    html += '    <div style="margin-top: 8px; font-size: 11.5px; color: var(--text-muted);">';
    html += '      <strong>PO:</strong> ' + team.po;
    html += '    </div>';
    html += '  </div>';
    html += '  <div>';
    html += '    <div class="project-card-meta">';
    html += '      <span class="project-card-risks-count">Riscos cadastrados: <strong>' + count + '</strong></span>';
    html += '      <span class="text-muted">Fase: Planejamento</span>';
    html += '    </div>';
    html += '    <div class="project-card-actions noprint">';
    html += '      <a href="?equipe=' + team.id + '" class="btn-open-matrix">Abrir Matriz da Equipe</a>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
  });
  html += '</div>';

  container.innerHTML = html;
}

// TELA: PAINEL DA EQUIPE (MATRIZ + TABELA)
function renderTeamView(teamKey, container) {
  const team = TEAMS[teamKey];
  const teamRisks = getTeamRisks(teamKey);
  const examples = DEFAULT_EXAMPLES[teamKey] || [];
  const example = examples[0] || {};

  let html = '';

  // Barra de informacoes da equipe
  html += '<div class="team-banner">';
  html += '  <div class="team-banner-left">';
  html += '    <div class="breadcrumb-nav noprint">';
  html += '      <a href="index.html">Início</a> / <span>Equipe ' + team.id + '</span>';
  html += '    </div>';
  html += '    <h2 class="team-banner-title">Projeto: ' + team.name + ' <span class="team-code-tag">' + team.id + '</span></h2>';
  html += '    <p class="team-banner-desc"><strong>Sobre o software:</strong> ' + team.description + '</p>';
  html += '    <div class="team-members-box">';
  html += '      <strong>Product Owner:</strong> ' + team.po + ' &nbsp;|&nbsp; <strong>Equipe:</strong> ' + team.integrantes;
  html += '    </div>';
  html += '  </div>';
  html += '  <div class="team-banner-right noprint">';
  html += '    <span class="count-tag">' + teamRisks.length + (teamRisks.length === 1 ? ' risco cadastrado' : ' riscos cadastrados') + '</span>';
  html += '    <button type="button" class="btn-action btn-action-primary" onclick="addNewRow(\\'' + team.id + '\\')">+ Adicionar Risco na Tabela</button>';
  html += '  </div>';
  html += '</div>';

  // Box de Exemplo Didatico para a Equipe (se houver)
  if (example.risco) {
    let exampleLevelClass = "cell-media";
    if (example.nivel === "Baixo") exampleLevelClass = "cell-baixa";
    if (example.nivel === "Alto") exampleLevelClass = "cell-alta";

    html += '<div class="example-ref-panel noprint">';
    html += '  <div class="example-ref-header">';
    html += '    <strong>Exemplo de risco para este projeto:</strong>';
    html += '  </div>';
    html += '  <table class="example-ref-table">';
    html += '    <tbody>';
    html += '      <tr>';
    html += '        <th style="width: 170px;">Risco:</th>';
    html += '        <td colspan="3">' + escapeHtml(example.risco) + '</td>';
    html += '      </tr>';
    html += '      <tr>';
    html += '        <th>Causa e consequência:</th>';
    html += '        <td colspan="3">' + escapeHtml(example.causaConsequencia) + '</td>';
    html += '      </tr>';
    html += '      <tr>';
    html += '        <th>Probabilidade:</th>';
    html += '        <td><strong>' + example.probabilidade + '</strong></td>';
    html += '        <th style="width: 130px;">Impacto:</th>';
    html += '        <td><strong>' + example.impacto + '</strong></td>';
    html += '      </tr>';
    html += '      <tr>';
    html += '        <th>Nível na matriz:</th>';
    html += '        <td><span class="matrix-chip-example ' + exampleLevelClass + '"><strong>' + example.nivel + '</strong></span></td>';
    html += '        <th>Responsável:</th>';
    html += '        <td>' + escapeHtml(example.responsavel) + '</td>';
    html += '      </tr>';
    html += '      <tr>';
    html += '        <th>Ação preventiva:</th>';
    html += '        <td colspan="3">' + escapeHtml(example.resposta) + '</td>';
    html += '      </tr>';
    html += '    </tbody>';
    html += '  </table>';
    html += '</div>';
  }

  // Matriz de Probabilidade x Impacto (5x5)
  html += '<div class="matrix-wrapper">';
  html += '  <div class="panel-header-block">';
  html += '    <h3 class="panel-title">Matriz de Probabilidade x Impacto</h3>';
  html += '    <p class="panel-desc">Visualização gráfica dos riscos da equipe ' + team.id + '. Os riscos se movem automaticamente conforme a probabilidade e o impacto definidos na tabela abaixo.</p>';
  html += '  </div>';
  html += '  <div class="table-responsive">';
  html += '    <table class="matrix-grid">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th rowspan="2" class="y-axis-label">Probabilidade</th>';
  html += '          <th colspan="5" style="border-bottom: 1px solid var(--border-light); font-size: 13px; font-weight: 700; color: #111827;">Impacto</th>';
  html += '        </tr>';
  html += '        <tr>';
  IMP_COLS.forEach(function(imp) {
    html += '      <th>' + imp + '</th>';
  });
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody>';

  PROB_ROWS.forEach(function(prob) {
    html += '    <tr>';
    html += '      <th class="matrix-prob-label">' + prob + '</th>';
    IMP_COLS.forEach(function(imp) {
      const level = MATRIX_LEVELS[prob][imp];
      let levelClass = "cell-media";
      if (level === "Baixo") levelClass = "cell-baixa";
      if (level === "Alto") levelClass = "cell-alta";

      const cellRisks = teamRisks.filter(function(r) {
        return r.probabilidade === prob && r.impacto === imp;
      });

      html += '    <td class="' + levelClass + '">';
      html += '      <div class="matrix-cell-content" id="cell-' + prob.replace('%', '') + '-' + imp.replace(/\\s+/g, '') + '">';
      cellRisks.forEach(function(r) {
        html += '<a href="#row-' + r.code + '" class="matrix-risk-tag" title="' + escapeHtml(r.code + ': ' + r.risco) + '"><strong>' + r.code + '</strong></a>';
      });
      html += '      </div>';
      html += '    </td>';
    });
    html += '    </tr>';
  });

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  // Tabela de Registro de Riscos
  html += '<div class="table-panel">';
  html += '  <div class="table-panel-header">';
  html += '    <h3 class="panel-title">Tabela de Riscos da Equipe</h3>';
  html += '    <div class="table-panel-actions noprint">';
  html += '      <button id="btn-save-team" class="btn-action btn-action-save" title="Salva os dados digitados na tabela">Salvar Alterações</button>';
  html += '      <button id="btn-add-row" class="btn-action btn-action-add">+ Adicionar Linha</button>';
  html += '      <button id="btn-reset-team" class="btn-action" title="Recarrega os dados salvos">Recarregar Dados</button>';
  html += '      <button onclick="window.print()" class="btn-action">Imprimir / Salvar PDF</button>';
  html += '    </div>';
  html += '  </div>';
  html += '  <div id="save-feedback" class="save-feedback-banner" style="display:none;"></div>';

  html += '  <div class="table-responsive">';
  html += '    <table class="academic-table" id="risks-table">';
  html += '      <thead>';
  html += '        <tr>';
  html += '          <th style="width: 50px; text-align: center;">ID</th>';
  html += '          <th style="min-width: 180px;">Risco</th>';
  html += '          <th style="min-width: 180px;">Causa e Consequência</th>';
  html += '          <th style="width: 120px;">Probabilidade</th>';
  html += '          <th style="width: 140px;">Impacto</th>';
  html += '          <th style="width: 85px; text-align: center;">Nível</th>';
  html += '          <th style="min-width: 170px;">Ação Planejada</th>';
  html += '          <th style="width: 130px;">Responsável</th>';
  html += '          <th style="width: 90px; text-align: center;" class="noprint">Ações</th>';
  html += '        </tr>';
  html += '      </thead>';
  html += '      <tbody id="risks-tbody">';

  if (teamRisks.length === 0) {
    html += '        <tr id="empty-row"><td colspan="9" style="text-align:center; padding: 24px; color: #6c757d;">';
    html += '          Nenhum risco adicionado ainda. Clique em <strong>+ Adicionar Linha</strong> para preencher os riscos na tabela e clique em <strong>Salvar Alterações</strong>.';
    html += '        </td></tr>';
  } else {
    teamRisks.forEach(function(r) {
      html += renderRiskRowHtml(r);
    });
  }

  html += '      </tbody>';
  html += '    </table>';
  html += '  </div>';
  html += '</div>';

  // Tabelas de Referência Didática
  html += '<section class="scales-section">';
  html += '  <div class="panel-header-block">';
  html += '    <h3 class="panel-title">Como Avaliar a Probabilidade e o Impacto</h3>';
  html += '    <p class="panel-desc">Use as tabelas abaixo para ajudar a escolher a probabilidade e o impacto de cada risco antes de programar.</p>';
  html += '  </div>';
  html += '  <div class="scales-tables-grid">';
  html += '    <div>';
  html += '      <h4 class="scale-table-title">Tabela 1 - Chance de acontecer (Probabilidade)</h4>';
  html += '      <table class="reference-table">';
  html += '        <thead>';
  html += '          <tr>';
  html += '            <th style="width: 70px;">Chance</th>';
  html += '            <th style="width: 100px;">Nível</th>';
  html += '            <th>Quando escolher</th>';
  html += '          </tr>';
  html += '        </thead>';
  html += '        <tbody>';
  html += '          <tr>';
  html += '            <td><strong>10%</strong></td>';
  html += '            <td>Muito baixa</td>';
  html += '            <td>A equipe já sabe exatamente como fazer e quase não há chance de dar errado.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>30%</strong></td>';
  html += '            <td>Baixa</td>';
  html += '            <td>Podem surgir pequenas dúvidas, mas a equipe resolve facilmente durante a aula.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>50%</strong></td>';
  html += '            <td>Média</td>';
  html += '            <td>A equipe ainda tem incertezas sobre como programar ou integrar essa funcionalidade.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>70%</strong></td>';
  html += '            <td>Alta</td>';
  html += '            <td>Tarefa difícil, tecnologia pouco conhecida ou dependência de serviços externos.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>90%</strong></td>';
  html += '            <td>Muito alta</td>';
  html += '            <td>É quase certeza de que vai dar problema se nada for planejado com antecedência.</td>';
  html += '          </tr>';
  html += '        </tbody>';
  html += '      </table>';
  html += '    </div>';
  html += '    <div>';
  html += '      <h4 class="scale-table-title">Tabela 2 - Gravidade para o projeto (Impacto)</h4>';
  html += '      <table class="reference-table">';
  html += '        <thead>';
  html += '          <tr>';
  html += '            <th style="width: 100px;">Gravidade</th>';
  html += '            <th>O que acontece se o risco ocorrer</th>';
  html += '          </tr>';
  html += '        </thead>';
  html += '        <tbody>';
  html += '          <tr>';
  html += '            <td><strong>Muito Baixo</strong></td>';
  html += '            <td>Ajuste simples e rápido, sem atrapalhar o andamento do projeto.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>Baixo</strong></td>';
  html += '            <td>Pequeno retrabalho que a equipe resolve em poucas horas de desenvolvimento.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>Moderado</strong></td>';
  html += '            <td>Atrasa a entrega da funcionalidade em alguns dias ou exige mudar parte da tela.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>Alto</strong></td>';
  html += '            <td>Pode impedir a conclusão da entrega ou quebrar partes importantes do sistema.</td>';
  html += '          </tr>';
  html += '          <tr>';
  html += '            <td><strong>Muito Alto</strong></td>';
  html += '            <td>Inviabiliza a entrega ou compromete o funcionamento de todo o software da equipe.</td>';
  html += '          </tr>';
  html += '        </tbody>';
  html += '      </table>';
  html += '    </div>';
  html += '  </div>';
  html += '</section>';

  container.innerHTML = html;
  attachTableEventListeners(teamKey);
}

function renderRiskRowHtml(r) {
  let levelClass = "badge-media";
  if (r.nivel === "Baixo") levelClass = "badge-baixa";
  if (r.nivel === "Alto") levelClass = "badge-alta";

  let probOptions = '<option value="">Escolher</option>';
  PROB_ROWS.forEach(function(p) {
    const sel = (r.probabilidade === p) ? ' selected' : '';
    probOptions += '<option value="' + p + '"' + sel + '>' + p + '</option>';
  });

  let impOptions = '<option value="">Escolher</option>';
  IMP_COLS.forEach(function(i) {
    const sel = (r.impacto === i) ? ' selected' : '';
    impOptions += '<option value="' + i + '"' + sel + '>' + i + '</option>';
  });

  let actionsCol = '';
  actionsCol += '<button type="button" class="btn-save-row" data-code="' + r.code + '" title="Salvar alterações">Salvar</button> ';
  actionsCol += '<button type="button" class="btn-delete-row" data-code="' + r.code + '" title="Excluir risco">Excluir</button>';

  let html = '';
  html += '<tr id="row-' + r.code + '" data-code="' + r.code + '">';
  html += '  <td style="text-align: center;"><strong>' + r.code + '</strong></td>';
  html += '  <td><textarea class="cell-input input-field" data-code="' + r.code + '" data-field="risco" rows="2" placeholder="Qual é o risco...">' + escapeHtml(r.risco) + '</textarea></td>';
  html += '  <td><textarea class="cell-input input-field" data-code="' + r.code + '" data-field="causaConsequencia" rows="2" placeholder="Por que pode acontecer e qual a consequência...">' + escapeHtml(r.causaConsequencia) + '</textarea></td>';
  html += '  <td><select class="select-criteria select-prob" data-code="' + r.code + '">' + probOptions + '</select></td>';
  html += '  <td><select class="select-criteria select-imp" data-code="' + r.code + '">' + impOptions + '</select></td>';
  html += '  <td style="text-align: center;"><span class="level-badge ' + levelClass + '" id="badge-' + r.code + '">' + (r.nivel || '-') + '</span></td>';
  html += '  <td><textarea class="cell-input input-field" data-code="' + r.code + '" data-field="resposta" rows="2" placeholder="O que fazer para evitar ou resolver...">' + escapeHtml(r.resposta) + '</textarea></td>';
  html += '  <td><input type="text" class="cell-input input-field" data-code="' + r.code + '" data-field="responsavel" value="' + escapeHtml(r.responsavel) + '" placeholder="Quem vai acompanhar..."></td>';
  html += '  <td class="noprint" style="text-align: center; white-space: nowrap;">' + actionsCol + '</td>';
  html += '</tr>';
  return html;
}

function addNewRow(teamKey) {
  manualSaveTeam(teamKey);
  const risks = getTeamRisks(teamKey);
  const nextNumber = risks.length + 1;
  const newCode = "R" + nextNumber;

  const newRisk = {
    code: newCode,
    teamKey: teamKey,
    risco: "",
    causaConsequencia: "",
    probabilidade: "50%",
    impacto: "Moderado",
    nivel: "Médio",
    resposta: "",
    responsavel: "",
    createdAt: new Date().toISOString()
  };

  risks.push(newRisk);
  saveTeamRisks(teamKey, risks);
  renderApp();

  showSaveFeedback("Nova linha " + newCode + " adicionada! Preencha os campos e clique no botão verde 'Salvar Alterações'.");

  setTimeout(function() {
    const newRow = document.getElementById('row-' + newCode);
    if (newRow) {
      newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const newRowInput = newRow.querySelector('[data-field="risco"]');
      if (newRowInput) {
        newRowInput.focus();
      }
    }
  }, 100);
}

function manualSaveTeam(teamKey) {
  const tbody = document.getElementById("risks-tbody");
  if (!tbody) return;

  const risks = getTeamRisks(teamKey);

  tbody.querySelectorAll("tr[data-code]").forEach(function(row) {
    const code = row.dataset.code;
    const item = risks.find(function(r) { return r.code === code; });
    if (!item) return;

    const riscoInput = row.querySelector('[data-field="risco"]');
    const causaInput = row.querySelector('[data-field="causaConsequencia"]');
    const probSelect = row.querySelector('.select-prob');
    const impSelect = row.querySelector('.select-imp');
    const respTextarea = row.querySelector('[data-field="resposta"]');
    const responsavelInput = row.querySelector('[data-field="responsavel"]');

    if (riscoInput) item.risco = riscoInput.value;
    if (causaInput) item.causaConsequencia = causaInput.value;
    if (probSelect) item.probabilidade = probSelect.value;
    if (impSelect) item.impacto = impSelect.value;
    if (respTextarea) item.resposta = respTextarea.value;
    if (responsavelInput) item.responsavel = responsavelInput.value;

    if (item.probabilidade && item.impacto && MATRIX_LEVELS[item.probabilidade] && MATRIX_LEVELS[item.probabilidade][item.impacto]) {
      item.nivel = MATRIX_LEVELS[item.probabilidade][item.impacto];
    }
  });

  saveTeamRisks(teamKey, risks);
  recalculateMatrix(teamKey);
  showSaveFeedback("Riscos salvos com sucesso!");
}

function showSaveFeedback(message) {
  const banner = document.getElementById("save-feedback");
  if (!banner) return;
  banner.style.display = "flex";
  banner.innerHTML = '<span>' + message + '</span><button type="button" style="background:none;border:none;cursor:pointer;font-size:16px;font-weight:bold;color:#0f5132;" onclick="this.parentElement.style.display=\\'none\\'">×</button>';

  clearTimeout(window.__saveTimeout);
  window.__saveTimeout = setTimeout(function() {
    const b = document.getElementById("save-feedback");
    if (b) b.style.display = "none";
  }, 4000);
}

function attachTableEventListeners(teamKey) {
  const tbody = document.getElementById("risks-tbody");
  if (!tbody) return;

  tbody.querySelectorAll(".input-field").forEach(function(input) {
    input.addEventListener("input", function() {
      const code = this.dataset.code;
      const field = this.dataset.field;
      const val = this.value;
      const risks = getTeamRisks(teamKey);
      const item = risks.find(function(r) { return r.code === code; });
      if (item) {
        item[field] = val;
        saveTeamRisks(teamKey, risks);
      }
    });
  });

  tbody.querySelectorAll(".select-prob, .select-imp").forEach(function(select) {
    select.addEventListener("change", function() {
      const code = this.dataset.code;
      onRiskCriteriaChange(code, teamKey);
    });
  });

  tbody.querySelectorAll(".btn-delete-row").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const code = this.dataset.code;
      const issueNum = this.dataset.issue;
      const issueUrl = this.dataset.url;
      openDeleteModal(teamKey, code, issueNum, issueUrl);
    });
  });

  tbody.querySelectorAll(".btn-save-row").forEach(function(btn) {
    btn.addEventListener("click", function() {
      manualSaveTeam(teamKey);
      showSaveFeedback("Riscos salvos com sucesso!");
    });
  });

  const btnSave = document.getElementById("btn-save-team");
  if (btnSave) {
    btnSave.addEventListener("click", function() {
      manualSaveTeam(teamKey);
    });
  }

  const btnAdd = document.getElementById("btn-add-row");
  if (btnAdd) {
    btnAdd.addEventListener("click", function() {
      addNewRow(teamKey);
    });
  }

  const btnReset = document.getElementById("btn-reset-team");
  if (btnReset) {
    btnReset.addEventListener("click", function() {
      if (confirm("Deseja recarregar os dados padrão desta equipe? Alterações locais não salvas no repositório serão redefinidas.")) {
        resetTeamRisks(teamKey);
      }
    });
  }
}

function onRiskCriteriaChange(code, teamKey) {
  const row = document.getElementById("row-" + code);
  if (!row) return;

  const prob = row.querySelector(".select-prob").value;
  const imp = row.querySelector(".select-imp").value;
  const badge = document.getElementById("badge-" + code);

  let nivel = "-";
  let levelClass = "badge-media";

  if (prob && imp && MATRIX_LEVELS[prob] && MATRIX_LEVELS[prob][imp]) {
    nivel = MATRIX_LEVELS[prob][imp];
    if (nivel === "Baixo") levelClass = "badge-baixa";
    if (nivel === "Alto") levelClass = "badge-alta";
  }

  if (badge) {
    badge.textContent = nivel;
    badge.className = "level-badge " + levelClass;
  }

  const risks = getTeamRisks(teamKey);
  const item = risks.find(function(r) { return r.code === code; });
  if (item) {
    item.probabilidade = prob;
    item.impacto = imp;
    item.nivel = nivel;
    saveTeamRisks(teamKey, risks);
  }

  recalculateMatrix(teamKey);
}

function recalculateMatrix(teamKey) {
  const risks = getTeamRisks(teamKey);

  PROB_ROWS.forEach(function(prob) {
    IMP_COLS.forEach(function(imp) {
      const cellId = "cell-" + prob.replace('%', '') + '-' + imp.replace(/\\s+/g, '');
      const cell = document.getElementById(cellId);
      if (cell) {
        cell.innerHTML = "";
      }
    });
  });

  risks.forEach(function(r) {
    if (r.probabilidade && r.impacto) {
      const cellId = "cell-" + r.probabilidade.replace('%', '') + '-' + r.impacto.replace(/\\s+/g, '');
      const cell = document.getElementById(cellId);
      if (cell) {
        cell.innerHTML += '<a href="#row-' + r.code + '" class="matrix-risk-tag" title="' + escapeHtml(r.code + ': ' + r.risco) + '"><strong>' + r.code + '</strong></a>';
      }
    }
  });
}

let pendingDeleteCode = null;
let pendingDeleteTeamKey = null;
let pendingDeleteIssueNum = null;

function openDeleteModal(teamKey, code, issueNum, issueUrl) {
  pendingDeleteTeamKey = teamKey;
  pendingDeleteCode = code;
  pendingDeleteIssueNum = issueNum;

  const modal = document.getElementById("delete-modal");
  const title = document.getElementById("modal-delete-title");
  const desc = document.getElementById("modal-delete-desc");

  title.textContent = "Remover Risco " + code;
  desc.innerHTML = "Deseja remover o risco <strong>" + code + "</strong>? A linha será excluída e a matriz atualizada.";

  modal.style.display = "flex";
}

function closeDeleteModal() {
  const modal = document.getElementById("delete-modal");
  if (modal) modal.style.display = "none";
  pendingDeleteCode = null;
  pendingDeleteTeamKey = null;
  pendingDeleteIssueNum = null;
}

function confirmDelete() {
  if (!pendingDeleteCode || !pendingDeleteTeamKey) return;

  const teamKey = pendingDeleteTeamKey;
  const code = pendingDeleteCode;
  const issueNum = pendingDeleteIssueNum;

  if (issueNum) {
    let deletedIssues = [];
    try {
      deletedIssues = JSON.parse(localStorage.getItem(STORAGE_PREFIX + "deleted_issues") || "[]");
    } catch (e) {}
    if (!deletedIssues.includes(Number(issueNum))) {
      deletedIssues.push(Number(issueNum));
      localStorage.setItem(STORAGE_PREFIX + "deleted_issues", JSON.stringify(deletedIssues));
    }
  }

  let risks = getTeamRisks(teamKey);
  risks = risks.filter(function(r) { return r.code !== code; });
  saveTeamRisks(teamKey, risks);

  closeDeleteModal();
  renderApp();
  showSaveFeedback("Risco " + code + " removido com sucesso!");
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

window.addEventListener("DOMContentLoaded", function() {
  fetchIssues(false);
});
</script>

</body>
</html>`;
}

// Generate files
const htmlManha = generateHtml('manha');
const htmlNoite = generateHtml('noite');

fs.writeFileSync('index_manha.html', htmlManha, 'utf8');
fs.writeFileSync('index_noite.html', htmlNoite, 'utf8');

console.log('Successfully generated index_manha.html (' + htmlManha.length + ' bytes) and index_noite.html (' + htmlNoite.length + ' bytes)!');
