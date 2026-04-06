import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const webhookUrl = import.meta.env.VITE_APPS_SCRIPT_WEB_APP_URL;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", type: "In-Clinic", date: "", timeSlot: "", message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const parseEndpointResponse = (responseText: string) => {
    let responseBody: { ok?: boolean; message?: string; reason?: string } | null = null;
    try {
      responseBody = responseText ? JSON.parse(responseText) : null;
    } catch {
      responseBody = null;
    }
    return responseBody;
  };

  const submitToAppsScriptWithGet = async (url: string, payload: Record<string, string>) => {
    const params = new URLSearchParams();
    params.set("action", "intake");
    Object.entries(payload).forEach(([key, value]) => {
      params.set(key, value);
    });

    const getUrl = `${url}${url.includes("?") ? "&" : "?"}${params.toString()}`;
    const response = await fetch(getUrl, { method: "GET" });
    const responseText = await response.text();
    const responseBody = parseEndpointResponse(responseText);

    return { response, responseText, responseBody };
  };

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit phone required";
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Invalid email";
    if (!form.date) e.date = "Please select a date";
    if (!form.timeSlot) e.timeSlot = "Please select a time slot";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!validate()) return;

    setLoading(true);
    try {
      if (!webhookUrl) {
        throw new Error("VITE_APPS_SCRIPT_WEB_APP_URL is missing");
      }

      const leadId = `lead_${crypto.randomUUID()}`;
      const payload = {
        ...form,
        leadId,
        status: "pending_confirmation",
        source: "website_booking_modal",
        timezone: "Asia/Kolkata",
        submittedAt: new Date().toISOString(),
      };

      let response: Response;
      let responseText = "";
      let responseBody: { ok?: boolean; message?: string; reason?: string; status?: string } | null = null;
      const getSubmit = await submitToAppsScriptWithGet(webhookUrl, payload);
      response = getSubmit.response;
      responseText = getSubmit.responseText;
      responseBody = getSubmit.responseBody as { ok?: boolean; message?: string; reason?: string; status?: string } | null;

      const isIntakeSuccess = response.ok && responseBody?.ok === true && responseBody?.status === "received";
      if (!isIntakeSuccess) {
        throw new Error(responseBody?.message || responseBody?.reason || responseText || "Failed to submit booking request");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setForm({ name: "", phone: "", email: "", type: "In-Clinic", date: "", timeSlot: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error("Booking submit failed:", err);
      const detailedMessage = err instanceof Error ? err.message : "";
      setErrors({
        form: detailedMessage || "We could not submit your request right now. Please call us directly at +91 9665714747.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div className="relative bg-background rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>
        
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle className="text-primary mx-auto mb-4" size={56} />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Appointment Request Sent!</h3>
            <p className="text-muted-foreground">Dr. Palve's team will confirm your appointment within minutes.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-1">Book Your Appointment</h3>
            <p className="text-muted-foreground mb-6 text-sm">Fill in your details and we'll confirm within minutes.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.form && (
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {errors.form}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Full Name *</label>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Your full name" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Phone Number *</label>
                <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="10-digit mobile number" />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Email</label>
                <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="your@email.com" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Consultation Type</label>
                <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                  <option>In-Clinic</option>
                  <option>Video Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Preferred Date *</label>
                <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
                {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Preferred Time Slot *</label>
                <select value={form.timeSlot} onChange={e => setForm({...form, timeSlot: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                  <option value="">Select a time slot</option>
                  <option>9:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 1:00 PM</option>
                  <option>4:00 PM - 5:00 PM</option>
                  <option>5:00 PM - 6:00 PM</option>
                  <option>6:00 PM - 7:00 PM</option>
                </select>
                {errors.timeSlot && <p className="text-destructive text-xs mt-1">{errors.timeSlot}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Message</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none" placeholder="Any specific concerns..." />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full text-center font-bold text-base flex items-center justify-center gap-2">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : "Book Appointment"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
