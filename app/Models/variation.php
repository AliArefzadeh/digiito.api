<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class variation extends Model
{
    use HasFactory;

    public function Category()
    {
        return $this->belongsTo(Category::class);
    }

    public function Subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }
    public function VariationOptions()
    {
        return $this->hasMany(variationOption::class);
    }
}
