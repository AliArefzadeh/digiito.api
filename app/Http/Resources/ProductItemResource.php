<?php

namespace App\Http\Resources;

use App\Models\ProductItem;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */


    public function toArray(Request $request): array
    {
       // return parent::toArray($request);

            return [
                'category'=>$this->Product->Category->name,
                'id' => $this->Product->id,
                'model' => $this->Product->name,
                'brand' => $this->Product->Subcategory->name,
                'price' => $this->salePrice,
                'colors' => $this->Colors($request),
                'details' => $this->Details($request),
                'images' => json_decode($this->Product->images),


            ];

    }
}
