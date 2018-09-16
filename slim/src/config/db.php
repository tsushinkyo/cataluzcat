<?php
    class db {
        private $host = 'localhost';
        private $user = 'root';
        private $password = '';
        private $base_url = 'cataluz';
    

        // conectar BD
        public function connect() {
        $mysql_connection = "mysql:host=$this->host;dbname=$this->base_url";
        $DBConnection = new PDO($mysql_connection, $this->user, $this->password);
        $DBConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //workaround codification UTF8
        //$DBConnection -> exec("set names utf8");

        return $DBConnection;
    }
}


?>