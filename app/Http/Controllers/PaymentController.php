<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class PaymentController extends Controller
{
    public function index()
    {
        return view('checkout');
    }

    public function checkout(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY')); 
        $requestData = $request->all();

        $lineItems = [];

        // Check if products are present in the request
        if (isset($requestData['products']) && is_array($requestData['products'])) {
            foreach ($requestData['products'] as $product) {
                // Validate each product has required attributes
                if (isset($product['name'], $product['description'], $product['price'])) {
                    $lineItems[] = [
                        'price_data' => [
                            'currency' => 'usd',
                            'product_data' => [
                                'name' => $product['name'],
                                'description' => $product['description'],
                            ],
                            'unit_amount' => $product['price'] * 100,
                        ],
                        'quantity' => 1,
                    ];
                }
            }
        }

        $session = Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            // 'cancel_url' => route('checkout.cancel', [], true),
        ]); 

        return response()->json(['checkout_url' => $session->url]);
    }
    
    public function StripeCheckout(Request $request)
    {
        $requestData = $request->all(); // This will contain the parsed JSON data
        $product = $requestData['products'][0] ?? null;

        if ($product && isset($product['name'], $product['description'], $product['price'])) {
            $name = $product['name'];
            $description = $product['description'];
            $price = $product['price'];
            // Return a response if needed
            return response()->json(['URL' => 'Request received successfully']);
        }

        return response()->json(['error' => 'Invalid product data.']);
    }

    public function success()
    {
        return "Yay, It works!!!";
    }
}
