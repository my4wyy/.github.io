# VanBora


** Felipe Freitas Campos Picinin, picinin.felipe2@gmail.com**
** Miguel Vieira de Souza, migvsouza100@gmail.com **
** Maisa Pires de Andrade, maisa.andrade@sga.pucminas.br**
** Lucas Ferreira Garcia, lucasferreiragarcia04@gmail.com**
** Gabriel Ferreira Amaral, gabriel.afa@outlook.com**


---

Professores:

** Prof. Hugo Bastos de Paula **

** Prof. Juliana Amaral Baroni de Carvalho **

** Prof. Eveline Alonso **

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

A proposta da VanBora busca transformar a mobilidade urbana, oferecendo um inovador serviço de transporte compartilhado para grupos em eventos e locais movimentados. O objetivo é criar uma solução eficiente e acessível, utilizando um software que otimiza o uso de veículos, reduz custos e proporciona uma experiência amigável aos usuários. A justificativa baseia-se na crescente demanda por opções de transporte para eventos, especialmente após um aumento significativo no setor em 2021. A dor enfrentada pelos usuários é a falta de opções para grupos maiores em áreas congestionadas. O software visa facilitar a locomoção, economizar custos e promover a sustentabilidade. O plano de implementação inclui fases de desenvolvimento, testes, implementação e expansão. A proposta, quando bem-sucedida, promete melhorar a mobilidade urbana, satisfazer a demanda do mercado e oferecer uma alternativa inovadora aos tradicionais aplicativos de transporte individual.

---


## 1. Introdução

Nossa proposta aborda transportes de baixo custo que atenda a um número maior de pessoas do que o possível em um carro comum.
### 1.1 Contextualização

Nosso trabalho é na área de transportes e locomoção, onde nosso objetivo é disponibilizar transportes que atenda a um número maior de pessoas do que o possível em um carro comum, principalmente em eventos, festas entre outros. No setor de eventos, segundo a Associação Brasileira de Eventos, em 2021, houve um crescimento de 400% no setor, comparado ao ano de 2020, e em 2022 o Brasil completou mais de 600 mil eventos concluídos. Além disso, o Brasil possui cerca de 1,66 milhão de pessoas trabalhando como entregador e motorista para aplicativos, sendo 1.274.281 motoristas.O mercado de mobilidade urbana é de aproximadamente R$ 370 bilhões e tem muito potencial, mas ainda é pouco explorado.


### 1.2 Problema

A dor enfrentada pelas pessoas que desejam comparecer a eventos é a carência de opções de transporte confortáveis acessíveis para mais do que 4 pessoas, que operem em áreas movimentadas e congestionadas durante os horários de menor tráfego. 
### 1.3 Objetivo geral

criar um software de transporte compartilhado para pessoas próximas e com destinos semelhantes.

#### 1.3.1 Objetivos específicos

Eficiência de Transporte: O software visa otimizar a utilização de veículos ao agrupar passageiros que compartilham rotas semelhantes, reduzindo a quantidade de viagens individuais e diminuindo a congestão do tráfego.

Redução de Custos: Ao permitir que os usuários compartilhem viagens, os custos serão reduzidos em comparação com viagens individuais em aplicativos de transporte tradicionais.

Experiência do Usuário: Proporcionar uma experiência de transporte mais amigável ao usuário, permitindo que grupos de amigos e conhecidos viagem juntos, evitando a separação causada por múltiplas viagens individuais.

### 1.4 Justificativas

Esse software visa facilitar a locomoção pela cidade através da implementação de um inovador transporte coletivo alternativo, que se adequa ao horário,local e destino do cliente, ao mesmo tempo em que ajuda o usuário(motorista) ao evitar que o mesmo desperdice gasolina e tempo vagando pelos centros urbanos sem nenhuma chamada de corrida. Esse novo método de transporte tem como foco grupos de pessoas, conhecidas ou não, que possuem um destino semelhante traçando o melhor itinerário personalizado para cada viagem, satisfazendo a necessidade de todos de maneira fácil e prática.
## 2. Participantes do processo

