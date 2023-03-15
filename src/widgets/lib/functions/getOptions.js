export const getOptions = (type, options, nameArray = []) => {
  switch (type) {
    case 'product': {
      return options.map(el => <option key={el._id} value={el.product}>{el.product}</option>)
    }
    case 'project': {
      return options.filter(el => !!nameArray.find(el2 => el2 === el.product))[0]
        ?.projects
        .map(el => <option key={el._id} value={el.project}>{el.project}</option>)
    }
    case 'group': {
      return options.filter(el => !!nameArray.find(el2 => el2 === el.product))[0]
        ?.projects
        .filter(el => !!nameArray.find(el2 => el2 === el.project))[0]
        ?.groups
        .map(el => <option key={el._id} value={el.group}>{el.group}</option>)
    }
    case 'sku': {
      return options.filter(el => !!nameArray.find(el2 => el2 === el.product))[0]
        ?.projects
        .filter(el => !!nameArray.find(el2 => el2 === el.project))[0]
        ?.groups
        .filter(el => !!nameArray.find(el2 => el2 === el.group))[0]
        ?.skus
        .map(el => <option key={el._id} value={el.sku}>{el.sku}</option>)
    }
    default:
      return []
  }
}