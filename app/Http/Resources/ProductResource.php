<?php

namespace App\Http\Resources;

use Database\Seeders\VariationSeeder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

/*public function __construct($resource)*/


    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'model' => $this->name,
            'brand' => $this->Subcategory->only('name'),
            'details' => $this->ProductItems,
            'slug' => $this->slug,
            'image' => $this->image,
            'description' => $this->description,
            'images' => $this->images,
            'category_id' => $this->category_id,
            'subcategory_id' => $this->subcategory_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'Category' => $this->Category->only('name'),
            'Variations' => $this->Category->Variations,

        ];
    }
}
