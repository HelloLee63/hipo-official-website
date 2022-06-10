export class MapDataUtil {
  static store = new Map();

  static set(instance, key, data) {
    if(!instance) {
      return
    }

    const instanceData = DataUtil.store.get(instance)

    if(!instanceData) {
      const newMap = new Map().set(key, data)
      DataUtil.store.set(instance, newMap)
      return
    }

    instanceData.set(key, data)
  }

  static get(instance, key) {
    const instanceData = DataUtil.store.get(instance)
    if(!instanceData) {
      return
    }

    return instanceData.get(key)
  }

  static remove(instance, key) {
    const instanceData = DataUtil.store.get(instance)
    if (!instanceData) {
      return
    }

    instanceData.delete(key)
  }

  static has(instance, key) {
    const instanceData = DataUtil.store.get(instance)
    if(instanceData) {
      return instanceData.has(key)
    }

    return false
  }

  static getAllInstanceByKey(key) {
    const results = []
    DataUtil.store.forEach((val) => {
      val.forEach((v, k) => {
        if (k === key) {
          results.push(v)
        }
      })
    })
    return results
  }
}