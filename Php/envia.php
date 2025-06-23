<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome     = addslashes($_POST['nome']);
    $email    = addslashes($_POST['email']);
    $celular  = addslashes($_POST['celular']);
    $mensagem = addslashes($_POST['mensagem']);

    $para = "pablostcontato@gmail.com";
    $assunto = "Coleta de Dados - Agencia Pablo";

    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Celular: $celular\n";
    $corpo .= "Mensagem: $mensagem\n";

    $cabecalhos = "From: $email\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";
    $cabecalhos .= "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabecalhos)) {
        echo "Email enviado com sucesso.";
    } else {
        echo "Houve um erro ao enviar o email.";
    }
}
?>