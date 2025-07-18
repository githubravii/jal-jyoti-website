import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Home,
  Users,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
  Droplets,
  Settings,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Image Section */}
            <div className="flex items-center space-x-3">
              <img
                src="/brand-logo.png" // Replace with correct image path
                alt="JJ Enterprises Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Call Button */}
            <a href="tel:+917979926141">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Trusted Since 2010
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Expert Plumbing Solutions for
            <span className="text-blue-600 block">Every Need</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From residential repairs to government projects, house mapping to
            consultation services - we deliver professional plumbing solutions
            with 24/7 emergency support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Log In
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-transparent"
            >
              Emergency Service
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive plumbing solutions for residential, commercial, and
              government projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">General Plumbing Work</CardTitle>
                <CardDescription>
                  Complete plumbing installation, maintenance, and repair
                  services for all your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pipe Installation & Repair
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fixture Installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Water System Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Drainage Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">House Maps & Planning</CardTitle>
                <CardDescription>
                  Professional house mapping and plumbing system design for new
                  constructions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Plumbing Layout Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Water Supply Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Drainage System Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical Drawings
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-lg w-fit">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Government Projects</CardTitle>
                <CardDescription>
                  Specialized services for government and municipal plumbing
                  projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Municipal Water Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Public Infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compliance & Standards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Project Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-lg w-fit">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Repair Services</CardTitle>
                <CardDescription>
                  Quick and reliable repair services for all plumbing
                  emergencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency Repairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Leak Detection & Fix
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pipe Replacement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fixture Repair
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600">
              <CardHeader>
                <div className="bg-teal-100 p-3 rounded-lg w-fit">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Consultation Services</CardTitle>
                <CardDescription>
                  Expert consultation for plumbing projects and system
                  optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    System Assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost Estimation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical Advice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Project Planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
              <CardHeader>
                <div className="bg-red-100 p-3 rounded-lg w-fit">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">24/7 Emergency</CardTitle>
                <CardDescription>
                  Round-the-clock emergency plumbing services for urgent
                  situations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Burst Pipe Repair
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Water Damage Control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Immediate Response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Availability
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jal Jyoti Enterprises?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine experience, quality, and reliability to deliver
              exceptional plumbing solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Licensed & Certified
              </h4>
              <p className="text-gray-600">
                Fully licensed professionals with industry certifications
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Insured & Bonded</h4>
              <p className="text-gray-600">
                Complete insurance coverage for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
              <p className="text-gray-600">
                100% satisfaction guarantee on all our services
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quick Response</h4>
              <p className="text-gray-600">
                Fast response times for all service requests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                About Jal Jyoti Enterprises
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in the plumbing industry, Jal
                Jyoti Enterprises has established itself as a trusted name in
                comprehensive plumbing solutions. We specialize in everything
                from residential repairs to large-scale government projects.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified professionals is committed to delivering
                high-quality workmanship, using the latest tools and techniques
                to ensure lasting solutions for all your plumbing needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 text-sm">
                    To provide reliable, efficient, and cost-effective plumbing
                    solutions while maintaining the highest standards of
                    customer service.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 text-sm">
                    To be the leading plumbing service provider, known for
                    innovation, quality, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Our Expertise
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">
                    Residential Plumbing Systems
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">
                    Commercial Plumbing Projects
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">
                    Government Infrastructure
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">
                    Emergency Repair Services
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Consultation & Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
            <a href="tel:+919798490863" className="inline-block mb-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition">
                📞 Call Now
              </button>
            </a>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free
              consultation and quote
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Call Us</CardTitle>
                <CardDescription className="text-gray-300">
                  Available 24/7 for emergencies
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-400 mb-2">
                  +91 7979926141
                </p>
                <p className="text-gray-300">Emergency Hotline</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Email Us</CardTitle>
                <CardDescription className="text-gray-300">
                  Send us your requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-green-400 mb-2">
                  jaljyotienterpricepkr@gmail.com
                </p>
                <p className="text-gray-300">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Visit Us</CardTitle>
                <CardDescription className="text-gray-300">
                  Our office location
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-purple-400 mb-2">
                  Main Office
                </p>
                <p className="text-gray-300">
                  Hatpara, Pakur 816107
                  <br />
                  Pakur, Jharkhand
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 mr-4"
            >
              Request Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Jal Jyoti Enterprises</h4>
                  <p className="text-sm text-gray-400">
                    Professional Plumbing Solutions
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for all plumbing needs. Quality service,
                reliable solutions.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>General Plumbing</li>
                <li>House Maps</li>
                <li>Government Projects</li>
                <li>Repair Services</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#services">Services</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 7979926141
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  jaljyotienterpricepkr@gmail.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Pakur, Jharkhand 816107
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Jal Jyoti Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
