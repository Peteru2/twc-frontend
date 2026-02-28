import { motion } from "framer-motion";
import NewLetterGive from "../components/common/NewLetterGive";
import { Link } from "react-router";
import { footerLinks, socialMedia, media } from "../data/NavLinks";

export default function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <NewLetterGive />
      <footer className="w-full bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {/* Logo Section */}
            <div>
              <img src="/fullLogo.png" />
            </div>

            {/* Connect */}
            <div className="flex md:justify-center">
              <div>
                <h3 className="text-gray-400 mb-4 font-medium">Connect</h3>
                <ul className="space-y-2 text-sm">
                  {footerLinks.map((link, index) => (
                    <li
                      key={index}
                      className="hover:text-white transition duration-300 cursor-pointer"
                    >
                      <Link to={`${link.path}`}> {link.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Media */}
            <div>
              <h3 className="text-gray-400 mb-4 font-medium">Media</h3>
              <ul className="space-y-3 text-sm">
                {media.map((item, index) => (
                  <Link to={`${item.link}`} target="_blank">
                    <li
                      key={index}
                      className="hover:text-white mb-2 transition duration-300 cursor-pointer"
                    >
                      {item.text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Spacer Column (keeps layout balanced like screenshot) */}
            <div />
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-12" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} True Worshippers Church. All Rights
              Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socialMedia.map((media, index) => {
                const Icon = media.icon;
                return (
                  <Link to={media.link} target="_blank">
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-500 hover:text-white transition duration-300 cursor-pointer"
                    >
                      <Icon size={20} />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </motion.section>
  );
}
