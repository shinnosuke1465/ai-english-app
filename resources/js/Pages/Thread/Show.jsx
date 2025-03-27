import { Head } from '@inertiajs/react'
import { SideMenu } from '../../Components/SideMenu'
import { LogoutButton } from '../../Components/LogoutButton'
import { HiMicrophone, HiSpeakerphone } from 'react-icons/hi'

export default function Show({ threads, messages}) {
    return (
        <>
            <Head title="Show" />
            <div className="flex h-screen">
                <SideMenu threads={threads} /> {/* threadsをSideMenuに渡す */}
                <div className="flex-1 p-4 bg-gray-800 text-white">
                    <div className="flex justify-end">
                        <LogoutButton />
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <div id="message-container" className="flex flex-col space-y-4 overflow-y-auto"> {/* IDを追加 */}
                            {messages.map((message, index) => (
                                message.sender === 1 ? (
                                    // ユーザのメッセージ
                                    <div key={index} className="flex justify-end items-center">
                                        <div className="bg-blue-600 p-2 rounded-lg max-w-xs">
                                            <p>{message.message_en}</p>
                                        </div>
                                        <div className="ml-2 bg-gray-600 p-2 rounded-full">
                                            You
                                        </div>
                                    </div>
                                ) : (
                                    // AIのメッセージ
                                    <div key={index} className="flex items-center">
                                        <div className="mr-2 bg-gray-600 p-2 rounded-full">
                                            AI
                                        </div>
                                        <div className="bg-gray-700 p-2 rounded-lg max-w-xs">
                                            <p>{message.message_en}</p>
                                        </div>
                                        <div className="flex items-center ml-2">
                                            <button
                                                className="bg-gray-600 p-1 rounded-full"
                                            >
                                                <HiSpeakerphone size={24} />
                                            </button>
                                            <button
                                                className="bg-gray-600 p-1 rounded-full ml-1"
                                            >
                                                Aあ
                                            </button>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="flex justify-end pb-10">
                            <button
                                className='bg-gray-600 p-6 rounded-full'
                            >
                                <HiMicrophone size={32} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
