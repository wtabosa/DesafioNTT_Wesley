package stepsDefinitions;

import static utils.Utils.*;
import static utils.Utils.driver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import pageObjects.LoginPage;

//Ordem de acesso, antes e depois
public class Hooks {
	
	@Before(order = 1)
	public void suitUp(){ 
		acessarSistema();
	}
	
	@Before(order = 2, value = "@escolherProduto")
	public void fazerLogin(){ 
		LoginPage LoginPage = new LoginPage();
		LoginPage.realizarLogin();
	}
	
	@After()
	public void apagarUsuario(Scenario scenario) throws Exception {
		capturarScreenshot(scenario);
		driver.quit();
	}

}
