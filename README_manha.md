# Laboratório de Engenharia de Software I (UEPB) - Matriz de Riscos (Turma da Manhã)

Painel prático para análise e acompanhamento da Matriz de Riscos (Probabilidade x Impacto) dos projetos da disciplina **Laboratório de Engenharia de Software I (UEPB) - Turma da Manhã**.

---

## Acesso aos Projetos da Turma da Manhã

Acesse o painel geral ou clique diretamente no link da sua equipe para visualizar a Matriz 5x5 interativa, a tabela de riscos e cadastrar novos itens:

- **Painel Geral (Todos os Projetos da Manhã):** [https://rebecabl.github.io/TaskManager-Manha/](https://rebecabl.github.io/TaskManager-Manha/)
- **Cadastrar Novo Risco no Repositório:** [Abrir Formulário no GitHub](https://github.com/Rebecabl/TaskManager-Manha/issues/new?template=registrar-risco.yml)

### Equipes e Projetos Oficiais (Manhã)

1. **ConectaPro (E1):** [https://rebecabl.github.io/TaskManager-Manha/?equipe=E1](https://rebecabl.github.io/TaskManager-Manha/?equipe=E1)
   - **Product Owner:** Alexander Gabriel da Silva Nascimento
   - **Equipe:** Alexander Gabriel (PO), Erika Tainá (UX), Lorranny Keylla (UX), Lucas Medeiros (Requisitos), Marina Pereira (Qualidade e Doc), Zaqueu Dos Santos (Qualidade e Doc)
   - **Proposta:** Plataforma acessível para conectar pessoas em situação de vulnerabilidade e grupos desfavorecidos (PCDs, 1º emprego, baixa renda) a oportunidades de trabalho centralizadas.

2. **Veil (E2):** [https://rebecabl.github.io/TaskManager-Manha/?equipe=E2](https://rebecabl.github.io/TaskManager-Manha/?equipe=E2)
   - **Product Owner:** Jhulia Medeiros de Queiroz
   - **Equipe:** Jhulia Medeiros (PO), Alessandro Viana (Requisitos e UX), Laryssa Albuquerque (Requisitos e UX), Bárbara Alves (Qualidade e Doc), Davi Argemiro (Qualidade e Doc), Rafaela Bezerra (Qualidade e Doc)
   - **Proposta:** Plataforma de recrutamento às cegas focada em mitigar vieses inconscientes e promover oportunidades equitativas no mercado de tecnologia, avaliando puramente competências técnicas e comportamentais.

3. **ConnectLAB (E3):** [https://rebecabl.github.io/TaskManager-Manha/?equipe=E3](https://rebecabl.github.io/TaskManager-Manha/?equipe=E3)
   - **Product Owner:** Luan Alves do Nascimento
   - **Equipe:** Luan Alves (PO), Kayke Ryan (Requisitos e UX), Vilmar Gomes (Requisitos), Dinaldo do Nascimento (Qualidade e Doc), Luís Felipe Gonçalves (Qualidade e Doc)
   - **Proposta:** Conexão entre pessoas em início de carreira e empresas por meio de microexperiências profissionais orientadas (Labs práticos) com avaliação e feedback de competências.

4. **Conecta Estágio Patos (E4):** [https://rebecabl.github.io/TaskManager-Manha/?equipe=E4](https://rebecabl.github.io/TaskManager-Manha/?equipe=E4)
   - **Product Owner:** Abdon Werner
   - **Equipe:** Abdon Werner (PO), Gustavo Barbosa (Requisitos e UX), Filipe Medeiros (Requisitos e UX), Júlio César (Qualidade e Doc), Tarcísio Fontes (Qualidade e Doc)
   - **Proposta:** Conexão entre estudantes universitários de Patos-PB e oportunidades de estágio locais compatíveis com seu curso, suas habilidades e a disponibilidade de horário.

5. **ConectaCarreiras (E5):** [https://rebecabl.github.io/TaskManager-Manha/?equipe=E5](https://rebecabl.github.io/TaskManager-Manha/?equipe=E5)
   - **Product Owner:** Marcos Gustavo de Andrade Ferreira
   - **Equipe:** Marcos Gustavo (PO e Doc), Alef William (Requisitos e UX), Joel Feitosa (Requisitos e UX), Kayky Gomes (Qualidade e Doc)
   - **Proposta:** Tecnologia com situações simuladas do mercado de trabalho para autodescoberta de habilidades, identificação de pontos fortes e orientação vocacional de jovens.

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
├── index.html                    # Painel estatico oficial da Turma da Manha
└── README.md                     # Instrucoes e links de acesso da Turma da Manha
```
