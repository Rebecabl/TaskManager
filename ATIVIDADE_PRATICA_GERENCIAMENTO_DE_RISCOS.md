# UNIVERSIDADE ESTADUAL DA PARAÍBA - UEPB
## CENTRO DE CIÊNCIAS E TECNOLOGIA - CCT
### DEPARTAMENTO DE COMPUTAÇÃO
**Disciplina:** Laboratório de Engenharia de Software I  
**Professora:** Rebeca Barbosa Lourenço  
**Período Letivo:** 2026.2  

---

# ATIVIDADE PRÁTICA: GERENCIAMENTO E ANÁLISE DE RISCOS DE SOFTWARE

**Identificação da Equipe:**
- **Equipe / Código:** [ Ex.: E1, E2, E3, E4 ou E5 ]
- **Nome do Projeto:** [ Nome do projeto de software ]
- **Integrantes da Equipe:**
  1. [ Nome do integrante 1 - Papel ]
  2. [ Nome do integrante 2 - Papel ]
  3. [ Nome do integrante 3 - Papel ]
  4. [ Nome do integrante 4 - Papel ]
  5. [ Nome do integrante 5 - Papel ]
- **Data de Realização:** [ DD/MM/AAAA ]

---

## 1. Contextualização e Objetivo da Atividade

No desenvolvimento de software, riscos são eventos ou condições incertas que, se ocorrerem, causam impactos no escopo, no prazo, no custo ou na qualidade do produto final. 

Nesta prática, cada equipe realizará a **identificação e avaliação preventiva dos riscos** do seu projeto acadêmico de software (de baixa a média complexidade, com duração aproximada de um mês), **antes do início da implementação** (Unidade 2).

O objetivo é exercitar o planejamento proativo e preventivo:
- Reconhecer potenciais obstáculos antes que eles se transformem em problemas reais;
- Classificar a severidade dos riscos por meio de uma **Matriz de Probabilidade x Impacto (5 x 5)**;
- Planejar ações de tratamento proporcionais à realidade de um projeto acadêmico de curta duração.

> **Observação didática:** Não serão exigidas métricas de execução, resultados de testes, cálculos estatísticos avançados ou comprovação prática das estratégias nesta etapa inicial, mas sim a capacidade de raciocínio crítico, estimativa qualitativa e planejamento preventivo da equipe.

---

## 2. Mensuração da Probabilidade

A probabilidade indica a chance de determinado evento de risco ocorrer ao longo do mês de desenvolvimento. 

Os percentuais adotados representam **estimativas qualitativas** fundamentadas nas condições reais da equipe: familiaridade com a linguagem e frameworks escolhidos, complexidade das funcionalidades planejadas, grau de dependência de APIs ou serviços externos e tempo disponível dos integrantes.

| Probabilidade | Classificação | Critério de Avaliação |
| :---: | :---: | :--- |
| **10%** | Muito baixa | É muito improvável que o problema aconteça. Existem condições adequadas para evitá-lo. |
| **30%** | Baixa | Existe possibilidade de ocorrência, mas poucos fatores favorecem o problema. |
| **50%** | Moderada | Existem incertezas ou dificuldades que tornam possível a ocorrência do problema. |
| **70%** | Alta | Existem dificuldades técnicas, limitações ou dependências que tornam provável a ocorrência do problema. |
| **90%** | Muito alta | Existem fortes indícios de que o problema poderá acontecer. |

---

## 3. Mensuração do Impacto

O impacto mede a gravidade dos efeitos causados no projeto caso o risco se concretize. 

Para esta atividade, os critérios foram calibrados para a escala e realidade de um **projeto acadêmico com duração de um mês**:

| Impacto | Critério de Avaliação |
| :---: | :--- |
| **Muito baixo** | Exige pequenos ajustes, que podem ser resolvidos em algumas horas, sem comprometer funcionalidades importantes. |
| **Baixo** | Exige correções simples, podendo consumir até um dia de trabalho. |
| **Moderado** | Exige retrabalho de dois a três dias ou compromete parcialmente uma funcionalidade importante. |
| **Alto** | Exige mudanças significativas, podendo consumir de quatro a cinco dias ou comprometer uma funcionalidade essencial. |
| **Muito alto** | Pode inviabilizar o funcionamento do software ou comprometer a entrega final do projeto. |

### Orientações para a Avaliação de Impacto:
1. **Prazos como referência:** Os prazos em dias e horas servem como guia prático. A equipe também deve considerar a criticidade da funcionalidade afetada para o usuário, a integridade dos dados e o nível de esforço cognitivo para contornar a falha.
2. **Critério da pior consequência:** Caso um mesmo risco acarrete consequências distintas (por exemplo: atraso de 1 dia, mas com risco de corromper dados do sistema), a equipe deve considerar o **maior impacto identificado**, desde que devidamente justificado.

---

## 4. Matriz de Probabilidade x Impacto (5 x 5)

A severidade de cada risco é calculada pelo cruzamento entre a linha da **Probabilidade** e a coluna do **Impacto**, resultando em três níveis: **Baixo** (verde), **Médio** (amarelo) e **Alto** (vermelho).

### 4.1. Imagem de Referência da Matriz

![Matriz de Riscos 5x5](matriz_riscos_5x5.png)

---

### 4.2. Versão Editável da Matriz (Preenchimento pela Equipe)

Insira os códigos dos riscos (**R1, R2, R3, R4, R5...**) nas células correspondentes à combinação de Probabilidade e Impacto avaliada.

| Probabilidade / Impacto | Muito baixo | Baixo | Moderado | Alto | Muito alto |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **90%** | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> |
| **70%** | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> |
| **50%** | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> |
| **30%** | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:8px; border-radius:4px;">**Alto**<br><br>*(inserir códigos)*</span> |
| **10%** | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:8px; border-radius:4px;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:8px; border-radius:4px;">**Médio**<br><br>*(inserir códigos)*</span> |

