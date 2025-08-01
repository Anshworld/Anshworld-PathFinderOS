import React, { useState } from 'react';
import { 
  BarChart3, Users, Trophy, Calendar, BookOpen, Target, 
  Star, TrendingUp, Award, Clock, MessageSquare, Upload,
  Download, Settings, Bell, Search, Filter
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole, setUserRole] = useState('student'); // student, mentor, admin, institution

  // Mock data for different user roles
  const studentData = {
    sparkCoins: 1250,
    currentTrack: 'Startup Builder',
    activeSprint: 'AgriTech Innovation',
    sprintProgress: 75,
    mentorSessions: 8,
    projectsCompleted: 3,
    upcomingEvents: [
      { title: 'Demo Day Preparation', date: '2025-02-15', type: 'workshop' },
      { title: 'Mentor Session - Pitch Review', date: '2025-02-18', type: 'mentoring' },
      { title: 'AgriTech Sprint Showcase', date: '2025-02-22', type: 'showcase' }
    ]
  };

  const institutionData = {
    totalStudents: 245,
    activePrograms: 8,
    completionRate: 87,
    mentorsActive: 15,
    upcomingShowcases: 3,
    recentAchievements: [
      { student: 'Arjun Kumar', achievement: 'Won AgriTech Sprint', date: '2025-01-28' },
      { student: 'Priya Sharma', achievement: 'Completed Skill Track', date: '2025-01-25' },
      { student: 'Rohit Singh', achievement: 'Published Research Paper', date: '2025-01-22' }
    ]
  };

  const renderStudentDashboard = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Spark Coins</p>
              <p className="text-3xl font-bold">{studentData.sparkCoins}</p>
            </div>
            <Star className="h-8 w-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Sprint Progress</p>
              <p className="text-3xl font-bold">{studentData.sprintProgress}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Mentor Sessions</p>
              <p className="text-3xl font-bold">{studentData.mentorSessions}</p>
            </div>
            <Users className="h-8 w-8 text-orange-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Projects Done</p>
              <p className="text-3xl font-bold">{studentData.projectsCompleted}</p>
            </div>
            <Trophy className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Current Track & Sprint */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Current Track</h3>
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{studentData.currentTrack}</h4>
                <p className="text-gray-600">Active since Jan 2025</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Track Details
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Active Sprint</h3>
          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">{studentData.activeSprint}</h4>
              <span className="text-green-600 font-medium">{studentData.sprintProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${studentData.sprintProgress}%` }}
              ></div>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Continue Sprint
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          {studentData.upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  event.type === 'workshop' ? 'bg-blue-500' :
                  event.type === 'mentoring' ? 'bg-orange-500' : 'bg-green-500'
                }`}></div>
                <div>
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInstitutionDashboard = () => (
    <div className="space-y-6">
      {/* Institution Stats */}
      <div className="grid md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{institutionData.totalStudents}</div>
          <div className="text-sm text-gray-600">Total Students</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg text-center">
          <div className="text-2xl font-bold text-green-600">{institutionData.activePrograms}</div>
          <div className="text-sm text-gray-600">Active Programs</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg text-center">
          <div className="text-2xl font-bold text-orange-600">{institutionData.completionRate}%</div>
          <div className="text-sm text-gray-600">Completion Rate</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{institutionData.mentorsActive}</div>
          <div className="text-sm text-gray-600">Active Mentors</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg text-center">
          <div className="text-2xl font-bold text-red-600">{institutionData.upcomingShowcases}</div>
          <div className="text-sm text-gray-600">Upcoming Shows</div>
        </div>
      </div>

      {/* Management Tools */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Add Students</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <BookOpen className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Create Sprint</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800 font-medium">Schedule Event</span>
            </button>
            <button className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Download className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Export Data</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            {institutionData.recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Award className="h-5 w-5 text-yellow-500" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{achievement.student}</p>
                  <p className="text-sm text-gray-600">{achievement.achievement}</p>
                </div>
                <span className="text-xs text-gray-500">{achievement.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Pathfinder Dashboard
            </h2>
            <p className="text-gray-600">
              Complete Innovation & Management System
            </p>
          </div>

          {/* Role Switcher (Demo Purpose) */}
          <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setUserRole('student')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                userRole === 'student' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Student View
            </button>
            <button
              onClick={() => setUserRole('institution')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                userRole === 'institution' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Institution View
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex overflow-x-auto">
            {['overview', 'sprints', 'mentorship', 'showcase', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 text-center font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && (
            userRole === 'student' ? renderStudentDashboard() : renderInstitutionDashboard()
          )}

          {activeTab === 'sprints' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skill Sprints Management</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {['AgriTech', 'EdTech', 'HealthTech', 'EV & Robotics', 'Renewable Energy', 'Life Sciences'].map((sprint, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">{sprint} Sprint</h4>
                    <p className="text-gray-600 text-sm mb-4">4-week intensive program</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-medium">Active</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Manage →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mentorship' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mentorship Network</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Active Mentors</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Dr. Ravi Kumar', expertise: 'AgriTech & Innovation', sessions: 24 },
                      { name: 'Priya Sharma', expertise: 'Startup Strategy', sessions: 18 },
                      { name: 'Amit Singh', expertise: 'Technology & Product', sessions: 32 }
                    ].map((mentor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{mentor.name}</p>
                          <p className="text-sm text-gray-600">{mentor.expertise}</p>
                        </div>
                        <span className="text-blue-600 font-medium">{mentor.sessions} sessions</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Upcoming Sessions</h4>
                  <div className="space-y-3">
                    {[
                      { title: 'Pitch Deck Review', mentor: 'Priya Sharma', time: 'Today 4:00 PM' },
                      { title: 'Technical Architecture', mentor: 'Amit Singh', time: 'Tomorrow 2:00 PM' },
                      { title: 'Market Research', mentor: 'Dr. Ravi Kumar', time: 'Feb 20, 10:00 AM' }
                    ].map((session, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <p className="font-medium text-gray-900">{session.title}</p>
                        <p className="text-sm text-gray-600">with {session.mentor}</p>
                        <p className="text-sm text-blue-600">{session.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'showcase' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo Day & Showcases</h3>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4">Upcoming Demo Days</h4>
                  <div className="space-y-4">
                    {[
                      { title: 'AgriTech Innovation Showcase', date: 'March 15, 2025', participants: 25 },
                      { title: 'EdTech Solutions Demo', date: 'March 22, 2025', participants: 18 },
                      { title: 'HealthTech Pitch Day', date: 'April 5, 2025', participants: 22 }
                    ].map((event, index) => (
                      <div key={index} className="p-6 border border-gray-200 rounded-xl">
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="font-medium text-gray-900">{event.title}</h5>
                          <span className="text-blue-600 font-medium">{event.participants} participants</span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.date}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Manage Event
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Content Uploads</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-colors">
                      <Upload className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Upload Pitch Deck</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-colors">
                      <Upload className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Upload Demo Video</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-colors">
                      <Upload className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Upload Blog Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Analytics & Reports</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-800">Sprint Completion Rate</span>
                        <span className="text-blue-600 font-bold">87%</span>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Student Engagement</span>
                        <span className="text-green-600 font-bold">92%</span>
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-orange-800">Mentor Satisfaction</span>
                        <span className="text-orange-600 font-bold">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Export Options</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800">Student Progress Report</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800">Sprint Performance Data</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Download className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800">Mentor Feedback Summary</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Education?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join the Pathfinder ecosystem and be part of India's largest innovation and skill development platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors font-medium">
              Start Free Trial
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors font-medium border border-blue-500">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;