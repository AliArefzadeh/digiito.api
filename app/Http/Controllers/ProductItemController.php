<?php

namespace App\Http\Controllers;

use App\Models\ProductItem;
use Illuminate\Http\Request;

class ProductItemController extends Controller
{
    public function index()
    {
        $product = ProductItem::find(80);
        echo $product->Product->name;
        echo "<br>";
        echo $product->Product->category->name;
        echo "<br><br><br>";
        foreach ($product->VariationOptions as $varaitionOption) {
            echo "<pre>";
            echo $varaitionOption->variation->name;
            echo " : ";
            echo "$varaitionOption->value";
            echo "<br>";
            echo "</pre>";
        }


        /*echo $product->Product->name;
        echo $product->Product->category->name;
        echo "<br><br><br><br>";
        foreach ($product->variationOptions as $variationOption) {
            echo $product->variationOption->Variation->name;
            echo " : ";
            echo $product->variationOption->value;
        }*/
    }
}
