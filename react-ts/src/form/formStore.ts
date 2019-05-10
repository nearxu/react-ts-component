
import { deepCopy, deepGet, deepSet } from './utils';
import { listeners } from 'cluster';

export type FormLister = (name: string) => void;

export default class FormStore<T extends Object = any>{
  private values: T;
  private listeners: FormLister[] = [];

  constructor(values: Partial<T> = {}) {
    this.values = deepCopy(values) as any;
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
  }

  public get(name?: string) {
    return name === undefined ? { ...this.values } : deepGet(this.values, name)
  }

  public set(name: any, value: any) {
    if (typeof name === 'string') {
      deepSet(this.values, name, value)
      this.notify(name)
    } else if (name) {
      Object.keys(name).forEach(o => this.set(o, name[o]))
    }
  }
  notify(name: string) {
    this.listeners.forEach(listener => listener(name))
  }
  subscribe(listener: FormLister) {
    this.listeners.push(listener);
    return () => {
      // only one
      const index = this.listeners.indexOf(listener);
      if (index > -1) this.listeners.splice(index, 1)
    }
  }
}