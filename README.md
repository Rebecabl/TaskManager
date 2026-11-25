# Laboratorio de Engenharia de Software I (UEPB) - Matriz de Riscos dos Projetos

Portal para realizacao da atividade pratica de analise e gestao de riscos (Probabilidade x Impacto) da disciplina **Laboratorio de Engenharia de Software I (Turma da Noite - UEPB)**.

---

## Links dos Projetos e Matrizes de Riscos

Acesse o link direto do seu projeto abaixo para visualizar a matriz de riscos 5x5, a tabela de registro e cadastrar novos riscos:

- **Site Principal (Todos os Projetos):** [https://rebecabl.github.io/TaskManager/](https://rebecabl.github.io/TaskManager/)
- **Formulario Geral de Registro:** [Abrir Formulario no GitHub](https://github.com/Rebecabl/TaskManager/issues/new?template=registrar-risco.yml)

### Links Diretos por Projeto

1. **Sertao Agil (E1):** [https://rebecabl.github.io/TaskManager/?equipe=E1](https://rebecabl.github.io/TaskManager/?equipe=E1)
2. **DuckTrampos (E2):** [https://rebecabl.github.io/TaskManager/?equipe=E2](https://rebecabl.github.io/TaskManager/?equipe=E2)
3. **VagaCerta (E3):** [https://rebecabl.github.io/TaskManager/?equipe=E3](https://rebecabl.github.io/TaskManager/?equipe=E3)
4. **Primeira Oportunidade (E4):** [https://rebecabl.github.io/TaskManager/?equipe=E4](https://rebecabl.github.io/TaskManager/?equipe=E4)
5. **StarTI (E5):** [https://rebecabl.github.io/TaskManager/?equipe=E5](https://rebecabl.github.io/TaskManager/?equipe=E5)

---

## Como Funciona

- O preenchimento e feito pelos formularios de Issues do proprio GitHub.
- Nao ha uso de banco de dados, servidores ou servicos externos.
- O site publicado no GitHub Pages le as issues abertas pela API publica do GitHub e atualiza a matriz 5x5 e a tabela de cada projeto automaticamente.

---

## Passo a Passo para os Alunos

1. Acesse o link do seu projeto na lista acima.
2. Clique no botao **"+ Registrar novo risco"** para abrir o formulario da sua equipe no GitHub.
3. Preencha todos os campos:
   - **Equipe:** Selecione sua equipe (E1, E2, E3, E4 ou E5).
   - **Risco:** Descreva o risco identificado.
   - **Causa e consequencia:** Explique as causas e os impactos.
   - **Probabilidade:** 10%, 30%, 50%, 70% ou 90%.
   - **Impacto:** Muito Baixo, Baixo, Moderado, Alto ou Muito Alto.
   - **Justificativa da classificacao:** Justifique com base nos criterios da escala (prazo, funcionalidade, retrabalho, banco de dados, seguranca, integracao e recursos).
   - **Resposta ao risco:** Estrategia e acoes planejadas.
   - **Responsavel:** Nome do integrante encarregado.
4. Clique em **"Submit new issue"**.
5. Retorne para a pagina do seu projeto e clique em **"Atualizar dados"** para ver o risco na matriz e na tabela.

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
