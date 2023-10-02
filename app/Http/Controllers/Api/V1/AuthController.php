<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function Login(LoginRequest $request)
    {
        $request->authenticate();


        $token = auth()->user()->createToken('apiLogin');
        return response()->json([
            "token" => $token->plainTextToken,

        ],201);
        /*$request->session()->regenerate();*/


    }

    public function me()
    {
        return auth()->user();
    }

    public function Logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'message'=>'all tokens have been revoked.'
        ],200);
    }
}
