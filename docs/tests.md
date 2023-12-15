## 7. Testes da solução

Nesta sessão são apresentados os dois tipos de testes realizados:

 - O **Teste de Unidade**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

_Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)._

# Teste de Unidade

_Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software. Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe quais testes unitários são responsáveis por verificar a conformidade com o caso de teste. Associe também o componente que está sendo testado. Veja a tabela de exemplo._



**Caso de Teste** | **CT01 - Aceitar Passageiros**
 :--------------: | ------------
**Procedimento**  | Aceitar passageiro para a corrida. |
**Dados de entrada** | null |
**Resultado obtido** | Passageiro aceito com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT02 - Recusar Passageiros**
 :--------------: | ------------
**Procedimento**  | Recusar passageiro para a corrida. |
**Dados de entrada** | null |
**Resultado obtido** | Passageiro recusado com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT03 - Aceitar Viagem**
 :--------------: | ------------
**Procedimento**  | Aceitar viagem de corrida. |
**Dados de entrada** | default |
**Resultado obtido** | Viagem aceita com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT04 - Recusar Viagem**
 :--------------: | ------------
**Procedimento**  | Recusar viagem de corrida. |
**Dados de entrada** | null |
**Resultado obtido** | Viagem aceita com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT05 - Confirmar os dados para a corrida **
 :--------------: | ------------
**Procedimento**  | Confirmar os dados da corrida. |
**Dados de entrada** | null |
**Resultado obtido** | Corrida confirmada com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT06 - Recusar  os dados para a corrida **
 :--------------: | ------------
**Procedimento**  | Recusar os dados da corrida. |
**Dados de entrada** | null |
**Resultado obtido** | Corrida recusada com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT07 -Solicitar viagem **
 :--------------: | ------------
**Procedimento**  | Solicitar uma viagem. |
**Dados de entrada** | Inserção de dados válidos |
**Resultado obtido** | Solicitação feita com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT08 -Solicitar viagem com dados inválidos **
 :--------------: | ------------
**Procedimento**  | Solicitar uma viagem. |
**Dados de entrada** | Inserção de dados inválidos |
**Resultado obtido** | Solicitação recusada. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT09 -  Confirmar comprovante de pagamento**
 :--------------: | ------------
**Procedimento**  | Confirmar comprovante de pagamento. |
**Dados de entrada** | null |
**Resultado obtido** | comprovante aceito com. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT10 -  Confirmar pagamento**
 :--------------: | ------------
**Procedimento**  | Confirmar que pagamento foi realizado. |
**Dados de entrada** | null |
**Resultado obtido** | pagamento realizado com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT11 -  Confirmar encerramento da viagem**
 :--------------: | ------------
**Procedimento**  | Confirmar que viagem foi encerrada. |
**Dados de entrada** | null |
**Resultado obtido** | viagem foi encerrada com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT12 -  Avaliar atendimento**
 :--------------: | ------------
**Procedimento**  | Avaliar atendimento do site. |
**Dados de entrada** | comentário e nota em estrelas |
**Resultado obtido** | avaliação do atendimento feita com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |


**Caso de Teste** | **CT13 -  Informar suporte**
 :--------------: | ------------
**Procedimento**  | Informar suporte sobre seu problema. |
**Dados de entrada** | comentário que explique o ocorrido |
**Resultado obtido** | informação enviada com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT14 -  Informar cpf para o suporte**
 :--------------: | ------------
**Procedimento**  | Informar suporte sobre seu cpf e problema. |
**Dados de entrada** | cpf válido e comentário que explique o ocorrido |
**Resultado obtido** | ticket enviado com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT15 -  Informar cpf inválido para o suporte**
 :--------------: | ------------
**Procedimento**  | Informar suporte sobre seu cpf e problema. |
**Dados de entrada** | cpf inválido e comentário que explique o ocorrido |
**Resultado obtido** | ticket não enviado. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT16 -  Calcular valor viagem**
 :--------------: | ------------
**Procedimento**  | Calcular valor da viagem. |
**Dados de entrada** | null |
**Resultado obtido** | valor calculado com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT17 -  Enviar valor viagem**
 :--------------: | ------------
**Procedimento**  | Enviar valor final da viagem ao úsuario. |
**Dados de entrada** | null |
**Resultado obtido** | valor final enviado com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT18 -  Enviar feedback**
 :--------------: | ------------
**Procedimento**  | Analisar feedback sobre o motorista. |
**Dados de entrada** | null |
**Resultado obtido** | feedback enviado para análise com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT19 -  Atrelar feedback ao motorista**
 :--------------: | ------------
**Procedimento**  |atrelar feedback sobre o motorista. |
**Dados de entrada** | null |
**Resultado obtido** | feedback atrelado ao motorista com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT20 -  Análisar feedback**
 :--------------: | ------------
**Procedimento**  | Análisar o feedback enviado pelo usuario. |
**Dados de entrada** | comentário sobre o feedback |
**Resultado obtido** | feedback análisado com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT20 -  Encerrar viagem**
 :--------------: | ------------
**Procedimento**  |Encerrar a viagem. |
**Dados de entrada** | null |
**Resultado obtido** | Viagem encerrada com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT21 -  Enviar mensagem**
 :--------------: | ------------
**Procedimento**  |Enviar mensagem. |
**Dados de entrada** | inserir mensagem |
**Resultado obtido** |Mensagem enviada com sucesso. |
**Teste unitário associado** | `UsuarioTest.testNewUser()` |




## Avaliação dos Testes de Unidade

Os resultados dos testes foi o supreendente. Podemos perceber que através de uma boa rede de testes que proteja nosso sistema na hora da inserção de informações no banco de dados,  ficamos seguros nas próximas etapas, pois os dados ja foram válidados e não corromperam a operação no futuro. Entretanto, percebemos que é necessário aprimorar esse sistema, dessa forma o grupo pretende melhorar ainda mais a qualidade do código para  aprimorar ainda mais o processo de validação de dados.



# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja realizar uma vigaem privada incluindo você e seu grupo de passageiro  |
| 2             | Você é uma pessoa que deseja realizar uma viagem compartilhada na qual é agendada para um dia específico. |



## Registro de Testes de Usabilidade

Cenário 1:Você é uma pessoa que deseja realizar uma vigaem privada incluindo você e seu grupo de passageiro

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 00:11:32 horas                  |
| 2       | SIM             | 5                    | 00:07:56 horas                  |
| 3       | SIM             | 4                    | 00:15:30 horas                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 00:10:13 |


    Comentários dos usuários: Achei incrível para ir para lugares com várias pessoas e não
    cabemos em um carro só é muito flexível prático e economizamos muito.




Cenário 2: Você é uma pessoa que deseja realizar uma viagem compartilhada na qual é agendada para um dia específico.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 48:22:54 horas                  |
| 2       | SIM             | 3                    | 72:23:10 horas                  |
| 3       | SIM             | 4                    | 37:49:15 horas                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                        |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 42:12:10                     |


    Comentários dos usuários: O site para viagem compartilhada, cumpre seu papel mas demora para
    encontrar outros passageiros pois ainda não é utilizado por muitas pessoas


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma média satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 3 (médio) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo de cada tipo de viagem , devido ao tempo de vida do aplicativo ser muito curto, o especialista/desenvolvedor em todos os enários teve uma média parecida com os clientes, já que o aplicativo depende dos motoristas presentes. 

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 55.2 horas — média de usuários que fizeram viagens privadas — contra 11,7 minutos - média de usuários que fizeram viagens compartilhadas  — no cenário dois), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação e esperamos uma maior quantidade de usuários para redução dessa discrepância.