**Convenção de Cores da Matriz:**
- **Verde (#A9D18E):** Risco Baixo. Ações de monitoramento rotineiro são suficientes.
- **Amarelo (#FFD966):** Risco Médio. Exige medidas de prevenção e plano de mitigação claro.
- **Vermelho (#FF7C80):** Risco Alto. Prioridade máxima; ameaça direta à entrega e estabilidade do projeto.

---

## 5. Funcionamento da Matriz e Regras de Decisão

Para aplicar a matriz corretamente, é fundamental distinguir os três conceitos envolvidos:

1. **Probabilidade:** É a possibilidade ou propensão de o evento de risco acontecer durante o projeto.
2. **Impacto:** É a intensidade da consequência ou do prejuízo caso o risco venha a se concretizar.
3. **Nível de Risco:** É a classificação final (Baixo, Médio ou Alto) decorrente da interseção entre a probabilidade e o impacto na matriz.

### Como a matriz deve ser utilizada pelos alunos:
- **Não escolha o nível de risco diretamente:** A equipe não deve decidir previamente se um risco é "Alto" ou "Médio". Primeiro, estime a probabilidade fundamentada (10% a 90%), depois avalie o impacto técnico (Muito baixo a Muito alto) e consulte a célula da matriz para obter o nível resultante.
- **Assimetria das classificações:** Nem todas as linhas e colunas possuem os três níveis de risco. A matriz reflete prioridades gerenciais predefinidas. Exemplos práticos:
  - Probabilidade de **90%** e impacto **Muito baixo** resultam em risco **Médio** (pois embora aconteça quase com certeza, seu efeito é pequeno).
  - Probabilidade de **90%** e impacto **Moderado** resultam em risco **Alto** (alta chance somada a dias de retrabalho).
  - Probabilidade de **10%** e impacto **Muito alto** resultam em risco **Médio** (evento com baixíssima chance de ocorrer, equilibrando a criticidade).
  - Probabilidade de **50%** e impacto **Baixo** resultam em risco **Baixo**.
- **Contexto da matriz:** Não existe uma distribuição universal e engessada de cores válida para todas as indústrias. A matriz acima define os parâmetros específicos e calibrados para o escopo desta disciplina e dos projetos das equipes.

---

## 6. Registro dos Riscos Identificados

Cada equipe deverá identificar, descrever e classificar **no mínimo cinco riscos (R1 a R5)** relacionados ao seu projeto de software. Caso a equipe identifique riscos adicionais, basta acrescentar novas linhas na tabela.

| ID | Risco | Causa e Consequência | Probabilidade | Impacto | Nível de Risco | Estratégia de Tratamento | Responsável |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R1** | | **Causa:** <br>**Consequência:** | | | | | |
| **R2** | | **Causa:** <br>**Consequência:** | | | | | |
| **R3** | | **Causa:** <br>**Consequência:** | | | | | |
| **R4** | | **Causa:** <br>**Consequência:** | | | | | |
| **R5** | | **Causa:** <br>**Consequência:** | | | | | |

---

## 7. Justificativa da Avaliação Técnica

Para cada risco registrado na seção anterior, a equipe deve detalhar e justificar tecnicamente as notas atribuídas de probabilidade e impacto, baseando-se no cenário real do projeto e da equipe antes da implementação.

| ID | Justificativa da Probabilidade (Por que esse percentual?) | Justificativa do Impacto (Por que este nível de gravidade?) |
| :---: | :--- | :--- |
| **R1** | | |
| **R2** | | |
| **R3** | | |
| **R4** | | |
| **R5** | | |

---

## 8. Estratégias de Tratamento dos Riscos

Para cada risco levantado, a equipe deve selecionar e planejar uma das quatro estratégias clássicas de tratamento da Engenharia de Software:

1. **Evitar:** Eliminar a causa do risco alterando o planejamento, simplificando o escopo ou substituindo uma tecnologia desconhecida/instável por outra dominada pela equipe.
2. **Mitigar:** Adotar medidas preventivas para diminuir a probabilidade de ocorrência ou reduzir o impacto caso o evento aconteça (ex.: reuniões curtas de alinhamento, padronização de contratos de API, realização de spikes técnicos).
3. **Transferir:** Repassar a responsabilidade ou o impacto do risco para um componente ou serviço externo de terceiros já testado e consolidado (ex.: utilizar autenticação pronta como Supabase/Firebase Auth em vez de codificar autenticação própria do zero).
4. **Aceitar:** Reconhecer a existência do risco e assumir suas consequências caso ocorra, elaborando um plano de contingência caso seja viável conviver com ele sem paralisar o projeto.

> **Importante:** A atividade exige apenas o **planejamento prévio** das ações preventivas, não sendo necessária sua execução imediata nesta entrega.

---

## 9. Critérios de Entrega e Checklist da Equipe

A atividade será entregue em grupo contendo os seguintes itens completamente preenchidos:

- [ ] Cabeçalho preenchido com nome do projeto e identificação de todos os integrantes da equipe;
- [ ] Identificação de no mínimo 5 riscos reais do projeto;
- [ ] Tabela de **Registro dos Riscos** completamente preenchida;
- [ ] Tabela de **Justificativas Técnicas** da probabilidade e do impacto para cada risco;
- [ ] **Matriz de Riscos 5 x 5** com os códigos (R1, R2, R3...) alocados nas células coloridas correspondentes;
- [ ] Definição da estratégia de tratamento (Evitar, Mitigar, Transferir ou Aceitar) e descrição da ação planejada;
- [ ] Indicação dos integrantes responsáveis pelo monitoramento de cada risco.
