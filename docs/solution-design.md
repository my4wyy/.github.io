## 4. Projeto da solução

### 4.1. Diagrama de classes


![diagramacerto](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130924593/524476bf-3a69-49df-97b6-bac971ea49f6)

O diagrama representa as principais classes e suas relações em um sistema de serviço de viagens. Ele inclui as classes Viagem, Cliente, Motorista, Feedback e Pagamento, descrevendo como essas entidades estão interligadas. Cada classe tem atributos e métodos específicos que refletem suas funções no sistema. Esse diagrama fornece uma visão geral da estrutura do sistema, permitindo entender como as informações são organizadas e como as entidades se relacionam umas com as outras. 


### 4.2. Diagrama de componentes

_Apresente o diagrama de componentes da aplicação, indicando os elementos da arquitetura e as interfaces entre eles. Faça uma descrição sucinta dos componentes indicando o papel de cada um deles dentro da arquitetura/estilo/padrão arquitetural. Indique também quais componentes serão reutilizados (navegadores, SGBDs, middlewares, etc), quais componentes serão adquiridos por serem proprietários e quais componentes precisam ser desenvolvidos._

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130784916/a00b5a5c-fee8-4fdf-b0c1-514182019984)


_Apresente uma descrição detalhada dos artefatos que constituem o diagrama de componentes._

Exemplo: conforme diagrama apresentado, as entidades participantes da solução são:

- **Componente 1** -Cliente: Navega pela funcionalidades da aplicação.
- **Componente 2** -dataBase: Armazena e salva os dados das viagens.
- **Componente 3** -Sistema de viagens: Tela com componentes para solicitar a viagem.

### 4.3. Modelo de dados
![BANCO DE DADOS MODELO RELACIONAL drawio (1)](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130785414/980e2d54-d1e6-4731-a406-457840ac7797)





### 4.4. Tecnologias

Persistência (Hibernate): Usado para mapear objetos Java no banco de dados SQL, permitindo o armazenamento de informações sobre viagens, motoristas e transações financeiras.

Front-end (HTML+CSS+JS): Desenvolvido com HTML, CSS e JavaScript para criar a interface do usuário, permitindo que os passageiros solicitem viagens paguem, feedbacks entre outros.

Back-end (Java + SQL): Desenvolvido em Java para processar solicitações, gerenciar lógica de negócios e acessar dados do banco de dados SQL.

Plataforma de Desenvolvimento (Visual Studio ou Eclipse): Visual Studio Code ou Eclipse para programar.

Teste (JUnit): Utilizado para criar testes automatizados que garantem a qualidade do código.

Deploy (GitHub): GitHub é usado para hospedar código-fonte e implementar o front-end online.

Comunicação (WhatsApp + Discord): Canais de comunicação entre os desenvolvedores para realização das tarefas.

| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| Persistência   | Hibernate       |
| Front end      | HTML+CSS+JS     |
| Back end       | JavaSpringBoot + SQL |
| Plataforma de desenvolvimento | Visual Studio ou Eclipse|
| Teste          | JUnit           |
| Deploy         | Github Codespaces|
| Comunicação    | WhatsApp + Discord |



### 4.5. Guias de estilo

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

Explique as guias de estilo utilizadas no seu projeto.

## Design


<img width="7056" alt="VanBora" src="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/8d8cb38e-e2cf-44c0-b6fa-9ddca2c1e2d6">



## Cores

Ideia para as paletas de cores:


![AdobeColor-VanBora Azul](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/a2f0aa9b-d2ed-4a44-9572-29cf1e6c9ba6)


## Tipografia


Título de página: Zilla Slab Bold 700 Italic

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/822ea358-92e2-4250-b2e9-b4dfb0c2720d)

Título de seção: Zilla Slab Medium 500 Italic

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/2db495a4-5f4e-4ded-bc9f-3ba13627cfe0)

Rótulos de componentes: Zilla Slab Regular 400 Italic

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/a75fdcbb-ebb8-4b0c-886f-3aaf873d34d1)


Corpo de Texto: Zilla Slab Light 300 Italic

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/d4c5c90e-e41f-4472-8f39-d33fef8ee034)



## Iconografia

Ícone de Localização Atual:

.icon-location {
  background-color: #3498db; /* Azul */
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
}

Ícone de Destino:

.icon-destination {
  background-color: #2980b9; /* Azul mais escuro */
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
}

Ícone de Van:

.icon-van {
  background-color: #0074b7; /* Azul intenso */
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
}

Ícone de Perfil do Usuário:

.icon-user {
  background-color: #3498db; /* Azul */
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
}

Ícone de Pagamento:

.icon-payment {
  background-color: #2980b9; /* Azul mais escuro */
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
}

Ícone de Histórico de Viagens:

.icon-history {
  background-color: #0074b7; /* Azul intenso */
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
}

LINK SITE DA GOOGLE ICONES USAVEIS: https://fonts.google.com/icons

> **Links Úteis**:
>
> - [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)


## Rotas Back-End
| **Método**   | **Rota**  | **Descrição**  |
| ---            | ---             |---         |
|            GET    |         viagem/{id}     |      pega os dados da viagem      |
|         PUT       |       viagem/{id}         |     alterar dados da viagem      |
|       POST        |           avaliarsuporte/    |    cria uma avaliação do suporte       |
|             GET   |     pagamento/{id}             |      pega os dados de um pagamento    |   
|             POST   |       pagamento/      |    atualizar o status do pagamento       |
|          POST      |    suporteaousuario/             |     cria um suporte ao usuário     |
|           POST    |     viagem/            |       cria a solicitação de uma viagem     |
|              POST  |    chat/             |     inicia um chat com o motorista |
|           PUT      |       chat/{id}        |    altera mensagens de um chat        |
|           POST     |        avaliarcorrida/        |     cria uma avaliação de uma corrida      |


