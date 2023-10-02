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

        //توی بخش اول فانکشن updateorcreate میگرده و یوزر با این اطلاعات رو پیدا میکنه
        //یعنی الان بر اساس provider , provider_id بین یوزرها میگرده پس اگر
        //یه یوزر رو جداگانه وارد کرده باشی چون provider, provider_idشون نال هست نمیتونه یوزر رو پیدا کنه و سعی میکنه
        //یه یوزر با همون ایمیل بسازه

        //برای همین توی بخش اول فانکشن من email رو گذاشتم تا بر اساس eamilها بگرده و یوزر رو پیدا بکنه

        Auth::login($user);
        return redirect('dashboard');


    }


}
