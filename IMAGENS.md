# Residencial Santana - Guia de Imagens

## Imagens Geradas ✅

1. **Hero Background** (`assets/images/hero.webp`)
   - Imagem principal da fachada do residencial
   - Dimensões recomendadas: 1600×900px
   
2. **Logo** (`assets/images/logo.png`)
   - Logo do Residencial Santana
   - Fundo transparente/cream

## Imagens Necessárias (Substituir com fotos reais)

### Unidades
As seguintes imagens precisam ser substituídas por fotos reais das acomodações:

- **`assets/images/suite.webp`** - Foto da suíte
- **`assets/images/loft.webp`** - Foto do loft
- **`assets/images/apartamento.webp`** - Foto do apartamento

### Galeria
Adicionar 6 fotos da galeria em `assets/images/galeria/`:

- `foto1.webp` - Vista externa
- `foto2.webp` - Quarto
- `foto3.webp` - Cozinha
- `foto4.webp` - Área comum
- `foto5.webp` - Banheiro
- `foto6.webp` - Varanda/vista

## Recomendações para Fotos Reais

### Especificações Técnicas
- **Formato**: WebP (otimizado para web)
- **Dimensões mínimas**:
  - Hero: 1600×900px
  - Unidades: 800×600px
  - Galeria: 1200×800px
- **Qualidade**: 80-85% (balanço entre qualidade e tamanho)
- **Alt text**: Descritivo e com palavras-chave

### Dicas de Fotografia
1. Fotografe durante o dia com luz natural
2. Enquadre mostrando amplitude dos espaços
3. Destaque detalhes que diferenciam (cozinha equipada, ar-condicionado, etc.)
4. Use ângulos que valorizem os ambientes
5. Mantenha consistência de iluminação entre as fotos

### Conversão para WebP
Use ferramentas online ou comandos:
```bash
# Com cwebp (instalar via brew install webp)
cwebp -q 85 input.jpg -o output.webp
```

## Ordem de Prioridade

1. **Alta prioridade**: Hero, Suite, Loft, Apartamento
2. **Média prioridade**: 3-4 fotos da galeria
3. **Baixa prioridade**: Fotos adicionais da galeria

**Nota**: O site está funcional com placeholders. Basta substituir as imagens pelos arquivos reais mantendo os mesmos nomes de arquivo.
