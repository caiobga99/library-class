<?php
class Database
{
    private string $porta;
    private string $nomeDoBanco;
    private string $usuarioBanco;
    private string $senhaBanco;

    private $conexao;


    function __construct()
    {
        $this->porta = "localhost";
        $this->nomeDoBanco = "";
        $this->usuarioBanco = "root";
        $this->senhaBanco = "";


        $this->conexao = new PDO(
            "mysql:host=$this->porta;
            dbname=$this->nomeDoBanco",
            $this->usuarioBanco,
            $this->senhaBanco
        );
    }
}



?>