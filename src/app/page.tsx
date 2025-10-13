'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Building, Users, Award, CheckCircle, Menu, X, ArrowRight, Clock, Calendar, Star, Shield, TrendingUp, Eye, Target, Lightbulb, ChevronRight, Globe, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['beranda', 'galeri', 'profil', 'layanan', 'referensi', 'kontak']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: "Jasa Perencana Konstruksi",
      description: "Layanan perencanaan komprehensif untuk berbagai bidang konstruksi dengan pendekatan teknis dan inovatif",
      items: [
        "Desain Arsitektur Modern",
        "Perencanaan Struktur Sipil",
        "Inspeksi Teknis & Audit"
      ],
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Jasa Pengawas Konstruksi",
      description: "Pengawasan ketat dan inspeksi teknis untuk memastikan kualitas dan kepatuhan standar",
      items: [
        "Quality Control & Assurance",
        "Project Management",
        "Supervisi Teknis"
      ],
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Konsultasi SLF",
      description: "Konsultasi profesional untuk Sertifikat Laik Fungsi bangunan komersial dan residensial",
      items: [
        "Sertifikasi SLF",
        "Studi Kelayakan",
        "Analisis Kepatuhan"
      ],
      icon: <Award className="h-6 w-6" />
    }
  ]

  const projects = [
    {
      title: "Proyek Pemerintah",
      description: "Berbagai proyek infrastruktur dengan sumber dana APBD dan APBN",
      type: "Pemerintah",
      features: ["APBD Tk II", "APBD Tk I", "APBN", "Loan (OECF)"],
      image: "/construction-site.jpg"
    },
    {
      title: "Proyek Komersial",
      description: "Proyek-proyek komersial dengan standar internasional",
      type: "Komersial",
      features: ["Gedung Perkantoran", "Pusat Perbelanjaan", "Hotel"],
      image: "/commercial-project.jpg"
    },
    {
      title: "Proyek Residensial",
      description: "Pengembangan perumahan dan apartemen modern",
      type: "Residensial",
      features: ["Perumahan Elite", "Apartemen", "Villa"],
      image: "/residential-project.jpg"
    }
  ]

  const partners = [
    "Universitas Islam Sultan Agung, Semarang",
    "Universitas Diponegoro, Semarang",
    "Universitas Negeri Semarang, Semarang",
    "Universitas 17 Agustus 1945, Semarang",
    "SMK Negeri 3 Semarang",
    "PT. Saranabudi Prakarsaripta",
    "PT. Widha",
    "CV. POLARIS",
    "CV. Millcon",
    "CV. Identitas",
    "CV. Rekayasa Jati Mandiri"
  ]

  const contacts = [
    {
      name: "Ir. Luqman Assaffat St. Mt. M.Kom",
      phone: "081225098250",
      role: "Direktur Utama",
      image: "/director-portrait.jpg"
    },
    {
      name: "ROHMAN EKO SANTOSO",
      phone: "081226215789",
      role: "Manager Operasional",
      image: "/manager-portrait.jpg"
    },
    {
      name: "Ahmad Wahyudi",
      phone: "08562683210",
      role: "Manager Proyek",
      image: "/project-manager-portrait.jpg"
    }
  ]

  const stats = [
    { number: "18+", label: "Tahun Pengalaman", icon: <Calendar className="h-6 w-6" /> },
    { number: "150+", label: "Proyek Selesai", icon: <Building className="h-6 w-6" /> },
    { number: "50+", label: "Tim Profesional", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Kepuasan Klien", icon: <Star className="h-6 w-6" /> }
  ]

  const galleryImages = [
    { src: "/construction-site.jpg", title: "Proyek Konstruksi", category: "Infrastruktur" },
    { src: "/commercial-project.jpg", title: "Gedung Komersial", category: "Komersial" },
    { src: "/residential-project.jpg", title: "Perumahan Modern", category: "Residensial" },
    { src: "/infrastructure-project.jpg", title: "Jembatan & Jalan", category: "Infrastruktur" },
    { src: "/completed-building.jpg", title: "Bangunan Selesai", category: "Arsitektur" },
    { src: "/blueprints.jpg", title: "Desain Teknis", category: "Perencanaan" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/company-logo.png" alt="CV Citra Arsitama Logo" className="h-10 w-10" />
              <div>
                <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>CV. CITRA ARSITAMA</span>
                <p className={`text-xs transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>Konsultan Konstruksi Profesional</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {['beranda', 'galeri', 'profil', 'layanan', 'referensi', 'kontak'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 font-medium ${
                    activeSection === section 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {section === 'referensi' ? 'Portfolio' : section}
                </a>
              ))}
            </div>

            <Button
              variant={isScrolled ? "default" : "outline"}
              size="sm"
              className={`hidden md:flex transition-all duration-300 ${
                isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-white text-white hover:bg-white hover:text-blue-600'
              }`}
            >
              Hubungi Kami
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['beranda', 'galeri', 'profil', 'layanan', 'referensi', 'kontak'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md capitalize font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section === 'referensi' ? 'Portfolio' : section}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-office.jpg" 
            alt="CV Citra Arsitama Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-blue-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 animate-fade-in">
              <img src="/company-logo.png" alt="CV Citra Arsitama Logo" className="h-24 w-24 mx-auto mb-6" />
              <Badge className="bg-green-600/20 text-green-300 border-green-400/30 text-sm px-4 py-2 mb-6">
                <Award className="h-4 w-4 mr-2" />
                SLF Certified Professional
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              CV. CITRA ARSITAMA
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Membangun Mimpi Klien dengan Integritas, Inovasi, dan Profesionalisme
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/10 text-white border-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 mr-2" />
                Jujur & Terpercaya
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/10 text-white border-white/30 backdrop-blur-sm">
                <Lightbulb className="h-5 w-5 mr-2" />
                Inovatif
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/10 text-white border-white/30 backdrop-blur-sm">
                <Shield className="h-5 w-5 mr-2" />
                Profesional
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white/60 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="galeri" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Galeri Proyek</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Hasil Karya Terbaik Kami
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Portfolio proyek-proyek berhasil yang telah kami kerjakan dengan standar kualitas tertinggi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <Badge className="bg-blue-600 text-white mb-2 text-xs">{image.category}</Badge>
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section id="profil" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Profil Perusahaan</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Tentang CV. CITRA ARSITAMA
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Konsultan konstruksi terpercaya dengan pengalaman lebih dari 18 tahun
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Building className="h-8 w-8 text-blue-600 mr-3" />
                    Visi & Misi Kami
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    CV. CITRA ARSITAMA adalah perusahaan konsultan konstruksi profesional yang berdiri sejak 7 Januari 2005. 
                    Kami bergerak dalam bidang Jasa Konstruksi dengan fokus pada Arsitektur, Tata Lingkungan, Sipil, 
                    Mekanikal dan Elektrikal.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Dengan dukungan tim profesional dan teknologi terkini, kami berkomitmen untuk memberikan 
                    solusi konstruksi terbaik yang memenuhi standar kualitas internasional.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                    <Calendar className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">Berdiri Sejak</h4>
                    <p className="text-2xl font-bold text-blue-600">2005</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                    <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">Lokasi</h4>
                    <p className="text-lg font-semibold text-slate-900">Semarang</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="h-6 w-6 text-green-600" />
                    <h4 className="font-bold text-green-800 text-lg">Sertifikat SLF Terpercaya</h4>
                  </div>
                  <p className="text-green-700">
                    Kami adalah konsultan resmi untuk Sertifikat Laik Fungsi (SLF) bangunan komersial dan residensial 
                    dengan sertifikasi lengkap dan pengalaman luas.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/team-meeting.jpg" 
                  alt="Team Meeting CV Citra Arsitama" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl font-bold mb-3">Tim Profesional Kami</h4>
                  <p className="text-lg opacity-90">Berpengalaman lebih dari 18 tahun dalam industri konstruksi</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      <Users className="h-4 w-4 mr-2" />
                      50+ Tim Ahli
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      <Award className="h-4 w-4 mr-2" />
                      Sertifikasi Lengkap
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Layanan Kami</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Solusi Konsultasi Komprehensif
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Berbagai layanan konsultasi konstruksi dan non-konstruksi untuk memenuhi kebutuhan proyek Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const serviceImages = [
                  "/architectural-consultation.jpg",
                  "/construction-inspection.jpg",
                  "/civil-engineering.jpg"
                ]
                return (
                  <Card key={index} className="group bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={serviceImages[index]} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{service.icon}</div>
                        </div>
                        <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardHeader className="pt-6">
                      <CardDescription className="text-slate-600 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project References */}
      <section id="referensi" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Portfolio</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Referensi Pekerjaan
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Proyek-proyek prestisius yang telah kami tangani dengan hasil terbaik
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {projects.map((project, index) => (
                <Card key={index} className="group bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs border-blue-200 text-blue-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Mitra Kerja Sama Strategis
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center space-x-3 text-slate-700 bg-white p-3 rounded-lg">
                    <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{partner}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <img 
                  src="/completed-building.jpg" 
                  alt="Completed Building Project" 
                  className="rounded-xl shadow-md mx-auto max-w-full h-48 object-cover"
                />
                <p className="text-slate-600 mt-4 font-medium">Proyek-proyek sukses bersama mitra terpercaya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Hubungi Kami</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Tim Profesional Siap Membantu
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Konsultasikan kebutuhan proyek konstruksi Anda dengan tim ahli kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contacts.map((contact, index) => (
                <Card key={index} className="group bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={contact.image} 
                      alt={contact.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                      <CardTitle className="text-lg font-bold">{contact.name}</CardTitle>
                      <CardDescription className="text-white/90 text-sm mt-1">{contact.role}</CardDescription>
                    </div>
                  </div>
                  <CardContent className="text-center pt-6 pb-6">
                    <div className="flex items-center justify-center space-x-3 text-slate-700 mb-4">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <a href={`tel:${contact.phone}`} className="hover:text-blue-600 transition-colors font-semibold text-lg">
                        {contact.phone}
                      </a>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Hubungi Sekarang
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-80">
                <img 
                  src="/blueprints.jpg" 
                  alt="Architectural Blueprints" 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Siap Memulai Proyek Anda?</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                      Hubungi kami sekarang untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan konstruksi Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                        <Phone className="mr-2 h-5 w-5" />
                        Konsultasi Gratis
                      </Button>
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                        <Mail className="mr-2 h-5 w-5" />
                        Kirim Email
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-12">
                  <div className="text-center">
                    <img src="/slf-certificate.jpg" alt="SLF Certificate" className="w-20 h-20 mx-auto rounded-lg mb-3 shadow-lg" />
                    <p className="text-sm text-white font-medium">SLF Certified</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 text-yellow-400" />
                    <p className="text-sm text-white font-medium">Berpengalaman</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-400" />
                    <p className="text-sm text-white font-medium">Terpercaya</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 mx-auto mb-3 text-blue-400" />
                    <p className="text-sm text-white font-medium">Bergaransi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/company-logo.png" alt="CV Citra Arsitama Logo" className="h-12 w-12" />
                  <div>
                    <span className="text-2xl font-bold">CV. CITRA ARSITAMA</span>
                    <p className="text-slate-400 text-sm">Konsultan Konstruksi Profesional</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                  Perusahaan konsultan konstruksi profesional yang berpengalaman sejak 2005. 
                  Kami berkomitmen untuk memberikan solusi konstruksi terbaik dengan standar kualitas internasional.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm">Semarang, Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm">Since 2005</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-6 text-lg">Layanan Kami</h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="hover:text-white transition-colors cursor-pointer">Jasa Perencana Konstruksi</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Jasa Pengawas Konstruksi</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Konsultasi SLF</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Jasa Inspeksi Teknis</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Manajemen Proyek</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-6 text-lg">Kontak</h4>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span className="hover:text-white transition-colors cursor-pointer">081225098250</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span className="hover:text-white transition-colors cursor-pointer">081226215789</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span className="hover:text-white transition-colors cursor-pointer">08562683210</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span className="hover:text-white transition-colors cursor-pointer">info@citraarsitama.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-12 bg-slate-800" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-slate-400">© 2025 CV. CITRA ARSITAMA. All rights reserved.</p>
                <p className="text-slate-500 text-sm mt-1">Berdiri sejak 7 Januari 2005 • SLF Certified</p>
              </div>
              <div className="flex space-x-6 text-sm text-slate-500">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  )
}