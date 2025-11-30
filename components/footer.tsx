"use client";
import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTopColor: 'var(--color-primary)',
      backgroundColor: 'var(--color-bg)'
    }} className="border-t mt-16 font-serif">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="text-2xl">🦋</div>
              <div style={{
                backgroundImage: `linear-gradient(to right, var(--color-primary-light), var(--color-primary-lighter))`
              }} className="text-lg font-bold bg-clip-text text-transparent">Shinobu</div>
            </a>
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm leading-relaxed">
              Master Data Structures & Algorithms with our comprehensive platform.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
                  color: 'var(--color-primary-light)'
                }}
                className="inline-flex rounded-lg p-2 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
                  color: 'var(--color-primary-light)'
                }}
                className="inline-flex rounded-lg p-2 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
                  color: 'var(--color-primary-light)'
                }}
                className="inline-flex rounded-lg p-2 hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
                  color: 'var(--color-primary-light)'
                }}
                className="inline-flex rounded-lg p-2 hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 style={{ color: 'var(--color-text-primary)' }} className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="hover:opacity-100 transition-opacity hover:translate-x-1 inline-block">
                  Changelog
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div style={{ borderTopColor: 'var(--color-primary)' }} className="my-4 border-t" />

        {/* Bottom Footer */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.5 }} className="text-xs flex items-center gap-1 justify-center md:justify-start">
              &copy; {currentYear} Shinobu. Made with <Heart className="h-3 w-3 text-red-500" /> by developers for developers.
            </p>
            <div style={{ color: 'var(--color-text-primary)', opacity: 0.5 }} className="flex gap-4 text-xs hover:opacity-100 transition-opacity">
              <a href="#" className="hover:opacity-100">
                Privacy
              </a>
              <a href="#" className="hover:opacity-100">
                Terms
              </a>
              <a href="#" className="hover:opacity-100">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
