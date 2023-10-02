<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        {
            $subCategories=[
                'اپل'=>[
                    'slug' => 'Aplle',
                    'active' => 'active',
                    ],

                'سامسونگ'=>[
                    'slug' => 'Samsung',
                    'active' => 'active',
                ],

                'شیائومی'=>[
                    'slug' => 'Xiaomi',
                    'active' => 'active',
                ],

                'اچ پی'=>[
                    'slug' => 'Hp',
                    'active' => 'active',
                ],

                'ایسوس'=>[
                    'slug' => 'Asus',
                    'active' => 'active',
                ],

                'مایکروسافت'=>[
                    'slug' => 'Microsoft',
                    'active' => 'active',
                ]
            ];
        }

        foreach ($subCategories as $subCategory => $detail) {
            Subcategory::create([
                'name' => $subCategory,
                'slug' => $detail['slug'],
                'active' => $detail['active'],
            ]);
        }

        $Categories = Category::all();
        foreach ($Categories as $category) {
            $category->Subcategories()->sync([1,2,3,4,5,6]);

        }
    }





}


