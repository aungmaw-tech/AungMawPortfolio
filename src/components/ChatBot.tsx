import { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, MessageCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // GEMINI API KEY - Uses environment variable from Vercel
  // The API key is stored securely in Vercel Environment Variables
  // For local development: add VITE_GEMINI_API_KEY to your .env file
  const GEMINI_API_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || 'YOUR_GEMINI_API_KEY_HERE';
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  // Portfolio context for Gemini
  const portfolioContext = `You are an AI assistant for Aung Maw's professional IT portfolio website. Your role is to help recruiters and hiring managers learn about him in a friendly, professional, and CONCISE manner.

ABOUT AUNG MAW:

CURRENT ROLE:
- Actively seeking IT / System Administrator / IT Support opportunities
- Expanding skills in cybersecurity (Security+ pathway), cloud, and AI tools
- Building hands-on labs with networking, servers, cloud, and security
- Open to on-site or remote roles

WORK EXPERIENCE:
1. Pyit Taing Htaung CCTV Co., Ltd — System Administrator (2022–2024)
   - Managed routers, switches, WiFi access points, and servers for optimal network performance
   - Installed and configured Windows / Linux systems across multiple environments
   - Deployed CCTV and ELV solutions for security infrastructure
   - Delivered remote support using RDP, AnyDesk, and TeamViewer
   - Maintained IT inventory and developed Standard Operating Procedures (SOPs)

2. GD Guardian Co., Ltd — IT Consultant (2020–2022)
   - Designed and architected IT infrastructure, server, and network solutions
   - Installed LAN networks, configured servers, and deployed CCTV systems
   - Set up and optimized WiFi access points
   - Delivered documentation and conducted user training

3. Southern Metal Industry Co., Ltd — Junior IT Administrator (2019–2020)
   - Troubleshot hardware and software issues
   - Managed Google Workspace administration and user accounts
   - Performed OS installation and device configuration
   - Assisted with basic server maintenance and support tasks

TECHNICAL SKILLS:
- Infrastructure & Servers: Windows Server, Linux, Active Directory, Group Policy
- Cloud Platforms: Google Cloud Platform (GCP certified), AWS basics
- Networking: TCP/IP, VPN, Firewall configuration, Routers, Switches, WiFi
- Virtualization: VMware, Hyper-V
- Scripting: PowerShell, Bash, Python
- Monitoring: Nagios, Zabbix
- Ticketing: ServiceNow, Jira
- Remote Support: RDP, AnyDesk, TeamViewer
- Security: CCTV systems, ELV solutions, Cybersecurity fundamentals

CERTIFICATIONS:
- Google Cloud Computing Foundations (verified on Credly)
- Google Cybersecurity Professional Certificate (verified on Credly)

KEY PROJECTS:
1. Automated User Provisioning System
   - PowerShell automation for Active Directory user creation
   - Reduced manual provisioning time from hours to minutes
   - Improved accuracy and consistency

2. Network Monitoring Dashboard
   - Custom monitoring solution using Zabbix
   - Real-time system health visibility
   - Proactive alerting system

3. Cloud Migration Project
   - Led migration of on-premise services to Google Cloud Platform
   - Planned architecture, executed migration, validated results
   - Reduced costs while improving scalability

EDUCATION:
- Bachelor of Computer Science
- University of Computer Studies Yangon

CONTACT:
- Email: am.aungmaw2022@gmail.com
- Phone: +66947030071
- LinkedIn: https://www.linkedin.com/in/aung-maw-76b596174/
- GitHub: https://github.com/aungmaw-tech
- GitBook: https://aung-maw-tech.gitbook.io/aung-maw-tech-docs/

RESPONSE GUIDELINES - VERY IMPORTANT:
✅ Keep responses SHORT and CONCISE (3-5 sentences max for simple questions)
✅ Use bullet points (•) for lists to improve readability
✅ Use line breaks to separate ideas
✅ Avoid overly long paragraphs - break into smaller chunks
✅ Be friendly but professional - use 1-2 emojis maximum
✅ Get straight to the point - recruiters are busy
✅ For technical skills questions: just list them cleanly
✅ For experience questions: highlight key achievements briefly
✅ Avoid repetition and fluff
✅ If the question needs detail, use structured format with clear sections

Example good response format:
"Aung has strong cloud expertise! 💼

• GCP Certified (Cloud Foundations & Cybersecurity)
• Led cloud migration project saving costs
• Experience with AWS basics

He specializes in infrastructure automation and security."

NOT like this (too wordy):
"Well, Aung Maw is absolutely amazing and has incredible cloud computing skills that are really impressive. He has worked extensively with Google Cloud Platform and has achieved multiple certifications including the Google Cloud Computing Foundations and also the Google Cybersecurity Professional Certificate which are both verified on Credly. Additionally, he has worked on cloud migration projects..."

Always be positive and professional`;

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to show the new question when user sends it
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
      // Immediately scroll to show the new question
      setTimeout(() => {
        if (chatContainerRef.current) {
          const container = chatContainerRef.current;
          const userMessages = container.querySelectorAll('.user-message');
          const lastUserMessage = userMessages[userMessages.length - 1];
          if (lastUserMessage) {
            lastUserMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 50);
    }
  }, [messages]);

  const suggestedQuestions = [
    "What are your technical skills?",
    "Tell me about your work experience",
    "What projects have you worked on?",
    "What certifications do you have?",
    "What is your educational background?",
    "What technologies do you specialize in?"
  ];

  const handleQuestionClick = async (question: string) => {
    // Add user message
    const userMessage: Message = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Check if API key is set
    if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
      const errorMessage: Message = { 
        role: 'assistant', 
        content: '⚠️ API key not configured. Please add your Gemini API key to use this feature.\n\nGet a free API key at: https://makersuite.google.com/app/apikey\n\nThen replace "YOUR_GEMINI_API_KEY_HERE" in the ChatBot.tsx file.' 
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      return;
    }

    try {
      // Call Gemini API
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${portfolioContext}\n\nUser Question: ${question}\n\nPlease provide a helpful, detailed, and engaging response.`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 900,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        throw new Error(`Gemini API Error: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      const answer = data.candidates[0]?.content?.parts[0]?.text || 'Sorry, I could not generate a response.';
      
      // Add assistant message
      const assistantMessage: Message = { role: 'assistant', content: answer };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error connecting to the AI. Please try again.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomQuestions = () => {
    const shuffled = [...suggestedQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const [randomQuestions] = useState(getRandomQuestions());

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userInput = input.trim();
    setInput('');
    await handleQuestionClick(userInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button with Speech Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!isOpen && (
          <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm text-gray-800 whitespace-nowrap animate-bounce">
            Ready to bring me onto your team?
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#1E88E5] text-white rounded-full p-4 shadow-2xl hover:bg-[#1976D2] transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Interface - Reduced Size */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[85vw] max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1E88E5] to-[#1976D2] p-3 text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-full p-1.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm">Ask About Aung Maw</h3>
                <p className="text-xs text-white/80">Powered by Gemini AI</p>
              </div>
            </div>
          </div>

          {/* Messages Area - Reduced Height */}
          <div className="h-64 overflow-y-auto p-3 space-y-3 bg-gray-50" ref={chatContainerRef}>
            {messages.length === 0 ? (
              <div className="text-center py-6">
                <div className="bg-white rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#1E88E5]" />
                </div>
                <p className="text-gray-600 mb-4 text-xs">
                  Hi! I&apos;m an AI assistant. Ask me anything about Aung Maw&apos;s experience, skills, or projects!
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 mb-2">Try asking:</p>
                  {randomQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="w-full text-left p-2 bg-white rounded-lg hover:bg-[#1E88E5] hover:text-white transition-colors text-xs border border-gray-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end user-message' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-2 rounded-lg text-xs ${
                        message.role === 'user'
                          ? 'bg-[#1E88E5] text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg rounded-bl-none border border-gray-200">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-gray-50 p-3 border-t border-gray-200">
            <div className="flex items-center">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E88E5] resize-none text-xs"
                placeholder="Type a message..."
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 bg-[#1E88E5] text-white rounded-full p-1.5 hover:bg-[#1976D2] transition-colors"
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}