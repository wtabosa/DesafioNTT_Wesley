$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/EscolherProduto.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@escolherProduto"
    }
  ]
});
formatter.scenario({
  "name": "Adicionar Produto",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@escolherProduto"
    },
    {
      "name": "@adicionarProduto"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\stefanini\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.Utils.acessarSistema(Utils.java:18)\r\n\tat stepsDefinitions.Hooks.suitUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.before({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pageObjects.LoginPage.preencherUserName(LoginPage.java:32)\r\n\tat pageObjects.LoginPage.realizarLogin(LoginPage.java:54)\r\n\tat stepsDefinitions.Hooks.fazerLogin(Hooks.java:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "escolher o produto",
  "keyword": "Quando "
});
formatter.match({
  "location": "stepsDefinitions.EscolherProdutoSteps.adicionarNovoProduto()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o bot�o comprar",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "o sistema informa que o produto foi adicionado",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.EscolherProdutoSteps.oSistemaAdiciona()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Utils.capturarScreenshot(Utils.java:27)\r\n\tat stepsDefinitions.Hooks.apagarUsuario(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Realizar login invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\stefanini\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.Utils.acessarSistema(Utils.java:18)\r\n\tat stepsDefinitions.Hooks.suitUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar o usuario \"usuario\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.eu_informar_o_usuario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "informar a senha \"Automacao@1234578\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.informar_a_senha(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao login",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.acionar_o_botao_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema apresenta a mensagem \"Usu�rio ou senha incorreta.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.o_sistema_apresenta_a_mensagem(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Utils.capturarScreenshot(Utils.java:27)\r\n\tat stepsDefinitions.Hooks.apagarUsuario(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Realizar senha invalida",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@senhaInvalida"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\stefanini\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.Utils.acessarSistema(Utils.java:18)\r\n\tat stepsDefinitions.Hooks.suitUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar o usuario \"ASS@fh.com.br\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.eu_informar_o_usuario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "informar a senha \"senha\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.informar_a_senha(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao login",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.acionar_o_botao_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema apresenta a mensagem \"Usu�rio ou senha incorreta.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.o_sistema_apresenta_a_mensagem(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Utils.capturarScreenshot(Utils.java:27)\r\n\tat stepsDefinitions.Hooks.apagarUsuario(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Realizar login com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\stefanini\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.Utils.acessarSistema(Utils.java:18)\r\n\tat stepsDefinitions.Hooks.suitUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar o usuario \"ASS@fh.com.br\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.eu_informar_o_usuario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "informar a senha \"Automacao@1234578\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.informar_a_senha(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao login",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.acionar_o_botao_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fechar pop-up",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.acionar_o_botao_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema apresenta \"Bem-Vindo LUIZ\"",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "o sistema apresenta bem vindo",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Utils.capturarScreenshot(Utils.java:27)\r\n\tat stepsDefinitions.Hooks.apagarUsuario(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "campo username obrigatorio",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@usuarioObrigatorio"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\stefanini\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.Utils.acessarSistema(Utils.java:18)\r\n\tat stepsDefinitions.Hooks.suitUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar o usuario \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.eu_informar_o_usuario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "informar a senha \"Automacao@1234578\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.informar_a_senha(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao login",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.acionar_o_botao_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema apresenta a mensagem \"Usu�rio ou senha incorreta.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.o_sistema_apresenta_a_mensagem(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Utils.capturarScreenshot(Utils.java:27)\r\n\tat stepsDefinitions.Hooks.apagarUsuario(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "campo senha obrigatorio",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@senhaObrigatorio"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\stefanini\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utils.Utils.acessarSistema(Utils.java:18)\r\n\tat stepsDefinitions.Hooks.suitUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "informar o usuario \"ASS@fh.com.br\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.eu_informar_o_usuario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "informar a senha \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.informar_a_senha(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "acionar o botao login",
  "keyword": "E "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.acionar_o_botao_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema apresenta a mensagem \"Usu�rio ou senha incorreta.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "stepsDefinitions.LoginSteps.o_sistema_apresenta_a_mensagem(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat utils.Utils.capturarScreenshot(Utils.java:27)\r\n\tat stepsDefinitions.Hooks.apagarUsuario(Hooks.java:27)\r\n",
  "status": "failed"
});
});