package pageObjects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static utils.Utils.driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage {
	WebDriverWait espera = new WebDriverWait(driver, 10);
	
	public BasePage() {
		PageFactory.initElements(driver, this);
	}
	
	//Mapeando a verifição se o sistema logou com mensagem de boas vindas
	@FindBy(css = "logged_in js-logged_in item-left")
	private WebElement msgBoasVindas;
	
	//Mapeando o produto
	@FindBy(css = "carousel_item--thumb")
	private WebElement adicionarNovoProduto;
	
	//Mapeando a msg de adicionado a quantidade no carrinho
	@FindBy(linkText = "Quantidade Adicionada")
	private WebElement msgQuantidadeAdicionada;
	
	//Validando a mensagem de boas vindas
	public void validarMensagemBemVindo() {
		assertFalse(msgBoasVindas.isSelected());
		System.out.println("Esse e o retorno: " + msgBoasVindas.isDisplayed());
	}

	//A seguir é adicionar novo produto
	public void adicionarNovoProduto() {
		adicionarNovoProduto.click();
	}
	
	//Validando a mensagem de quantidade adicionada
	public void validarQuantidadeAdicionada() {
		assertFalse(msgQuantidadeAdicionada.isSelected());
		System.out.println("Esse e o retorno: " + msgQuantidadeAdicionada.isDisplayed());
	}
	
}
