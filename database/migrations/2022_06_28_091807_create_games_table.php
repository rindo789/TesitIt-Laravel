<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->foreignId('test_id')
                ->references('id')->on('tests');
            $table->foreignId('schedule_id')
                ->references('id')->on('schedules');
            $table->foreignId('student_id')
                ->references('id')->on('students');
            $table->bigInteger('score');
            $table->integer('answers');
            $table->integer('multiplier');
            $table->integer('full_time');
            $table->integer('short_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
