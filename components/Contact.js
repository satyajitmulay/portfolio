/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiUser,
  HiChatAlt2,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactInfo = {
  email: "mulesatyajit1505@gmail.com",
  phone: "+91 9763188944",
  location: "Pune, Maharashtra 411027",
  socials: {
    github: "https://github.com/satyajitmulay",
    linkedin: "https://www.linkedin.com/in/satyajit-mule-3145a3257/",
    twitter: "https://twitter.com",
  },
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xqayyplj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            challenges. Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Whether you have a question, want to discuss a project, or just
              want to say hello, I'd love to hear from you. Reach out through
              any of the channels below.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-medium">{contactInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={contactInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={contactInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={contactInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>

              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                    <HiUser className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                    <HiMail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="How can I help you?"
                  />
                  <HiChatAlt2 className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-secondary text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="w-5 h-5 transform rotate-45" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-center"
                >
                  ✅ Message sent successfully! I’ll get back to you soon.
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-center"
                >
                  ❌ Something went wrong. Please try again later or email me
                  directly at
                  <a
                    href="mailto:mulesatyajit1505@gmail.com"
                    className="ml-1 underline hover:text-primary"
                  >
                    mulesatyajit1505@gmail.com
                  </a>
                  .
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
