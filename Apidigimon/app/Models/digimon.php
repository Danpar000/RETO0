<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Api\DigimonController;

class digimon extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img', 'level'];
}
