import React, { useState } from 'react';

const Options = () => {
  const [activeOption, setActiveOption] = useState(null);

  const handleClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div>
      <div className={`option ${activeOption === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Option 1</div>
      <div className={`option ${activeOption === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>Option 2</div>
      <div className={`option ${activeOption === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>Option 3</div>
    </div>
  );
};

export default Options;