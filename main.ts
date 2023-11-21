
abstract class Emprestimo {
    private nome: String;
    private idade: number;
    private valorDoEmprestimo: number;
    private quantidadeDeParcelas: number;
    private rendaMensalDoSolicitante: number;
    private possuiHabilitacao: boolean;
    private ehEstudante: boolean;
  
	constructor($nome: String, $idade: number, $valorDoEmprestimo: number, $quantidadeDeParcelas: number, $rendaMensalDoSolicitante: number, $possuiHabilitacao: boolean, $ehEstudante: boolean) {
		this.nome = $nome;
		this.idade = $idade;
		this.valorDoEmprestimo = $valorDoEmprestimo;
		this.quantidadeDeParcelas = $quantidadeDeParcelas;
		this.rendaMensalDoSolicitante = $rendaMensalDoSolicitante;
		this.possuiHabilitacao = $possuiHabilitacao;
		this.ehEstudante = $ehEstudante;
	}

    /**
     * Getter $nome
     * @return {String}
     */
	public get $nome(): String {
		return this.nome;
	}

    /**
     * Setter $nome
     * @param {String} value
     */
	public set $nome(value: String) {
		this.nome = value;
	}

    /**
     * Getter $idade
     * @return {number}
     */
	public get $idade(): number {
		return this.idade;
	}

    /**
     * Setter $idade
     * @param {number} value
     */
	public set $idade(value: number) {
		this.idade = value;
	}

    /**
     * Getter $valorDoEmprestimo
     * @return {number}
     */
	public get $valorDoEmprestimo(): number {
		return this.valorDoEmprestimo;
	}

    /**
     * Setter $valorDoEmprestimo
     * @param {number} value
     */
	public set $valorDoEmprestimo(value: number) {
		this.valorDoEmprestimo = value;
	}

    /**
     * Getter $quantidadeDeParcelas
     * @return {number}
     */
	public get $quantidadeDeParcelas(): number {
		return this.quantidadeDeParcelas;
	}

    /**
     * Setter $quantidadeDeParcelas
     * @param {number} value
     */
	public set $quantidadeDeParcelas(value: number) {
		this.quantidadeDeParcelas = value;
	}

    /**
     * Getter $rendaMensalDoSolicitante
     * @return {number}
     */
	public get $rendaMensalDoSolicitante(): number {
		return this.rendaMensalDoSolicitante;
	}

    /**
     * Setter $rendaMensalDoSolicitante
     * @param {number} value
     */
	public set $rendaMensalDoSolicitante(value: number) {
		this.rendaMensalDoSolicitante = value;
	}

    /**
     * Getter $possuiHabilitacao
     * @return {boolean}
     */
	public get $possuiHabilitacao(): boolean {
		return this.possuiHabilitacao;
	}

    /**
     * Setter $possuiHabilitacao
     * @param {boolean} value
     */
	public set $possuiHabilitacao(value: boolean) {
		this.possuiHabilitacao = value;
	}

    /**
     * Getter $ehEstudante
     * @return {boolean}
     */
	public get $ehEstudante(): boolean {
		return this.ehEstudante;
	}

    /**
     * Setter $ehEstudante
     * @param {boolean} value
     */
	public set $ehEstudante(value: boolean) {
		this.ehEstudante = value;
	}

    public aprovarEmprestimo(): boolean {
        let aprovado: boolean = false;
        return aprovado;
    }

    static verificarTudo (solicitacoes : Emprestimo[]) : void{
        for (const solicitacao of solicitacoes) {
            console.log(`Solicitante: ${solicitacao.nome} [${solicitacao.aprovarEmprestimo() ? "APROVADO" : "REPROVADO"}]`)
            solicitacao.aprovarEmprestimo 
        }
    }    
    

}


