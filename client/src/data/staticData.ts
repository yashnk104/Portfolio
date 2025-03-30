import { Project } from "@shared/schema";

// Static project data for GitHub Pages deployment
export const projects: Project[] = [
  {
    id: 1,
    title: "CIBIL Score Predictor",
    description: "An AI/ML-based model to predict CIBIL scores for unregistered small businesses, providing financial institutions with valuable insights for evaluating creditworthiness.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "CIBIL Score Predictor for Small Businesses",
    tag: "Machine Learning",
    technologies: [
      "Python", "scikit-learn", "Pandas", "React.js", "MongoDB"
    ],
    features: [
      "AI/ML algorithms to predict creditworthiness for unregistered businesses",
      "Data preprocessing and feature engineering for accurate prediction",
      "User-friendly React.js interface for inputting business financials",
      "Secure data storage and management with MongoDB",
      "Linear regression and random forest algorithms implementation"
    ],
    demoLink: "https://cibilpredictor.app",
    codeLink: "https://github.com/yashnk104/Credit_score",
    published: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "Stock Price Predictor",
    description: "A stock price prediction application leveraging LSTM neural networks and historical financial data to forecast market trends with impressive 85% accuracy.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "Stock Price Predictor Application",
    tag: "Data Science",
    technologies: [
      "Python", "Streamlit", "LSTM Neural Networks", "Matplotlib", "Seaborn"
    ],
    features: [
      "85% accuracy in forecasting short-term stock price trends",
      "Real-time financial data integration from market APIs",
      "Interactive data visualization with Matplotlib and Seaborn",
      "Enhanced user engagement through intuitive interface design",
      "Historical data analysis for pattern recognition"
    ],
    demoLink: "https://stockpredictor.app",
    codeLink: "https://github.com/yashnk104/stock-predictor",
    published: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "Graph Visualizer",
    description: "An interactive graph algorithm visualization tool combining advanced data structures with a modern React.js frontend to deliver both educational value and powerful computational capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    altText: "Graph Algorithm Visualizer",
    tag: "Web Application",
    technologies: [
      "React.js", "Data Structures", "JavaScript", "CSS", "Dijkstra's Algorithm"
    ],
    features: [
      "Optimized Dijkstra's algorithm with 1000+ nodes processing in under 100ms",
      "Intuitive drag-and-drop interface for node placement and manipulation",
      "Real-time graph updates and algorithm visualization",
      "Responsive design compatible with various devices",
      "Educational tool for understanding graph-based algorithms"
    ],
    demoLink: "https://graphvisualizer.app",
    codeLink: "https://github.com/yashnk104/graph-visualizer",
    published: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Static data for the contact form (for GitHub Pages, this will be a no-op)
export const submitWaitlistEntry = async (email: string, name: string) => {
  console.log("Waitlist submission would be sent to the server in production", { email, name });
  return { success: true };
};

// Contact form submission function for static site
export const submitContactForm = async (data: { 
  name: string; 
  email: string; 
  message: string; 
  subject?: string;
}) => {
  console.log("Contact form submission would be sent to the server in production", data);
  return { success: true };
};