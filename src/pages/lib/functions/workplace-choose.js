import { WorkplaceOverview, WorkplaceProject } from '../../../widgets'
import { WorkplaceSKU } from '../../../widgets/ui/WorkplaceSKU/WorkplaceSKU'
import { WorkplaceDashboard } from '../../../widgets/ui/WorkplaceDashboard/WorkplaceDashboard'

export const WorkplaceChoose = (activeTab, isPepsiCo = false) => {
  switch (activeTab) {
    case 'overview':
      return <WorkplaceOverview isPepsiCo={isPepsiCo}/>
    case 'project':
      return <WorkplaceProject isPepsiCo={isPepsiCo}/>
    case 'sku':
      return <WorkplaceSKU isPepsiCo={isPepsiCo}/>
    case 'dashboard':
      return <WorkplaceDashboard isPepsiCo={isPepsiCo}/>
  }
}