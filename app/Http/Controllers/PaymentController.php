<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PaymentController extends Controller
{
    public function index()
    {
        return view('checkout');
    }
//handling the checkout process with Stripe.
    public function checkout(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY')); 
       // This line is decoding the JSON data from the request
        $requestData = json_decode($request->all()[0]);

        $lineItems = [];
        // Check if products are present in the request
        if (isset($requestData) && is_array($requestData)) {
            foreach ($requestData as $product) {
                // Validate each product has required attributes
                if (isset($product->name, $product->description, $product->price)) {
                    $lineItems[] = [
                        'price_data' => [
                            'currency' => 'usd',
                            'product_data' => [
                                'name' => $product->name,
                                'description' => $product->description,
                            ],
                            'unit_amount' => $product->price * 100,
                        ],
                        'quantity' => 1,
                    ];
                }
            }
        }

        $session = Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            // 'cancel_url' => route('checkout.cancel', [], true),
        ]); 
//returns the session URL as a JSON 
        return response()->json($session->url);
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

    public function success(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $sessionId = $request->query('session_id');
    
        try {
            $session = Session::retrieve($sessionId);
    
            if (!$session) {
                throw new NotFoundHttpException();
            }
    
            $existingOrder = Order::where('session_id', $sessionId)->first();
    
            if (!$existingOrder) {
              
    
                $newOrder = new Order();
                $newOrder->session_id = $sessionId;
                $newOrder->paymentMethode = 'Stripe'; 
                $newOrder->amount = $session->amount_total / 100; // Convert from cents to dollars (adjust as needed)
    
           
    
                $newOrder->save();
            }
    
            // Clear relevant session data
            session()->forget(['quantity', 'address', 'product_info']);
    
            return view('success');
        } catch (\Exception $e) {
            $err = $e->getMessage();
            dd($err);
        }
    }
    
    
}
