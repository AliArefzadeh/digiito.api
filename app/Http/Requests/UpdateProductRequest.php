<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends StoreProductRequest
{


    public function rules():array
    {
        return array_merge(parent::rules(), [
            'slug' => [ Rule::unique('products')->ignore($this->product), 'alpha_dash','required'],

        ]);
    }
}
