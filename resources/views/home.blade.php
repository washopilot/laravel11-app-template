<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel with Vite, React, and TypeScript</title>
    @viteReactRefresh
    @vite('resources/js/main.tsx')
</head>

<body>
    <div id="root"></div>
</body>

</html>
