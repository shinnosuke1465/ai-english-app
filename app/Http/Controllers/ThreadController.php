<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use App\Http\Requests\StoreThreadRequest;
use App\Http\Requests\UpdateThreadRequest;
use App\Models\Thread;
use App\Models\Message;

class ThreadController extends Controller
{
    /**
     * トップ画面表示
     */
    public function index(): InertiaResponse
    {
        $threads = Thread::orderBy('id', 'desc')->get(); // スレッドデータを取得
        // $learningDates = Message::selectRaw('DATE(created_at) as date')
        //                         ->groupBy('date')
        //                         ->pluck('date')
        //                         ->toArray(); // 学習した日付を取得

        return Inertia::render('Top', [
            'threads' => $threads, // フロントエンドに渡す
            // 'learningDates' => $learningDates, // 学習日をフロントエンドに渡す
        ]);
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
    public function store()
    {
        $thread = Thread::create([
            'title' => now()->format('Y-m-d H:i:s'),
        ]);

        return redirect()->route('thread.show', ['threadId' => $thread->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $threadId)
    {
        $messages = Message::where('thread_id', $threadId)->get(); // メッセージデータを取得
        $threads = Thread::orderBy('id', 'desc')->get(); // スレッドデータを取得
        return Inertia::render('Thread/Show', [
            'threads' => $threads, // フロントエンドに渡す
            'messages' => $messages, // フロントエンドに渡す
            'threadId' => $threadId,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Thread $thread)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateThreadRequest $request, Thread $thread)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Thread $thread)
    {
        //
    }
}
