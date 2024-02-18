<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('js/shoppingcart.js') }}"></script>
        <title>Laravel</title>
    </head>
    <body class="antialiased">
        <header>
            <nav>
                <x-cartbutton />
                <x-shoppingcart />
            </nav>
        </header>
        <main>
            {{$slot}}
        </main>
        <footer>

        </footer>
    </body>
</html>