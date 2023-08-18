<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    public $availibility = array('available', 'not available');



    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => '1',
            'category_id' => rand(1, 2),
            'title' => $this->faker->name(),
            'slug' => $this->faker->slug(),
            'description' => $this->faker->realText(),
            'availableColors' => "'silver', 'white'",
            'Colors' => 'silver',
            'quantity' => rand(1, 13),
            //'availibility'=>$this->availibility[array_rand($this->availibility,1)],
            //'availibility'=>'available',
            'image'=>"https://loremflickr.com/446/240/world?random=" . rand(1, 99),
            'regularPrice'=>rand(1,85) . 1000*rand(100,950),
            'salePrice' => rand(1, 85) . 1000 * rand(100, 950),

        ];
    }
}
