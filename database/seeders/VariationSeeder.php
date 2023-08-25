<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Subcategory;
use App\Models\variation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VariationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all();
        $variations = [
            '1' => ['colors','OS','size','screen','camera'],
            '2' => ['colors','series','ram','hard','screen','graphic'],
            '3' => ['colors','usage','strap_material','screen']
        ];

        /*$variations1 =['colors','OS','size','screen','camera'];
        $variations2 =['colors','series','ram','hard','screen','graphic'];
        $variations3 =['colors','usage','strap_material','screen'];*/

        foreach ($categories as $category) {
                foreach ($variations[$category->id] as $variation) {
                    variation::create([
                        'category_id'=> $category->id,
                        'name'=>$variation,
                    ]);
                }
        }

    }
}
