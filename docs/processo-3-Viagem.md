### 3.3.3 Processo 3 – VIAGEM

O Processo Viagem tem como foco garantir que as viagens planejadas sejam realizadas de forma eficaz e satisfatória para os clientes. Este processo lida com a execução das viagens, busca de passageiros nas localizações designadas, notificações de chegada ao destino, encerramento da viagem e a oportunidade para os usuários avaliarem os motoristas posteriormente. 
![absence-request (4)](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-2-ti2-1372100-vanbora/assets/130785414/267d2c1e-98dc-4271-926b-0c3125031cce)




#### Detalhamento das atividades
Este processo abrange a execução eficiente da viagem planejada, com monitoramento em tempo real e atualizações para os passageiros.
* **Buscar passageiros em suas localizações:** Motorista busca todos os passageiros em suas respectivas localizações.
* **Chegar ao Destino:** O sistema notifica os passageiros quando a viagem está prestes a chegar ao destino.
* **Encerrar Viagem:** A viagem é encerrada e os custos são calculados automaticamente.
* **Avaliar no aplicativo:** Usuário avalia motorista pelo aplicativo.


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



**Encerrar viagem - passageiro**

| **Campo**       | **Tipo** | **Restrições** | **Valor default** |
| ---             | ---      | ---            | ---               |
|Fim do percurso | Imagem| Imagem| 


| **Comandos**    |  **Destino**     | **Tipo**       |
| ---             | ---              | ---            |
| Encerrar| Fim do processo | default|


**Encerrar viagem - motorista**

| **Campo**       | **Tipo** | **Restrições** | **Valor default** |
| ---             | ---      | ---            | ---               |
|Fim do percurso | Imagem| Imagem| 


| **Comandos**    |  **Destino**     | **Tipo**       |
| ---             | ---              | ---            |
| Encerrar| Fim do processo | default|

**Avaliar - passageiro**

| **Campo**       | **Tipo** | **Restrições** | **Valor default** |
| ---             | ---      | ---            | ---               |
|Estrelas|Caixa de seleção| Not null| 
|Comentário|Caixa de texto| Not null| 


| **Comandos**    |  **Destino**     | **Tipo**       |
| ---             | ---              | ---            |
|Enviar| Fim do processo | default|







