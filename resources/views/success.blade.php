<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Success</title>
    <link rel="stylesheet" href="your-styles.css">
</head>

<body class="bg-slate-50 container">
    <section class="flex justify-center items-center h-screen">
        <div class="rounded-3xl h-fit shadow-2xl p-8 text-center">
            <p class="text-sm font-roboto uppercase tracking-widest text-green-600">
                Merci pour votre confiance
            </p>

            <h2 class="mt-6 text-3xl font-semibold font-roboto">Paiement effectué avec succès !</h2>

            <a class="mt-8 inline-block w-64 rounded-full bg-green-500 py-4 text-sm font-roboto text-white shadow-xl"
                href="{{ route('home.index') }}">
                Home
            </a>
        </div>
    </section>
</body>

</html>