Mara, é exemplo de um cliente, jovem e animada de 20 anos, adora sair para se divertir com seu grupo de cinco amigas. No entanto, sempre enfrentam o mesmo dilema: como encontrar uma maneira conveniente de chegar aos eventos. A maioria dos aplicativos de carona acomoda, no máximo, de 3 a 4 pessoas, o que significa que elas geralmente precisam solicitar dois carros. Isso não apenas encarece a viagem, mas também pode levar a que elas se desencontram ao chegar no evento.

João é  exemplo de um motorista de van, de 42 anos que se dedica ao transporte de turistas durante as temporadas de alta demanda. Ele é apaixonado pelo seu trabalho, mas enfrenta desafios financeiros devido à sazonalidade da indústria do turismo, o que afeta sua lucratividade.

Agentes da equipe vanbor auxiliam em todos os processos por meio do sistema.


## 3. Modelagem do processo de negócio

### 3.1. Análise da situação atual

Atualmente, a locomoção durante eventos e horários de tráfego reduzido é dominada pelos aplicativos de transporte individual, como Uber e 99taxi. Embora esses aplicativos sejam uma alternativa viável, enfrentam limitações quando lidam com grupos maiores que requerem o mesmo serviço. Para superar essa limitação, surge a proposta inovadora de um software para transporte compartilhado. Esse conceito visa suprir essa lacuna ao oferecer uma solução personalizada e escalável para atender à demanda de transporte em momentos de menor movimento, maximizando a conveniência e eficiência nas áreas urbanas. 

Processo 1 - Pagamento ao motorista:
Atualmente as empresas de transporte pagam seus motoristas de maneira semanal, onde uma taxa é descontada pela empresa e o restante vai para o motorista. As taxas variam de 1% a 40% e o dinheiro cai diretamente na conta do motorista.

Processo 2 - Solicitação de Viagem:
Para solicitar viagens, em empresas como Uber e 99pop, os passageiros solicitam de maneira online pelo telefone. Eles podem chamar um táxi por telefone ou apenas pedir para algum que esteja na redondeza. Além disso, existem transportes públicos, mas que possuem horários e locais fixos e não possuem um modo de solicitação de viagem

Processo 3 - Execução da Viagem:
Durante a viagem, o motorista segue o Gps ou o caminho desejado pelo passageiro. No caminho o passageiro pode relaxar e pedir para alterar algo como musica, temperatura caso seja necessário. Ao chegar ao destino, o passageiro conclui a viagem e desembarca do carro.

PROCESSO 4 - Suporte ao Usuário: 
O processo de suporte ao usuário nos sistemas atuais envolve a utilização de chatbots e atendimento automatizado para responder a perguntas comuns e equipes de suporte técnico para resolver problemas mais complexos. Bases de conhecimento são mantidas para permitir que os usuários encontrem soluções por conta própria, e o feedback dos usuários é coletado por meio de pesquisas e formulários para melhorar continuamente a qualidade do suporte.

PROCESSO 5 - Gerência de Pagamento: 
A gerência de pagamento é realizada de forma manua, feita por fora do sistema com dinheiro em espécie, ou o pix da empresa. o dinheiro depois é recolhido e processado para as financias da VanBora.

PROCESSO 6 - Feedback do Usuário: 
Os sistemas atuais coletam feedback dos usuários por meio de pesquisas online, avaliações, comentários e monitoramento de redes sociais. Essas informações são usadas para melhorar produtos, serviços e a experiência geral do cliente. Algumas empresas adotam sistemas centralizados para gerenciar e analisar o feedback de várias fontes, permitindo ações orientadas por dados.
.

### 3.2. Descrição geral da proposta

A proposta da VanBora, busca revolucionar a maneira como as pessoas se deslocam em momentos de menor demanda e em grupos maiores. O projeto visa criar uma solução escalável, conveniente e eficiente para atender às necessidades de transporte em áreas urbanas, ao mesmo tempo em que alivia o tráfego nas ruas.

#### 3.2.1 Processos TO-BE

A implementação bem-sucedida desse software requer a otimização de diversos processos:

Pagamento ao motorista: O sistema solicita os dados do motorista e calcula a tarifa da viagem. Em seguida, o motorista recebe o pagamento em dinheiro ou fiscaliza o pagamento via pix. 

Solicitação da Viagem: O sistema terá uma interface simples para inserção de detalhes da viagem. Algoritmos otimizarão agrupamento de solicitações e roteirização, economizando tempo e minimizando desvios.

