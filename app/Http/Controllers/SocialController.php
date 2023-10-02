<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function login(Request $request, $provider)
    {
        $googleUser = Socialite::driver($provider)->user();


        $user= User::updateOrCreate([
            'email' => $googleUser->email,
        ], [
            'provider' => $provider,
            'provider_id' => $googleUser->id,
            'name' => $googleUser->name,
            'avatar' => $googleUser->avatar,
            'email_verified_at'=>now(),
        ]);

        Auth::login($user);
        return redirect('dashboard');


    }


}
