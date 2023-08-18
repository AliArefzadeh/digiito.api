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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('category_id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->set('availableColors', ['silver', 'white', 'red', 'gery', 'green',]);
            $table->set('Colors', ['silver', 'white', 'red', 'gery', 'green',]);
            $table->integer('quantity');
            $table->enum('availibility',['available','not availabel']);
            $table->string('image')->nullable();
            $table->text('pictures')->nullable();
            $table->unsignedBigInteger('regularPrice');
            $table->unsignedBigInteger('salePrice');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
