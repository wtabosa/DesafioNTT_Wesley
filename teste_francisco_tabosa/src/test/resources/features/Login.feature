#Author: Francisco Wesley V. Tabosa - wesley.tabosa@gmail.com
#language: pt
#enconding: UTF-8


@login
Funcionalidade: Login

@loginInvalido 
Cenario: Realizar login invalido
Quando informar o usuario "usuario"
E informar a senha "Automacao@1234578"
E acionar o botao login
Entao o sistema apresenta a mensagem "Usuário ou senha incorreta."

@senhaInvalida
Cenario: Realizar senha invalida
Quando informar o usuario "ASS@fh.com.br"
E informar a senha "senha"
E acionar o botao login
Entao o sistema apresenta a mensagem "Usuário ou senha incorreta."

@loginSucesso
Cenario: Realizar login com sucesso
Quando informar o usuario "ASS@fh.com.br"
E informar a senha "Automacao@1234578"
E acionar o botao login
E fechar popup
Entao o sistema apresenta "Bem-Vindo LUIZ"
E o sistema apresenta bem vindo

@usuarioObrigatorio 
Cenario: campo username obrigatorio
Quando informar o usuario ""
E informar a senha "Automacao@1234578"
E acionar o botao login
Entao o sistema apresenta a mensagem "Usuário ou senha incorreta."

@senhaObrigatorio
Cenario: campo senha obrigatorio
Quando informar o usuario "ASS@fh.com.br"
E informar a senha ""
E acionar o botao login
Entao o sistema apresenta a mensagem "Usuário ou senha incorreta."


