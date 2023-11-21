/**
 * Classe abstrata Emprestimo
 * Representa um empréstimo genérico com atributos e métodos para aprovação.
 */
abstract class Emprestimo {
    // Atributos da classe Emprestimo
	private nome: String;
	private idade: number;
	private valorDoEmprestimo: number;
	private quantidadeDeParcelas: number;
	private rendaMensalDoSolicitante: number;
	private possuiHabilitacao: boolean;
	private ehEstudante: boolean;

    /**
     * Construtor da classe Emprestimo
     * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		this.nome = $nome;
		this.idade = $idade;
		this.valorDoEmprestimo = $valorDoEmprestimo;
		this.quantidadeDeParcelas = $quantidadeDeParcelas;
		this.rendaMensalDoSolicitante = $rendaMensalDoSolicitante;
		this.possuiHabilitacao = $possuiHabilitacao;
		this.ehEstudante = $ehEstudante;
	}

    /**
     * Getter e Setter para o atributo nome
     */
	public get $nome(): String {
		return this.nome;
	}
	public set $nome(value: String) {
		this.nome = value;
	}

    /**
     * Getter e Setter para o atributo idade
     */
	public get $idade(): number {
		return this.idade;
	}
	public set $idade(value: number) {
		this.idade = value;
	}

    /**
     * Getter e Setter para o atributo valorDoEmprestimo
     */
	public get $valorDoEmprestimo(): number {
		return this.valorDoEmprestimo;
	}
	public set $valorDoEmprestimo(value: number) {
		this.valorDoEmprestimo = value;
	}

    /**
     * Getter e Setter para o atributo quantidadeDeParcelas
     */
	public get $quantidadeDeParcelas(): number {
		return this.quantidadeDeParcelas;
	}
	public set $quantidadeDeParcelas(value: number) {
		this.quantidadeDeParcelas = value;
	}

    /**
     * Getter e Setter para o atributo rendaMensalDoSolicitante
     */
	public get $rendaMensalDoSolicitante(): number {
		return this.rendaMensalDoSolicitante;
	}
	public set $rendaMensalDoSolicitante(value: number) {
		this.rendaMensalDoSolicitante = value;
	}

    /**
     * Getter e Setter para o atributo possuiHabilitacao
     */
	public get $possuiHabilitacao(): boolean {
		return this.possuiHabilitacao;
	}
	public set $possuiHabilitacao(value: boolean) {
		this.possuiHabilitacao = value;
	}

    /**
     * Getter e Setter para o atributo ehEstudante
     */
	public get $ehEstudante(): boolean {
		return this.ehEstudante;
	}
	public set $ehEstudante(value: boolean) {
		this.ehEstudante = value;
	}

	/**
	 * Método abstrato para aprovar um empréstimo.
	 * @returns {boolean} - Retorna true se o empréstimo for aprovado, false caso contrário.
	 */
	public aprovarEmprestimo(): boolean {
		let aprovado: boolean = false;
		return aprovado;
	}
	/**
	 * Método estático para verificar aprovação de empréstimos em um array de solicitações.
	 * @param solicitacoes - Array de objetos Emprestimo para análise de aprovação.
	 */
	static verificarTudo(solicitacoes: Emprestimo[]): void {
		for (const solicitacao of solicitacoes) {
			console.log(
				`Solicitante: ${solicitacao.nome} [${
					solicitacao.aprovarEmprestimo() ? "APROVADO" : "REPROVADO"
				}]`
			);
			solicitacao.aprovarEmprestimo;
		}
	}
}

/**
 * Classe EmprestimoPessoal - Subclasse de Emprestimo
 * Representa um empréstimo pessoal com lógica específica de aprovação.
 */
