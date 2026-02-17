# Guia de Deploy - Residencial Santana

## Configurações para Plataformas de Deploy

### ✅ Cloudflare Pages

**Configurações de Build:**
- **Build command:** `echo 'No build required'` ou deixe vazio
- **Build output directory:** `.` (diretório raiz)
- **Root directory:** `/` (deixe padrão)

### ✅ Netlify

**Configurações de Build:**
- **Build command:** `echo 'No build required'` ou deixe vazio
- **Publish directory:** `.` (diretório raiz)
- **Base directory:** deixe vazio

> O arquivo `netlify.toml` já está configurado automaticamente.

### ✅ Vercel

**Configurações de Build:**
- **Framework Preset:** Other
- **Build Command:** deixe vazio
- **Output Directory:** `.` (diretório raiz)
- **Install Command:** deixe vazio

## Estrutura do Projeto

Este é um site **estático puro** (HTML, CSS, JavaScript):
- ✅ Não requer build
- ✅ Não tem dependências npm
- ✅ Arquivos prontos para servir diretamente

## Após o Deploy

O site estará disponível em:
- **Cloudflare Pages:** `https://residencialsantana.pages.dev`
- **Netlify:** `https://residencialsantana.netlify.app`
- **Vercel:** `https://residencialsantana.vercel.app`

Você pode configurar um domínio personalizado depois do primeiro deploy.
