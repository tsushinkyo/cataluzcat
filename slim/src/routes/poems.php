<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;

$app = new App();

//Get all poems
$app->get('/api/poems', function(Request $request, Response $response) {
    
    $query = 'SELECT * FROM poems';

    try{
        //instance bbdd
        $db = new db();

        //connection
        $db = $db->connect();
        $execute = $db->query($query);
        $poems = $execute->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        //export in JSON
        return json_encode($poems);

    } catch(PDOException $e) {
        return '{"error": {"text": '.$e->getMessage().'}';
    }
});
?>