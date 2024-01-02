const Chip = ({ text, style = '', additionalStyles, onClick }) => {
    // Define custom colors for each category
    const categoryColors = {
        Academic: '#1E90FF', // Blue
        Physical: '#FF4500', // Red
        Emotional: '#3CB371', // Green
        Social: '#800080'   // Purple
    };

    // Determine chip color based on text value
    const chipColor = categoryColors[text] || 'gray'; // Default color if not matched

    return ((style === 'outlined') ?
        (<div onClick={onClick} style={{ borderColor: chipColor, color: chipColor }} className={`w-fit h-8 p-1 bg-transparent border rounded-full flex justify-start items-center ${additionalStyles}`}>
            <div className="px-1.5 py-[3px] flex flex-col justify-start items-start">
                <div className="text-[13px] font-normal leading-[18px] tracking-tight">{text}</div>
            </div>
        </div>) :
        (<div onClick={onClick} style={{ borderColor: chipColor, backgroundColor: chipColor, color: 'white' }} className={`border w-fit h-8 p-1 rounded-full flex justify-start items-center ${additionalStyles}`}>
            <div className="px-1.5 py-[3px] flex flex-col justify-start items-start">
                <div className="text-white text-[13px] font-normal leading-[18px] tracking-tight">{text}</div>
            </div>
        </div>))
};

export default Chip;
