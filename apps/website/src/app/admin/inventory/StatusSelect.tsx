"use client";

interface StatusSelectProps {
  carId: string;
  currentStatus: string;
  updateStatusAction: (formData: FormData) => void;
}

export default function StatusSelect({ carId, currentStatus, updateStatusAction }: StatusSelectProps) {
  const colorClass =
    currentStatus === "AVAILABLE"
      ? "bg-emerald-50 text-emerald-700"
      : currentStatus === "SOLD"
      ? "bg-gray-100 text-gray-500"
      : "bg-yellow-50 text-yellow-700";

  return (
    <form action={updateStatusAction}>
      <input type="hidden" name="id" value={carId} />
      <select
        name="status"
        defaultValue={currentStatus}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded border-0 cursor-pointer focus:ring-1 focus:ring-secondary outline-none ${colorClass}`}
      >
        <option value="AVAILABLE">Available</option>
        <option value="SOLD">Sold</option>
        <option value="PENDING">Pending</option>
      </select>
    </form>
  );
}
