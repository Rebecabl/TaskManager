# Laboratório de Engenharia de Software I (UEPB) - Matriz de Riscos dos Projetos

Painel prático para análise de riscos (Probabilidade x Impacto) dos projetos da disciplina **Laboratório de Engenharia de Software I (UEPB)**.

---

## Links dos Projetos

Clique no link da sua equipe abaixo para visualizar a Matriz 5x5, a tabela de riscos e cadastrar novos riscos:

- **Página Inicial (Todos os Projetos):** [https://rebecabl.github.io/TaskManager/](https://rebecabl.github.io/TaskManager/)
- **Formulário para Cadastrar Risco:** [Abrir Formulário no GitHub](https://github.com/Rebecabl/TaskManager/issues/new?template=registrar-risco.yml)

### Acesso Direto por Equipe

1. **Sertão Ágil (E1):** [https://rebecabl.github.io/TaskManager/?equipe=E1](https://rebecabl.github.io/TaskManager/?equipe=E1)
2. **DuckTrampos (E2):** [https://rebecabl.github.io/TaskManager/?equipe=E2](https://rebecabl.github.io/TaskManager/?equipe=E2)
3. **VagaCerta (E3):** [https://rebecabl.github.io/TaskManager/?equipe=E3](https://rebecabl.github.io/TaskManager/?equipe=E3)
4. **Primeira Oportunidade (E4):** [https://rebecabl.github.io/TaskManager/?equipe=E4](https://rebecabl.github.io/TaskManager/?equipe=E4)
5. **StarTI (E5):** [https://rebecabl.github.io/TaskManager/?equipe=E5](https://rebecabl.github.io/TaskManager/?equipe=E5)

---

## Como Funciona

- O cadastro de riscos é feito diretamente pelas Issues do GitHub da disciplina.
- Não é necessário instalar nenhum banco de dados ou servidor.
- O site no GitHub Pages lê as issues abertas e atualiza a matriz 5x5 e a tabela de cada equipe automaticamente.

---

## Como a Equipe Deve Fazer

1. Acesse o link da sua equipe na lista acima.
2. Clique no botão **"+ Cadastrar Risco no GitHub"** para abrir o formulário.
3. Preencha os campos solicitados:
   - **Equipe:** Escolha a sua equipe (E1 a E5).
   - **Risco:** O que pode dar errado no desenvolvimento.
   - **Causa e consequência:** Por que pode acontecer e o impacto no projeto.
   - **Probabilidade:** Chance estimada (10% a 90%).
   - **Impacto:** Gravidade caso ocorra (Muito Baixo a Muito Alto).
   - **Justificativa da escolha:** Breve explicação do motivo da probabilidade e do impacto.
   - **Ação preventiva:** O que a equipe vai fazer para evitar ou resolver.
   - **Responsável:** Nome ou papel de quem vai acompanhar esse risco.
4. Clique em **"Submit new issue"** no GitHub.
5. Volte para a página do seu projeto e clique em **"Atualizar Dados"** para visualizar o risco na matriz e na tabela.

---

## Estrutura de Arquivos

```text
.
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── config.yml            # Desabilita issues em branco
│       └── registrar-risco.yml   # Formulario padronizado de registro de riscos
├── index.html                    # Site estatico (HTML, CSS e JS puros) com matriz 5x5
└── README.md                     # Instrucoes e links de acesso
```
