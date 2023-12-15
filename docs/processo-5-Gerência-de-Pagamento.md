### 3.3.5 Processo 5 – GERÊNCIA DE PAGAMENTO
O processo de Gerenciamento de Pagamentos é responsável por assegurar a precisão e eficiência dos pagamentos efetuados pelos usuários. Abrangendo também a resolução de problemas de pagamento, este processo engloba tarifas, o cálculo de custos, a efetuação dos pagamentos pelos usuários, e o suporte em casos de erro.

![absence-request (5)]![absence-request (6)](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130785414/676dd5c0-6e85-4225-af4d-995029b1b105)





#### Detalhamento das atividades
O processo de gerência de pagamento é responsável por garantir a precisão e a eficiência dos pagamentos feitos pelos usuários pelos serviços de transporte coletivo alternativo. Ele abrange desde a definição de tarifas até a liquidação financeira e a resolução de problemas de pagamento.
* **Cadastrar de Tarifas:** Estabelecer tarifas do aplicativo, apenas uma vez para armazenar no banco de dados.
* **Cálcular Custos:** Calcular os custos das viagens com base nas tarifas estabelecidas e nos dados de uso.
* **Enviar valor a ser pago:** Encaminhar para o usuário o valor total que deve ser pago.
* **Efetuar pagamento:** O usuário realiza o pagamento da viagem.
* **Solicitar contato com o suporte:** Caso ocorra qualquer erro no processo, o usuário envia um ticket de suporte.
* **Coletar Pagamento:** Coletar pagamentos dos usuários, dinheiro ou pix.
* **Verificar Pagamento:** Verificar a autenticidade e a validade dos pagamentos realizados pelos usuários.
* **Comunicar usuário do erro cometido:** O motorista comunica ao usuário que ele cometeu um erro ao realizar o pagamento. 

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


**Cálcular custos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| ID da viagem | Numérico|ID existente|        Null           |
| Valor sem taxa | Numérico|ID existente|        Null           |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Calculando |Fim do processo |   Default |




**Valor a ser pago**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| ID da viagem | Numérico|ID existente|        Null           |
| Valor da viagem | Numérico|Apenas valores números|        Null           |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Envia valor ao usuário |Fim do processo |   Default |



**Efetuar pagamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|Dados do pagamento| Tabela|Valores numéricos| Default               |





