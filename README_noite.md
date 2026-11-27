# Laboratório de Engenharia de Software I (UEPB) - Matriz de Riscos (Turma da Noite)

Painel prático para análise e acompanhamento da Matriz de Riscos (Probabilidade x Impacto) dos projetos da disciplina **Laboratório de Engenharia de Software I (UEPB) - Turma da Noite**.

---

## Acesso aos Projetos da Turma da Noite

Acesse o painel geral ou clique diretamente no link da sua equipe para visualizar a Matriz 5x5 interativa, a tabela de riscos e cadastrar novos itens:

- **Painel Geral (Todos os Projetos da Noite):** [https://rebecabl.github.io/TaskManager/](https://rebecabl.github.io/TaskManager/)
- **Cadastrar Novo Risco no Repositório:** [Abrir Formulário no GitHub](https://github.com/Rebecabl/TaskManager/issues/new?template=registrar-risco.yml)

### Equipes e Projetos Oficiais (Noite)

1. **Sertão Ágil (E1):** [https://rebecabl.github.io/TaskManager/?equipe=E1](https://rebecabl.github.io/TaskManager/?equipe=E1)
   - **Proposta:** Conecta trabalhadores autônomos e prestadores de serviços da região a oportunidades locais de trabalho.

2. **DuckTrampos (E2):** [https://rebecabl.github.io/TaskManager/?equipe=E2](https://rebecabl.github.io/TaskManager/?equipe=E2)
   - **Proposta:** Aplicativo para contratação rápida e segura de serviços pontuais e freelancers na comunidade.

3. **VagaCerta (E3):** [https://rebecabl.github.io/TaskManager/?equipe=E3](https://rebecabl.github.io/TaskManager/?equipe=E3)
   - **Proposta:** Sistema para ajudar pequenas e médias empresas a divulgar vagas e selecionar candidatos.

4. **Primeira Oportunidade (E4):** [https://rebecabl.github.io/TaskManager/?equipe=E4](https://rebecabl.github.io/TaskManager/?equipe=E4)
   - **Proposta:** Portal para ajudar jovens e estudantes a encontrar vagas de estágio e primeiro emprego.

5. **StarTI (E5):** [https://rebecabl.github.io/TaskManager/?equipe=E5](https://rebecabl.github.io/TaskManager/?equipe=E5)
   - **Proposta:** Plataforma para conectar estudantes de tecnologia a projetos práticos e vagas de estágio.

---

## Como Funciona

- O cadastro de riscos pode ser feito diretamente na própria tabela pelo botão **"+ Adicionar Linha"** e salvo com **"Salvar Alterações"**, ou por meio de Issues no GitHub da turma.
- O painel calcula automaticamente a posição dos riscos na Matriz 5x5 e define o nível de criticidade (Baixo, Médio, Alto).
- Não é necessário instalar nenhum banco de dados ou servidor.

---

## Como a Equipe Deve Avaliar os Riscos

1. Acesse o link da sua equipe na lista acima.
2. Identifique o risco e preencha os campos na tabela:
   - **Risco:** O que pode dar errado no desenvolvimento.
   - **Causa e consequência:** Por que pode acontecer e o impacto no projeto.
   - **Probabilidade:** Chance estimada (10% a 90%).
   - **Impacto:** Gravidade caso ocorra (Muito Baixo a Muito Alto).
   - **Ação preventiva:** O que a equipe vai fazer para evitar ou resolver.
   - **Responsável:** Quem vai acompanhar esse risco.
3. Clique em **"Salvar Alterações"** na tabela.

---

## Estrutura de Arquivos

```text
.
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── config.yml            # Desabilita issues em branco
│       └── registrar-risco.yml   # Formulario padronizado de registro de riscos
├── index.html                    # Painel estatico oficial da Turma da Noite
└── README.md                     # Instrucoes e links de acesso da Turma da Noite
```
