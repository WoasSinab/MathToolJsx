import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css'; // استایل‌های اصلی

const UnitConverter = () => {
  const navigate = useNavigate();

  const convertLength = () => {
    const length = parseFloat(document.getElementById('lengthInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (unit === 'cmToM') {
      result = length / 100;
      document.getElementById('conversionResult').innerText = `${length} سانتی‌متر = ${result} متر`;
    } else if (unit === 'mToCm') {
      result = length * 100;
      document.getElementById('conversionResult').innerText = `${length} متر = ${result} سانتی‌متر`;
    }
  };

  return (
    <div className="flag-container">
      <div className="section white">
        <h2>تبدیل واحد</h2>
        <input type="number" id="lengthInput" placeholder="عدد را وارد کنید" />
        <select id="unitSelect">
          <option value="cmToM">سانتی‌متر به متر</option>
          <option value="mToCm">متر به سانتی‌متر</option>
        </select>
        <button onClick={convertLength}>تبدیل</button>
        <p id="conversionResult"></p>
        <button className="btn" onClick={() => navigate('/')}>
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
};

export default UnitConverter;