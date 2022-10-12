<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();            
            $table->foreignId('test_id')
                ->references('id')->on('tests')->onDelete('no action');
            $table->foreignId('student_id')
                ->references('id')->on('students')->onDelete('no action');
            $table->foreignId('schedule_id')
                ->references('id')->on('schedules')->onDelete('no action');
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
        Schema::dropIfExists('answers');
    }
}
