# 🚀 Sistema de Gestão - Vue.js + Laravel API

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green)](https://vuejs.org/)
[![Laravel](https://img.shields.io/badge/Laravel-10.x-red)](https://laravel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

**Sistema completo para gestão de tarefas e usuários**, com frontend em Vue.js e backend em Laravel. Projeto desenvolvido para estudo de arquitetura SPA e consumo de APIs RESTful.

## ✨ Funcionalidades
- **Autenticação JWT** (login/logout seguro).
- **CRUD de usuários** (com validação de formulários).
- **Dashboard interativo** (gráficos e filtros dinâmicos).
- **Responsividade** (Mobile First com Tailwind CSS).

## 🛠 Stack Tecnológica
| Frontend               | Backend              | Ferramentas          |
|------------------------|----------------------|----------------------|
| Vue.js 3 (Composition API) | Laravel 10          | Docker               |
| Vue Router             | Eloquent ORM         | Postman (API Tests)  |
| Pinia (State Management)| MySQL                | ESLint + Prettier    |
| Axios (HTTP Client)    | JWT Authentication   | GitFlow              |

## 🔥 Desafios & Soluções
1. **Problema**: Dados da API não atualizavam em tempo real no frontend.  
   **Solução**: Implementei **WebSockets (Laravel Echo + Pusher)** para atualização instantânea.

2. **Problema**: Lentidão no carregamento de listas com +1k registros.  
   **Solução**: Adicionei **pagination server-side** e **cache com Redis**.

3. **Problema**: Complexidade no gerenciamento de estado global.  
   **Solução**: Migrei de Vuex para **Pinia**, simplificando stores e melhorando performance.

## 📸 Screenshots
| Dashboard Light Mode | Mobile View | 
|----------------------|-------------|
| ![Dashboard](https://via.placeholder.com/400x200?text=Dashboard+Light+Mode) | ![Mobile](https://via.placeholder.com/200x400?text=Mobile+View) |

## 🚀 Como Executar
```bash
# Clone o repositório
git clone https://github.com/fernandoRodrigues29/SitemaGestaoVue.git
cd SitemaGestaoVue

# Instale as dependências
npm install

# Execute o frontend
npm run dev

# (Backend requer Laravel - veja instruções no repositório da API)
