# Protech Campinas Landing Page

Landing page estatica para apresentar a nova presenca digital da Protech Campinas.

## Sobre

O projeto moderniza a pagina atual da Protech com foco em:

- Atendimento rapido via WhatsApp.
- Servicos para notebooks, computadores, PCs gamers e servidores.
- Galeria de trabalhos reais da bancada.
- Diferenciais de atendimento, garantia e diagnostico.
- Secao "Como chegar" com endereco e mapa.

## Estrutura

```text
.
+-- assets/      # Imagens usadas na landing
+-- index.html   # Marcacao da pagina
+-- styles.css   # Estilos responsivos
`-- script.js    # Interacoes leves
```

## Rodar localmente

Como e um site estatico, qualquer servidor HTTP simples funciona:

```bash
python -m http.server 4177
```

Depois acesse:

```text
http://localhost:4177
```

## Publicacao

Para publicar em uma VPS, copie os arquivos do projeto para o diretorio publico do servidor web, por exemplo:

```text
/var/www/protech
```

Depois configure Nginx ou Apache para servir esse diretorio.

## Contato usado na pagina

- WhatsApp: (19) 9 9236-7704
- Telefone: (19) 3029-2805
- Endereco: Rua Ernani Pereira Lopes, 572 - Campinas-SP
