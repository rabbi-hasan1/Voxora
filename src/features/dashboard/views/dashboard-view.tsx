import { PageHeader } from '@/components/own/page-header'
import React from 'react'
import DashboardHeader from '../components/dashboard-header';

function DashboardView() {
  return (
    <div className=' relative'>
      <PageHeader title='Dashboard' className='' />
      <div className=' relative space-y-8 p-4 lg:p-8'>
        <DashboardHeader />
      </div>
    </div>
  )
}

export default DashboardView;
