<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dep_manager extends Model
{
    use HasFactory;

    protected $fillable = [
        'dept_id',
        'manager_id',
        'from_date',
        'to_date',
    ];

}
