<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        {
            $categories = [
                'تلفن همراه' =>[
                    'slug' => 'mobile',
                    'active'=>'active'
                ]
                , 'لپ تاپ'=>[
                    'slug' => 'laptop',
                    'active'=>'active'

                ]
                , 'ساعت هوشمند'=>[
                    'slug' => 'smart_watch',
                    'active'=>'not active'
                ]

            ];
        }
        foreach ($categories as $categoryName => $detail) {
            Category::create([
                'name' => $categoryName,
                'slug' => $detail['slug'],
                'active' => $detail['active'],
            ]);
        }
    }
}
