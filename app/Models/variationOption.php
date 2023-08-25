<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class variationOption extends Model
{
    use HasFactory;
    public function Variation()
    {
        return $this->belongsTo(variation::class);
    }

    public function ProductItems()
    {
        return $this->belongsToMany(ProductItem::class,'product_configurations');
    }
}
