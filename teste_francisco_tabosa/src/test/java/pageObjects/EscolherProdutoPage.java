package pageObjects;

import static utils.Utils.driver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EscolherProdutoPage {
	
	public EscolherProdutoPage() {
		PageFactory.initElements(driver, this);
	}
	
	//Mapeando o botão de compra
	@FindBy(id="addToCartButton")
	private WebElement botaoCompra;
	
	//Acionando o botão de compra
	public void acionarBotaoCompra() {
		botaoCompra.click();
	}
	

	
	
	
}
