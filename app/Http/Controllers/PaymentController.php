<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(){
        return view('checkout');
    }


    public function checkout()
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY')); 

      
        
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => "DELL",
                      
                    ],
                    'unit_amount' => 32 * 100,
                ],
                'quantity' => 1,
            ];
        
        $session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            // 'cancel_url' => route('checkout.cancel', [], true),
        ]);

  

        return redirect($session->url);
    }
    


    public function success()
    {
        return "Yay, It works!!!";
    }
}
