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
	private valorDasParcelas: number;
	private rendaMensalDoSolicitante: number;
	private possuiHabilitacao: boolean;
	private ehEstudante: boolean;

    /**
     * Construtor da classe Emprestimo
     * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $valorDasParcelas - valor das parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$valorDasParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		this.nome = $nome;
		this.idade = $idade;
		this.valorDoEmprestimo = $valorDoEmprestimo;
		this.quantidadeDeParcelas = $quantidadeDeParcelas;
		this.valorDasParcelas = $valorDasParcelas;
		this.rendaMensalDoSolicitante = $rendaMensalDoSolicitante;
		this.possuiHabilitacao = $possuiHabilitacao;
		this.ehEstudante = $ehEstudante;
	}

	
    /**
     * Getter $valorDasParcelas
     * @return {number}
     */
	public get $valorDasParcelas(): number {
		return this.valorDasParcelas;
	}

    /**
     * Setter $valorDasParcelas
     * @param {number} value
     */
	public set $valorDasParcelas(value: number) {
		this.valorDasParcelas = value;
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
     * Construtor da classe Emprestimo Pessoal
     * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $valorDasParcelas - valor das parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$valorDasParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		super(
			$nome,
			$idade,
			$valorDoEmprestimo,
			$quantidadeDeParcelas,
			$valorDasParcelas,
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
		let valorConfere: boolean = ((this.$valorDoEmprestimo/this.$quantidadeDeParcelas) === (this.$valorDasParcelas) );

		return ehMaiorDeIdade && possuiRendaSuficiente && valorConfere;
	}
}
class EmprestimoAutomovel extends Emprestimo {
     /**
     * Construtor da classe EmprestimoAutomovel
      * @param $nome - Nome do solicitante
     * @param $idade - Idade do solicitante
     * @param $valorDoEmprestimo - Valor solicitado para empréstimo
     * @param $quantidadeDeParcelas - Número de parcelas do empréstimo
     * @param $valorDasParcelas - valor das parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$valorDasParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		super(
			$nome,
			$idade,
			$valorDoEmprestimo,
			$quantidadeDeParcelas,
			$valorDasParcelas,
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
		let valorConfere: boolean = ((this.$valorDoEmprestimo/this.$quantidadeDeParcelas) === (this.$valorDasParcelas) );

		return (
			ehMaiorDeIdade &&
			possuiRendaSuficiente &&
			valorConfere &&
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
     * @param $valorDasParcelas - valor das parcelas do empréstimo
     * @param $rendaMensalDoSolicitante - Renda mensal do solicitante
     * @param $possuiHabilitacao - Indica se o solicitante possui habilitação de motorista
     * @param $ehEstudante - Indica se o solicitante é estudante
     */
	constructor(
		$nome: String,
		$idade: number,
		$valorDoEmprestimo: number,
		$quantidadeDeParcelas: number,
		$valorDasParcelas: number,
		$rendaMensalDoSolicitante: number,
		$possuiHabilitacao: boolean,
		$ehEstudante: boolean
	) {
		super(
			$nome,
			$idade,
			$valorDoEmprestimo,
			$quantidadeDeParcelas,
			$valorDasParcelas,
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
		let idadeCorreta: boolean = this.$idade >= 18 && this.$idade <=30;
		let possuiRendaSuficiente: boolean = this.$rendaMensalDoSolicitante > 1500;
		let valorConfere: boolean = ((this.$valorDoEmprestimo/this.$quantidadeDeParcelas) === (this.$valorDasParcelas) );

		return (
			idadeCorreta &&
			possuiRendaSuficiente &&
			valorConfere &&
			this.$ehEstudante
		);
	}
}

const solicitacoes: Emprestimo[] = [];

// Empréstimo Pessoal
solicitacoes.push(new EmprestimoPessoal("Fulano 1", 25, 10000, 10, 1000, 5000, false, false)); // Aprovado
solicitacoes.push(new EmprestimoPessoal("Fulano 2", 30, 8000, 10, 200, 4000, true, false)); // Reprovado
solicitacoes.push(new EmprestimoPessoal("Fulano 3", 28, 12000, 8, 300, 6000, true, true)); // Reprovado
solicitacoes.push(new EmprestimoPessoal("Fulano 4", 35, 15000, 15, 1000, 8000, true, true)); // Aprovado
solicitacoes.push(new EmprestimoPessoal("Fulano 5", 40, 20000, 20, 1200, 10000, true, true)); // Reprovado

// Empréstimo Automóvel
solicitacoes.push(new EmprestimoAutomovel("Ciclano 1", 27, 20000, 24, 800, 4000, true, true)); // Reprovado
solicitacoes.push(new EmprestimoAutomovel("Ciclano 2", 33, 25000, 36, 700, 5000, true, true)); // Reprovado
solicitacoes.push(new EmprestimoAutomovel("Ciclano 3", 29, 18000, 18, 1000, 6000, true, false)); // Aprovado
solicitacoes.push(new EmprestimoAutomovel("Ciclano 4", 35, 30000, 30, 1200, 8000, true, true)); // Reprovado
solicitacoes.push(new EmprestimoAutomovel("Ciclano 5", 32, 22000, 24, 900, 7000, true, false)); // Reprovado

// Empréstimo Estudantil
solicitacoes.push(new EmprestimoEstudantil("Beltrano 1", 19, 5000, 12, 200, 2000, false, true)); // Reprovado
solicitacoes.push(new EmprestimoEstudantil("Beltrano 2", 22, 8000, 18, 300, 2500, false, true)); // Reprovado
solicitacoes.push(new EmprestimoEstudantil("Beltrano 3", 20, 6000, 15, 250, 2200, false, true)); // Reprovado
solicitacoes.push(new EmprestimoEstudantil("Beltrano 4", 25, 10000, 24, 400, 3000, false, true)); // Reprovado
solicitacoes.push(new EmprestimoEstudantil("Beltrano 5", 21, 7000, 20, 350, 2800, false, true)); // Aprovado


Emprestimo.verificarTudo(solicitacoes);