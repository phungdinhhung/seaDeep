import React from 'react';
import CloudIcon from '@mui/icons-material/Cloud';

const CloudIconDemo = () => {
  // Tạo một mảng chứa các vị trí xác định trước
  const positions = [
    { top: 100, left: 10 },
    { top: 50, left: 30 },
    { top: 80, left: 60 },
    { top: 110, left: 90 },
    // Thêm các vị trí khác tùy ý
  ];

  return (
    <div>
      {positions.map((position, index) => (
        <CloudIcon
          key={index}
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            right: 0,
            bottom: 0,
        }}
        />
      ))}
    </div>
  );
};

export default CloudIconDemo;