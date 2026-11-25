# Laboratorio de Engenharia de Software I (UEPB) - Matriz de Riscos dos Projetos

Ambiente da disciplina **Laboratorio de Engenharia de Software I (Turma da Noite - UEPB)** para realizacao da pratica de analise e gestao de riscos de software antes do inicio da implementacao (Unidade 2).

Todos os projetos sao desenvolvidos sob o tema central: **"Tecnologia para conectar pessoas a oportunidades de trabalho"**.

---

## Como Funciona a Solucao

A solucao utiliza exclusivamente recursos nativos do GitHub, sem a necessidade de servidores externos, bancos de dados ou servicos terceiros:

1. **Entrada de Dados:** Cada equipe entra no repositorio e cadastra os riscos identificados por meio do **GitHub Issue Forms** (`.github/ISSUE_TEMPLATE/registrar-risco.yml`).
2. **Armazenamento:** Os dados ficam registrados no historico de issues abertas com a label `risco`.
3. **Visualizacao:** O site estatico publicado no **GitHub Pages** consome a API publica do GitHub, interpreta o corpo de cada issue e monta automaticamente:
   - A pagina inicial com a lista das equipes e a quantidade de riscos registrados;
   - A visualizacao detalhada por equipe com a **Matriz Colorida 5x5 de Probabilidade x Impacto** e os codigos de risco (R1, R2...);
   - A tabela com o **Registro Completo de Riscos**;
   - As tabelas com as escalas de medicao de probabilidade e impacto.

---

## Links de Acesso Rapido

- **Site Publicado (GitHub Pages):** [https://rebecabl.github.io/TaskManager/](https://rebecabl.github.io/TaskManager/)
- **Formulario para Registro de Riscos:** [Registrar Novo Risco no GitHub](https://github.com/Rebecabl/TaskManager/issues/new?template=registrar-risco.yml)

### Links Diretos por Equipe

- **Equipe E1 - Sertao Agil:** [Acessar Matriz da Equipe E1](https://rebecabl.github.io/TaskManager/?equipe=E1)
- **Equipe E2 - DuckTrampos:** [Acessar Matriz da Equipe E2](https://rebecabl.github.io/TaskManager/?equipe=E2)
- **Equipe E3 - VagaCerta:** [Acessar Matriz da Equipe E3](https://rebecabl.github.io/TaskManager/?equipe=E3)
- **Equipe E4 - Primeira Oportunidade:** [Acessar Matriz da Equipe E4](https://rebecabl.github.io/TaskManager/?equipe=E4)
- **Equipe E5 - StarTI:** [Acessar Matriz da Equipe E5](https://rebecabl.github.io/TaskManager/?equipe=E5)

---

## Equipes e Projetos da Turma da Noite

- **Equipe E1 - Sertao Agil:** Marketplace de servicos domiciliares no sertao. Plataforma para conectar profissionais autonomos (pedreiros, eletricistas, diaristas, encanadores) a clientes da regiao.
- **Equipe E2 - DuckTrampos:** Divulgacao e acesso a vagas de emprego em Patos-PB para primeiro emprego ou recolocacao profissional, com modelo padronizado de vagas e contato direto com anunciantes.
- **Equipe E3 - VagaCerta:** Avaliacao previa de vagas de pequenas e medias empresas (PMEs) de Patos-PB antes da publicacao, verificando coerencia de requisitos e alinhamento com a realidade local.
- **Equipe E4 - Primeira Oportunidade:** Plataforma que conecta candidatos sem experiencia a vagas de primeiro emprego por meio de cursos preparatorios (bootcamps) e avaliacao de conhecimentos.
- **Equipe E5 - StarTI:** Plataforma voltada para estudantes e iniciantes na area de Tecnologia da Informacao, facilitando a busca de estagios e oportunidades de entrada no interior paraibano.

---

## Passo a Passo para os Alunos

1. Acesse a pagina inicial do site ou clique diretamente no link da sua equipe acima.
2. Na pagina da sua equipe, clique no botao **"+ Registrar novo risco"** (ele abrira o formulario de issue do GitHub ja pré-selecionado para sua equipe).
3. Preencha todos os campos do formulario:
   - **Equipe:** Escolha a sua equipe (E1, E2, E3, E4 ou E5).
   - **Risco:** Descreva o risco identificado de forma clara.
   - **Causa e consequencia:** Explique a causa raiz e o impacto no projeto caso aconteca.
   - **Probabilidade:** Selecione entre 10%, 30%, 50%, 70% ou 90% conforme a escala indicada no topo do formulario.
   - **Impacto:** Selecione entre Muito Baixo, Baixo, Moderado, Alto ou Muito Alto.
   - **Justificativa da classificacao:** Justifique a escolha com base nos criterios (prazo, funcionalidade, retrabalho, banco de dados, seguranca, integracao e recursos).
   - **Resposta ao risco:** Defina a estrategia de resposta (mitigar, evitar, transferir ou aceitar) e as acoes práticas.
   - **Responsavel:** Indique o nome do integrante ou integrantes responsaveis pelo monitoramento.
4. Clique em **"Submit new issue"** no final da pagina.
5. Volte para a pagina da sua equipe no site e clique em **"Atualizar dados"**. Seu risco aparecera na matriz colorida (como R1, R2...) e na tabela de registro de riscos.

---

## Instrucoes para a Professora

### 1. Garantir que o repositorio e publico
1. Acesse o repositorio no GitHub (`https://github.com/Rebecabl/TaskManager`).
2. Clique em **Settings**.
3. Na secao **General**, role a pagina ate o final (secao **Danger Zone**).
4. Em **Change repository visibility**, garanta que esteja configurado como **Public** (se estiver privado, clique em **Change visibility** > **Make public**).

### 2. Ativar o GitHub Pages
1. No repositorio, clique em **Settings**.
2. No menu lateral esquerdo, clique em **Pages** (sob a secao *Code and automation*).
3. Na secao **Build and deployment**:
   - Em **Source**, selecione **Deploy from a branch**.
   - Em **Branch**, selecione a branch `main` e a pasta `/(root)`.
   - Clique em **Save**.
4. Aguarde de 1 a 2 minutos ate a conclusao da publicacao em: `https://rebecabl.github.io/TaskManager/`.

### 3. Criar a label "risco" no repositorio
1. No repositorio, clique na aba **Issues**.
2. Clique no botao **Labels** (ao lado da barra de busca de issues).
3. Clique em **New label**.
4. No campo **Label name**, digite `risco` (tudo minusculo).
5. Escolha uma cor qualquer (por exemplo: `#0f766e` ou `#e11d48`).
6. Clique em **Create label**.

### 4. Gerenciamento de Riscos
- O site carrega apenas as issues que estao **abertas**.
- Se um risco for mitigado ou encerrado, basta fechar a issue correspondente no GitHub para que ela saia da matriz.
- Se uma equipe precisar editar um risco, basta editar a issue no GitHub; as alteracoes refletirao automaticamente no site ao clicar em "Atualizar dados".

---

## Estrutura de Arquivos

```text
.
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── config.yml            # Desabilita issues em branco
│       └── registrar-risco.yml   # Formulario padronizado de registro de riscos
├── index.html                    # Site estatico (HTML, CSS e JS puros) com matriz 5x5
└── README.md                     # Este documento de instrucoes
```
