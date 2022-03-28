package stepsDefinitions;

import static utils.Utils.acessarSistema;

import io.cucumber.java.pt.Dado;

public class BaseSteps {
	
	//Base de acesso ao sistema para inicio dos testes
	@Dado("que eu acesse o sistema")
	public void que_eu_acesse_o_sistema() {
	    acessarSistema();
	}

}
