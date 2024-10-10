# Trabalho Individual - Módulo de Programação Orientada a Objetos

## Sistema de Aprovação de Empréstimos 💰

### Objetivo:
Desenvolver um sistema automatizado que faça a análise e aprovação de solicitações de empréstimos com base em critérios específicos, utilizando os conceitos de Programação Orientada a Objetos (POO). Neste sistema, as solicitações são classificadas em três tipos: **Empréstimo Pessoal**, **Empréstimo Automóvel** e **Empréstimo Estudantil**.

### Critérios de Aprovação:
Cada tipo de empréstimo tem seus próprios critérios de aprovação. Para um empréstimo ser aprovado, ele deve atender às seguintes condições:

1. **Critérios Gerais** (para todos os tipos):
   - O solicitante deve ter **no mínimo 18 anos**.
   - O valor total do empréstimo deve ser igual ao **número de parcelas multiplicado pelo valor de cada parcela**.

2. **Empréstimo Pessoal**:
   - O solicitante deve ter **renda mensal superior a R$ 2.500,00**.

3. **Empréstimo Automóvel**:
   - O solicitante deve ter **renda mensal superior a R$ 3.000,00**.
   - O solicitante deve **possuir habilitação**.

4. **Empréstimo Estudantil**:
   - O solicitante deve ter **entre 18 e 30 anos**.
   - O solicitante deve ter **renda superior a R$ 1.500,00**.
   - O solicitante deve estar **matriculado em uma instituição de ensino superior**.

### O que é TypeScript (TS) e suas vantagens 🚀
**TypeScript** (TS) é uma linguagem de programação desenvolvida pela Microsoft que estende o JavaScript com suporte para **tipagem estática**. Isso significa que, com TS, é possível definir tipos de dados para variáveis, parâmetros de funções, atributos de classes, entre outros.

#### Vantagens da Tipagem Forte no TypeScript:
- **Detecção de Erros em Tempo de Compilação**: A tipagem forte permite que erros comuns, como atribuir valores incorretos a variáveis, sejam detectados antes mesmo da execução do código, melhorando a qualidade do software.
- **Autocompletar e Suporte a IDE**: A tipagem facilita o uso de ferramentas de autocompletar, tornando o desenvolvimento mais rápido e menos sujeito a erros.
- **Facilidade na Refatoração**: Com o TypeScript, alterações estruturais no código podem ser feitas com mais segurança, pois os tipos garantem que as mudanças sejam consistentes.
- **Documentação Implícita**: O uso de tipos serve como uma forma de documentação do código, facilitando o entendimento por outros desenvolvedores.

### Conceitos Utilizados no Projeto 💡

1. **Arrays**: São utilizados para armazenar as solicitações de empréstimo. Em **TypeScript**, arrays são tipados, ou seja, espera-se que todos os elementos do array tenham o mesmo tipo.
   - Exemplo: `solicitacoes: Emprestimo[]` armazena um array de objetos do tipo **Emprestimo**.

2. **Classes**: São estruturas que permitem criar objetos com atributos e métodos. No contexto deste projeto, as classes representam diferentes tipos de empréstimos e encapsulam a lógica para a aprovação.

3. **Classes Abstratas**: No projeto, a classe `Emprestimo` é uma **classe abstrata**, que serve como modelo para outras classes derivadas (como `EmprestimoPessoal`, `EmprestimoAutomovel`, e `EmprestimoEstudantil`). Classes abstratas não podem ser instanciadas diretamente, mas fornecem métodos e atributos que serão compartilhados pelas subclasses.

4. **Herança**: As classes específicas de empréstimos (pessoal, automóvel e estudantil) **herdam** da classe `Emprestimo`. A herança permite que as subclasses reutilizem o código da classe pai e implementem comportamentos específicos para cada tipo de empréstimo.

5. **Polimorfismo**: No contexto da herança, o **polimorfismo** permite que diferentes tipos de empréstimos sejam tratados de maneira uniforme. Por exemplo, o método `aprovarEmprestimo` é definido na classe `Emprestimo`, mas cada tipo de empréstimo implementa sua própria lógica de aprovação.

6. **Visibilidade de Métodos e Atributos**: No projeto, utilizamos os modificadores de visibilidade para controlar o acesso aos atributos e métodos das classes:
   - `private`: O acesso é restrito à própria classe.
   - `public`: O acesso é permitido de qualquer lugar.
   - `protected`: O acesso é permitido para a própria classe e suas subclasses.

### Escopo do Sistema:
O sistema deve:
- Receber diariamente uma lista de solicitações de empréstimos, no formato de objetos contendo informações como nome, idade, valor do empréstimo, número de parcelas, renda mensal, entre outros.
- Processar essas solicitações, aplicando os critérios de aprovação.
- Listar as solicitações aprovadas e reprovadas, no seguinte formato:
   ```
   - Nome Solicitante 1 [APROVADO]
   - Nome Solicitante 2 [REPROVADO]
   ```

O uso correto dos conceitos de orientação a objetos, como **herança**, **polimorfismo** e **encapsulamento**, é essencial para a implementação eficaz desse sistema. O projeto reforça a importância de uma estrutura bem definida e modularizada, onde cada parte do código é responsável por um aspecto específico do problema.