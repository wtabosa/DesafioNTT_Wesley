package stepsDefinitions;

import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.PendingException;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.BasePage;
import pageObjects.LoginPage;

public class LoginSteps {
	
	LoginPage loginPage = new LoginPage();
	BasePage basePage = new BasePage();
	
	//Informando o usu�rio para login
	@Quando("informar o usuario {string}")
	public void eu_informar_o_usuario(String string) {
		loginPage.preencherUserName(string);
	}

	//Informando a senha para login
	@E("informar a senha {string}")
	public void informar_a_senha(String string) {
		loginPage.preencherPassword(string);
		
	}

	//Acionando o bot�o de login
	@E("acionar o botao login")
	public void acionar_o_botao_login() {
		loginPage.acionarBotaoLogin();
	}
	
	//Apresentando a mensagem de erro quando o login est� incorreto
	@Entao("o sistema apresenta a mensagem {string}")
	public void o_sistema_apresenta_a_mensagem(String string) {
		loginPage.mostrarTextoRecuperado(string);
	}
	
	//Acionando o bot�o para fechar o pop-up
	@E("fechar popup")
	public void acionar_o_botao_popup() {
		loginPage.acionarBotaoPopup();
	}

	//Apresentando mensagens de boas vindas ao sistema
	@Entao("o sistema apresenta")
	public void oSistemaLoga() throws Throwable {
		basePage.validarMensagemBemVindo();
	}

}