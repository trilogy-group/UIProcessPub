import React, { useState } from 'react';
import { MdVideocam, MdKeyboardVoice, MdFileUpload } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa'; // Font Awesome icon for editing, similar to filling out a form
import Chip from '../components/Chip';
import VideoModal from '../components/VideoModal';
import CheckInFormModal from '../components/CheckInFormModal';
import AudioRecorderModal from '../components/AudioRecorderModal';
import Portal from '../components/Portal';



const SectionHeader = ({ text }) => (
  <div className="flex items-center my-4 w-4/5 mx-auto">
    <div className="flex-1 border-t border-gray-300"></div>
    <span className="px-3 text-sm text-gray-500">{text}</span>
    <div className="flex-1 border-t border-gray-300"></div>
  </div>
);


const StudentCheckInPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Physical'); // default category
  const [checkInMethod, setCheckInMethod] = useState(''); // To track selected check-in method
  const categories = ['Physical', 'Academic', 'Emotional', 'Social'];
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [isAudioModalOpen, setAudioModalOpen] = useState(false);


  let mediaRecorder;
  let recordedChunks = [];
  let stream = null;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCheckInMethodChange = (method) => {
    setCheckInMethod(method);
  };

  const handleOpenFormModal = () => {
    setFormModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  const handleFileUpload = (e) => { };

  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      recordedChunks = [];
      mediaRecorder.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        stream = mediaStream;
        const video = document.getElementById('videoPreview');
        video.srcObject = mediaStream;
        mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.ondataavailable = e => recordedChunks.push(e.data);
        mediaRecorder.onstop = () => {
          // Handle the recorded video data
          const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
          recordedChunks = []; // Reset chunks
          // You can download or upload the video file using recordedBlob
          // Example: Download the video
          const url = URL.createObjectURL(recordedBlob);
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = url;
          a.download = "recordedVideo.webm";
          a.click();
          window.URL.revokeObjectURL(url);
        };
      });
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    // Stop video stream
    const video = document.getElementById('videoPreview');
    if (video.srcObject) {
      video.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  const handleRecordVideo = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop(); // Automatically stop recording after a set time, e.g., 5 seconds
      }, 5000);
    }
  };

  const handleFormSubmit = (formData) => {
    console.log(formData); // Here you would handle the submitted data
  };

    const handleAudioFormSubmit = (audioData) => {
        // Handle the audio data, e.g., save it or send it to a server
        setAudioModalOpen(false); // Close the modal after submitting
    };

    // Function to open the audio recorder modal
    const openAudioModal = () => {
        setAudioModalOpen(true);
    };


  return (
    <>
      <Portal>
        {isFormModalOpen && (
          <CheckInFormModal
            isOpen={isFormModalOpen}
            onClose={() => setFormModalOpen(false)}
            onSubmit={handleAudioFormSubmit}
          />
        )}
        {isVideoModalOpen && <VideoModal
          isOpen={isVideoModalOpen}
          onClose={handleCloseVideoModal}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          isRecording={isRecording} // Pass the recording state to the modal
        />}
        {isAudioModalOpen && (
          <AudioRecorderModal
            isOpen={isAudioModalOpen}
            onClose={() => setAudioModalOpen(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </Portal>
      <div className="flex items-center justify-center w-full h-screen"> {/* Full-screen container with centered content */}
        <form onSubmit={handleSubmit} className="w-full md:max-w-md lg:w-1/2 mx-auto p-4 bg-white rounded shadow-2xl"> {/* Width set to 50% and max width to constrain size */}
          <div className="mb-4">
            <h1 className='text-3xl font-bold w-full text-center mb-4'>Check In</h1>
            <div className="mb-4 flex justify-between w-4/5 mx-auto">
              {categories.map((category) => (
                <div key={category} onClick={() => handleCategoryChange(category)} className='cursor-pointer'>
                  <Chip
                    text={category}
                    style={selectedCategory === category ? '' : 'outlined'}
                    additionalStyles={`${selectedCategory === category ? 'shadow-md' : ''}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 mx-auto flex flex-col space-y-4 w-4/5"> {/* Set the width to 80% for this container */}
            <button
              type="button"
              onClick={handleOpenVideoModal}
              className="btn flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 shadow-sm px-4 py-2 rounded-full hover:bg-gray-50"
            >
              <MdVideocam className="text-lg" />
              <span>Record a Video</span>
            </button>
            <button
              type="button"
              onClick={openAudioModal}
              className="btn flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 shadow-sm px-4 py-2 rounded-full hover:bg-gray-50"
            >
              <MdKeyboardVoice className="text-lg" />
              <span>Record your Audio</span>
            </button>
            <button
              type="button"
              onClick={handleOpenFormModal}
              className="btn flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 shadow-sm px-4 py-2 rounded-full hover:bg-gray-50"
            >
              <FaRegEdit className="text-lg" />
              <span>Online Form</span>
            </button>

          </div>
          {/* Display the form fields or recording options based on the selected check-in method */}
          {/* {checkInMethod === 'form' && (
            <></>
          )} */}
          {/* Additional logic for handling video or audio recording can be implemented here */}
          <SectionHeader text="OR" />
          <div className="flex flex-col items-center">
            <label className="btn flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 shadow-sm px-4 py-2 rounded-full hover:bg-gray-50 w-4/5 cursor-pointer">
              <MdFileUpload className="text-lg" />
              <span>Upload a video/audio recording</span>
              <input type="file" className="hidden" onChange={handleFileUpload} accept="video/*,audio/*" />
            </label>
          </div>

          <div className="flex justify-center w-full my-4"> {/* Flex container for centering */}
            <button type="submit" className="btn bg-blue-500 rounded-xl w-4/5 font-semibold text-lg text-white h-10">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};


export default StudentCheckInPage;