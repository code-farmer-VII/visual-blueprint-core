import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

// Social media icon components
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--contact-dark))] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Contact Information */}
          <div className="bg-[hsl(var(--contact-teal))] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-[hsl(var(--contact-decoration))] rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-32 right-20 w-48 h-48 bg-[hsl(var(--contact-decoration))] rounded-full opacity-20 blur-2xl"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-[hsl(var(--contact-text))] mb-4">
                  Contact Us
                </h1>
                <p className="text-[hsl(var(--contact-text-muted))] text-lg">
                  Let's bring your ideas to life. We'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8 mb-16">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Phone className="w-5 h-5 text-[hsl(var(--contact-text))]" />
                  </div>
                  <div>
                    <h3 className="text-[hsl(var(--contact-text))] font-semibold mb-2">
                      Ethiopia
                    </h3>
                    <p className="text-[hsl(var(--contact-text-muted))] text-sm">
                      0906709999
                    </p>
                    <p className="text-[hsl(var(--contact-text-muted))] text-sm">
                      0906709999
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Mail className="w-5 h-5 text-[hsl(var(--contact-text))]" />
                  </div>
                  <div>
                    <p className="text-[hsl(var(--contact-text-muted))]">
                      Email: Yoniledigitals@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <MapPin className="w-5 h-5 text-[hsl(var(--contact-text))]" />
                  </div>
                  <div>
                    <h3 className="text-[hsl(var(--contact-text))] font-semibold mb-1">
                      Ethiopia,
                    </h3>
                    <p className="text-[hsl(var(--contact-text-muted))] text-sm">
                      Addis Ababa
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <TwitterIcon />
                </button>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <InstagramIcon />
                </button>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <DiscordIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[hsl(var(--contact-dark))] p-8 sm:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First Row - First Name & Last Name */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[hsl(var(--contact-text-muted))] text-sm mb-3"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[hsl(var(--contact-text-muted))]/30 text-[hsl(var(--contact-text))] pb-3 focus:border-[hsl(var(--contact-accent))] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[hsl(var(--contact-text-muted))] text-sm mb-3"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-transparent border-b border-[hsl(var(--contact-text-muted))]/30 text-[hsl(var(--contact-text))] pb-3 placeholder:text-[hsl(var(--contact-text-muted))]/50 focus:border-[hsl(var(--contact-accent))] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Second Row - Email & Company Name */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[hsl(var(--contact-text-muted))] text-sm mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[hsl(var(--contact-text-muted))]/30 text-[hsl(var(--contact-text))] pb-3 focus:border-[hsl(var(--contact-accent))] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-[hsl(var(--contact-text-muted))] text-sm mb-3"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Lorem Ipsum Co."
                    className="w-full bg-transparent border-b border-[hsl(var(--contact-text-muted))]/30 text-[hsl(var(--contact-text))] pb-3 placeholder:text-[hsl(var(--contact-text-muted))]/50 focus:border-[hsl(var(--contact-accent))] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[hsl(var(--contact-text-muted))] text-sm mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message.."
                  rows={4}
                  className="w-full bg-transparent border-b border-[hsl(var(--contact-text-muted))]/30 text-[hsl(var(--contact-text))] pb-3 placeholder:text-[hsl(var(--contact-text-muted))]/50 focus:border-[hsl(var(--contact-accent))] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-[hsl(var(--contact-accent))] hover:bg-[hsl(var(--contact-accent))]/90 text-[hsl(var(--contact-text))] font-medium px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--contact-accent))]/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
