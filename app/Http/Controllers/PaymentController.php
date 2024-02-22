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

    public function checkout(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY')); 
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
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            // 'cancel_url' => route('checkout.cancel', [], true),
        ]); 

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

    // public function success(Request $request)
    // {
    //     \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
    //     $sessionId = $request->query('session_id');
    //     try {
    //         $session = Session::retrieve($sessionId);

    //         if (!$session) {
    //             throw new NotFoundHttpException();
    //         }

    //         // Check if an order with the same session ID exists
    //         $existingOrder = Order::where('session_id', $sessionId)->first();

    //         if (!$existingOrder) {
    //             // If the order doesn't exist, create a new order
    //             // You might want to adjust the logic based on your requirements
    //             // For example, you may want to associate the order with the user or use a different identifier
    //             $newOrder = new Order();
    //             $newOrder->session_id = $sessionId;
    //             $newOrder->save();
    //         }

    //         // Your existing logic for creating a Payment record goes here

    //         // Clear session data
    //         // Note: This may depend on your application's logic for managing sessions
    //         // Make sure you are clearing the correct session data
    //         // For example, if 'quantity' and 'address' are session keys, you can use the following:
    //         session()->forget(['quantity', 'address']);

    //         return view('checkout.success', ['customer' => $session->customer]);
    //     } catch (\Exception $e) {
    //         throw new NotFoundHttpException();
    //     }
    // }
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
                // If the order doesn't exist, create a new order
                // You might want to adjust the logic based on your requirements
    
                // Retrieve product information from the session (replace 'product_id' and 'other_product_attributes' with your actual keys)
                // $productInfo = session()->get('product_info');
    
                $newOrder = new Order();
                $newOrder->session_id = $sessionId;
                $newOrder->paymentMethode = 'Stripe'; // Set the payment method (adjust as needed)
                $newOrder->amount = $session->amount_total / 100; // Convert from cents to dollars (adjust as needed)
    
                // Assuming 'product_id' is a key in your product information
                // $newOrder->product_id = isset($productInfo['id']) ? $productInfo['id'] : null;
    
                $newOrder->save();
            }
    
            // Clear relevant session data
            session()->forget(['quantity', 'address', 'product_info']);
    
            return redirect('/');
        } catch (\Exception $e) {
            $err = $e->getMessage();
            dd($err);
        }
    }
    
    
}
