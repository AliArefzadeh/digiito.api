<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ProductItem extends Model
{
    use HasFactory;



    public function Colors(Request $request)
    {
        foreach ($this->VariationOptions as $varaitionOption) {
            if ( $varaitionOption->variation->name == 'colors' ) {
                $selectedColors[] = $varaitionOption->value;
            }
        }
        return $selectedColors;
    }


    public function Details(Request $request)
    {

        foreach ($this->VariationOptions as $varaitionOption) {

            if ($varaitionOption->Variation->Category->slug == 'mobile') {
                if ( $varaitionOption->Variation->name == 'OS' ) {
                    $OS['OS'] = $varaitionOption->value;
                    $details[] = $OS ;

                }
                if ( $varaitionOption->Variation->name == 'size' ) {
                    $size['size']=$varaitionOption->value;
                    $details[] = $size;

                }
                if ( $varaitionOption->Variation->name == 'screen' ) {
                    $screen['screen']=$varaitionOption->value;
                    $details[] = $screen;
                }
                if ( $varaitionOption->Variation->name == 'camera' ) {
                    $camera['camera']=$varaitionOption->value;
                    $details[] = $camera;
                }
            }

            if ($varaitionOption->Variation->Category->slug == 'laptop') {
                if ( $varaitionOption->Variation->name == 'series' ) {
                    $series['series'] = $varaitionOption->value;
                    $details[] = $series ;

                }
                if ( $varaitionOption->Variation->name == 'ram' ) {
                    $ram['ram']=$varaitionOption->value;
                    $details[] = $ram;

                }
                if ( $varaitionOption->Variation->name == 'hard' ) {
                    $hard['hard']=$varaitionOption->value;
                    $details[] = $hard;
                }
                if ( $varaitionOption->Variation->name == 'screen' ) {
                    $screen['screen']=$varaitionOption->value;
                    $details[] = $screen;
                }
                if ( $varaitionOption->Variation->name == 'graphic' ) {
                    $graphic['graphic']=$varaitionOption->value;
                    $details[] = $graphic;
                }
            }

            if ($varaitionOption->Variation->Category->slug == 'smart_watch') {
                if ( $varaitionOption->Variation->name == 'usage' ) {
                    $usage['usage'] = $varaitionOption->value;
                    $details[] = $usage ;

                }
                if ( $varaitionOption->Variation->name == 'screen' ) {
                    $screen['screen']=$varaitionOption->value;
                    $details[] = $screen;

                }
                if ( $varaitionOption->Variation->name == 'strap_material' ) {
                    $strap_material['strap_material']=$varaitionOption->value;
                    $details[] = $strap_material;
                }

            }



        }


        return $details;
    }






    public function Product()
    {
        return $this->belongsTo(Product::class);
    }

    public function VariationOptions()
    {
        return $this->belongsToMany(variationOption::class,'product_configurations');
    }
}
