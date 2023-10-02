<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    public $availibility = array('available', 'not available');
    public $images = array();


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //'user_id' => '1',
            'name' => $this->faker->name(),
            'slug' => $this->faker->slug(),
            'description' => $this->faker->realText(),
            'category_id' => rand(1, 3),
            'subcategory_id' => rand(1, 6),
            'image'=>"https://loremflickr.com/446/240/world?random=" . rand(1, 99),
            'images'=>json_encode(["https://loremflickr.com/446/240/world?random=" . rand(1, 99),"https://loremflickr.com/446/240/world?random=" . rand(10,45),]),


        ];
    }
}
