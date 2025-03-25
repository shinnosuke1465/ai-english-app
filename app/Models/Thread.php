<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    /** @use HasFactory<\Database\Factories\ThreadFactory> */
    // use HasFactory;

    // フィラブルプロパティの追加
    protected $fillable = ['title'];

    // messagesメソッドを追加
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
