<?php

namespace Database\Seeders;

use App\Models\variation;
use App\Models\variationOption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VariationOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $options = [
            '1' => [
                'colors' => ['silver', 'white', 'red', 'grey', 'green',],
                'OS' => ['ios', 'android',],
                'size' => [6 + (rand(0, 10) / 10)],
                'screen' => ['Super Retina XDR OlED', 'Dynamic AMOLED 2X', 'Super AMOLED Plus'],
                'camera' => ['12', '108', '24'],
            ],

            '2' => [
                'colors' => ['silver', 'white', 'red', 'grey', 'green',],
                'series' => ['core i3', 'core i5', 'core i7', 'core i9'],
                'ram' => [4, 8, 16, 32, 64],
                'hard' => ['512 MB', '1 TB', '2 TB'],
                'screen' => ["Full Hd - 1920 * 1080 پیکسل"],
                'graphic' => ["Nvidia gtx 1060", ' Nvidia gtx 1560 super', 'Nvidia gtx 1660 ti', 'Nvidia rtx 3060', 'Nvidia rtx 2060', 'Nvidia gtx 1080'],
            ],

            '3' => [
                'colors' => ['silver', 'white', 'red', 'grey', 'green',],
                'usage' => ['رسمی', 'روزمره', 'ورزشی',],
                'screen' => ['مستطیل', 'دایره'],
                'strap_material' => ['سیلیکون'],
            ],


        ];


        $variations = variation::all();
        foreach ($variations as $variation) {
            foreach ($options as $option => $values) {
                if ($variation->category_id == $option) {
                    if (is_array($values)) {
                        foreach ($values as $value =>$items) {
                            if ($variation->name == $value) {
                                foreach ($items as $item) {
                                    variationOption::create([
                                        'variation_id' => $variation->id,
                                        'value' => $item,
                                    ]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
