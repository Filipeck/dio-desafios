# Relatório de Implementação de Ferramentas AWS na Abstergo Pharmaceutical Industries

Data: 03 de agosto de 2025. <br>
Empresa: Abstergo Pharmaceutical Industries <br>
Responsável: Filipe Cayres Kelmer <br>

## Introdução

Este relatório apresenta o processo de implementação de três serviços AWS na **Abstergo Pharmaceutical Industries**, conduzido por **Filipe Cayres Kelmer**. O projeto teve como principal objetivo identificar e adotar soluções em nuvem que gerassem redução imediata dos custos operacionais, sem comprometer a segurança, a disponibilidade ou a performance dos sistemas da empresa.

## Objetivos

O projeto foi estruturado para atender às seguintes metas:

- Avaliar capacidades de armazenamento, computação e orquestração em nuvem.
- Reduzir custos fixos com infraestrutura local e licenciamento.
- Aumentar a eficiência operacional por meio de automação e escalabilidade.
- Garantir alta disponibilidade e durabilidade dos dados.

## Escopo do Projeto

Para alcançar os objetivos estabelecidos, a implementação foi dividida em três etapas distintas, cada uma focada na adoção de um serviço AWS estratégico:

1. **Amazon S3 (Simple Storage Service)**
2. **AWS Lambda**
3. **Auto Scaling com Amazon EC2**

---

## Etapa 1: Amazon S3 (Simple Storage Service)

**Foco da ferramenta:**  
Armazenamento de objetos escalável, durável e de baixo custo.

**Caso de uso:**  
Migração de arquivos internos e backups de servidores locais para o S3. A infraestrutura local gerava elevados custos de manutenção e consumo de energia.

**Redução de custos:**

- Eliminação de hardware de armazenamento local.
- Pagamento conforme uso real de espaço (GB-mês).

**Principais ganhos:**

- Armazenamento **seguro**, **durável** e replicado entre regiões.
- Versionamento e ciclo de vida automático para otimizar custos.
- Acesso rápido e global a conteúdos e backups.

---

## Etapa 2: AWS Lambda

**Foco da ferramenta:**  
Execução de código sob demanda (computação serverless).

**Caso de uso:**  
Automação de tarefas de processamento de dados e geração de relatórios que permaneciam ociosas em servidores provisionados 24×7.

**Redução de custos:**

- Cobrança por **milissegundo de execução** e quantidade de memória alocada.
- Ausência de instâncias ociosas ou taxas de licenciamento de SO.

**Principais ganhos:**

- **Escalabilidade automática** de acordo com a carga de trabalho.
- Eliminação de manutenção de servidores e de patches de sistema operacional.
- Maior **agilidade** na entrega de soluções e experimentos.

---

## Etapa 3: Auto Scaling (Amazon EC2)

**Foco da ferramenta:**  
Escalonamento automático de instâncias de computação.

**Caso de uso:**  
Ajuste dinâmico de instâncias EC2 para suportar picos de tráfego no sistema web, evitando manutenção de capacidade ociosa em períodos de baixa demanda.

**Redução de custos:**

- Terminação automática de instâncias excedentes em momentos de uso reduzido.

**Principais ganhos:**

- **Alta disponibilidade** sem superprovisionamento.
- Uso inteligente de recursos, alinhado às variações de carga.
- Flexibilidade para misturar Spot Instances e instâncias sob demanda.

---

## Conclusão

A implementação conjunta do **Amazon S3**, do **AWS Lambda** e do **Auto Scaling** propiciou à Abstergo Pharmaceutical Industries:

- **Redução significativa** dos custos operacionais e de capital.
- Migração de tarefas manuais para processos **automatizados** e serverless.
- **Aumento da eficiência** e da confiabilidade dos serviços internos.
- Ambiente mais **flexível** e pronto para experimentações contínuas.

**Recomendações:**  
Manter e expandir o uso desses serviços, além de avaliar novos recursos AWS (como S3 Intelligent-Tiering e AWS Step Functions) para aperfeiçoar constantemente a **segurança**, a **escala** e a **otimização de custos** da infraestrutura em nuvem.

---

## Anexos

- [Guia de migração de arquivos para o Amazon S3](https://docs.aws.amazon.com/pt_br/workdocs/latest/adminguide/s3-upload.html)
- [Scripts otimizados para execução no AWS Lambda](https://docs.aws.amazon.com/pt_br/lambda/latest/dg/best-practices.html)
- [Estratégia de escalonamento automático configurada no Auto Scaling](https://docs.aws.amazon.com/pt_br/autoscaling/plans/userguide/how-it-works.html)

---

**Assinatura do Responsável pelo Projeto:**
_Filipe Cayres Kelmer_