Execução da Viagem: Notificações em tempo real serão fornecidas aos passageiros com horários e rotas. Motoristas seguirão rotas otimizadas com ajuda de sistemas de navegação.

Suporte ao Usuário: Um sistema de suporte ao usuário estará disponível para resolver dúvidas e problemas rapidamente, com atendimento personalizado.

Gerência de Pagamento: Um sistema calculará automaticamente os custos e dividirá entre os passageiros. 

Feedback do Usuário: Feedback dos usuários será coletado após cada viagem, com análise de dados para identificar melhorias e implementá-las continuamente.

#### 3.2.2 Oportunidades de Melhoria

Mobilidade Urbana: Reduz a quantidade de veículos nas ruas, diminuindo o congestionamento e melhorando a mobilidade urbana.

Satisfação do Cliente: Atende à demanda de grupos maiores de passageiros, evitando a separação e proporcionando uma experiência positiva e compartilhada.

A implementação bem-sucedida desses processos TO-BE resultará em benefícios tangíveis para os usuários, a cidade e o meio ambiente, transformando a maneira como as pessoas se deslocam em áreas urbanas.


### 3.3. Modelagem dos processos

[PROCESSO 1 - Pagamento ao Motorista](processo-1-Marketing-e-Divulgacao-do-Produto.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Solicitação de Viagem](processo-2-Solitcitação-da-Viagem.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Viagem](processo-3-Execução-da-Viagem.md "Detalhamento do Processo 3.")

[PROCESSO 4 - Suporte ao Usuário](processo-4-Suporte-ao-Usuário.md "Detalhamento do Processo 4.")

[PROCESSO 5 - Gerência de Pagamento](processo-5-Gerência-de-Pagamento.md "Detalhamento do Processo 5.")

[PROCESSO 6 - Feedback do Usuário](processo-6-Feedback-do-Usuario.md "Detalhamento do Processo 6.")

## 4. Projeto da solução

O documento a seguir apresenta o detalhamento do projeto da solução. São apresentadas cinco seções que descrevem, respectivamente: diagrama de classes, diagrama de componentes, diagrama de entidade-relacionamento, tecnologias utilizadas e guias de estilo.

[Projeto da solução](solution-design.md "Detalhamento do Projeto da solução: classes, componentes, der, tecnologias e guias de estilo.")


## 5. Indicadores de desempenho

O documento a seguir apresenta os indicadores de desempenho dos processos.

[Indicadores de desempenho dos processos](performance-indicators.md)


## 6. Interface do sistema

A sessão a seguir apresenta a descrição do produto de software desenvolvido. 

[Documentação da interface do sistema](interface.md)

## 7. Testes

A sessão a seguir apresenta a descrição dos testes de unidade e testes de usabilidade realizados. 

[Testes do sistema](tests.md)

## 8. Conclusão

Como conclusão,ao analisarmos os resultados do projeto, percebemos que a ideia do VanBora tem o potencial de melhorar a mobilidade urbana, trazendo vantagens tanto para os usuários quanto para os motoristas de app. Vemos que há espaço para crescimento, o que reforça a viabilidade do VanBora como uma solução fácil de usar e relevante. Durante o desenvolvimento, melhoramos nossas habilidades de programação e trabalhamos melhor em equipe, o que foi uma experiência de aprendizado bastante útil.



# REFERÊNCIAS

_Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT._

_Verifique no link abaixo como devem ser as referências no padrão ABNT:_

http://www.pucminas.br/imagedb/documento/DOC_DSC_NOME_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES


_Atualizar os links e adicionar novos links para que a estrutura do código esteja corretamente documentada._


## Apêndice A - Código fonte

[Código do front-end](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/tree/Documentation-uncorrected/assets/Front-end/Pagina)

[Código do back-end](https://github.com/Druitti/springbootaplication.git) 


## Apêndice B - Apresentação final


[Slides da apresentação final](https://docs.google.com/presentation/d/1HJd3NgtQx_anSnF71DWMLjqfK_rbxZgY3wyMHiWrVXI/edit?usp=sharing)


[Vídeo da apresentação final](https://www.youtube.com/watch?v=AFlN-v1bHMU)






