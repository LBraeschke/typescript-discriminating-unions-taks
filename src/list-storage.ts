class ListStorage {
  public constructor(private key: string) {}

  public get(): any {
    const stringValue = sessionStorage.getItem(this.key);
    return stringValue ? JSON.parse(stringValue) : [];
  }

  public save(value: any): void {
    const oldValues = this.get();
    sessionStorage.setItem(this.key, JSON.stringify([...oldValues, value]));
  }

  public count(): number {
    return this.get().length;
  }
}

export const triangleStorage = new ListStorage('triangle');
export const rectangleStorage = new ListStorage('rectangle');
export const circleStorage = new ListStorage('circle');
