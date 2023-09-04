<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductItemResource;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductItem;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $products = ProductItem::all();

        foreach ($products as $productItem) {
            foreach ($productItem->VariationOptions as $varaitionOption) {
                if ('color' == $varaitionOption->variation->name) {
                    $selectedColors = $varaitionOption->value;
                }
            }
        }
        /*dd($product);*/
        return ProductItemResource::collection($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Product::create($request->all());
        return response()->json([
            'message' =>'Product has been created succesfully'
        ,],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //return $product;

        return new ProductResource($product);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
