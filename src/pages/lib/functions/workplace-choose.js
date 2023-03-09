import { WorkplaceOverview, WorkplaceProject } from '../../../widgets'
import { WorkplaceSKU } from '../../../widgets/ui/WorkplaceSKU/WorkplaceSKU'

export const WorkplaceChoose = (activeTab) => {
  switch (activeTab) {
    case 'overview':
      return <WorkplaceOverview />
    case 'project':
      return <WorkplaceProject />
    case 'sku':
      return <WorkplaceSKU />
    default:
      return <WorkplaceOverview />
  }
}