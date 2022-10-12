<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(20)->create();
        \App\Models\Teacher::factory(1)->create();
        \App\Models\Student::factory(19)->create();
        \App\Models\Test::factory(10)->create();
        \App\Models\Group::factory(10)->create();
    }
}
