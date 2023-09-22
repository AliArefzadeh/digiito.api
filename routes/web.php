<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductItemController;
use App\Http\Controllers\ProfileController;
use App\Mail\EditEmail;
use App\Mail\VerifyEmail;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/', [ProductController::class, 'index']);
Route::get('/x', [ProductItemController::class, 'index']);

//EMAILS
Route::get('/email', function () {
    $x = User::first();
    Mail::to('poryaarmanfar@gmail.com')->send(new VerifyEmail($x));
});

Route::get('/edit-email', function () {
    $x = Auth::user();
   // return (new EditEmail($x));
   Mail::to($x->email)->send(new EditEmail($x));
})->middleware('auth');

Route::get('VerifyEmail/{user}', function (Request $request,User $user) {

    if ($request->hasValidSignature()) {
        $user->update([
            'email_verified_at' => now(),

        ]);
        echo "success";
    }
})->name('verifyEmail');

//test signed routes
Route::get('/signed', function (Request $request) {
    dd($request->hasValidSignature());
})->name('signed');

Route::get('generate', function () {
    return URL::signedRoute('signed');
});
Route::get('temp', function () {
    dd(URL::temporarySignedRoute('signed', now()->addSecond(15)));
});





Route::get('/posts', function () {
    return Inertia::render('Posts/PostComponent');

});

Route::get('gate', function () {
    $result = Gate::allows('test');
    dd($result);

});







Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
