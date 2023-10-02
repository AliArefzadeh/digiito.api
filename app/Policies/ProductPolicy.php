<?php

namespace App\Policies;

use App\Models\User;
use App\Models\product;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class ProductPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user = null): bool
    {
        return true;

    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user = null, product $product = null): bool
    {

        return true;


    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user = null): bool
    {

        return true;

    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user = null, product $product = null):bool
    {

        //for you to receive USER when using api u need to use middleware of auth:sanctum

        if (Auth::check(auth()->user())) {
                    return true;
                }
                return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user = null, product $product = null): bool
    {
        return true;

    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user = null, product $product = null): bool
    {
        return true;

    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user = null, product $product = null): bool
    {
        return true;
    }
}
