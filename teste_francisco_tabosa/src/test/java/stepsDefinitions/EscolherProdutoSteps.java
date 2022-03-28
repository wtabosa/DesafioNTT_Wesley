package stepsDefinitions;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.BasePage;
import pageObjects.EscolherProdutoPage;


public class EscolherProdutoSteps {
	
	BasePage BasePage = new BasePage();
	EscolherProdutoPage mu = new EscolherProdutoPage();
	
	//Quando escolhe o produto para a compra
	@Quando("escolher o produto")
	public void adicionarNovoProduto() {
	    BasePage.adicionarNovoProduto();
	}

	//Acionando o botão para adicionar o produto ao carrinho
	@E("acionar o botão comprar")
	public void acionarBotaoCompra() throws Throwable {
		Thread.sleep(2000);
		mu.acionarBotaoCompra();
	}

	//Informando que o produto foi adicionado com sucesso ao carrinho
	@Entao("o sistema informa que o produto foi adicionado")
	public void oSistemaAdiciona() throws Throwable {
		BasePage.validarQuantidadeAdicionada();
	}



}