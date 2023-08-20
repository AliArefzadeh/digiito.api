<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained();
            $table->string('SKU')->nullable();
            $table->integer('quantity_in_stock')->default(0);
            $table->json('images')->nullable();
            $table->unsignedBigInteger('regularPrice');
            $table->unsignedBigInteger('salePrice');
            $table->enum('availibility',['available','not available']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_items');
    }
};
