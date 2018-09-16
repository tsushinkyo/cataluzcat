<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;

require '../vendor/autoload.php';
require '../src/config/db.php';
require '../src/routes/poems.php';

$app = new App();

$app->get('/', function() {
    return "hello World";
});

$app->get('/aaa', function(Request $request, Response $response) {
    echo 'aaa';
});

$app->get('/hello/{name}', function(Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");

    return $response;
});

//Create routes of poems
require "../src/routes/poems.php";
$app->add(new Tuupola\Middleware\CorsMiddleware);
$app->run();
?>