<x-layout>
    <section class="flex w-full justify-between items-center max-w-screen-xl px-4 mx-auto">
        <x-filters.searchfilter />
        <x-filters.categoryfilter />
    </section>
    <section data-limit>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1" data-element="product-container" id="limit-container">
            <x-spinner type="home" />
        </div>
    </section>
</x-layout>