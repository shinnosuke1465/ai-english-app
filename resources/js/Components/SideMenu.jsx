import React from 'react';
import { HiPlus, HiChatAlt2 } from "react-icons/hi";

export function SideMenu({ threads }) { // threadsを受け取る
    return (
        <div className="w-64 bg-green-700 text-white h-screen overflow-y-auto">
            <div className="flex items-center p-4 text-2xl font-bold">
                <img src="/favicon.png" alt="Chat Icon" className="w-8 h-8 mr-2" />
                <span>MyEnglishApp</span>
            </div>
            <ul className="space-y-2">
                <li>
                    <a href={ route('thread.store') } className="flex items-center p-2 text-base font-normal text-white hover:bg-green-600">
                        <HiPlus className="w-6 h-6" />
                        <span className="ml-3">新規スレッド作成</span>
                    </a>
                </li>
                {threads.map((thread, index) => ( // threadsをループして表示
                    <li key={index}>
                        <a href={ route('thread.show', { threadId: thread.id }) } className="flex items-center p-2 text-base font-normal text-white hover:bg-green-600">
                            <HiChatAlt2 className="w-6 h-6" />
                            <span className="ml-3">{thread.title}</span> {/* タイトルを表示 */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
