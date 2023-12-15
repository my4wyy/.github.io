### 3.3.6 Processo 6 – FEEDBACK DO USUÁRIO


![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130924593/dfc9e0fd-abeb-40cc-b4f5-c66fe07d6efb)




#### Detalhamento das atividades
Este subprocesso se concentra exclusivamente na coleta e gestão de feedback do usuário, com o objetivo de reunir informações valiosas para melhorar a experiência do usuário e a qualidade do serviço.
* **Coleta Ativa:** Solicitação ativa de feedback dos usuários após interações específicas, como viagens concluídas.
* **Acompanhamento de Avaliações:** Acompanhamento das avaliações dadas pelos usuários após cada viagem.
* **Classificação e Categorização:** Classificação do feedback em categorias como sugestões, elogios, reclamações e problemas técnicos.
* **Priorização de Feedback:** Identificação das preocupações mais críticas e prioritárias com base na gravidade e frequência.
* **Registro e Documentação:** Registro de todos os comentários e sugestões dos usuários para referência futura.
* **Comunicação Interna:** Compartilhamento das informações coletadas com as equipes relevantes, como desenvolvimento, suporte e gerência, para ações subsequentes.

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

**Avaliação usuario**

| **Campo**       | **Tipo** | **Restrições** | **Valor default** |
| ---             | ---      | ---            | ---               |
|Estrelas|Caixa de seleção| Not null| 
|Comentário|Caixa de texto| Not null| 


| **Comandos**    |  **Destino**     | **Tipo**       |
| ---             | ---              | ---            |
|Enviar| Fim do processo | default|

**Analisar Feedback**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  Feedback do usuário atendido | Texto  |  Mínimo de uma palavra              |                |
|   Feedback  |   Texto   |                |    5 estrelas    |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Ok     |fim do processo      | |


**Responder o Feedback**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  Cpf do usuário | Texto             |                |                |
|   Resposta      |   Caixa de Texto   |                |    5 estrelas    |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Enviar analise       |fim do processo      | |









