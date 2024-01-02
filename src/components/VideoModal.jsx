import { MdFiberManualRecord, MdStop, MdPause, MdClose } from 'react-icons/md';


const VideoModal = ({ isOpen, onClose, onStartRecording, onStopRecording, isRecording }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="bg-neutral-600 p-4 rounded relative">
                <h2 className="text-xl text-white text-center mb-2">Record Video</h2>
                {isRecording && <div className="text-red-500">Recording...</div>}
                <div className="shadow-2xl">
                    <video id="videoPreview" height={window.innerHeight - 200} autoPlay></video>
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                    {!isRecording && (
                        <div className="bg-gray-700 p-2 rounded-full cursor-pointer">
                            <MdFiberManualRecord className="text-red-500 text-3xl" onClick={onStartRecording} />
                        </div>
                    )}
                    {isRecording && (
                        <>
                            <MdPause className="text-white text-3xl cursor-pointer" onClick={onPauseRecording} />
                            <MdStop className="text-white text-3xl cursor-pointer" onClick={onStopRecording} />
                        </>
                    )}
                </div>
                <MdClose className="absolute top-4 right-4 text-white text-3xl p-4 cursor-pointer" onClick={onClose} />
            </div>
        </div>
    );
};

export default VideoModal;