
import { FaMessage, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

export default async function AdminLeadsPage() {
  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-black text-gray-900 uppercase tracking-wide">Leads & Inquiries</h1>
        <p className="text-gray-400 text-sm mt-1">Customer inquiries submitted via the website.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaMessage size={28} className="text-gray-300" />
        </div>
        <p className="text-base font-black text-gray-400 uppercase mb-2">No Leads Yet</p>
        <p className="text-sm text-gray-400 max-w-sm mx-auto">
          When customers fill out inquiry forms on your website, their details will appear here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><FaPhone size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">0</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Requests</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary"><FaEnvelope size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">0</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Inquiries</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600"><FaClock size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">0</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Test Drive Bookings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
