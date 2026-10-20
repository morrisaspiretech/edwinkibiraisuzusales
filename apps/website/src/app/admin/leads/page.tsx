import { prisma } from "@repo/database";
import { FaMessage, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaCalendarCheck } from "react-icons/fa6";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  let leads: any[] = [];
  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("Error fetching leads:", err);
  }

  const callRequests = leads.filter((l) => l.source === "contact-form" || l.message?.includes("Call")).length;
  const testDrives = leads.filter((l) => l.source === "book-test-drive" || l.message?.includes("TEST DRIVE")).length;
  const liveChatLeads = leads.filter((l) => l.source === "livechat" || (!l.source && l.message)).length;

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-black text-gray-900 uppercase tracking-wide">Leads & Customer Inquiries</h1>
        <p className="text-gray-400 text-sm mt-1">Real-time incoming customer inquiries submitted across your website.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center text-red-600"><FaMessage size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">{leads.length}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Leads</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600"><FaCalendarCheck size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">{testDrives}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Test Drives</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><FaPhone size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">{callRequests}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contact Inquiries</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600"><FaClock size={20} /></div>
          <div>
            <p className="text-2xl font-black text-gray-800">{liveChatLeads}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">LiveChat / Direct</p>
          </div>
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaMessage size={28} className="text-gray-300" />
          </div>
          <p className="text-base font-black text-gray-400 uppercase mb-2">No Leads Stored Yet</p>
          <p className="text-sm text-gray-400 max-w-sm mx-auto">
            When customers submit inquiry forms or request test drives, their details will instantly appear here.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Recent Customer Inquiries</h2>
            <span className="text-xs text-gray-400 font-semibold">{leads.length} records</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3.5">Customer</th>
                  <th className="px-6 py-3.5">Contact</th>
                  <th className="px-6 py-3.5">Details / Message</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead) => {
                  const cleanPhone = (lead.phone || "").replace(/[^0-9]/g, "");
                  const intlPhone = cleanPhone.startsWith("0") ? "254" + cleanPhone.slice(1) : cleanPhone;
                  return (
                    <tr key={lead.id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {lead.name}
                        {lead.source && (
                          <span className="ml-2 inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-gray-100 text-gray-600 rounded">
                            {lead.source}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-0.5">
                          <p className="font-medium text-gray-800">{lead.phone}</p>
                          {lead.email && lead.email !== "noemail@lead.local" && (
                            <p className="text-xs text-gray-400">{lead.email}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-md">
                        <p className="text-xs text-gray-700 whitespace-pre-line line-clamp-3">
                          {lead.message || "No message specified"}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString("en-KE", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`tel:${lead.phone}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold transition-colors"
                          >
                            <FaPhone size={12} /> Call
                          </a>
                          <a
                            href={`https://wa.me/${intlPhone}?text=Hi+${encodeURIComponent(lead.name)}%2C+thank+you+for+reaching+out+to+Edwin+Kibirai+Isuzu+Sales.`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors"
                          >
                            <FaWhatsapp size={13} /> WhatsApp
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
