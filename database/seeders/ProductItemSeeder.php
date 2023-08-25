<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\variationOption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\ProductItem;

class ProductItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


    public function run(): void
    {
        //برای اینکه این seeder کار بکنه یه بار فکتوری رو ران کن

        $record = Product::all()->count();
        $price = (rand(1, 100) * 1000000 + (rand(1, 999) * 1000));

        $products = Product::all();
        $variationOptions = variationOption::all();
        $productItems = ProductItem::all();


        foreach ($products as $product) {
            $x = 'on';
            foreach ($productItems as $productItem) {
                if ($product->id == $productItem->product_id) {
                    $x = 'off';
                }
            }
            if ($x == 'on') {
                ProductItem::create([
                    'product_id' => $product->id,
                    'quantity_in_stock' => rand(1, 7),
                    'regularPrice' => rand(1, 100) * 1000000 + (rand(1, 999) * 1000),
                    'salePrice' => rand(1, 100) * 1000000 + (rand(1, 999) * 1000),
                    'availibility' => 'available',
                ]);
            }
        }


        foreach ($productItems as $productItem) {
            //check if it has already been synced or not
            foreach ($productItem->Product->Category->Variations as $var1) {
                foreach ($var1->VariationOptions as $var2) {
                    $y = 'on';

                    foreach ($productItem->VariationOptions as $var) {
                        if ($var2->id == $var->id) {
                            $y = 'off';
                        }
                    }
                    if ($y == 'on') {
                        $productItem->VariationOptions()->attach($var2->id);

                    }
                }
            }


        }
    }
}
