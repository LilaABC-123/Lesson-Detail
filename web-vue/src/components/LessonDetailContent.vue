<template>
  <main class="main-content">
    <!-- Tabs 置顶栏 -->
    <div class="tabs-bar">
      <div class="content-tabs">
        <div
          v-for="(tab, index) in contentTabs"
          :key="tab.id"
          :class="['tab-pill', { 'tab-pill--active': tab.active }]"
          @click="setActiveTab(index)"
        >
          <span>{{ tab.label }}</span>
          <svg class="tab-close" width="14" height="14" viewBox="0 0 14 14" @click.stop="closeTab(index)">
            <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Page Header -->
    <div class="page-header-bar">
      <div class="page-header-left">
        <button class="btn-back" @click="goBack">
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M10 12L4 7l6-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <h1 class="page-title">{{ lessonData.title }}</h1>
        <span class="tag tag--finished">{{ lessonData.status }}</span>
      </div>
      <div class="page-header-right">
        <button class="btn-action">
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 4v6l3 3 5-5-3-3-5 2z" stroke="currentColor" stroke-width="1.5"/></svg>
          <span>Lesson Playback</span>
        </button>
        <button class="btn-action">
          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 2v2M7 10v2M2 7h2M10 7h2" stroke="currentColor" stroke-width="1.5"/></svg>
          <span>Adjust Hours</span>
        </button>
      </div>
    </div>

    <!-- Basic Information Card -->
    <section class="content-card">
      <div class="card-header-bar">
        <h2 class="card-title">
          <svg class="card-icon" viewBox="0 0 22 22" fill="none"><rect x="1" y="2" width="20" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 8h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M4 15h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Basic Information
        </h2>
      </div>
      <div class="info-section">
        <div class="section-label">Course Information</div>
        <div class="data-table data-table--bordered">
          <table>
            <thead>
              <tr>
                <th style="width:191px">Subject</th>
                <th style="width:287px">Course Name</th>
                <th style="width:287px">Lesson Name</th>
                <th style="width:191px">Course Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ lessonData.courseInfo.subject }}</td>
                <td>{{ lessonData.courseInfo.courseName }}</td>
                <td>{{ lessonData.courseInfo.lessonName }}</td>
                <td>{{ lessonData.courseInfo.courseType }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="info-section">
        <div class="section-label">Duration</div>
        <div class="data-table data-table--bordered">
          <table>
            <thead>
              <tr>
                <th style="width:50%">Planned Duration</th>
                <th style="width:50%">Actual Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ lessonData.duration.planned }}</td>
                <td class="text-success">{{ lessonData.duration.actual }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="info-section">
        <div class="section-label-row">
          <span class="section-label">Final Settlement</span>
          <span class="tag tag--adjusted">Adjusted</span>
        </div>
        <div class="data-table data-table--bordered data-table--final-settlement">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
                <th>Base Hours</th>
                <th>Adjustment</th>
                <th>Net Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in lessonData.finalSettlement" :key="i">
                <td>{{ row.name }}</td>
                <td class="cell-tags">
                  <span v-for="(tag, t) in row.tags" :key="t" :class="['tag', 'tag--' + tag.type]">{{ tag.text }}</span>
                </td>
                <td>{{ row.baseHours }}</td>
                <td :class="row.adjustmentClass">{{ row.adjustment }}</td>
                <td :class="row.netClass">{{ row.netTotal }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Student Information Card -->
    <section class="content-card">
      <div class="card-header-bar">
        <h2 class="card-title">
          <svg class="card-icon" viewBox="0 0 22 22" fill="none"><rect x="1" y="2" width="20" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 8h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M4 15h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Student Information
        </h2>
      </div>
      <div class="card-content">
        <div class="data-table data-table--bordered">
          <table>
            <thead>
              <tr>
                <th style="width:191px">Name</th>
                <th style="width:191px">Contract</th>
                <th style="width:258px">Product</th>
                <th style="width:170px">Product Type</th>
                <th style="width:170px">Main PA</th>
                <th style="width:170px">Cover PA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in lessonData.students" :key="i">
                <td>{{ row.name }}</td>
                <td>{{ row.contract }}</td>
                <td>{{ row.product }}</td>
                <td>{{ row.productType }}</td>
                <td>{{ row.mainPA }}</td>
                <td>{{ row.coverPA }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Tutor Information Card -->
    <section class="content-card">
      <div class="card-header-bar">
        <h2 class="card-title">
          <svg class="card-icon" viewBox="0 0 22 22" fill="none"><rect x="1" y="2" width="20" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 8h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M4 15h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Tutor Information
        </h2>
      </div>
      <div class="card-content">
        <div class="data-table data-table--bordered">
          <table>
            <thead>
              <tr>
                <th style="width:33%">Main Tutor</th>
                <th style="width:33%">Observing Tutor</th>
                <th style="width:34%">Academic Lead</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ lessonData.tutor.main }}</td>
                <td>{{ lessonData.tutor.observing }}</td>
                <td>{{ lessonData.tutor.academicLead }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Lesson Adjustment Card -->
    <section class="content-card">
      <div class="card-header-bar card-header-row">
        <h2 class="card-title">
          <svg class="card-icon" viewBox="0 0 22 22" fill="none"><rect x="1" y="2" width="20" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 8h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M4 15h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Lesson Adjustment
        </h2>
        <div class="card-actions">
          <button class="btn-icon btn-icon--danger" title="Delete">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h10"/><path d="M5.5 1.5h3v1.5h-3z"/><path d="M3 4h8v6.5q0 .5-1 .5H4q-1 0-1-.5V4z"/><path d="M5 6v4M7 6v4M9 6v4"/></svg>
          </button>
          <button class="btn-icon btn-icon--teal" title="Edit">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2L12 4 4 12 2 12 2 10l8-8z"/><path d="M10 2v2h2"/><path d="M2 11h1"/></svg>
          </button>
        </div>
      </div>
      <div class="card-content">
        <div class="data-table data-table--bordered data-table--lesson-adjustment">
          <table>
            <thead>
              <tr>
                <th>Initiated By</th>
                <th>Adjustment Reason</th>
                <th>Compensation Setting</th>
                <th>Attachment</th>
                <th>Operation Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="tag tag--tutor">Tutor</span></td>
                <td>{{ lessonData.adjustment.reason }}</td>
                <td class="cell-compensation">
                  <div v-for="(row, i) in lessonData.adjustment.compensation" :key="i" class="compensation-row">
                    {{ row.label }}: <span :class="row.class">{{ row.value }}</span>
                  </div>
                </td>
                <td class="cell-attachment">
                  <svg class="icon-attach icon-attach--teal" width="14" height="14" viewBox="0 0 14 14"><path d="M7 2v8a2 2 0 01-4 0V4a3 3 0 016 0v6" stroke="currentColor" stroke-width="1.5"/></svg>
                  <span class="attachment-text">Attachments 1</span>
                </td>
                <td>{{ lessonData.adjustment.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Attendance Card -->
    <section class="content-card">
      <div class="card-header-bar">
        <h2 class="card-title">
          <svg class="card-icon" viewBox="0 0 22 22" fill="none"><rect x="1" y="2" width="20" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="5" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 8h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M4 15h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Attendance
        </h2>
      </div>
      <div class="card-content">
        <div class="data-table data-table--bordered">
          <table>
            <thead>
              <tr>
                <th>Planned Class Time</th>
                <th>Name</th>
                <th>Detail</th>
                <th>Meeting End Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4">2025-12-19 07:44</td>
                <td><span class="tag tag--tutor">Tutor</span> Samantha</td>
                <td class="text-danger">08:18 - 09:20 (Late)</td>
                <td>09:20</td>
              </tr>
              <tr>
                <td><span class="tag tag--student">Student</span> Sophia Chen</td>
                <td class="text-danger">08:18 - 09:20 (Late)</td>
                <td>09:20</td>
              </tr>
              <tr>
                <td><span class="tag tag--student">Student</span> Sophia Chen</td>
                <td class="text-danger">08:18 - 09:20 (Late)</td>
                <td>09:20</td>
              </tr>
              <tr>
                <td><span class="tag tag--student">Student</span> Lucy Chen</td>
                <td>Not Attended</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Status Change Logs Card -->
    <section class="content-card">
      <div class="card-header-bar card-header-tabs">
        <button
          v-for="(tab, index) in cardTabs"
          :key="tab.id"
          :class="['card-tab', { 'card-tab--active': activeCardTab === index }]"
          @click="activeCardTab = index"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="card-content">
        <div class="data-table data-table--bordered data-table--status-logs">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Operator</th>
                <th>Action</th>
                <th>Detail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(log, i) in lessonData.statusLogs" :key="i">
                <td>{{ log.time }}</td>
                <td>{{ log.operator }}</td>
                <td>{{ log.action }}</td>
                <td>{{ log.detail }}</td>
                <td>
                  <span v-if="log.statusFrom" :class="['tag', 'tag--status', 'tag--' + log.statusFromClass]">{{ log.statusFrom }}</span>
                  <span v-if="log.statusTo" class="arrow">→</span>
                  <span v-if="log.statusTo" :class="['tag', 'tag--status', 'tag--' + log.statusToClass]">{{ log.statusTo }}</span>
                  <span v-if="!log.statusTo" :class="['tag', 'tag--status', 'tag--' + log.statusFromClass]">{{ log.statusFrom }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'LessonDetailContent',
  data() {
    return {
      contentTabs: [
        { id: 1, label: 'Student management', active: true },
        { id: 2, label: 'Teacher list', active: false },
        { id: 3, label: 'Parents list', active: false }
      ],
      cardTabs: [
        { id: 1, label: 'Status Change Logs' },
        { id: 2, label: 'Room Entry/Exit Records' }
      ],
      activeCardTab: 0,
      lessonData: {
        title: 'Mock Interview Round 1',
        status: 'Finished',
        courseInfo: {
          subject: 'Humanities',
          courseName: 'Career Planning Interview Prep',
          lessonName: 'Mock Interview Round 1',
          courseType: '1v1'
        },
        duration: { planned: '1.0h', actual: '1.0h' },
        finalSettlement: [
          { name: 'Finn', tags: [{ type: 'tutor', text: 'Tutor' }], baseHours: '1.5h', adjustment: '-0.5h', netTotal: '-0.5h', adjustmentClass: 'text-danger', netClass: 'text-danger' },
          { name: 'Sophia Chen', tags: [{ type: 'student', text: 'Student' }, { type: 'contract', text: 'Limited Contract' }], baseHours: '1.5h', adjustment: '+0.5h', netTotal: '+1.5h', adjustmentClass: 'text-danger', netClass: 'text-danger' },
          { name: 'Sophia Chen', tags: [{ type: 'student', text: 'Student' }, { type: 'contract', text: 'Limited Contract' }], baseHours: '1.5h', adjustment: '+¥200', netTotal: '+1.5h | +¥200', adjustmentClass: 'text-danger', netClass: 'text-danger' },
          { name: 'Lucy Chen', tags: [{ type: 'student', text: 'Student' }, { type: 'contract', text: 'Limited Contract' }], baseHours: '1.5h', adjustment: '+¥200', netTotal: '+1.5h | +¥200', adjustmentClass: 'text-danger', netClass: 'text-danger' }
        ],
        students: [
          { name: 'Sophia Chen', contract: 'CTR-2025-002', product: 'Career Planning Package', productType: 'Unlimited', mainPA: 'Tyler', coverPA: 'Tyler' },
          { name: 'Sophia Chen', contract: 'CTR-2025-002', product: 'Career Planning Package', productType: 'Unlimited', mainPA: 'Tyler', coverPA: 'Tyler' },
          { name: 'Sophia Chen', contract: 'CTR-2025-002', product: 'Career Planning Package', productType: 'Unlimited', mainPA: 'Tyler', coverPA: 'Tyler' },
          { name: 'Lucy Chen', contract: 'CTR-2025-003', product: 'Career Planning Package', productType: 'Unlimited', mainPA: 'Tyler', coverPA: 'Tyler' }
        ],
        tutor: { main: 'Finn', observing: '-', academicLead: 'Dr. Wilson' },
        adjustment: {
          reason: 'Late Start—Teacher started 26 minutes late',
          compensation: [
            { label: 'Tutor', value: '-0.5h', class: 'text-danger' },
            { label: 'Lucas Zhao', value: '+0.5h', class: 'text-success' },
            { label: 'Lucas Zhao', value: '+¥200', class: 'text-success' },
            { label: 'Lucas Zhao', value: '+¥200', class: 'text-success' }
          ],
          note: 'Teacher arrived 26 min late. Limited students compensated in hours, Unlimited student compensated in CNY.'
        },
        attendance: [],
        statusLogs: [
          { time: '2025-12-18 17:00:00', operator: 'System', action: 'Lesson Created', detail: 'Auto-scheduled', statusFrom: 'Not Started', statusFromClass: 'gray', statusTo: null, statusToClass: null },
          { time: '2025-12-18 17:00:00', operator: 'System', action: 'Cancel Requested', detail: 'Teacher emergency cancellation', statusFrom: 'Not Started', statusFromClass: 'gray', statusTo: 'Pending Cancellation', statusToClass: 'orange' },
          { time: '2025-12-18 17:00:00', operator: 'System', action: 'Escalation', detail: 'Emergency cancellation escalated', statusFrom: 'Pending Cancellation', statusFromClass: 'orange', statusTo: 'Cancellation Escalation', statusToClass: 'red' },
          { time: '2025-12-18 17:00:00', operator: 'System', action: 'Cancelled', detail: 'Lesson ended early and cancelled', statusFrom: 'Cancellation Escalation', statusFromClass: 'red', statusTo: 'Cancelled', statusToClass: 'gray' },
          { time: '2025-12-18 17:00:00', operator: 'Aaron', action: 'Hours Adjusted', detail: 'Adjusted to 1.5h actual', statusFrom: 'Cancelled', statusFromClass: 'gray', statusTo: null, statusToClass: null }
        ]
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'LessonList' })
    },
    setActiveTab(index) {
      this.contentTabs.forEach((t, i) => {
        this.$set(t, 'active', i === index)
      })
    },
    closeTab(index) {
      if (this.contentTabs[index].active && this.contentTabs.length > 1) {
        const next = this.contentTabs[index + 1] || this.contentTabs[index - 1]
        if (next) next.active = true
      }
      this.contentTabs.splice(index, 1)
    }
  }
}
</script>
