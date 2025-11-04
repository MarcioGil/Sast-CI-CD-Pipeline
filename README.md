
# SAST-CI/CD Pipeline: Prevenção Automatizada de Dívida de Cibersegurança

## Sobre o Autor
Sou Márcio Gil, estudante de Engenharia de Software, Embaixador da Turma 14 da DIO Campus Expert, apaixonado por tecnologia, educação, inovação e numa constante luta por justiça social. Busco unir conhecimento técnico com impacto social, promovendo soluções seguras e sustentáveis para o desenvolvimento de software.

- [LinkedIn](https://linkedin.com/in/márcio-gil-1b7669309)
- [Currículo Pessoal](https://marciogil.github.io/curriculum-vitae/)
- [GitHub Pessoal](https://github.com/MarcioGil/MarcioGil.git)



## Objetivo

Demonstrar a implementação de um fluxo de trabalho de Application Security (AppSec) usando SAST em CI/CD para prevenir vulnerabilidades antes da produção.

## Estrutura Técnica do Projeto

Este projeto demonstra, de forma prática e didática, como implementar um pipeline CI/CD seguro utilizando SAST (Semgrep) para prevenir vulnerabilidades em código legado. A automação garante que falhas críticas, como SQL Injection e segredos hardcoded, sejam detectadas antes de chegarem à produção, promovendo sustentabilidade e maturidade em segurança de aplicações.

### Tecnologias Utilizadas

- **Node.js (Express):** Microserviço de autenticação vulnerável
- **Docker/Docker Compose:** Containerização do app e ambiente
- **SQLite:** Banco de dados leve para simulação de vulnerabilidades
- **Semgrep:** Scanner SAST para análise estática de código
- **GitHub Actions:** Pipeline CI/CD automatizado

### Estrutura de Pastas

```text
Sast-CI-CD-Pipeline/
├── app/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
├── .semgrep.yml
├── .github/
│   └── workflows/
│       └── security-scan.yml
└── README.md
```

### Vulnerabilidades Intencionais

- SQL Injection no login
- Segredo hardcoded no código


## Como Executar Localmente

```sh
docker compose up --build
```

## Como Rodar o Semgrep Manualmente

```sh
pip install semgrep
semgrep --config .semgrep.yml app/
```

## CI/CD

O workflow de segurança roda automaticamente em todo push/PR para o branch `main`.


## Demonstração Visual

- Cenário 1: Pull Request com código vulnerável (workflow falha)
![Workflow Falhou](assets/screenshot-falha.png)

- Cenário 2: Pull Request corrigido (workflow passa)
![Workflow Sucesso](assets/screenshot-sucesso.png)

### Dashboard Dinâmico

Badge de status do build:

![Build Status](https://img.shields.io/github/workflow/status/MarcioGil/Sast-CI-CD-Pipeline/SAST%20Security%20Scan?style=flat-square)

> Substitua os arquivos `assets/screenshot-falha.png` e `assets/screenshot-sucesso.png` pelas imagens reais dos seus workflows.

## Impacto

A automação previne que vulnerabilidades cheguem à produção, reduzindo a dívida de cibersegurança e promovendo boas práticas de desenvolvimento seguro.
