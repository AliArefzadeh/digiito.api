<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;


    public function Subcategories(): BelongsToMany
    {
        return $this->belongsToMany(Subcategory::class,'category_configurations');
    }

    public function Products()
    {
        return $this->hasMany(Product::class);
    }

    public function Variations()
    {
        return $this->hasMany(variation::class);
    }

}
