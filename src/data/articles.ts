export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

export const categories = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Lifestyle",
  "Travel",
];

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI-powered tools to new frameworks.",
    content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we move further into 2025, several key trends are emerging that promise to reshape how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers work more efficiently than ever before.</p>
      
      <p>These tools can analyze your codebase, suggest improvements, and even generate entire components based on simple descriptions. The result? Faster development cycles and higher-quality code.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is transforming how we think about server architecture. By processing data closer to the user, applications can achieve unprecedented performance levels while reducing latency to near-zero.</p>
      
      <p>This shift has profound implications for everything from real-time collaboration tools to gaming platforms. The user experience improvements are remarkable.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has matured significantly, enabling developers to run high-performance code directly in the browser. This opens up possibilities that were previously unimaginable in web applications.</p>
      
      <p>From complex data visualization to full-fledged desktop applications, WebAssembly is expanding what's possible on the web platform.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and embracing new technologies, developers can create experiences that delight users and push the boundaries of what's possible.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    category: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Mastering the Art of Minimalist Design",
    excerpt: "Less is more. Discover how embracing simplicity in design can lead to more impactful and memorable user experiences.",
    content: `
      <p>In a world cluttered with visual noise, minimalist design stands out by doing less. But achieving true minimalism requires more thought and skill than simply removing elements.</p>
      
      <h2>The Philosophy Behind Minimalism</h2>
      <p>Minimalist design isn't about making things empty—it's about making every element count. Each component should serve a purpose and contribute to the overall user experience.</p>
      
      <p>This approach forces designers to think critically about what's truly essential and what's merely decorative.</p>
      
      <h2>Key Principles</h2>
      <p>Effective minimalist design relies on several core principles: generous white space, limited color palettes, clear typography, and intuitive navigation. When these elements work in harmony, the result is both beautiful and functional.</p>
      
      <h2>Real-World Applications</h2>
      <p>From Apple's product pages to Airbnb's booking interface, the most successful digital products often embrace minimalist principles. They prove that simplicity and sophistication aren't mutually exclusive.</p>
    `,
    author: {
      name: "Marcus Williams",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    date: "Dec 12, 2025",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Building a Successful Startup: Lessons from the Trenches",
    excerpt: "Real insights from founders who've been through the highs and lows of building a company from scratch.",
    content: `
      <p>Starting a company is one of the most challenging and rewarding endeavors you can undertake. After interviewing dozens of successful founders, patterns emerge that separate those who succeed from those who don't.</p>
      
      <h2>Start with a Problem, Not a Solution</h2>
      <p>The most successful startups begin with a deep understanding of a problem worth solving. Technology should serve the solution, not the other way around.</p>
      
      <h2>Build Your Team Carefully</h2>
      <p>Your early team members will define your company culture for years to come. Hire slowly, fire quickly, and never compromise on values alignment.</p>
      
      <h2>Embrace Failure as Learning</h2>
      <p>Every successful founder has a graveyard of failed experiments. What sets them apart is their ability to learn from failure and iterate quickly.</p>
    `,
    author: {
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    category: "Business",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
    date: "Dec 10, 2025",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "The Digital Nomad's Guide to Work-Life Balance",
    excerpt: "How to maintain productivity and wellbeing while working from anywhere in the world.",
    content: `
      <p>The digital nomad lifestyle sounds glamorous—working from beaches, exploring new cities, and living on your own terms. But the reality requires careful planning and discipline.</p>
      
      <h2>Establishing Routines</h2>
      <p>Without the structure of an office, you need to create your own. Consistent wake times, dedicated work hours, and regular exercise become essential anchors.</p>
      
      <h2>Finding Your Workspace</h2>
      <p>Not every café is created equal for productivity. Learn to identify spaces with reliable WiFi, comfortable seating, and the right ambient noise level for focused work.</p>
      
      <h2>Staying Connected</h2>
      <p>Remote work can be isolating. Prioritize video calls over text, join local coworking spaces, and make time for social activities in each new location.</p>
    `,
    author: {
      name: "James Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    date: "Dec 8, 2025",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Hidden Gems: Exploring Japan Beyond Tokyo",
    excerpt: "Venture off the beaten path to discover Japan's most enchanting rural destinations and cultural treasures.",
    content: `
      <p>While Tokyo dazzles with its neon lights and Kyoto charms with its temples, Japan's true magic often lies in its lesser-known regions.</p>
      
      <h2>The Japanese Alps</h2>
      <p>Takayama and the surrounding mountain villages offer a glimpse into traditional Japan. Thatched-roof farmhouses, pristine forests, and some of the country's best sake await.</p>
      
      <h2>The Art Islands</h2>
      <p>Naoshima and Teshima have transformed from sleepy fishing villages into world-renowned art destinations. Contemporary museums blend seamlessly with the natural landscape.</p>
      
      <h2>The Southern Islands</h2>
      <p>Okinawa's subtropical paradise feels like another country entirely. Crystal-clear waters, unique cuisine, and a distinct cultural heritage set it apart from mainland Japan.</p>
    `,
    author: {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    category: "Travel",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
    date: "Dec 5, 2025",
    readTime: "9 min read",
  },
  {
    id: "6",
    title: "Understanding CSS Grid: A Complete Guide",
    excerpt: "Master CSS Grid layout with practical examples and real-world use cases that will transform your web layouts.",
    content: `
      <p>CSS Grid has revolutionized how we approach web layouts. This powerful system allows for two-dimensional layouts that were previously impossible or required complex hacks.</p>
      
      <h2>The Basics</h2>
      <p>At its core, CSS Grid works by defining rows and columns on a container, then placing child elements within this grid. The syntax is intuitive once you understand the fundamentals.</p>
      
      <h2>Advanced Techniques</h2>
      <p>Grid areas, auto-placement, and the minmax() function unlock sophisticated layouts with minimal code. Learn to combine these features for maximum flexibility.</p>
      
      <h2>Real-World Examples</h2>
      <p>From magazine-style layouts to dashboard interfaces, CSS Grid excels at complex arrangements. We'll walk through practical implementations you can use today.</p>
    `,
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    category: "Technology",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop",
    date: "Dec 3, 2025",
    readTime: "12 min read",
  },
];

export const initialComments: Comment[] = [
  {
    id: "c1",
    articleId: "1",
    author: "Alex Thompson",
    content: "Great insights! I've been experimenting with AI-powered tools and they've definitely improved my workflow.",
    date: "Dec 16, 2025",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  {
    id: "c2",
    articleId: "1",
    author: "Maria Santos",
    content: "The section on WebAssembly was particularly interesting. Would love to see a deeper dive into practical use cases.",
    date: "Dec 16, 2025",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
  {
    id: "c3",
    articleId: "2",
    author: "Tom Bradley",
    content: "Minimalism is definitely an art. The examples you provided really drove the point home.",
    date: "Dec 13, 2025",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop",
  },
];
