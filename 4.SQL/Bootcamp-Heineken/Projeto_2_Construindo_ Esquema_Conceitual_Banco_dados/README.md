# Construindo um Esquema Conceitual para Banco De dados:

## Escopo: Banco de Dados de uma Oficina

Este é um projeto proposto no [Bootcamp Heineken - Inteligência Artificial Aplicada a Dados com Copilot](https://web.dio.me/track/coding-the-future-heineken-ia-para-analise-de-dados) na plataforma DIO. 
A ferramenta utilizada foi o [MySQL Workbench](https://www.mysql.com/products/workbench/).

## Objetivo:
Criação de um esquema conceitual de um banco de dados, tendo como contexto uma oficina,. O objetivo é desenvolver esse esquema com base na narrativa que foi fornecida pela instrutora:

- Sistema de controle e gerenciamento de execução de ordens de serviço em uma oficina mecânica
- Clientes levam veículos à oficina mecânica para serem consertados ou para passarem por revisões periódicas
- Cada veículo é designado a uma equipe de mecânicos que identifica os serviços a serem executados e preenche uma OS com data de entrega.
- A partir da OS, calcula-se o valor de cada serviço, consultando-se uma tabela de referência de mão-de-obra
- O valor de cada peça também irá compor a OSO cliente autoriza a execução dos serviços
- A mesma equipe avalia e executa os serviços
- Os mecânicos possuem código, nome, endereço e especialidade
- Cada OS possui: n°, data de emissão, um valor, status e uma data para conclusão dos trabalhos.

## Resultado do Desafio
![Esquema Conceitual Oficina](https://github.com/Filipeck/dio-desafios/blob/5bea8c6ddee96fb09d6d89dcf3ca2a8da9ad1cdd/4.SQL/Bootcamp-Heineken/Projeto_2_Construindo_%20Esquema_Conceitual_Banco_dados/projeto_conceitual_oficina.png)
