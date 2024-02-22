<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index(){
        if (auth()->check()){
            return redirect('/');
        }
        return view('auth.register');    
    }

    public function login(){
        if (auth()->check()){
            return redirect('/');
        }
        return view('auth.login');    
    }


    public function auth(Request $request){
        if(auth()->attempt([
            'email' => $request->email,
            'password' => $request->password
        ]))
        {
            return redirect('/');
        }
        else{
          return redirect('/login')->with([
            'error'=>'invalid!!!!!!!!!!!'
          ]);
        }
    }
    public function store(Request $request)
    {
        
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);
    
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        auth()->login($user);
        return redirect('/');
    }

    public function logout(){
        auth()->logout();
        return redirect('/');
 }
    
}