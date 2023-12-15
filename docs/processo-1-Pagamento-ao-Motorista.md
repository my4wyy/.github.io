### 3.3.1 Processo 1 – Pagamento ao motorista

O processo de pagamento ao motorista do Vanbora, modelado no padrão BPMN, envolve diversas etapas: após o término de uma viagem, o sistema solicita os dados do motorista e calcula a tarifa da viagem. Em seguida, verifica a forma de pagamento do passageiro e efetua o pagamento em dinheiro. O sistema envia um comprovante ao motorista e encerra o processo. Assim, o processo tem como objetivo principal garantir que o pagamento ao motorista pela viagem seja efetuado de maneira eficaz e transparente.


![diagram_1](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/138057342/d00b7bfa-7300-49f3-a251-e2cc9931fef0)




  
**Receber Comprovante de Pagamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Valor Pago      | Númerico         | apenas valores númericos|     null      | null
| Cpf motorista     | Númerico         | apenas valores númericos|     null      | null
| Cpf cliente    | Númerico         | apenas valores númericos|     null      | null
| Conta Bancaria  | Númerico           | conta bancaria nacional          | null


| **Comandos**         |  **Destino**                             | **Tipo**          |
| ---                  | ---                                      | ---               |
| Continuar               |recebe o comprovante de pagamento | default



**Confirmar pagamento**

| **Campo**       | **Tipo**        | **Restrições**        | **Valor default** |
| ---             | ---             | ---                   | ---               |
| Método de pagamento         | Caixa de Texto  | null | null
| Valor Total        | Númerico  | apenas valores numericos   | null
| Cpf motorista     | Númerico         | apenas valores númericos|     null      | null
| Cpf cliente    | Númerico         | apenas valores númericos|     null      | null

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Confirmar e continuar         |confirma o metodo de pagamento e fim do processo | default
