<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subcategory extends Model
{
    use HasFactory;

    public function Categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class,'category_configurations');
    }

    public function Products()
    {
        return $this->hasMany(Product::class);
    }

}
