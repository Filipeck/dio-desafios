# **Criando seu Board de Tarefas com Java**

## **Descrição do Projeto**

O sistema permite que usuários criem **quadros (boards)** para diferentes projetos e gerenciem **tarefas (cards)** dentro deles. Cada tarefa pode ser classificada em uma **categoria** e associada a um **status**, facilitando o acompanhamento do fluxo de trabalho.

**Funcionalidades principais:**  
✔ Criar e gerenciar **boards** com colunas personalizadas.  
✔ Criar, mover, bloquear e cancelar **cards**.  
✔ CRUD completo para **tarefas**.  
✔ Classificação por **categorias** (Pessoal, Trabalho, Estudo).  
✔ Controle de **status** (Inicial, Pendente, Cancelado, Finalizado).  
✔ **Banco de Dados MySQL** para armazenamento.  
✔ **Liquibase** para controle de versão do banco de dados.

---

## **Tecnologias Utilizadas**

| Tecnologia            | Descrição                                                 |
| --------------------- | --------------------------------------------------------- |
| **Java 21**           | Última versão LTS, com melhorias de desempenho.           |
| **Spring Boot 3.2.3** | Framework para desenvolvimento rápido de APIs.            |
| **MySQL**             | Banco de dados relacional para armazenamento das tarefas. |
| **Liquibase**         | Versionamento do banco de dados e migrações.              |
| **Gradle**            | Gerenciador de dependências e automação de build.         |
| **Lombok**            | Redução de código repetitivo com anotações.               |

---

## **. Como Executar o Projeto**

### **Passo 1: Configurar o Banco de Dados MySQL**

1. Instale o **MySQL** e crie um banco de dados:

```sql
CREATE DATABASE board_tasks;
```

2. **Atualize `application-dev.yml`:**

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/board_tasks
    username: root
    password: senha
  jpa:
    hibernate:
      ddl-auto: update
```

### **Passo 2: Rodar o Projeto**

```sh
./gradlew bootRun
```

Ou no Windows:

```sh
gradlew.bat bootRun
```

✅ **Agora sua API está rodando em `http://localhost:8080`!**

---
