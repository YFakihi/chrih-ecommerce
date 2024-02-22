<x-layout>
    <x-hero/>
    <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1" data-element="product-container" id="products">
            <x-spinner type="home" />
        </div>
        <div class="flex justify-center items-center">
            <a href="{{route('products.index')}}" class="flex items-center justify-center px-5 py-2.5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                View More
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </section>
</x-layout>