class EmprestimoPessoal extends Emprestimo {
    /**
     * Construtor da classe EmprestimoPessoal
     * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		super(
			$nome,
			$idade,
			$valorDoEmprestimo,
			$quantidadeDeParcelas,
			$rendaMensalDoSolicitante,
			$possuiHabilitacao,
			$ehEstudante
		);
	}
      /**
     * Implementação do método aprovarEmprestimo específico para empréstimo pessoal
     * @returns {boolean} - Retorna true se o empréstimo for aprovado, false caso contrário.
     */
	public aprovarEmprestimo(): boolean {
		let ehMaiorDeIdade: boolean = this.$idade >= 18;
		let possuiRendaSuficiente: boolean = this.$rendaMensalDoSolicitante > 2500;
		let podePagarParcela: boolean =
			this.$valorDoEmprestimo / this.$quantidadeDeParcelas <=
			this.$rendaMensalDoSolicitante * 0.3;

		return ehMaiorDeIdade && possuiRendaSuficiente && podePagarParcela;
	}
}
class EmprestimoAutomovel extends Emprestimo {
     /**
     * Construtor da classe EmprestimoAutomovel
     * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		super(
			$nome,
			$idade,
			$valorDoEmprestimo,
			$quantidadeDeParcelas,
			$rendaMensalDoSolicitante,
			$possuiHabilitacao,
			$ehEstudante
		);
	}

    /**
     * Implementação do método aprovarEmprestimo específico para empréstimo automóvel
     * @returns {boolean} - Retorna true se o empréstimo for aprovado, false caso contrário.
     */
	public aprovarEmprestimo(): boolean {
		let ehMaiorDeIdade: boolean = this.$idade >= 18;
		let possuiRendaSuficiente: boolean = this.$rendaMensalDoSolicitante > 3000;
		let podePagarParcela: boolean =
			this.$valorDoEmprestimo / this.$quantidadeDeParcelas <=
			this.$rendaMensalDoSolicitante * 0.3;

		return (
			ehMaiorDeIdade &&
			possuiRendaSuficiente &&
			podePagarParcela &&
			this.$possuiHabilitacao
		);
	}
}

/**
 * Classe EmprestimoEstudantil - Subclasse de Emprestimo
 * Representa um empréstimo estudantil com lógica específica de aprovação.
 */
class EmprestimoEstudantil extends Emprestimo {
     /**
     * Construtor da classe EmprestimoEstudantil
     * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		super(
			$nome,
			$idade,
			$valorDoEmprestimo,
			$quantidadeDeParcelas,
			$rendaMensalDoSolicitante,
			$possuiHabilitacao,
			$ehEstudante
		);
	}
     /**
     * Implementação do método aprovarEmprestimo específico para empréstimo estudantil
     * @returns {boolean} - Retorna true se o empréstimo for aprovado, false caso contrário.
     */
	public aprovarEmprestimo(): boolean {
		let ehMaiorDeIdade: boolean = this.$idade >= 18;
		let possuiRendaSuficiente: boolean = this.$rendaMensalDoSolicitante > 3000;
		let podePagarParcela: boolean =
			this.$valorDoEmprestimo / this.$quantidadeDeParcelas <=
			this.$rendaMensalDoSolicitante * 0.3;

		return (
			ehMaiorDeIdade &&
			possuiRendaSuficiente &&
			podePagarParcela &&
			this.$ehEstudante
		);
	}
}

const solicitacoes: Emprestimo[] = [];

// Adiciona 4 objetos de `EmprestimoPessoal`
solicitacoes.push(
	new EmprestimoPessoal("Fulano", 25, 10000, 12, 5000, false, false)
);
solicitacoes.push(
	new EmprestimoPessoal("Beltrano", 30, 20000, 24, 10000, true, false)
);
solicitacoes.push(
	new EmprestimoPessoal("Ciclano", 40, 30000, 36, 15000, false, true)
);
solicitacoes.push(
	new EmprestimoPessoal("Dulcinéia", 50, 40000, 48, 20000, true, true)
);

// Adiciona 4 objetos de `EmprestimoAutomovel`
solicitacoes.push(
	new EmprestimoAutomovel("Eduardo", 22, 50000, 60, 3000, true, false)
);
solicitacoes.push(
	new EmprestimoAutomovel("Felipe", 28, 60000, 72, 4000, true, false)
);
solicitacoes.push(
	new EmprestimoAutomovel("Guilherme", 34, 70000, 84, 5000, false, true)
);
solicitacoes.push(
	new EmprestimoAutomovel("Heitor", 40, 80000, 96, 6000, true, true)
);

// Adiciona 4 objetos de `EmprestimoEstudantil`
solicitacoes.push(
	new EmprestimoEstudantil("Igor", 18, 10000, 12, 500, true, true)
);
solicitacoes.push(
	new EmprestimoEstudantil("Júlio", 22, 20000, 24, 1000, true, true)
);
solicitacoes.push(
	new EmprestimoEstudantil("Kleber", 26, 30000, 36, 1500, true, true)
);
solicitacoes.push(
	new EmprestimoEstudantil("Lucas", 30, 40000, 48, 2000, true, true)
);

// Chama o método `verificarTudo()`
Emprestimo.verificarTudo(solicitacoes);
