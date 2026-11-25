# UNIVERSIDADE ESTADUAL DA PARAÍBA - UEPB
## CENTRO DE CIÊNCIAS E TECNOLOGIA - CCT
### DEPARTAMENTO DE COMPUTAÇÃO
**Disciplina:** Laboratório de Engenharia de Software I  
**Professora:** Rebeca Barbosa Lourenço  
**Período Letivo:** 2026.2  

---

# ATIVIDADE PRÁTICA - ANÁLISE E GERENCIAMENTO DE RISCOS DE SOFTWARE

**Identificação da Equipe e do Projeto:**
- **Equipe:** [ Ex.: E1, E2, E3, E4 ou E5 ]
- **Nome do Projeto:** [ Nome do projeto de software desenvolvido pela equipe ]
- **Tema:** Tecnologia para conectar pessoas a oportunidades de trabalho
- **Integrantes da Equipe:**
  1. [ Nome do integrante 1 - Papel ]
  2. [ Nome do integrante 2 - Papel ]
  3. [ Nome do integrante 3 - Papel ]
  4. [ Nome do integrante 4 - Papel ]
  5. [ Nome do integrante 5 - Papel ]
- **Data de Realização:** [ DD/MM/AAAA ]

---

## 1. Contextualização

Considere que os alunos estão desenvolvendo um projeto acadêmico de software de baixa ou média complexidade, com prazo aproximado de um mês para desenvolvimento.

Atualmente, as equipes possuem apenas o protótipo, os requisitos e os demais artefatos de planejamento produzidos nas etapas anteriores. Nenhuma funcionalidade foi implementada até o momento.

A atividade deverá ser realizada antes do início da implementação do Front-end, Back-end, integração e testes.

O objetivo é permitir que os estudantes antecipem possíveis problemas durante o desenvolvimento, avaliem suas consequências e estabeleçam estratégias preventivas.

> **Atenção:** Não solicite análise de código, resultados de testes, métricas de desempenho, histórico de bugs ou qualquer informação que dependa de um software já implementado. O foco exclusivo desta etapa é a identificação e a avaliação preventiva dos riscos.

---

## 2. Objetivos da atividade

- Identificar possíveis riscos antes da implementação do software.
- Compreender os conceitos de probabilidade e impacto.
- Estimar a possibilidade de ocorrência dos riscos.
- Avaliar as consequências previstas para o projeto.
- Classificar os riscos utilizando a matriz de probabilidade e impacto.
- Planejar estratégias preventivas.
- Auxiliar na tomada de decisões durante o planejamento do desenvolvimento.

---

## 3. Conceitos fundamentais

- **Risco:** evento incerto que, caso aconteça, poderá prejudicar o desenvolvimento ou a entrega do software.
- **Causa:** condição ou circunstância que poderá favorecer a ocorrência do risco.
- **Probabilidade:** possibilidade estimada de o risco acontecer durante o desenvolvimento.
- **Impacto:** consequência prevista para o projeto caso o risco aconteça.
- **Nível de risco:** classificação obtida pelo cruzamento da probabilidade com o impacto.
- **Tratamento do risco:** planejamento de ações destinadas a evitar, reduzir, transferir ou aceitar determinado risco.

### Diferença entre risco e problema:
- **Risco:** algo que poderá acontecer (evento futuro e incerto).
- **Problema:** algo que já aconteceu ou está acontecendo no momento.

Como o software ainda não foi implementado, esta atividade prioriza exclusivamente a identificação de **riscos futuros**.

---

## 4. Identificação dos riscos

Cada equipe deverá analisar seu protótipo e planejamento, identificando o que poderá dar errado durante a futura implementação.

A identificação deverá considerar as seguintes áreas:

### 4.1 Front-end
Analisar possíveis dificuldades relacionadas a:
- Implementação das telas do protótipo;
- Escolha e utilização de frameworks;
- Responsividade;
- Componentes de interface;
- Formulários e validações;
- Navegação entre telas;
- Usabilidade;
- Compatibilidade com diferentes dispositivos.

