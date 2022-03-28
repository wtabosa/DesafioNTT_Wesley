package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.assertEquals;
import static utils.Utils.driver;

public class LoginPage {
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	//Mapeando o usuario
	@FindBy(id = "j_username")
	private WebElement userName;
	
	//Mapeando a senha
	@FindBy(id = "j_password")
	private WebElement inputPassword;
	
	//Mapeando o botão de login
	@FindBy(css = "btn btn-primary btn-block")
	private WebElement btnLogin;
	
	//Mapeando o botão de pop-up pra fechar
	@FindBy(id = "cboxClose")
	private WebElement btnClose;
	
	//Mapeando a msg de boas vindas
	@FindBy(css = "alert alert-danger alert-dismissable getAccAlert")
	private WebElement msgLogin;
	
	
	public void preencherUserName(String string) {
		userName.sendKeys(string);
	}
	
	public void preencherPassword(String string) {
		inputPassword.sendKeys(string);
	}
	
	public void acionarBotaoLogin() {
		btnLogin.click();
	}
	
	public void acionarBotaoPopup() {
		btnClose.click();
	}
	
	public void mostrarTextoRecuperado(String string) {
		assertEquals(string, msgLogin.getText());
	}
	

//Login e senha corretos
	public void realizarLogin() {
		preencherUserName("ASS@fh.com.br");
		preencherPassword("Automacao@1234578");
		acionarBotaoLogin();
	}

}