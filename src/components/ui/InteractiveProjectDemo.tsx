import React, { useState } from 'react';
import { 
  Users, Calendar, Clock, CheckCircle2, 
  Search, ShieldCheck, UserCheck, GraduationCap, 
  BookOpen, Bell, ArrowRight
} from 'lucide-react';

interface InteractiveProjectDemoProps {
  projectId: 'hrms-portal' | 'cms-portal';
  onOpenCaseStudy: () => void;
}

export const InteractiveProjectDemo: React.FC<InteractiveProjectDemoProps> = ({
  projectId,
  onOpenCaseStudy
}) => {
  // HRMS State
  const [hrmsRole, setHrmsRole] = useState<'admin' | 'user'>('admin');
  const [searchEmployee, setSearchEmployee] = useState('');
  const [leaveRequested, setLeaveRequested] = useState(false);

  // CMS State
  const [cmsTab, setCmsTab] = useState<'schedule' | 'students' | 'notices'>('schedule');

  if (projectId === 'hrms-portal') {
    const employees = [
      { id: 'EMP-1042', name: 'Harsha Vardhan Chithirala', role: 'Associate Software Engineer', dept: 'Engineering', status: 'Active', attendance: '98.5%' },
      { id: 'EMP-1038', name: 'Priya Sharma', role: 'Senior Product Designer', dept: 'Design System', status: 'Active', attendance: '96.2%' },
      { id: 'EMP-1015', name: 'Vikram Mehta', role: 'Staff Backend Architect', dept: 'Cloud Platform', status: 'On Leave', attendance: '94.0%' },
      { id: 'EMP-1089', name: 'Ananya Rao', role: 'QA Automation Lead', dept: 'Quality Assurance', status: 'Active', attendance: '99.1%' }
    ];

    const filteredEmployees = employees.filter(e => 
      e.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      e.dept.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      e.id.toLowerCase().includes(searchEmployee.toLowerCase())
    );

    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl">
        {/* Top App Bar & Role Switcher */}
        <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              H
            </div>
            <div>
              <div className="text-sm font-semibold text-white tracking-tight">Pirnav HRMS Enterprise</div>
              <div className="text-[11px] text-slate-400 font-mono">Role-Based Dashboard Simulator</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800">
            <button
              onClick={() => setHrmsRole('admin')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                hrmsRole === 'admin'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Dashboard</span>
            </button>
            <button
              onClick={() => setHrmsRole('user')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                hrmsRole === 'user'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>User Dashboard</span>
            </button>
          </div>
        </div>

        {/* Dynamic Role Content */}
        <div className="p-5">
          {hrmsRole === 'admin' ? (
            <div className="space-y-5">
              {/* Metric KPI Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Total Staff</div>
                  <div className="text-xl font-bold font-display text-white mt-0.5 tabular-nums">148</div>
                  <div className="text-[11px] text-emerald-400 mt-1">100% active roster</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">On Duty Today</div>
                  <div className="text-xl font-bold font-display text-white mt-0.5 tabular-nums">142</div>
                  <div className="text-[11px] text-indigo-400 mt-1">95.9% present</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Pending Leaves</div>
                  <div className="text-xl font-bold font-display text-amber-400 mt-0.5 tabular-nums">6</div>
                  <div className="text-[11px] text-amber-300 mt-1">Requires review</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-slate-400 text-xs">Departments</div>
                  <div className="text-xl font-bold font-display text-white mt-0.5 tabular-nums">8</div>
                  <div className="text-[11px] text-slate-400 mt-1">Cross-functional</div>
                </div>
              </div>

              {/* Administrative Filter & Table */}
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                  <div className="text-xs font-semibold text-slate-200">
                    Employee Directory Management
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search name, ID, or dept..."
                      value={searchEmployee}
                      onChange={(e) => setSearchEmployee(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-md text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="py-2 px-3 font-medium">Employee ID</th>
                        <th className="py-2 px-3 font-medium">Full Name</th>
                        <th className="py-2 px-3 font-medium">Department</th>
                        <th className="py-2 px-3 font-medium">Designation</th>
                        <th className="py-2 px-3 font-medium">Status</th>
                        <th className="py-2 px-3 font-medium text-right">Attendance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {filteredEmployees.map((emp) => (
                        <tr key={emp.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-400">{emp.id}</td>
                          <td className="py-2.5 px-3 font-medium text-slate-100">{emp.name}</td>
                          <td className="py-2.5 px-3 text-slate-300">{emp.dept}</td>
                          <td className="py-2.5 px-3 text-slate-400">{emp.role}</td>
                          <td className="py-2.5 px-3">
                            <span className={emp.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'}>
                              {emp.status}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono text-slate-300 tabular-nums">
                            {emp.attendance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* User Dashboard Profile */}
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    HV
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Harsha Vardhan Chithirala</div>
                    <div className="text-xs text-slate-400">Associate Software Engineer · Engineering Dept</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">EMP-1042 · Hyderabad Office</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center flex-1 md:flex-initial min-w-[90px]">
                    <div className="text-[11px] text-slate-400">Paid Leave</div>
                    <div className="text-base font-bold text-white mt-0.5 font-display tabular-nums">14 Days</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center flex-1 md:flex-initial min-w-[90px]">
                    <div className="text-[11px] text-slate-400">Sick Leave</div>
                    <div className="text-base font-bold text-white mt-0.5 font-display tabular-nums">7 Days</div>
                  </div>
                </div>
              </div>

              {/* Self Service Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-semibold text-slate-200 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    Quick Leave Application
                  </div>
                  {leaveRequested ? (
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>Leave request submitted successfully for approval.</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-xs text-slate-400">Request leave without leaving the portal.</p>
                      <button
                        onClick={() => setLeaveRequested(true)}
                        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-xs font-medium transition-colors"
                      >
                        Submit 1-Day Casual Leave
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-semibold text-slate-200 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    Today's Attendance Punch
                  </div>
                  <div className="text-xs text-slate-400 mb-2">
                    Check-in recorded at <span className="text-slate-200 font-mono">09:12 AM IST</span>.
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    On-Premises Hyderabad Office IP Verified
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Case Study CTA */}
        <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Engineered role separation & workflow architecture at Pirnav Software Technology
          </span>
          <button
            onClick={onOpenCaseStudy}
            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            <span>Read Full HRMS Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // CMS Portal View
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl">
      {/* Top App Bar */}
      <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          <div>
            <div className="text-sm font-semibold text-white tracking-tight">College Management System (CMS)</div>
            <div className="text-[11px] text-slate-400 font-mono">Academic Administration & Curriculum Hub</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800">
          <button
            onClick={() => setCmsTab('schedule')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              cmsTab === 'schedule' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Timetable
          </button>
          <button
            onClick={() => setCmsTab('students')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              cmsTab === 'students' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Rosters
          </button>
          <button
            onClick={() => setCmsTab('notices')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              cmsTab === 'notices' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Circulars
          </button>
        </div>
      </div>

      {/* Dynamic Tab Body */}
      <div className="p-5">
        {cmsTab === 'schedule' && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-slate-200 flex items-center justify-between">
              <span>Weekly Lecture Timetable — Dept of Computer Science & IT</span>
              <span className="font-mono text-slate-400">Semester VI</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] text-cyan-400 font-mono">09:00 AM – 10:30 AM</div>
                <div className="text-sm font-semibold text-white mt-1">Distributed Cloud Systems</div>
                <div className="text-xs text-slate-400 mt-1">Lab Complex 4 · Dr. K. Raman</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] text-indigo-400 font-mono">11:00 AM – 12:30 PM</div>
                <div className="text-sm font-semibold text-white mt-1">Full Stack Web Architecture</div>
                <div className="text-xs text-slate-400 mt-1">Lecture Hall 201 · Prof. S. Sen</div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] text-amber-400 font-mono">02:00 PM – 03:30 PM</div>
                <div className="text-sm font-semibold text-white mt-1">Database Performance Tuning</div>
                <div className="text-xs text-slate-400 mt-1">Seminar Room A · Dr. M. Verma</div>
              </div>
            </div>
          </div>
        )}

        {cmsTab === 'students' && (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-200">Enrolled Student Cohort Records</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2 px-3 font-medium">Roll No</th>
                    <th className="py-2 px-3 font-medium">Student Name</th>
                    <th className="py-2 px-3 font-medium">Course Program</th>
                    <th className="py-2 px-3 font-medium text-right">Attendance</th>
                    <th className="py-2 px-3 font-medium text-right">Current CGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-mono text-slate-400">2000030101</td>
                    <td className="py-2.5 px-3 font-medium text-slate-200">Aarav Patel</td>
                    <td className="py-2.5 px-3 text-slate-300">B.Tech CS & IT</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-300">92%</td>
                    <td className="py-2.5 px-3 text-right font-mono text-emerald-400">8.6</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-mono text-slate-400">2000030145</td>
                    <td className="py-2.5 px-3 font-medium text-slate-200">Divya Narayanan</td>
                    <td className="py-2.5 px-3 text-slate-300">B.Tech CS & IT</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-300">95%</td>
                    <td className="py-2.5 px-3 text-right font-mono text-emerald-400">9.1</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-mono text-slate-400">2000030188</td>
                    <td className="py-2.5 px-3 font-medium text-slate-200">Karthik Reddy</td>
                    <td className="py-2.5 px-3 text-slate-300">B.Tech CS & IT</td>
                    <td className="py-2.5 px-3 text-right font-mono text-slate-300">88%</td>
                    <td className="py-2.5 px-3 text-right font-mono text-emerald-400">8.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {cmsTab === 'notices' && (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              Administrative Circulars & Exam Notifications
            </div>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-200">End-Semester Practical Examination Schedule Published</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Office of the Controller of Examinations · All Depts</div>
                </div>
                <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                  Priority
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-200">Annual Technical Symposium Registration Open</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Student Affairs Council · Campus Auditorium</div>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                  General
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Case Study CTA */}
      <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/50 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Designed academic workflows & multi-tier layouts at Pirnav Software Technology
        </span>
        <button
          onClick={onOpenCaseStudy}
          className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          <span>Read Full CMS Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