### 4.2 Back-end
Analisar possíveis dificuldades relacionadas a:
- Implementação das regras de negócio;
- Desenvolvimento de APIs;
- Autenticação e autorização;
- Modelagem e conexão com o banco de dados;
- Armazenamento e recuperação de informações;
- Segurança;
- Conhecimento das linguagens e frameworks escolhidos.

### 4.3 Integração
Analisar possíveis dificuldades relacionadas a:
- Comunicação entre Front-end e Back-end;
- Integração com APIs;
- Integração com o banco de dados;
- Dependência de serviços externos;
- Compatibilidade entre tecnologias;
- Envio e recebimento de informações.

### 4.4 Testes e qualidade de software
Analisar possíveis dificuldades relacionadas a:
- Conhecimento sobre técnicas de testes;
- Elaboração de casos de teste;
- Validação dos requisitos;
- Verificação das regras de negócio;
- Identificação de possíveis falhas;
- Disponibilidade de tempo para realizar testes;
- Validação das funcionalidades essenciais antes da entrega.

### 4.5 Gerenciamento do projeto
Analisar possíveis dificuldades relacionadas a:
- Prazo de desenvolvimento;
- Disponibilidade dos integrantes;
- Distribuição das responsabilidades;
- Conhecimento técnico da equipe;
- Dependência entre tarefas;
- Comunicação entre integrantes;
- Mudanças nos requisitos;
- Complexidade do escopo.

> Esses tópicos servem como orientação para a identificação dos riscos, e não como uma lista obrigatória de problemas. Cada equipe deverá identificar riscos que realmente façam sentido para o seu próprio projeto.

---

## 5. Mensuração da probabilidade

Como o software ainda não foi implementado, a probabilidade deverá ser estimada qualitativamente, considerando as informações disponíveis no momento do planejamento.

A equipe deverá responder à seguinte pergunta central:

> **"Considerando as condições atuais do projeto, qual a possibilidade de esse risco acontecer durante a futura implementação?"**

Utilize a seguinte tabela de referência:

| Probabilidade | Classificação | Critério de mensuração |
| :---: | :---: | :--- |
| **10%** | Muito baixa | A equipe possui conhecimento e recursos adequados, e não identifica fatores relevantes que favoreçam a ocorrência do risco. |
| **30%** | Baixa | Existem pequenas dificuldades ou incertezas previstas, mas a equipe possui condições adequadas para lidar com elas. |
| **50%** | Moderada | Existem incertezas relevantes sobre a implementação, o conhecimento técnico, as dependências ou os recursos disponíveis. |
| **70%** | Alta | Existem limitações significativas, como pouca experiência técnica, funcionalidades complexas, dependências importantes ou restrições de prazo. |
| **90%** | Muito alta | Existem fortes indícios de que o risco poderá acontecer, considerando as limitações conhecidas e a ausência de alternativas ou medidas preventivas adequadas. |

### Perguntas que auxiliam na mensuração da probabilidade:
- A equipe possui conhecimento sobre a tecnologia escolhida?
- Algum integrante já implementou uma funcionalidade semelhante?
- A equipe sabe como realizar a implementação?
- A funcionalidade apresenta dificuldades técnicas previstas?
- Existem dependências de tecnologias desconhecidas?
- Existem dependências de outros integrantes ou serviços externos?
- A equipe possui os recursos necessários?
- O prazo disponível é suficiente?
- Existem alternativas caso a solução planejada não funcione?
- Existem fatores conhecidos que favorecem a ocorrência desse risco?

As respostas auxiliam na escolha da classificação mais adequada. Não transforme essas perguntas em uma fórmula matemática obrigatória.

Os percentuais de 10%, 30%, 50%, 70% e 90% são referências didáticas para padronizar as estimativas qualitativas. Não representam probabilidades comprovadas estatisticamente. A equipe deverá justificar cada classificação utilizando as informações disponíveis antes da implementação.

