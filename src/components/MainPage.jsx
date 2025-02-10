import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css'; // استایل‌های اصلی

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flag-container">
      <div className="section green">
        <h2>ماشین حساب</h2>
        <p>برای استفاده از ماشین حساب، روی دکمه زیر کلیک کنید.</p>
        <button className="btn" onClick={() => navigate('/calculator')}>
          برو به ماشین حساب
        </button>
      </div>

      <div className="section white">
        <h2>تبدیل واحد</h2>
        <p>برای تبدیل واحد، روی دکمه زیر کلیک کنید.</p>
        <button className="btn" onClick={() => navigate('/unit-converter')}>
          برو به تبدیل واحد
        </button>
      </div>

      <div className="section red">
        <h2>بازی ریاضی</h2>
        <p>برای شروع بازی، روی دکمه زیر کلیک کنید.</p>
        <button className="btn" onClick={() => navigate('/math-game')}>
          شروع بازی
        </button>
      </div>
    </div>
  );
};

export default MainPage;