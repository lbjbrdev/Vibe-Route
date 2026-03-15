# VibeRoute --- Prompt de Especificação para Claude Code

## Contexto do Projeto

Você é um engenheiro de software sênior especializado em arquitetura
frontend moderna e integração com APIs de IA.

Seu objetivo é me ajudar a construir um **MVP funcional** de um
aplicativo chamado **VibeRoute**.

O projeto será um **planejador inteligente de rolês e roteiros
urbanos**, que usa IA para gerar itinerários baseados nas preferências
do usuário.

### Princípios do projeto

-   UX moderna
-   Código limpo
-   Arquitetura escalável
-   Tipagem forte com TypeScript
-   Componentes reutilizáveis

------------------------------------------------------------------------

# Problema que o produto resolve

Planejar um rolê em uma cidade pode ser cansativo e demorado.

Hoje o fluxo comum é:

1.  abrir Google Maps
2.  procurar restaurantes
3.  depois procurar bar
4.  depois procurar balada
5.  verificar distância entre lugares
6.  repetir o processo várias vezes

O objetivo deste app é permitir que o usuário **descreva o tipo de rolê
que deseja** e o sistema gere automaticamente **um roteiro completo de
lugares para visitar em sequência**.

Exemplo de roteiro gerado:

19:30 -- jantar em restaurante japonês\
21:00 -- bar com drinks autorais\
23:30 -- balada eletrônica\
02:30 -- after food

------------------------------------------------------------------------

# Objetivo do MVP

Criar uma aplicação web onde o usuário possa:

1.  informar preferências de rolê
2.  gerar um roteiro automaticamente
3.  visualizar esse roteiro em formato de timeline
4.  visualizar os lugares em um mapa

------------------------------------------------------------------------

# Stack obrigatória

## Frontend

-   React
-   TypeScript
-   Vite
-   TailwindCSS

### Bibliotecas recomendadas

-   React Router
-   TanStack Query
-   Framer Motion
-   Mapbox ou Google Maps

------------------------------------------------------------------------

# Backend (MVP)

Backend simples com:

-   Node
-   API routes
-   integração com APIs de lugares (Google Places ou Foursquare)

------------------------------------------------------------------------

# Uso de IA

A IA **não deve buscar os lugares**.

Ela deve **organizar os lugares em um roteiro coerente**.

Fluxo:

1.  usuário informa preferências
2.  backend busca lugares via API
3.  backend envia lista de lugares para IA
4.  IA retorna roteiro estruturado

------------------------------------------------------------------------

# Fluxo principal do usuário

1.  Usuário abre a aplicação
2.  Usuário informa preferências do rolê
3.  Sistema busca lugares na cidade
4.  IA organiza esses lugares em um roteiro coerente
5.  Interface exibe o roteiro

------------------------------------------------------------------------

# Dados coletados do usuário

Formulário inicial:

-   cidade
-   quantidade de pessoas
-   tipo de rolê (restaurante, bar, balada, parque, cinema etc)
-   horário (manhã / tarde / noite)
-   intensidade do rolê (light / moderado / intenso)
-   after (sim ou não)

### Exemplo

cidade: São Paulo\
pessoas: 3\
tipo: bar + balada\
horario: noite\
intensidade: moderado\
after: sim

------------------------------------------------------------------------

# Estrutura de telas

## Home

Tela inicial com explicação simples do produto e botão:

**Planejar meu rolê**

------------------------------------------------------------------------

## Tela de criação do rolê

Formulário com:

-   cidade
-   número de pessoas
-   tipo de rolê
-   horário
-   intensidade
-   after

Botão:

**Gerar roteiro**

------------------------------------------------------------------------

## Tela de resultado

Exibir:

1.  Timeline do rolê
2.  Lista de lugares
3.  Mapa com os destinos

### Exemplo de timeline

18:30 🍣 Restaurante\
20:00 🍹 Bar\
22:30 🎶 Balada\
02:30 🌭 After

------------------------------------------------------------------------

# Estrutura de pastas sugerida

src/ components/ ui/ layout/ features/ role-planner/ hooks/ services/
types/ pages/

------------------------------------------------------------------------

# Componentes principais

RoleForm\
RoleTimeline\
RoleMap\
PlaceCard

------------------------------------------------------------------------

# Tipos TypeScript

## Place

-   id
-   name
-   category
-   rating
-   address
-   latitude
-   longitude

## RoleStop

-   time
-   place
-   description

## RolePlan

-   city
-   stops\[\]

------------------------------------------------------------------------

# Lógica de geração de roteiro

Fluxo:

1.  usuário envia preferências
2.  backend busca lugares via API
3.  backend envia lista de lugares para IA
4.  IA retorna roteiro estruturado

Formato esperado da resposta da IA:

``` json
{
 "stops": [
  {
   "time": "19:30",
   "place": "Restaurante Sushi X",
   "description": "Jantar para começar a noite"
  },
  {
   "time": "21:30",
   "place": "Bar Y",
   "description": "Drinks e música ao vivo"
  }
 ]
}
```

------------------------------------------------------------------------

# Requisitos de UX

Interface moderna e limpa.

Utilizar:

-   cards
-   timeline vertical
-   animações suaves

O mapa deve mostrar os lugares conectados em ordem.

------------------------------------------------------------------------

# Primeiras tarefas para Claude Code

1.  Criar projeto com Vite + React + TypeScript
2.  Configurar TailwindCSS
3.  Criar estrutura de pastas escalável
4.  Criar componentes base
5.  Criar layout inicial da Home
6.  Criar formulário de planejamento de rolê
7.  Criar tela de exibição de roteiro

------------------------------------------------------------------------

# Diretrizes de código

Prefira:

-   componentes pequenos
-   boas práticas de React
-   tipagem forte
-   separação de responsabilidades

Evite:

-   componentes gigantes
-   lógica misturada com UI
-   código sem tipagem

------------------------------------------------------------------------

# Objetivo final

Construir um MVP funcional de um planejador inteligente de rolês
utilizando:

-   React
-   TypeScript
-   Tailwind
-   IA para geração de roteiros
