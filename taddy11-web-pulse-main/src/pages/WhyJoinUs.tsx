import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Award, 
  Coffee, 
  Laptop, 
  Globe, 
  TrendingUp, 
  Shield,
  Zap,
  Target,
  BookOpen,
  Gift
} from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs",
    details: [
      "Medical, dental, and vision insurance",
      "Mental health counseling services",
      "Gym membership reimbursement",
      "Annual health checkups"
    ]
  },
  {
    icon: Laptop,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and modern equipment provided",
    details: [
      "100% remote work options",
      "Flexible working hours",
      "Latest MacBook Pro or PC",
      "Home office setup allowance"
    ]
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career advancement paths",
    details: [
      "Annual learning budget ($2,000)",
      "Conference attendance support",
      "Internal mentorship programs",
      "Regular performance reviews"
    ]
  },
  {
    icon: Gift,
    title: "Competitive Package",
    description: "Above-market salary, equity options, and performance bonuses",
    details: [
      "Competitive base salary",
      "Equity participation",
      "Performance-based bonuses",
      "Annual salary reviews"
    ]
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Unlimited PTO, parental leave, and sabbatical opportunities",
    details: [
      "Unlimited paid time off",
      "16 weeks parental leave",
      "Sabbatical after 5 years",
      "Flexible holiday schedule"
    ]
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Work with passionate, talented individuals who support each other",
    details: [
      "Collaborative team environment",
      "Regular team building events",
      "Diverse and inclusive culture",
      "Open communication policy"
    ]
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We embrace new technologies and creative solutions to solve complex problems."
  },
  {
    icon: Shield,
    title: "Security Minded",
    description: "Security is at the core of everything we build, ensuring trust and reliability."
  },
  {
    icon: Zap,
    title: "Move Fast",
    description: "We iterate quickly, learn from failures, and deliver value to our customers."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We invest in our growth and encourage experimentation and skill development."
  }
];

function WhyJoinUs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Join <span className="bg-gradient-hero bg-clip-text text-transparent">Sisuni Tech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Be part of a team that's building the future of technology while enjoying 
              exceptional benefits, growth opportunities, and a culture that values innovation.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/career">
                View Open Positions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive <span className="bg-gradient-hero bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team with benefits that support your 
              professional growth and personal well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                className="hover:shadow-tech transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Development */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Grow Your <span className="bg-gradient-hero bg-clip-text text-transparent">Career</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're committed to helping you reach your full potential through 
                structured growth programs and continuous learning opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Learning Budget</h3>
                    <p className="text-muted-foreground">
                      $2,000 annual budget for courses, certifications, and conferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mentorship Program</h3>
                    <p className="text-muted-foreground">
                      Paired with senior team members for guidance and career development
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Career Progression</h3>
                    <p className="text-muted-foreground">
                      Clear advancement paths with regular reviews and feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-tech">
              <h3 className="text-2xl font-bold mb-6 text-center">Career Levels</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-semibold">Junior Developer</div>
                    <div className="text-sm text-muted-foreground">0-2 years experience</div>
                  </div>
                  <div className="text-primary font-semibold">Level 1-2</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-semibold">Mid-Level Developer</div>
                    <div className="text-sm text-muted-foreground">2-5 years experience</div>
                  </div>
                  <div className="text-primary font-semibold">Level 3-4</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-semibold">Senior Developer</div>
                    <div className="text-sm text-muted-foreground">5+ years experience</div>
                  </div>
                  <div className="text-primary font-semibold">Level 5-6</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-semibold">Tech Lead / Architect</div>
                    <div className="text-sm text-muted-foreground">8+ years experience</div>
                  </div>
                  <div className="text-primary font-semibold">Level 7+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Work Culture */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <Globe className="inline-block w-8 h-8 mr-2 text-primary" />
              Remote-First Culture
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Work from anywhere in the world while staying connected with your team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Laptop className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Flexible Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work when you're most productive. Core hours for team collaboration, 
                  flexible schedule for deep work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Team Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular video calls, virtual coffee chats, and annual team retreats 
                  keep us connected and collaborative.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Modern Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Latest hardware, premium software licenses, and cutting-edge tools 
                  to help you do your best work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take the next step in your career and be part of something amazing. 
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/career">
                  View Open Positions
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyJoinUs;