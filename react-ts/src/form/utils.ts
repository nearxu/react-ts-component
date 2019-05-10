

export function deepCopy<T>(target: T): T {
  const type = typeof target;

  if (type === null || type === 'boolean' || type === 'number' || type === 'string') {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target.getTime()) as any
  }

  if (Array.isArray(target)) {
    return target.map(m => deepCopy(m)) as any
  }

  if (typeof target === 'object') {
    const obj: any = {}
    for (let key in target) {
      obj[key] = deepCopy(target[key])
    }
    return obj
  }

  return undefined as any
}

export function getPropName(valueProp: string | ((type: any) => string), type: any) {
  return typeof valueProp === 'function' ? valueProp(type) : valueProp
}

export function deepGet(values: any, name: string) {
  const names = name.split('.')
  const len = names.length;

  for (let i = 0; i < len; i++) {
    if (!isObject(values)) return undefined
    values = values[names[i]]
  }
  return values;
}

export function deepSet(values: any, name: string, value: any) {
  if (!isObject(values)) return;

  const root = values;
  const names = name.split('.');
  const len = names.length;

  for (let i = 0; i < len; i++) {
    const p = names[i];
    if (i === len - 1) {
      values[p] = value
    } else if (!isObject(values[p])) {
      values[p] = {}
    }
    values = values[p]
  }
  return root;
}

export function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null
}

export function getValueFromEvent(...args: any[]) {
  const e = args[0] as React.ChangeEvent<any>
  return e && e.target ? e.target.value : e
}