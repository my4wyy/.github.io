### 3.3.4 Processo 4 – SUPORTE AO USUÁRIO

![diagrama suporte ao usuário](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130784916/faf4df89-0916-4459-b49f-927c1cfcfd42)


#### Detalhamento das atividades
O processo de suporte ao usuário é fundamental para garantir que os usuários tenham uma experiência positiva e livre de problemas com o sistema de transporte coletivo alternativo. Este subprocesso lida especificamente com a assistência aos usuários que enfrentam dificuldades técnicas ou têm perguntas relacionadas ao serviço.
* **Recebimento de Solicitações de Suporte:** Os usuários podem entrar em contato com a equipe de suporte por meio do aplicativo, e-mail, chat ou telefone.
* **Criar fila de tickets:** As solicitações são recebidas e é criada uma fila na ordem de chegada.
* **Analisar solicitação:** É feita uma analise para ver o grau de dificuldade de resolução do problema.
* **Resolução de Problemas Simples:** Problemas simples e comuns são resolvidos imediatamente com respostas pré-definidas ou instruções simples.
* **Escalamento de Problemas Complexos:** Problemas complexos são encaminhados para equipes de suporte de nível superior ou desenvolvedores, quando necessário.
* **Comunicação com o Usuário:** A equipe de suporte mantém o usuário informado sobre o progresso da resolução do problema.
* **Avaliação de atendimento:** O usuário avalia o atendimento do suporte.
* **Registro e Documentação:** Todas as interações com os usuários e as soluções aplicadas são registradas para referência futura e melhoria contínua.


Os tipos de dados a serem utilizados são:

* **Área de texto** - campo texto de múltiplas linhas
* **Caixa de texto** - campo texto de uma linha
* **Número** - campo numérico
* **Data** - campo do tipo data (dd-mm-aaaa)
* **Hora** - campo do tipo hora (hh:mm:ss)
* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)
* **Imagem** - campo - contendo uma imagem
* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivos (tradicional radio button ou combobox)
* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)
* **Arquivo** - campo de upload de documento
* **Link** - campo que armazena uma URL
* **Tabela** - campo formado por uma matriz de valores

**Enviar Mensagem**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Mensagem  | Caixa de texto      |                |                |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar                 |Fim do processo         |Default           |



**Avaliar o atendimento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Chat de texto para avaliação | Caixa de texto  | |           |
|                 |                  |                |                   |

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Estrelas | Select | |           |        not null            
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar avaliação     | Fim do processo                | Default           |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Voltar      | Fim do processo                | Default            |




