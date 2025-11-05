
# SAST-CI/CD Pipeline: Prevenção Automatizada de Dívida de Cibersegurança

## Otimização Sugerida

### Por Que Otimizar
Otimizar a estrutura e documentação do projeto facilita a manutenção, aumenta a clareza para recrutadores e reduz riscos operacionais.

### Estrutura de Pastas
```bash
tree
├── app
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
├── .semgrep.yml
├── .github
│   └── workflows
│       └── security-scan.yml
├── assets
│   ├── success.jpg
│   └── Screeenshot-sucesso.jpg
└── README.md
```

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


### Vulnerabilidades Intencionais

- **SQL Injection no login** (Risco: Possível manipulação de dados e acesso não autorizado ao banco de dados)
- **Segredo hardcoded no código** (Risco: Exposição de chave de API em ambiente público)

Esses riscos podem causar vazamento de dados, comprometimento de sistemas e prejuízo financeiro.


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




## Resultados Visuais e Prova de Conceito

**Cenário 1:** [Image: GitHub Actions falhando ao detectar SQL Injection (Motivo: Alta Severidade)]
![Workflow Falhou](assets/screenshot-falha.png)

**Cenário 2:** [Image: GitHub Actions aprovando workflow após correção de vulnerabilidade]
![Workflow Sucesso](assets/success.jpg)

> Se a imagem acima não aparecer no GitHub, salve uma cópia como PNG (`assets/success.png`), envie para o repositório e troque a linha acima para:
> `![Workflow Sucesso](assets/success.png)`

## Demonstração em Vídeo


Veja abaixo um vídeo rápido mostrando o app vulnerável rodando, o commit e a transição do pipeline de falha para sucesso no GitHub Actions:

[Assista à demonstração](assets/VID-20251105-WA0005.mp4)





## Impacto

Essa abordagem previne a dívida de cibersegurança e economiza o alto custo de remediação de falhas em produção, conectando a segurança diretamente à economia de custos da empresa.
