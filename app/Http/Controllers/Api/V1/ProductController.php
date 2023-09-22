<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductItemRequest;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductItemResource;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->authorizeResource(Product::class,'product');

    }
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
    public function store(StoreProductRequest $request)
    {

        Product::create($request->all());
        return response()->json([
            'message' =>'Product has been created successfully'
        ,],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //$this->authorize('view',$product);
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
    public function update(UpdateProductRequest $request, Product $product)
    {
        //$this->authorize('update', $product);


        $request->merge([
            'images' => json_encode($request->images),
        ]);
          $product->update($request->all());
        return response()->json([
            'message' =>'Product has been updated successfully'
        ],201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
