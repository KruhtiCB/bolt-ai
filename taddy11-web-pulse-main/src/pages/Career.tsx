import React, { useState } from 'react';
import { Search, MapPin, Clock, Users, Award, Heart, Code, Smartphone, Server, Settings, User, Palette, TestTube, X, Send, CheckCircle, Building, Globe, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  icon: React.ReactNode;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string;
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$80,000 - $120,000',
    icon: <Code className="w-6 h-6" />,
    description: 'Join our frontend team to build beautiful, responsive user interfaces using React, TypeScript, and modern web technologies.',
    requirements: [
      'Strong proficiency in React, TypeScript, and modern JavaScript',
      'Experience with state management (Redux, Zustand, or Context API)',
      'Knowledge of CSS frameworks (Tailwind CSS preferred)',
      'Understanding of responsive design and cross-browser compatibility',
      'Familiarity with testing frameworks (Jest, React Testing Library)'
    ],
    responsibilities: [
      'Develop and maintain user-facing features using React and TypeScript',
      'Collaborate with designers to implement pixel-perfect UI components',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and maintain high code quality standards',
      'Work closely with backend developers to integrate APIs'
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$90,000 - $140,000',
    icon: <Server className="w-6 h-6" />,
    description: 'Build end-to-end solutions using modern web technologies. Work on both frontend and backend systems to deliver complete features.',
    requirements: [
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with containerization (Docker, Kubernetes)'
    ],
    responsibilities: [
      'Design and develop full-stack applications from conception to deployment',
      'Build and maintain scalable backend services and APIs',
      'Implement database schemas and optimize query performance',
      'Ensure application security and implement best practices',
      'Collaborate with cross-functional teams to deliver features'
    ]
  },
  {
    id: '3',
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Remote / Austin',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$75,000 - $115,000',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Create amazing mobile experiences for iOS and Android platforms using React Native and native development tools.',
    requirements: [
      'Experience with React Native or native iOS/Android development',
      'Knowledge of mobile UI/UX design principles',
      'Understanding of app store submission processes',
      'Experience with push notifications and offline functionality',
      'Familiarity with mobile testing frameworks'
    ],
    responsibilities: [
      'Develop cross-platform mobile applications using React Native',
      'Implement native modules when required for platform-specific features',
      'Optimize app performance and ensure smooth user experience',
      'Collaborate with designers to create intuitive mobile interfaces',
      'Handle app store submissions and version management'
    ]
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Seattle',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '$95,000 - $150,000',
    icon: <Settings className="w-6 h-6" />,
    description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems to support our growing platform.',
    requirements: [
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Proficiency in containerization (Docker, Kubernetes)',
      'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions)',
      'Strong scripting skills (Bash, Python, Go)'
    ],
    responsibilities: [
      'Design and maintain scalable cloud infrastructure',
      'Implement and optimize CI/CD pipelines for automated deployments',
      'Monitor system performance and implement alerting solutions',
      'Ensure security best practices across all environments',
      'Collaborate with development teams to improve deployment processes'
    ]
  },
  {
    id: '5',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Los Angeles',
    type: 'Full-time',
    experience: '2-5 years',
    salary: '$70,000 - $110,000',
    icon: <Palette className="w-6 h-6" />,
    description: 'Create intuitive and beautiful user experiences that delight our customers and drive business growth.',
    requirements: [
      'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
      'Strong understanding of user-centered design principles',
      'Experience with prototyping and user testing',
      'Knowledge of accessibility standards and best practices',
      'Portfolio demonstrating strong visual and interaction design skills'
    ],
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve our design system'
    ]
  },
  {
    id: '6',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Boston',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '$100,000 - $160,000',
    icon: <User className="w-6 h-6" />,
    description: 'Drive product strategy and execution to deliver features that solve real customer problems and drive business value.',
    requirements: [
      'Experience in product management or related field',
      'Strong analytical and problem-solving skills',
      'Understanding of agile development methodologies',
      'Experience with product analytics tools',
      'Excellent communication and stakeholder management skills'
    ],
    responsibilities: [
      'Define product roadmap and prioritize feature development',
      'Gather and analyze customer feedback and market research',
      'Work closely with engineering and design teams',
      'Track product metrics and iterate based on data',
      'Communicate product vision to stakeholders'
    ]
  },
  {
    id: '7',
    title: 'QA Engineer',
    department: 'Engineering',
    location: 'Remote / Chicago',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$65,000 - $95,000',
    icon: <TestTube className="w-6 h-6" />,
    description: 'Ensure the quality and reliability of our products through comprehensive testing strategies and automation.',
    requirements: [
      'Experience with manual and automated testing',
      'Knowledge of testing frameworks (Selenium, Cypress, Jest)',
      'Understanding of software development lifecycle',
      'Experience with API testing and performance testing',
      'Strong attention to detail and analytical skills'
    ],
    responsibilities: [
      'Develop and execute comprehensive test plans',
      'Create and maintain automated test suites',
      'Identify, document, and track bugs and issues',
      'Collaborate with development teams on quality standards',
      'Perform regression testing and validate bug fixes'
    ]
  }
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Infrastructure'];
const locations = ['All', 'Remote', 'San Francisco', 'New York', 'Austin', 'Seattle', 'Los Angeles', 'Boston', 'Chicago'];

