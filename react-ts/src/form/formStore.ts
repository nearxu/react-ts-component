
import { deepCopy, deepGet, deepSet } from './utils';

export type FormLister = (name: string) => void;

export type FormErrors = { [key: string]: string | undefined }

export type FormValid = (value: any) => boolean | string

export type FormRules = { [key: string]: FormValid }

export default class FormStore<T extends Object = any>{
  private values: T;
  private listeners: FormLister[] = [];
  private rules: FormRules;
  private errors: FormErrors;

  constructor(values: Partial<T> = {}, rules: FormRules = {}, errors = {}) {
    this.values = deepCopy(values) as any;
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.error = this.error.bind(this)
    this.rules = rules;
    this.errors = errors;
  }

  public get(name?: string) {
    return name === undefined ? { ...this.values } : deepGet(this.values, name)
  }
  public set(name: any, value: any, validate: boolean = true) {
    if (typeof name === 'string') {
      deepSet(this.values, name, value)
      if (validate) this.validata(name)
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

  public validata(name: string) {
    if (name === undefined) {
      Object.keys(this.rules).forEach(r => this.validata(r))
      this.notify('*')
      const error = undefined;
      return [error, this.get()]
    } else {
      const validator = this.rules[name]
      const value = this.get(name);
      const result = validator ? validator(value) : true
      const message = this.error(name, result === true ? undefined : result)
      const error = message === undefined ? undefined : new Error('check error')

      return [error, value]
    }
  }

  public error(...args: any[]) {
    let [name, value] = args;
    if (args.length === 0) return this.errors
    if (typeof name === 'number') {
      name = Object.keys(this.errors)[name]
    }
    if (args.length === 2) {
      if (value === undefined) {
        delete this.errors[name]
      } else {
        this.errors[name] = value;
      }
    }
    return this.errors[name]
  }
}