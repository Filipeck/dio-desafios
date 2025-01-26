# Refinando um Projeto Conceitual de Banco de Dados E-COMMERCE:

Este é um projeto proposto no [Bootcamp Heineken - Inteligência Artificial Aplicada a Dados com Copilot](https://web.dio.me/track/coding-the-future-heineken-ia-para-analise-de-dados) na plataforma DIO. 
A ferramenta utilizada foi o [MySQL Workbench](https://www.mysql.com/products/workbench/).

## Objetivo:
Refinar o modelo apresentado pela orientadora, acrescentando os seguintes pontos:

- **Cliente PJ e PF** – Uma conta pode ser PJ ou PF, mas não pode ter as duas informações;
- **Pagamento** – Pode ter cadastrado mais de uma forma de pagamento;
- **Entrega** – Possui status e código de rastreio;

## Resultado do Desafio
![img](https://github.com/)

Para a entidade Cliente foram criadas duas novas entidades **PJ_Pessoa Jurídica** e **PF_Pessoa Física** contendo as informações de CNPJ e CPF.  
No caso de **Pagamento**, a entidade está atribuída a outras duas entidades afim de detalhar as formas de pagamento: **Cartão** e **Boleto**.  
**Entrega** foi criada para armazenar as informações de envio de cada pedido detalhando como data do pedido, data de envio e data de entrega.