const Career: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    skills: '',
    coverLetter: '',
    preferredRole: '',
    availability: '',
    expectedSalary: '',
    resume: null as File | null
  });

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real implementation, this would submit to your backend
      console.log('Application submitted:', applicationData);
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll review it and get back to you soon.",
      });
      
      setShowApplicationForm(false);
      setSelectedJob(null);
      
      // Reset form
      setApplicationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedIn: '',
        portfolio: '',
        experience: '',
        skills: '',
        coverLetter: '',
        preferredRole: '',
        availability: '',
        expectedSalary: '',
        resume: null
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-blue-200">Amazing</span> Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Build the future with us. We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Remote-First Culture</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              <span>Comprehensive Benefits</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Growth Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions ({filteredJobs.length})
            </h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity and grow with us
            </p>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-tech transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {job.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600 mb-2">{job.salary}</div>
                      <Button variant="hero">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {selectedJob.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {selectedJob.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedJob.type}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {selectedJob.experience}
                      </div>
                    </div>
                    <div className="text-xl font-semibold text-green-600 mt-2">{selectedJob.salary}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h3>
                  <p className="text-gray-600 mb-6">{selectedJob.description}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h3>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">What We Offer</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Competitive salary and equity package</li>
                      <li>• Comprehensive health, dental, and vision insurance</li>
                      <li>• Flexible PTO and remote work options</li>
                      <li>• Professional development budget</li>
                      <li>• Modern equipment and tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </Button>
                <Button
                  variant="hero"
                  onClick={() => {
                    setShowApplicationForm(true);
                    setApplicationData(prev => ({ ...prev, preferredRole: selectedJob.title }));
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply for {selectedJob.title}
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleApplicationSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={applicationData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={applicationData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                  <Input
                    id="linkedIn"
                    name="linkedIn"
                    type="url"
                    value={applicationData.linkedIn}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio">Portfolio URL</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={applicationData.portfolio}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <select
                    id="availability"
                    name="availability"
                    value={applicationData.availability}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2-weeks">2 weeks notice</option>
                    <option value="1-month">1 month</option>
                    <option value="2-months">2 months</option>
                    <option value="negotiable">Negotiable</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="skills">Skills & Technologies *</Label>
                <Textarea
                  id="skills"
                  name="skills"
                  value={applicationData.skills}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  placeholder="List your relevant skills and technologies..."
                />
              </div>

              <div className="mt-6">
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  required
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              <div className="mt-6">
                <Label htmlFor="expectedSalary">Expected Salary</Label>
                <Input
                  id="expectedSalary"
                  name="expectedSalary"
                  value={applicationData.expectedSalary}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="e.g., $80,000 - $100,000"
                />
              </div>

              <div className="mt-6">
                <Label htmlFor="resume">Resume *</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please upload your resume in PDF, DOC, or DOCX format (max 5MB)
                </p>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="hero"
                  className="flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;