---

## 6. Mensuração do impacto

O impacto deverá ser estimado considerando as consequências que poderão ocorrer caso determinado risco se concretize durante o desenvolvimento.

A equipe deverá responder à seguinte pergunta central:

> **"Caso esse risco aconteça, quanto ele poderá comprometer o desenvolvimento, as funcionalidades e a entrega do software?"**

Utilize a seguinte tabela de referência:

| Impacto | Critério de mensuração |
| :---: | :--- |
| **Muito baixo** | Poderá exigir pequenos ajustes, sem comprometer funcionalidades importantes ou o planejamento geral. |
| **Baixo** | Poderá comprometer aspectos ou funcionalidades secundárias, sem prejudicar os objetivos principais do software. |
| **Moderado** | Poderá comprometer uma funcionalidade importante, gerar retrabalho ou exigir mudanças no planejamento. |
| **Alto** | Poderá comprometer funcionalidades essenciais, afetar outras etapas do desenvolvimento ou ameaçar o prazo de entrega. |
| **Muito alto** | Poderá inviabilizar o desenvolvimento, impedir a entrega de um software funcional ou comprometer o objetivo principal do projeto. |

### Perguntas que auxiliam na mensuração do impacto:
- Qual funcionalidade poderá ser afetada?
- Essa funcionalidade é essencial ou secundária?
- O software poderá funcionar sem essa funcionalidade?
- Outras funcionalidades dependem dela?
- O problema poderá comprometer o Front-end ou o Back-end?
- O problema poderá impedir a integração entre as partes do sistema?
- O problema poderá comprometer os testes?
- Existe uma solução alternativa?
- Será necessário modificar significativamente o planejamento?
- O risco poderá comprometer o prazo de entrega?
- O software continuará atendendo ao seu objetivo principal?

Não estabeleça quantidades obrigatórias de horas ou dias de retrabalho, pois os alunos ainda não implementaram o software. O impacto deverá ser avaliado com base no comprometimento previsto do projeto. Caso existam consequências com diferentes níveis de impacto, considere o maior impacto aplicável, desde que devidamente justificado.

---

## 7. Matriz de probabilidade e impacto

Utilize a matriz de riscos 5 x 5 da imagem fornecida como referência visual obrigatória.

Preserve exatamente a seguinte distribuição de cores e níveis:

| Probabilidade / Impacto | Muito baixo | Baixo | Moderado | Alto | Muito alto |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **90%** | Médio | Médio | Alto | Alto | Alto |
| **70%** | Baixo | Médio | Médio | Alto | Alto |
| **50%** | Baixo | Baixo | Médio | Alto | Alto |
| **30%** | Baixo | Baixo | Médio | Médio | Alto |
| **10%** | Baixo | Baixo | Baixo | Baixo | Médio |

