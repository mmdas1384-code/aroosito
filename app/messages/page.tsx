"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import {
  MessageSquare,
  Send,
  Paperclip,
  Search,
  Check,
  CheckCheck,
  Image as ImageIcon,
  FileText,
  User,
  Store,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function MessagesPage() {
  const { conversations, messages, sendChatMessage, role } = useApp();
  const [activeConvId, setActiveConversationId] = useState<string>(conversations[0]?.id || "conv-1");
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [attachedFile, setAttachedFile] = useState<{ url: string; name: string } | null>(null);

  const activeConversation = conversations.find((c) => c.id === activeConvId) || conversations[0];
  const activeMessages = messages.filter((m) => m.conversationId === activeConvId);

  const filteredConversations = conversations.filter((c) =>
    c.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.coupleName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() && !attachedFile) return;

    const senderRole = role === "vendor" ? "vendor" : "couple";
    sendChatMessage(
      activeConvId,
      inputText,
      senderRole,
      attachedFile?.url,
      attachedFile?.name
    );

    setInputText("");
    setAttachedFile(null);
  };

  const handleSimulateAttachment = () => {
    setAttachedFile({
      url: "#",
      name: "کاتالوگ_خدمات_عروسی_۱۴۰۴.pdf"
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom text-graphite font-vazir">
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white rounded-3xl border border-accent shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[650px]">

            {/* RIGHT SIDEBAR: CONVERSATIONS LIST */}
            <div className="md:col-span-4 border-l border-accent flex flex-col bg-white">

              {/* Sidebar Header & Search */}
              <div className="p-4 border-b border-accent space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h1 className="font-extrabold text-base text-graphite">گفت‌وگوهای مستقیم</h1>
                  </div>
                  <span className="text-[10px] bg-primary/10 text-primary font-bold px-2.5 py-0.5 rounded-full">
                    {conversations.length} آنلاین
                  </span>
                </div>

                <div className="relative">
                  <Search className="w-4 h-4 text-secondary absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجوی کسب و کار یا نام زوج..."
                    className="w-full pr-9 pl-3 py-2 rounded-xl border border-accent bg-bg-custom text-xs focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Conversations Feed */}
              <div className="flex-1 overflow-y-auto divide-y divide-accent/60">
                {filteredConversations.map((conv) => {
                  const isActive = conv.id === activeConvId;
                  return (
                    <div
                      key={conv.id}
                      onClick={() => setActiveConversationId(conv.id)}
                      className={`p-4 flex items-start gap-3 cursor-pointer transition-all ${
                        isActive ? "bg-primary/5 border-r-4 border-primary" : "hover:bg-bg-custom"
                      }`}
                    >
                      <img src={conv.vendorLogo} alt={conv.vendorName} className="w-12 h-12 rounded-2xl object-cover border border-accent shrink-0" />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xs text-graphite truncate">
                            {role === "vendor" ? conv.coupleName : conv.vendorName}
                          </h3>
                          <span className="text-[10px] text-secondary">{conv.lastTimestamp}</span>
                        </div>

                        <p className="text-[11px] text-secondary truncate mt-1">
                          {conv.lastMessage}
                        </p>
                      </div>

                      {conv.unreadCount > 0 && (
                        <span className="w-5 h-5 bg-primary text-white rounded-full text-[10px] font-bold flex items-center justify-center shrink-0">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* LEFT MAIN: CHAT MESSAGES PANEL */}
            <div className="md:col-span-8 flex flex-col bg-bg-custom/30">

              {/* Chat Active Header */}
              {activeConversation && (
                <div className="p-4 bg-white border-b border-accent flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={activeConversation.vendorLogo} alt={activeConversation.vendorName} className="w-10 h-10 rounded-xl object-cover border border-accent" />
                    <div>
                      <h2 className="font-extrabold text-sm text-graphite">
                        {role === "vendor" ? activeConversation.coupleName : activeConversation.vendorName}
                      </h2>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> آنلاین جهت پاسخگویی
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/vendors/${activeConversation.vendorId}`}
                      className="text-xs text-primary font-bold hover:underline flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-xl"
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>مشاهده پروفایل کسب و کار</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Messages Scroll Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {activeMessages.map((msg) => {
                  const isMe = (role === "vendor" && msg.senderRole === "vendor") || (role === "couple" && msg.senderRole === "couple");
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMe ? "items-start" : "items-end"}`}
                    >
                      <div
                        className={`max-w-md p-4 rounded-2xl text-xs space-y-2 shadow-xs ${
                          isMe
                            ? "bg-primary text-white rounded-br-none"
                            : "bg-white text-graphite border border-accent rounded-bl-none"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] opacity-80 border-b border-white/20 pb-1">
                          <span className="font-bold">{msg.senderName}</span>
                          <span>{msg.timestamp}</span>
                        </div>

                        <p className="leading-relaxed font-medium">{msg.text}</p>

                        {msg.attachmentName && (
                          <div className={`p-2.5 rounded-xl flex items-center gap-2 border text-[11px] ${
                            isMe ? "bg-white/10 border-white/20" : "bg-bg-custom border-accent"
                          }`}>
                            <FileText className="w-4 h-4 shrink-0" />
                            <span className="truncate flex-1 font-bold">{msg.attachmentName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input & Attachments Bar */}
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-accent space-y-3">

                {attachedFile && (
                  <div className="bg-primary/5 border border-primary/20 p-2 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-primary font-bold flex items-center gap-1">
                      <Paperclip className="w-3.5 h-3.5" /> فایل پیوست شده: {attachedFile.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAttachedFile(null)}
                      className="text-rose-500 font-bold hover:underline text-[10px]"
                    >
                      حذف
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSimulateAttachment}
                    className="p-3 rounded-xl border border-accent text-secondary hover:text-primary hover:bg-bg-custom transition-all"
                    title="پیوست تصویر یا کاتالوگ"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>

                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="پیام خود را بنویسید..."
                    className="flex-1 p-3 rounded-xl border border-accent text-xs focus:outline-none focus:border-primary"
                  />

                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">ارسال</span>
                  </button>
                </div>
              </form>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
