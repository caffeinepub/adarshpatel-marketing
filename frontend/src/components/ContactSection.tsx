import { useState } from 'react';
import { Phone, MessageSquare, User, Package, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSubmitEnquiry } from '@/hooks/useQueries';

const WHATSAPP_NUMBER = '918431628989';

const productOptions = [
  { value: 'Dairy Feed', label: 'Dairy Feed Products' },
  { value: 'Agri Inputs', label: 'Agri Inputs' },
  { value: 'Coffee Trading', label: 'Coffee Trading' },
  { value: 'General', label: 'General Enquiry' },
];

interface FormState {
  name: string;
  phone: string;
  product: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  product?: string;
  message?: string;
}

function buildWhatsAppUrl(form: FormState): string {
  const text = [
    `*New Enquiry from Adarshpatel Marketing Website*`,
    ``,
    `*Name:* ${form.name}`,
    `*Phone:* ${form.phone}`,
    `*Product of Interest:* ${form.product}`,
    `*Message:* ${form.message}`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    product: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitEnquiry, isPending, isError, error } = useSubmitEnquiry();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!form.product) newErrors.product = 'Please select a product of interest';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const submittedForm = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      product: form.product,
      message: form.message.trim(),
    };

    submitEnquiry(submittedForm, {
      onSuccess: () => {
        // Open WhatsApp with pre-filled message
        window.open(buildWhatsAppUrl(submittedForm), '_blank', 'noopener,noreferrer');
        setSubmitted(true);
        setForm({ name: '', phone: '', product: '', message: '' });
        setErrors({});
      },
    });
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-earth-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-earth-green/10 border border-earth-green/20 text-earth-green px-4 py-1.5 rounded-full text-sm font-sans font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-earth-brown mb-4">
            Contact & Enquiry
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in our products? Send us an enquiry and our team will get back to you promptly.
          </p>
          <div className="mt-6 w-20 h-1 bg-earth-amber mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-earth-green rounded-2xl p-8 text-earth-cream">
              <h3 className="font-serif font-bold text-2xl mb-2">Adarshpatel Marketing</h3>
              <p className="font-sans text-earth-cream/70 text-sm mb-6">
                Your trusted partner for dairy feed, agri inputs, and coffee trading solutions.
              </p>

              <div className="space-y-5">
                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-earth-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-earth-amber" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-earth-cream text-sm mb-1">Call Us</p>
                    <a
                      href="tel:9964072062"
                      className="font-sans text-earth-cream/70 text-sm block hover:text-earth-amber transition-colors"
                    >
                      +91 99640 72062
                    </a>
                    <a
                      href="tel:8431628989"
                      className="font-sans text-earth-cream/70 text-sm block hover:text-earth-amber transition-colors"
                    >
                      +91 84316 28989
                    </a>
                  </div>
                </div>

                {/* WhatsApp Enquiry */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-earth-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <SiWhatsapp className="w-4 h-4 text-earth-amber" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-earth-cream text-sm mb-1">
                      Enquiries (WhatsApp)
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-earth-cream/70 text-sm block hover:text-earth-amber transition-colors"
                    >
                      +91 84316 28989
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-earth-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-earth-amber" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-earth-cream text-sm mb-1">Our Location</p>
                    <p className="font-sans text-earth-cream/70 text-sm leading-relaxed">
                      Mallipattana, Arkalgud,<br />
                      Hassan, Karnataka 573102
                    </p>
                  </div>
                </div>

                {/* Products */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-earth-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Package className="w-4 h-4 text-earth-amber" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-earth-cream text-sm">Products</p>
                    <p className="font-sans text-earth-cream/70 text-sm">Dairy Feed · Agri Inputs · Coffee</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-earth-amber/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-earth-amber" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-earth-cream text-sm">Response Time</p>
                    <p className="font-sans text-earth-cream/70 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-earth-amber/10 border border-earth-amber/20 rounded-2xl p-6">
              <h4 className="font-serif font-semibold text-earth-brown text-lg mb-2">
                Why Choose Us?
              </h4>
              <ul className="space-y-2">
                {[
                  'Direct from manufacturer pricing',
                  'Quality tested products',
                  'Expert agronomist support',
                  'Timely delivery across region',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-sans text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-earth-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-earth-green/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-earth-green" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-earth-brown mb-2">
                    Enquiry Submitted!
                  </h3>
                  <p className="font-sans text-muted-foreground text-base mb-2">
                    Thank you for reaching out. Your enquiry has been sent via WhatsApp to our team.
                  </p>
                  <p className="font-sans text-muted-foreground text-sm mb-6">
                    If WhatsApp didn't open automatically,{' '}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-earth-green underline hover:text-earth-green/80 transition-colors"
                    >
                      click here to message us directly
                    </a>
                    .
                  </p>
                  <Button
                    onClick={handleReset}
                    className="bg-earth-green hover:bg-earth-green/90 text-earth-cream font-semibold rounded-full px-8"
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm mb-4">
                    Fill in the details below — your enquiry will be sent directly via WhatsApp.
                  </p>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="font-sans font-medium text-sm text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`pl-9 font-sans ${errors.name ? 'border-destructive' : ''}`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-destructive text-xs font-sans flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="font-sans font-medium text-sm text-foreground">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 99640 72062"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`pl-9 font-sans ${errors.phone ? 'border-destructive' : ''}`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-destructive text-xs font-sans flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Product of Interest */}
                  <div className="space-y-1.5">
                    <Label htmlFor="product" className="font-sans font-medium text-sm text-foreground">
                      Product of Interest <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={form.product}
                      onValueChange={(val) => setForm({ ...form, product: val })}
                    >
                      <SelectTrigger
                        id="product"
                        className={`font-sans ${errors.product ? 'border-destructive' : ''}`}
                      >
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value} className="font-sans">
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.product && (
                      <p className="text-destructive text-xs font-sans flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.product}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="font-sans font-medium text-sm text-foreground">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, quantity needed, or any questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className={`font-sans resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs font-sans flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error */}
                  {isError && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 flex items-center gap-2 text-sm font-sans text-destructive">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error instanceof Error ? error.message : 'Failed to submit. Please try again.'}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-earth-green hover:bg-earth-green/90 text-earth-cream font-semibold rounded-full py-3 text-base flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-earth-cream/40 border-t-earth-cream rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <SiWhatsapp className="w-4 h-4" />
                        Send via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