**Distribuição das cores:**
- **Verde (#A9D18E):** risco baixo.
- **Amarelo (#FFD966):** risco médio.
- **Vermelho (#FF7C80):** risco alto.

### 7.1 Imagem oficial de referência da matriz

![Matriz de Riscos 5x5](matriz_riscos_5x5.png)

### 7.2 Versão editável da matriz para preenchimento

Nesta versão, os alunos inserem os códigos dos riscos identificados (R01, R02, R03...) no espaço de cada célula. É permitido inserir mais de um risco na mesma célula.

| Probabilidade / Impacto | Muito baixo | Baixo | Moderado | Alto | Muito alto |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **90%** | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> |
| **70%** | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> |
| **50%** | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> |
| **30%** | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ff7c80; display:block; padding:10px; border-radius:4px; text-align:center;">**Alto**<br><br>*(inserir códigos)*</span> |
| **10%** | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#a9d18e; display:block; padding:10px; border-radius:4px; text-align:center;">**Baixo**<br><br>*(inserir códigos)*</span> | <span style="background-color:#ffd966; display:block; padding:10px; border-radius:4px; text-align:center;">**Médio**<br><br>*(inserir códigos)*</span> |

---

## 8. Funcionamento da matriz

A matriz possui três elementos distintos:
1. **Probabilidade de ocorrência;**
2. **Impacto previsto;**
3. **Nível de risco resultante.**

O nível de risco não deverá ser escolhido diretamente pelos alunos.

Primeiramente, a equipe deverá estimar a probabilidade. Em seguida, deverá avaliar o impacto. Por último, deverá cruzar essas duas informações na matriz para obter o nível de risco.

### Por que nem todas as linhas e colunas possuem os três níveis de risco?
Cada classificação representa uma combinação pré-estabelecida de severidade:
- **90% de probabilidade e impacto muito baixo:** resultam em risco **Médio** (a probabilidade é altíssima, mas as consequências são mínimas).
- **90% de probabilidade e impacto moderado:** resultam em risco **Alto** (alta chance de gerar impacto relevante).
- **70% de probabilidade e impacto muito baixo:** resultam em risco **Baixo**.
- **50% de probabilidade e impacto moderado:** resultam em risco **Médio**.
- **10% de probabilidade e impacto muito alto:** resultam em risco **Médio** (o impacto é crítico, mas a probabilidade de acontecer é remota).

A distribuição das cores não precisa ser igual em todas as linhas, pois cada classificação expressa o equilíbrio técnico entre probabilidade e impacto. Não existe uma distribuição universal e obrigatória das cores; a matriz apresentada estabelece os critérios oficiais adotados especificamente nesta disciplina.

---

## 9. Exemplos de riscos antes da implementação

Os exemplos hipotéticos a seguir auxiliam na compreensão do processo de identificação:

| Área | Risco previsto | Probabilidade | Impacto | Nível |
| :--- | :--- | :---: | :---: | :---: |
| Front-end | Dificuldade na implementação das telas do protótipo | 50% | Moderado | Médio |
| Front-end | Dificuldade na implementação da responsividade | 70% | Baixo | Médio |
| Back-end | Dificuldade na implementação da autenticação | 70% | Alto | Alto |
| Back-end | Problemas na conexão com o banco de dados | 50% | Muito alto | Alto |
| Integração | Dificuldade na comunicação entre Front-end e Back-end | 70% | Muito alto | Alto |
| Testes | Tempo insuficiente para testar as funcionalidades essenciais | 70% | Alto | Alto |
| Testes | Dificuldade em identificar falhas antes da entrega | 50% | Alto | Alto |
| Gerenciamento | Indisponibilidade de um integrante da equipe | 30% | Moderado | Médio |
| Gerenciamento | Atraso na implementação das funcionalidades essenciais | 70% | Alto | Alto |

*(Essas classificações são hipotéticas e não devem ser copiadas automaticamente pelas equipes. Cada projeto possui suas próprias características).*

---

## 10. Exemplo completo de mensuração

Exemplo resolvido passo a passo:

- **Identificação:** R01
- **Área:** Back-end
- **Risco:** Dificuldade na implementação da autenticação de usuários
- **Causa:** Pouca experiência da equipe com mecanismos de autenticação
- **Consequência prevista:** Impossibilidade de acessar funcionalidades essenciais previstas no protótipo
- **Probabilidade:** 70% (Alta)
- **Justificativa da probabilidade:** A equipe possui pouca experiência com autenticação e precisará aprender a utilizar os mecanismos necessários durante o desenvolvimento.
- **Impacto:** Alto
- **Justificativa do impacto:** Outras funcionalidades essenciais dependem da autenticação, e uma dificuldade nessa implementação poderá comprometer o funcionamento e o prazo de entrega do software.
- **Nível de risco:** Alto, conforme o cruzamento na matriz 5x5 (Linha 70% x Coluna Alto).
- **Estratégia de tratamento:** Mitigar
- **Ação preventiva planejada:** Estudar previamente os mecanismos de autenticação, selecionar uma biblioteca documentada e priorizar essa funcionalidade no início do planejamento.
- **Responsável:** Integrante responsável pelo Back-end.

Observe que toda essa análise pode ser realizada com base no protótipo e no planejamento, antes que qualquer linha de código tenha sido escrita.

---

## 11. Atividade prática - Registro dos riscos

Cada equipe deverá identificar, no mínimo, **cinco riscos (R01 a R05)** relacionados ao seu próprio projeto de software, contemplando as diferentes áreas de desenvolvimento quando aplicáveis.

Preencha a tabela editável abaixo (adicione novas linhas se necessário):

| ID | Área | Risco identificado | Causa | Consequência prevista |
| :---: | :--- | :--- | :--- | :--- |
| **R01** | | | | |
| **R02** | | | | |
| **R03** | | | | |
| **R04** | | | | |
| **R05** | | | | |

---

## 12. Atividade prática - Avaliação dos riscos

Preencha a tabela editável de avaliação com as estimativas e justificativas detalhadas:

| ID | Probabilidade | Justificativa da probabilidade | Impacto | Justificativa do impacto | Nível de risco |
| :---: | :---: | :--- | :---: | :--- | :---: |
| **R01** | | | | | |
| **R02** | | | | | |
| **R03** | | | | | |
| **R04** | | | | | |
| **R05** | | | | | |

> **Critério de Avaliação:** Os alunos deverão justificar suas escolhas considerando o protótipo, os requisitos, o planejamento, as tecnologias escolhidas e as condições atuais da equipe. **Não serão aceitas classificações sem justificativas fundamentadas.**

---

## 13. Atividade prática - Preenchimento da matriz

Orientações para o preenchimento da matriz 5 x 5:

1. Identifique a probabilidade atribuída ao risco (10%, 30%, 50%, 70% ou 90%).
2. Identifique o impacto atribuído ao risco (Muito baixo, Baixo, Moderado, Alto ou Muito alto).
3. Localize o cruzamento correspondente na matriz (linha da probabilidade com a coluna do impacto).
4. Insira o código do risco (ex.: R01, R02) na célula correspondente da matriz editável (Seção 7.2).
5. Registre o nível de risco resultante (Baixo, Médio ou Alto) na tabela de avaliação.
6. Repita o procedimento para todos os riscos identificados pela equipe.

> **Regra:** Não é permitido alterar as classificações originais da matriz para adequá-las aos riscos.

---

## 14. Estratégias de tratamento dos riscos

Cada equipe deverá selecionar uma das quatro estratégias formais de tratamento:

| Estratégia | Significado | Exemplo de ação planejada |
| :---: | :--- | :--- |
| **Evitar** | Alterar o planejamento para eliminar a exposição ao risco. | Substituir uma tecnologia desnecessariamente complexa por outra mais simples. |
| **Mitigar** | Reduzir a probabilidade ou o impacto do risco. | Estudar previamente um framework desconhecido antes de utilizá-lo. |
| **Transferir** | Atribuir parte das consequências ou responsabilidades a terceiros. | Utilizar um serviço especializado externo que assuma determinadas responsabilidades técnicas. |
| **Aceitar** | Reconhecer o risco e planejar seu acompanhamento. | Manter uma funcionalidade secundária como opcional caso ocorram atrasos. |

> **Importante:** Nesta atividade prática, os alunos deverão **apenas planejar** as ações de tratamento preventivo. Não será necessário executar as ações ou comprovar sua eficácia nesta etapa pré-implementação.

Preencha a tabela editável de tratamento:

| ID | Nível de risco | Estratégia escolhida | Ação planejada | Responsável |
| :---: | :---: | :---: | :--- | :--- |
| **R01** | | | | |
| **R02** | | | | |
| **R03** | | | | |
| **R04** | | | | |
| **R05** | | | | |

---

## 15. Entrega da atividade

Cada equipe deverá entregar este documento contendo:

- [ ] Identificação da equipe, projeto e integrantes preenchida no cabeçalho;
- [ ] Registro dos riscos identificados (mínimo de 5 riscos, contemplando diferentes áreas);
- [ ] Avaliação da probabilidade de cada risco com justificativa fundamentada;
- [ ] Avaliação do impacto de cada risco com justificativa fundamentada;
- [ ] Classificação correta dos níveis de risco conforme a matriz 5 x 5;
- [ ] Matriz de riscos 5 x 5 preenchida com os códigos correspondentes;
- [ ] Estratégias de tratamento planejadas para cada risco;
- [ ] Responsáveis pelo acompanhamento de cada risco designados.

> Não é exigida implementação de funcionalidades como condição para a conclusão ou avaliação desta atividade.

---

## 16. Formatação do documento

- Cabeçalho institucional: Universidade Estadual da Paraíba (UEPB), Centro de Ciências e Tecnologia (CCT), Departamento de Computação, Disciplina: Laboratório de Engenharia de Software I, Docente: Profª Rebeca Barbosa Lourenço.
- Linguagem acadêmica, objetiva, simples e didática.
- Organização do documento:
  - Seções numeradas sequencialmente de 1 a 18;
  - Tabelas editáveis com espaçamento adequado para digitação;
  - Matriz de riscos colorida com preservação exata das cores oficiais;
  - Exemplos explicativos aplicáveis a projetos acadêmicos;
  - Identificação clara da equipe e do projeto.
- Ausência de travessão longo (`—`), utilizando exclusivamente hífen (`-`) ou parênteses.

---

## 17. Acesso, edição e salvamento

Para garantir que o documento possa ser utilizado e editado individualmente por alunos com contas pessoais ou institucionais diferentes da conta da professora:

1. **Compatibilidade total com Google Docs:** O modelo foi estruturado em tabelas com células coloridas nativas e larguras padronizadas para cópia e colagem direta ou importação sem distorções no Google Docs.
2. **Criação de cópia independente via link `/copy`:** Quando o documento for disponibilizado via Google Drive, o link de compartilhamento deve utilizar a terminação `/copy` em vez de `/edit` (por exemplo: `https://docs.google.com/document/d/ID_DO_DOCUMENTO/copy`). Dessa forma, ao clicar no link, o Google Docs solicita automaticamente a criação de uma cópia para o Drive pessoal do aluno, sem que ele precise solicitar permissões de edição no arquivo original da professora.
3. **Salvamento independente:** As alterações feitas por uma equipe ficam salvas exclusivamente na conta daquela equipe, garantindo a proteção do documento matriz e a autonomia entre os grupos.
4. **Nota sobre validação de contas externas:** Na ausência de uma conta externa de teste ativa neste ambiente automatizado, a criação via link `/copy` com permissão pública de visualização ("Qualquer pessoa com o link pode ler") é a prática recomendada do Google Workspace para compartilhamento seguro entre diferentes domínios e contas pessoais.

---

## 18. Validação final

Antes de entregar a atividade concluída, a equipe deve verificar os seguintes itens:

- [ ] Todos os critérios de mensuração foram aplicados considerando a etapa pré-implementação;
- [ ] Nenhuma atividade descrita depende de código já desenvolvido ou métricas de execução;
- [ ] Os riscos identificados correspondem à realidade e ao tema do projeto acadêmico;
- [ ] A classificação dos riscos respeita rigorosamente a matriz 5 x 5 oficial;
- [ ] Os códigos (R01, R02...) foram devidamente posicionados nas células da matriz;
- [ ] As tabelas estão preenchidas com as justificativas técnicas exigidas;
- [ ] As estratégias de tratamento representam ações preventivas planejadas;
- [ ] Os responsáveis designados pertencem à equipe do projeto.
