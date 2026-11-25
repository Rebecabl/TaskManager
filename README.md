# Prática de Laboratório — Matriz de Riscos dos Projetos

Bem-vindos à prática de análise e gestão de riscos! Nesta atividade, cada grupo fará o levantamento dos riscos do seu projeto utilizando uma **Matriz de Riscos (Probabilidade × Impacto)** interativa publicada na web.

---

## Passo a Passo para os Alunos

Siga os passos abaixo para realizar e salvar a atividade da sua equipe:

### 1. Abrir a página do seu grupo
Acesse a página inicial do projeto no GitHub Pages ou entre diretamente no link correspondente ao número do seu grupo:
- [Página Inicial com Lista de Grupos](index.html)
- Ou navegue na pasta `grupos/` e abra o grupo do seu time (ex: `grupos/grupo-01/`).

### 2. Preencher a matriz de riscos
Na página web do seu grupo:
- Informe o nome do **Projeto**;
- Liste os integrantes da **Equipe**;
- Defina a **Data** da análise;
- Adicione as linhas de riscos clicando em **"Adicionar risco"**, descrevendo o risco, causa/consequência, resposta prevista e responsável;
- Selecione a **Probabilidade** (Alta, Média, Baixa) e o **Impacto** (Insignificante, Moderado, Catastrófico) de cada item. A matriz colorida e os níveis são classificados automaticamente.

### 3. Baixar os dados preenchidos
- Ao concluir ou antes de fechar a página, clique no botão **"Baixar riscos.json"**.
- O navegador fará o download de um arquivo chamado `riscos.json` com todo o seu trabalho salvo.

### 4. Enviar o arquivo para o repositório no GitHub
Como uma página estática no GitHub Pages não grava arquivos no servidor automaticamente, o salvamento é feito pelo próprio GitHub:
1. Acesse o repositório no GitHub;
2. Entre na pasta do seu grupo (por exemplo: `grupos/grupo-01/`);
3. No canto superior direito da lista de arquivos, clique em **Add file** > **Upload files**;
4. Arraste ou selecione o arquivo `riscos.json` que você acabou de baixar no computador (ele irá substituir o `riscos.json` antigo);
5. No campo de mensagem do commit, digite uma descrição simples (exemplo: `Atualiza riscos do grupo 01`);
6. Clique no botão verde **Commit changes** (ou **Propose changes**).

Pronto! Na próxima vez que qualquer integrante abrir a página do grupo pelo GitHub Pages, ela carregará automaticamente os dados salvos no `riscos.json`.

---

> [!IMPORTANT]
> **AVISO IMPORTANTE DE CONVIVÊNCIA E ORGANIZAÇÃO:**  
> Cada grupo deve trabalhar **exclusivamente na pasta do seu próprio grupo** (ex: `grupos/grupo-01/`). Nunca modifique, renomeie ou envie arquivos para as pastas dos outros grupos ou para a pasta `template/`.

---

## Dicas Adicionais

- **Continuar de outro computador ou restaurar dados:** Se você tiver o arquivo `riscos.json` no seu computador e quiser carregá-lo manualmente na tela, basta clicar no botão **"Carregar riscos.json"** e selecionar o arquivo.
- **Relatório em PDF:** Se o professor solicitar a entrega em PDF ou impressão, use o botão **"Imprimir ou salvar em PDF"** na própria página.

---

## Estrutura deste Repositório

```text
├── index.html                  # Página inicial com links para todos os grupos
├── README.md                   # Este guia de instruções
├── template/
│   └── matriz-de-riscos.html   # Modelo de referência original
└── grupos/
    ├── grupo-01/
    │   ├── index.html          # Matriz de riscos do Grupo 01
    │   └── riscos.json         # Arquivo de dados salvo pelo Grupo 01
    ├── grupo-02/
    │   ├── index.html
    │   └── riscos.json
    ...
    └── grupo-10/
        ├── index.html
        └── riscos.json
```
