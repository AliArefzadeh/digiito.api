<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
        JsonResource::withoutWrapping();
        //متن بالا برای apiهاست که مقادیر رو داخل data بهمون نده
        //برای تستش وقتی از api resourceها استفاده میکنی متن بالا رو
        //یه بار دلیت کن و ببین چه اتفاقی میوفته توی postman

    }
}
