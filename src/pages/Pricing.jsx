import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentCam, setCurrentCam] = useState('camera1');
  const [hoveredCam, setHoveredCam] = useState(null);

  const handleCheckout = (cameraType) => {
    navigate('/checkout', { state: { selectedCamera: cameraType } });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center min-h-[50px]">
          {/* bubble container */}
          <div className="bubble-container">
            {/* bubble 1 */}
            <button 
              className="icon-bubble"
              onClick={() => setCurrentCam('camera1')}
              onMouseEnter={() => setHoveredCam('camera1')}
              onMouseLeave={() => setHoveredCam(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('../../pricing/pet.png')" }}
              />
              <div className={`absolute inset-0 transition-all duration-200 ${
                currentCam === 'camera1'
                  ? 'bg-green-400 bg-opacity-20 hover:bg-green-400 hover:bg-opacity-40'
                  : 'bg-gray-500 bg-opacity-20 hover:bg-green-400 hover:bg-opacity-40'
              }`} />
            </button>

            {/* bubble 2 */}
            <button 
              className="icon-bubble"
              onClick={() => setCurrentCam('camera2')}
              onMouseEnter={() => setHoveredCam('camera2')}
              onMouseLeave={() => setHoveredCam(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('../../pricing/people.png')" }}
              />
              <div className={`absolute inset-0 transition-all duration-200 ${
                currentCam === 'camera2'
                  ? 'bg-green-400 bg-opacity-20 hover:bg-green-400 hover:bg-opacity-40'
                  : 'bg-gray-500 bg-opacity-20 hover:bg-green-400 hover:bg-opacity-40'
              }`} />
            </button>
            
            {/* bubble 3 */}
            <button 
              className="icon-bubble"
              onClick={() => setCurrentCam('camera3')}
              onMouseEnter={() => setHoveredCam('camera3')}
              onMouseLeave={() => setHoveredCam(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('../../pricing/cars.png')" }}
              />
              <div className={`absolute inset-0 transition-all duration-200 ${
                currentCam === 'camera3'
                  ? 'bg-green-400 bg-opacity-20 hover:bg-green-400 hover:bg-opacity-40 '
                  : 'bg-gray-500 bg-opacity-20 hover:bg-green-400 hover:bg-opacity-40'
              }`} />
            </button>
          </div>

        </div>
        {/* per veure la camera hoverejada */}
        <span className="relative z-10 text-white font-bold my-4 block">
          {hoveredCam !== null ? hoveredCam : '\u00A0'}
        </span>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Show only the active plan */}
          {currentCam === 'camera1' && (
            <div className="relative rounded-lg overflow-hidden min-h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/path/to/cam1-bg.jpg')" }}
              />
              <div className="relative z-10 p-12 bg-black bg-opacity-50 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">{t('pricing.cam1.title')}</h3>
                <p className="text-white mb-4">{t('pricing.cam1.description')}</p>
                <div className="text-3xl font-bold text-white mb-6">{t('pricing.cam1.price')}</div>
                <button 
                  onClick={() => handleCheckout('camera1')}
                  className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  {t('pricing.getStarted')}
                </button>
              </div>
            </div>
          )}
          
          {currentCam === 'camera2' && (
            <div className="relative rounded-lg overflow-hidden min-h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/path/to/cam2-bg.jpg')" }}
              />
              <div className="relative z-10 p-12 bg-black bg-opacity-50 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">{t('pricing.cam2.title')}</h3>
                <p className="text-white mb-4">{t('pricing.cam2.description')}</p>
                <div className="text-3xl font-bold text-white mb-6">{t('pricing.cam2.price')}</div>
                <button 
                  onClick={() => handleCheckout('camera2')}
                  className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  {t('pricing.getStarted')}
                </button>
              </div>
            </div>
          )}
          
          {currentCam === 'camera3' && (
            <div className="relative rounded-lg overflow-hidden min-h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/path/to/cam3-bg.jpg')" }}
              />
              <div className="relative z-10 p-12 bg-black bg-opacity-50 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">{t('pricing.cam3.title')}</h3>
                <p className="text-white mb-4">{t('pricing.cam3.description')}</p>
                <div className="text-3xl font-bold text-white mb-6">{t('pricing.cam3.price')}</div>
                <button 
                  onClick={() => handleCheckout('camera3')}
                  className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  {t('pricing.getStarted')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}