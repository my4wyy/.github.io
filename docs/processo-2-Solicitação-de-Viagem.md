### 3.3.2 Processo 2 –SOLICITAÇÃO DA VIAGEM

O processo de solicitação de viagens serve para proporcionar aos clientes viagens personalizadas com base em suas preferências e necessidades. Isso inclui a especificação de informações de partida e destino, número de passageiros e preferências de viagem. O foco do processo é otimizar a eficiência das viagens, formando grupos de passageiros com destinos semelhantes e calculando roteamentos personalizados. Os clientes têm a oportunidade de aceitar a proposta da agência, que confirma a viagem e fornece detalhes relevantes, culminando com o registro da viagem no sistema da agência.

![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130924593/673a22dc-ddd4-41d1-9383-d206d87e0277)



#### Detalhamento das atividades
Neste processo, os usuários solicitam uma viagem personalizada com base em seu local atual, destino e preferências.
* **Escrever Informações da Viagem:** Cliente especifica local de partida, destino, número de passageiros e preferências (como carro compartilhado ou viagem privativa).
* **Informar a quantidade de passgaeiros:** Cliente informa quantos passageiros irão viajar.
* **Aceitar de Passageiros:** A agencia busca outros passageiros com destinos semelhantes e propõe a formação de um grupo de viagem.
* **Calcular o Roteamento Personalizado:** A agencia calcula o melhor itinerário com base nas informações fornecidas.
* **Aceitar a Proposta:** Os usuários concordam com a formação do grupo e o roteamento proposto.
* **Confirmar a Viagem:** A agencia confirma a viagem e fornece detalhes, incluindo horário de partida e local de encontro.
* **Cadastrar Viagem:** A agencia cadastra a viagem no nosso sistema.

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

**Escrever Informações da Viagem**

| **Campo**        | **Tipo**         | **Restrições** | **Valor default** |
| ---              | ---              | ---            | ---               |
| Local de partida | Caixa de Texto   | Formato de endereço| Local Atual   |
| Destino          | Caixa de Texto   | Formato de endereço|     null      |
| Numero de passageiros| Número       | Apenas números     |     null      |
| Data da viagem       | Data   |         --         |     null      |
| Tipo de viagem     | Caixa de Texto   |         --         |     null      |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---            |
| Solicitar            | Fim do processo de solicitação |(default/cancel/  )|
| Ver Proposta         | Fim do processo de solicitação |                |


**Aceitar de Passageiros**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Local de partida | Caixa de Texto   | Formato de endereço| Local Atual   |
| Destino          | Caixa de Texto   | Formato de endereço|  null         |
| Numero de passageiros| Número       | Apenas números     |  null         |
| Data            | Data             |     --             |  null         |
| Valor            | Valor             |     --             |  null         |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Aceitar              | Fim do agrupamento de passageiros | (default/cancel/  ) |
| Recusar              | Fim do agrupamento de passageiros | (default/cancel/  ) |

**Aceitar a Proposta**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|Nome Motorista   | Texto            |Nome            |                   |
|Placa            | Texto            |     --         |                   |
|Avaliação        | Texto            | --             |                   |
|Estrelas         | Número           | --             |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Aceitar              | Inicio da viagem               |(default/cancel/  )  |            
| Recusar              | Fim do processo de solicitar  |          |            |

**Confirmar a Viagem**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|Local de Saida   | Caixa de texto   |      -         |                   |
|Destino          | Caixa de texto   |     --             |  null         |
|Nome             | Caixa de texto   |      --        |                   |
| Metodo de Pagamento| Caixa de texto      | --       |     null      |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Confirmar            | Fim do armazenamento           | (default/cancel/  )|
| Recusar              | Fim do armazenamento            |          |        |


